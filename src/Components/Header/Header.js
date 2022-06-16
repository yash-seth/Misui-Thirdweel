import React from 'react'
import './Header.css'
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
        <div className="mainHeader">
            <div className="company-info">
                <div className="logo"><img src="http://misui.in/media/logo.svg" alt="company-logo" height="28px" /></div>
                <div className="logo_text"><b>ThirdWeel</b></div>
            </div>
            <div className="address">
              <img id="location" src={require("./navigation.png")} alt="location icon"/>
              Home, 2nd Floor, K...
            </div>
            <div className='searchBar'>
              <div className='search'>
                <input id="search" type="text" placeholder="Search.."></input>
              </div>
              <div className='searchIcon'>
                <img id="searchIcon" src={require("./search.png")} alt="search icon"/>
              </div>
            </div>
            <div className='buttons'>
                <button id='log_in'>Log In</button>
                <div>
                  <button id="my_cart"><img id="shopping_cart" src={require("./cart.png")} alt="my cart icon"/> My Cart</button>
                </div>
            </div>
            {/* <div className='mobile-menu'>
                  <MenuIcon />
              </div> */}
        </div>
    </>
  )
}

export default Header