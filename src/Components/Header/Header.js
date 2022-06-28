import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
        <div className="mainHeader">
            <div className="company-info">
                <div className="address">
                  <div className="logo"><img src="./thirdweel mini logo.png" alt="company-logo" height="28px" /></div>
                  <Link to="/" style={{ textDecoration: 'none' }}><div className="logo_text"><b>ThirdWeel</b></div></Link>
                  <button style={{textDecoration:"none"}}><img id="location" src={require("./navigation.png")} alt="location icon"/>
                    Home, 2nd Floor, K...
                    <img id="dropdown" src={require("./dropdown.png")} alt="dropdown icon"/>
                  </button>
                </div>
                <div className='headerInfo'>
                  <button style={{textDecoration:"none"}}><img id="profileIcon" src={require("./profileIcon.png")} alt="profile icon" height="25px"/></button>
                  <Link to="/MyCart" style={{ textDecoration: 'none' }}><button style={{textDecoration:"none"}}><img id="cartMobile" src={require("./cart.png")} alt="cart icon" height="25px"/></button></Link>
                </div>
            </div>
            <div className='searchBar'>
              <button style={{ textDecoration: 'none' }}><img id="burgerMenuMobile" src={require("./burgerMenu.png")} alt="burger menu icon" height="25px"/></button>
              <div className='search'>
                <input id="search" type="text" placeholder="Search.."></input>
                <div className='searchIcon'>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                  <img id="searchIcon" src={require("./search.png")} alt="search icon"/>
                  </Link>
              </div>
              </div>     
            </div>
            <div className="navButtons">
              <div className="navigationButtons">
                <div className='categoryDropdownMobile'>
                  <button id='CategoriesMobile'>Categories</button>
                </div>
                <Link to="/offers" style={{ textDecoration: 'none' }}>
                    <button id='Offers'>Offers</button>
                  </Link>
                  <Link to="/TeamBuyproductDescription" style={{ textDecoration: 'none' }}>
                    <button id='Group_By'>Group Buy</button>
                  </Link>
                  <Link to="/wishlist" style={{ textDecoration: 'none' }}>
                    <button id='Wishlist'>Wishlist</button>
                  </Link>
                </div>
            </div>
            <div className='buttons'>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button id='log_in'>Log In</button>
                </Link>
                <div>
                    <Link to="/MyCart" style={{ textDecoration: 'none' }}><button id="my_cart"><img id="shopping_cart" src={require("./cart.png")} alt="my cart icon"/>My Cart</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header