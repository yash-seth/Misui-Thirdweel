import React from "react";
import "./HeaderMenu.css";
import { Link } from "react-router-dom";
import { categoryDropdownData } from "../../Data";
import { useState } from "react";

function HeaderMenu() {
  const [sidebarState, setSidebarState] = useState("close");
  const [categoryMenuState, setCategoryMenuState] = useState("close");
  const [categoryHover, setCategoryHover] = useState(false)

  const categoryHoverStyle = {
    display: "block"
  }

  const noCategoryHoverStyle = {
    display: "none"
  }

  const toggleSidebar = (e) => {
    if (sidebarState === "close") {
      setSidebarState("open");
      document.getElementsByClassName("overlaySidebar")[0].style.display = "block";
      document.getElementsByClassName("sidebar")[0].style.left = "0";
      document.getElementById("closeButtonSidebar").style.display = "block";
    } else {
      setSidebarState("close");
      document.getElementsByClassName("overlaySidebar")[0].style.display = "none";
      document.getElementsByClassName("sidebar")[0].style.left = "-100%";
      document.getElementById("closeButtonSidebar").style.display = "none";
    }
  };

  const toggleCategoryMenu = (e) => {
    if (categoryMenuState === "close") {
      setCategoryMenuState("open");
      document.getElementsByClassName("sidebarMenu")[0].style.display = "none";
      document.getElementsByClassName("sidebarCategoriesMenu")[0].style.display = "block";
    } else {
      setCategoryMenuState("close");
      document.getElementsByClassName("sidebarMenu")[0].style.display = "block";
      document.getElementsByClassName("sidebarCategoriesMenu")[0].style.display = "none";
    }
  };

  const onMouseEnter = () => {
    setCategoryHover(true)
  }

  const onMouseLeave = () => {
    setCategoryHover(false)
  }


  return (
    <>
      <div className="headerMenuContainer">
        <div className="headerMenuButtons">
          <button onClick={toggleSidebar}>
            <img
              id="burgerMenu"
              src={require("./burgerMenu.png")}
              alt="burgerMenu"
              height="30px"
            />
          </button>
          <div className="headerMenuButton">
            <div className="categoryDropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <button id="Categories">Categories</button>
              <div className="categoriesMenuContainer">
                <div className="categoryMenu">
                  {categoryDropdownData.map((category) => {
                    return (
                      <>
                        <button
                          id="categoryButton"
                          style={{ textDecoration: "none" }}
                        >
                          <div id="categoryName">{category.name}</div>
                        </button>
                        <br />
                      </>
                    );
                  })}
                </div>
                <div className="categorySubMenu">
                  {categoryDropdownData.map((category) => {
                    return (
                      <>
                        <button
                          id="categoryButton"
                          style={{ textDecoration: "none" }}
                        >
                          <div id="categoryName">{category.name}</div>
                        </button>
                        <br />
                      </>
                    );
                  })}
                </div>
                <div className="categorySubMenu">
                  {categoryDropdownData.map((category) => {
                    return (
                      <>
                        <button
                          id="categoryButton"
                          style={{ textDecoration: "none" }}
                        >
                          <div id="categoryName">{category.name}</div>
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
              <button id="Group_By">Group Buy</button>
            </Link>
            <Link to="/wishlist" style={{ textDecoration: "none" }}>
              <button id="Wishlist">Wishlist</button>
            </Link>
          </div>
        </div>
      </div>
      <hr id="headerMenuBottomHR"/>
      <div className="sidebar">
        <div className="profileSectionSidebar">
          <img src={require("./Profile avatar icon.png")} alt="Profile avatar icon.png" />
          <header>Hello, Profile</header>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption" onClick={toggleCategoryMenu}>Categories</button>
            <img src={require("./rightArrow.png")} alt="right arrow" height="25px"/>
          </div>
          <div className="sidebarMenuOption">
            <Link
              to="/offers"
              style={{ textDecoration: "none" }}><button id="sidebarMenuOption">Offers</button></Link>
            <img src={require("./rightArrow.png")} alt="right arrow" height="25px"/>
          </div>
          <div className="sidebarMenuOption">
            <Link
              to="/teamBuyProductDescription"
              style={{ textDecoration: "none" }}><button id="sidebarMenuOption">Group Buy</button></Link>
          </div>
          <div className="sidebarMenuOption">
          <Link
              to="/wishlist"
              style={{ textDecoration: "none" }}
            ><button id="sidebarMenuOption">Wishlist</button></Link>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Best Sellers</button>
          </div>
          <hr className="border"/>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Availability check history</button>
            <img src={require("./rightArrow.png")} alt="right arrow" height="25px"/>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Group Buy History</button>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Order History</button>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Wallet</button>
          </div>
          <hr className="border"/>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Customer Service</button>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Become a seller</button>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">FAQs</button>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">About Us</button>
          </div>
          <hr className="border"/>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Your account</button>
          </div>
          <div className="sidebarMenuOption">
            <button id="sidebarMenuOption">Sign out</button>
          </div>
        </div>
        <div className="sidebarCategoriesMenu">
            <button onClick={toggleCategoryMenu}>
              <div className="mainMenu">
                <img id="mainMenuArrow" src={require("./rightArrow.png")} alt="close button" height="40px"/>
                <div id="categoryMenuHeader">Main Menu</div>
              </div>
            </button>
            <div className="categoriesMenuSidebar">
              {categoryDropdownData.map((category) => {
                    return (
                      <>
                        <button
                          id="categoryButton"
                          style={{ textDecoration: "none" }}
                        >
                          <div id="sidebarCategoryName">{category.name}</div>
                        </button>
                        <br />
                      </>
                    );
                  })}
            </div>
        </div>
        <button id="closeButtonSidebar" onClick={toggleSidebar} style={{textDecoration:"none"}} ><img src={require("./Close button.png")} alt="close button" height="40px"/></button>
      </div>
      <div className="overlaySidebar"></div>
      <div className="overlayCategoryDropdown" style={categoryHover ? categoryHoverStyle : noCategoryHoverStyle}></div>
    </>
  );
}

export default HeaderMenu;
