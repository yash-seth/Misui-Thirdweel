import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { addressData } from "../../Data";
import { useState, useEffect } from "react";
import { categoryDropdownData } from "../../Data";

function Header({ address, setAddress }) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setAddress({ label: addressData[0].label, addr: addressData[0].address });
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const [addressModalState, setAddressModalState] = useState(false);

  const toggleAddressModal = (e) => {
    if (!addressModalState && !isMobile) {
      setAddressModalState(true);
      document.getElementsByClassName("addressModal")[0].style.display =
        "block";
      document.getElementById("overlayAddressModal").style.display = "block";
    } else if (addressModalState && !isMobile) {
      setAddressModalState(false);
      document.getElementsByClassName("addressModal")[0].style.display = "none";
      document.getElementById("overlayAddressModal").style.display = "none";
    } else if (!addressModalState && isMobile) {
      setAddressModalState(true);
      document.getElementsByClassName("addressModalMobile")[0].style.display =
        "block";
      document.getElementById("overlayAddressModal").style.display = "block";
    } else {
      setAddressModalState(false);
      document.getElementsByClassName("addressModalMobile")[0].style.display =
        "none";
      document.getElementById("overlayAddressModal").style.display = "none";
    }
  };
  return (
    <>
      <div className="mainHeader">
        <div className="company-info">
          <div className="address">
            <div className="logo">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="./thirdweel mini logo.png"
                  alt="company-logo"
                  height="28px"
                />
              </Link>
            </div>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="logo_text">
                <b>ThirdWeel</b>
              </div>
            </Link>
            <button
              style={{ textDecoration: "none" }}
              onClick={toggleAddressModal}
            >
              <img
                id="location"
                src={require("./navigation.png")}
                alt="location icon"
              />
              {address.label}, {address.addr.substring(0, 12)}...
              <img
                id="dropdown"
                src={require("./dropdown.png")}
                alt="dropdown icon"
              />
            </button>
          </div>
          <div className="headerInfo">
            <button style={{ textDecoration: "none" }}>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <img
                  id="profileIcon"
                  src={require("./profileIcon.png")}
                  alt="profile icon"
                  height="25px"
                />
              </Link>
            </button>
            <Link to="/MyCart" style={{ textDecoration: "none" }}>
              <button style={{ textDecoration: "none" }}>
                <img
                  id="cartMobile"
                  src={require("./cart.png")}
                  alt="cart icon"
                  height="25px"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="searchBar">
          <button style={{ textDecoration: "none" }}>
            <img
              id="burgerMenuMobile"
              src={require("./burgerMenu.png")}
              alt="burger menu icon"
              height="25px"
            />
          </button>
          <div className="search">
            <input id="search" type="text" placeholder="Search.."></input>
            <Link to="/search" style={{ textDecoration: "none" }}>
              <div className="searchIcon">
                <img
                  id="searchIcon"
                  src={require("./search.png")}
                  alt="search icon"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="navButtons">
          <div className="navigationButtons">
            <div className="categoryDropdownMobile">
              <button id="CategoriesMobile">Categories</button>
              <div className="categoriesMenuContainerMobile">
                <div className="categoryMenuMobile">
                  {categoryDropdownData.map((category) => {
                    return (
                      <>
                        <button
                          id="categoryButtonMobile"
                          style={{ textDecoration: "none" }}
                        >
                          <div id="categoryNameMobile">{category.name}</div>
                        </button>
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link to="/offers" style={{ textDecoration: "none" }}>
              <button id="Offers">Offers</button>
            </Link>
            <Link
              to="/teamBuyProductDescription"
              style={{ textDecoration: "none" }}
            >
              <button id="Group_Buy">Group Buy</button>
            </Link>
            <Link to="/wishlist" style={{ textDecoration: "none" }}>
              <button id="Wishlist">Wishlist</button>
            </Link>
          </div>
        </div>
        <div className="buttons">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button id="log_in">Log In</button>
          </Link>
          <div>
            <Link to="/MyCart" style={{ textDecoration: "none" }}>
              <button id="my_cart">
                <img
                  id="shopping_cart"
                  src={require("./cart.png")}
                  alt="my cart icon"
                />
                My Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="addressModal">
        <div className="addressModalHeader">
          <div id="addressModalHeaderText">Choose your location</div>
          <button onClick={toggleAddressModal}>
            <img
              id="addressModalCloseButton"
              src={require("./Cross button.png")}
              alt="close icon"
            />
          </button>
        </div>
        <div className="addressModalMain">
          <div className="addressModalMainText">
            Select a delivery location to see your nearby local stores, product
            availability and delivery options
          </div>
          <div className="addresses">
            {addressData.map((addr) => {
              return (
                <>
                  <div
                    className="addressContainer"
                    onClick={() => {
                      setAddress({ label: addr.label, addr: addr.address });
                      toggleAddressModal();
                    }}
                  >
                    <div className="addressLabel">{addr.label}</div>
                    <div className="addressMain">
                      <b>{addr.name}</b> {addr.address}
                    </div>
                  </div>
                  <br />
                </>
              );
            })}
          </div>
          <button>
            <Link to="/addAddress" style={{ textDecoration: "none" }}>
              <div className="addressContainerFooter">
                Add an address or pickup point
              </div>
            </Link>
          </button>
          <br />
          <div className="separator">or enter a pincode</div>
          <div className="addressPincodeControls">
            <input id="pincodeInput" type="text" />
            <button id="applyPincode">Apply</button>
          </div>
        </div>
      </div>
      <div id="overlayAddressModal"></div>
      <div className="addressModalMobile">
        <div id="closeButtonAddressModalMobile">
          <button onClick={toggleAddressModal}>
            <img
              id="addressModalCloseButtonMobile"
              src={require("./Cross button.png")}
              alt="close icon"
            />
          </button>
        </div>
        <div className="addressModalHeaderMobile">
          <div className="addressModalHeaderTextMobile">
            Choose your location
          </div>
        </div>
        <div className="addressModalMainMobile">
          <div className="addressModalMainTextMobile">
            Select a delivery location to see your nearby local stores, product
            availability and delivery options
          </div>
          <div className="addressesMobile">
            {addressData.map((addr) => {
              return (
                <>
                  <div
                    className="addressContainerMobile"
                    onClick={() => {
                      setAddress({ label: addr.label, addr: addr.address });
                      toggleAddressModal();
                    }}
                  >
                    <div className="addressLabelMobile">{addr.label}</div>
                    <div className="addressMainMobile">
                      <b>{addr.name}</b> {addr.address}
                    </div>
                  </div>
                  <br />
                </>
              );
            })}
          </div>
          <Link to="/addAddress" style={{ textDecoration: "none" }}>
            <button>
              <div className="addressContainerFooterMobile">
                Add an address or pickup point
              </div>
            </button>
          </Link>
          <br />
          <div className="separatorMobile">or enter a pincode</div>
          <div className="addressPincodeControlsMobile">
            <input id="pincodeInputMobile" type="text" />
            <button id="applyPincodeMobile">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
