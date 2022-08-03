import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { addressData } from "../../Data";
import { categoryDropdownData } from "../../Data";
import { useState, useEffect } from "react";

function Header({ address, setAddress, setProfileView }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [bannerState, setBannerState] = useState(false);
  const [sidebarMobileState, setsidebarMobileState] = useState("close");
  const [categoryMenuState, setCategoryMenuState] = useState("close");

  const togglesidebarMobile = (e) => {
    if (sidebarMobileState === "close") {
      setsidebarMobileState("open");
      document.getElementsByClassName("overlaysidebarMobile")[0].style.display = "block";
      document.getElementsByClassName("sidebarMobile")[0].style.left = "0";
      document.getElementById("closeButtonsidebarMobile").style.display = "block";
    } else {
      setsidebarMobileState("close");
      document.getElementsByClassName("overlaysidebarMobile")[0].style.display = "none";
      document.getElementsByClassName("sidebarMobile")[0].style.left = "-100%";
      document.getElementById("closeButtonsidebarMobile").style.display = "none";
    }
  };

  const toggleCategoryMenu = (e) => {
    if (categoryMenuState === "close") {
      setCategoryMenuState("open");
      document.getElementsByClassName("sidebarMobileMenu")[0].style.display = "none";
      document.getElementsByClassName("sidebarMobileCategoriesMenu")[0].style.display = "block";
    } else {
      setCategoryMenuState("close");
      document.getElementsByClassName("sidebarMobileMenu")[0].style.display = "block";
      document.getElementsByClassName("sidebarMobileCategoriesMenu")[0].style.display = "none";
    }
  };

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

  useEffect(() => {
    setTimeout(() => {
      setBannerState(true);
      document.getElementById("notifBanner1").style.right = "1%";
    }, 3000);
    setTimeout(() => {
        document.getElementById("notifBanner2").style.right = "1%";
      }, 6000);
    setTimeout(() => {
      document.getElementById("notifBanner3").style.left = "35%";
    }, 9000);
  }, [])
  useEffect(() => {
    setsidebarMobileState("close");
  }, [])
  
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
          <button style={{ textDecoration: "none" }} onClick={togglesidebarMobile}>
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
              to="/teamBuyItemSearch"
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
      <img id="notifBanner1" src={require("./notif1.png")} alt="notification banner" height="150px" onClick={()=>document.getElementById("notifBanner1").style.right = "-100%"}/>
      <img id="notifBanner2" src={require("./notif2.png")} alt="notification banner" height="150px" onClick={()=>document.getElementById("notifBanner2").style.right = "-100%"}/>
      <img id="notifBanner3" src={require("./notif3.png")} alt="notification banner" height="50px" onClick={()=>document.getElementById("notifBanner3").style.left = "-100%"}/>
      <img id="notifBanner1Mobile" src={require("./notif1.png")} alt="notification banner" height="120px" onClick={()=>document.getElementById("notifBanner1Mobile").style.bottom = "-100%"}/>
      <img id="notifBanner2Mobile" src={require("./notif2.png")} alt="notification banner" height="120px" onClick={()=>document.getElementById("notifBanner2Mobile").style.bottom = "-100%"}/>
      <img id="notifBanner3Mobile" src={require("./notif3.png")} alt="notification banner" height="30px" onClick={()=>document.getElementById("notifBanner3Mobile").style.bottom = "-100%"}/>
      <div className="sidebarMobile">
      <Link to="/profile" style={{ textDecoration: 'none' }} onClick={()=>setProfileView(true)}>
        <div className="profileSectionsidebarMobile">
          <img src={require("./Profile avatar icon.png")} alt="Profile avatar icon.png" />
          <header>Hello, Profile</header>
        </div>
        </Link>
        <div className="sidebarMobileMenu">
          <div className="sidebarMobileMenuOption">
            <button id="sidebarMobileMenuOption" onClick={toggleCategoryMenu}>Categories</button>
            <img src={require("./rightArrow.png")} alt="right arrow" height="25px"/>
          </div>
          <div className="sidebarMobileMenuOption">
            <Link
              to="/offers"
              style={{ textDecoration: "none" }}><button id="sidebarMobileMenuOption">Offers</button></Link>
            <img src={require("./rightArrow.png")} alt="right arrow" height="25px"/>
          </div>
          <div className="sidebarMobileMenuOption">
            <Link
              to="/teamBuyItemSearch"
              style={{ textDecoration: "none" }}><button id="sidebarMobileMenuOption">Group Buy</button></Link>
          </div>
          <div className="sidebarMobileMenuOption">
          <Link
              to="/wishlist"
              style={{ textDecoration: "none" }}
            ><button id="sidebarMobileMenuOption">Wishlist</button></Link>
          </div>
          <div className="sidebarMobileMenuOption">
            <button id="sidebarMobileMenuOption">Best Sellers</button>
          </div>
          <hr className="border"/>
          <div className="sidebarMobileMenuOption">
            <Link to="/productAvailability" style={{ textDecoration: "none" }}>
              <button id="sidebarMobileMenuOption">Availability check history</button>
            </Link>
              <img src={require("./rightArrow.png")} alt="right arrow" height="25px"/>
          </div>
          <div className="sidebarMobileMenuOption">
          <Link to="/teamBuyHistory" style={{ textDecoration: "none" }}>
            <button id="sidebarMobileMenuOption">Group Buy History</button>
          </Link>
          </div>
          <div className="sidebarMobileMenuOption">
            <Link to="/orderHistory" style={{ textDecoration: "none" }}>
              <button id="sidebarMobileMenuOption">Order History</button>
            </Link>
          </div>
          <div className="sidebarMobileMenuOption">
            <button id="sidebarMobileMenuOption">Wallet</button>
          </div>
          <hr className="border"/>
          <div className="sidebarMobileMenuOption">
            <Link to="/CustomerService" style={{ textDecoration: 'none' }}><button id="sidebarMobileMenuOption">Customer Service</button></Link>
          </div>
          <div className="sidebarMobileMenuOption">
            <button id="sidebarMobileMenuOption">Become a seller</button>
          </div>
          <div className="sidebarMobileMenuOption">
            <Link to="/FAQs" style={{ textDecoration: 'none' }}><button id="sidebarMobileMenuOption">FAQs</button></Link>
          </div>
          <div className="sidebarMobileMenuOption">
            <button id="sidebarMobileMenuOption">About Us</button>
          </div>
          <hr className="border"/>
          <div className="sidebarMobileMenuOption">
            <Link to="/profile" style={{ textDecoration: 'none' }} onClick={()=>setProfileView(true)}><button id="sidebarMobileMenuOption">Your account</button></Link>
          </div>
          <div className="sidebarMobileMenuOption">
            <button id="sidebarMobileMenuOption">Sign out</button>
          </div>
        </div>
        <div className="sidebarMobileCategoriesMenu">
            <button onClick={toggleCategoryMenu}>
              <div className="mainMenu">
                <img id="mainMenuArrow" src={require("./rightArrow.png")} alt="close button" height="40px"/>
                <div id="categoryMenuHeader">Main Menu</div>
              </div>
            </button>
            <div className="categoriesMenusidebarMobile">
              {categoryDropdownData.map((category) => {
                    return (
                      <>
                        <button
                          id="categoryButton"
                          style={{ textDecoration: "none" }}
                        >
                          <div id="sidebarMobileCategoryName">{category.name}</div>
                        </button>
                        <br />
                      </>
                    );
                  })}
            </div>
        </div>
        <button id="closeButtonsidebarMobile" onClick={togglesidebarMobile} style={{textDecoration:"none"}} ><img src={require("./Close button.png")} alt="close button" height="40px"/></button>
      </div>
      <div className="overlaysidebarMobile"></div>
    </>
  );
}

export default Header;
