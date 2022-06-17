import React from 'react'
import "./HeaderMenu.css"

function HeaderMenu() {
  return (
      <>
    <div className="headerMenuContainer">
         <div className='headerMenuButtons'>
                <img id="burgerMenu" src={require("./burgerMenu.png")} alt="burgerMenu" height="30px"/>
                <div className="headerMenuButton">
                  <button id='Categories'>Categories</button>
                  <button id='Offers'>Offers Us</button>
                  <button id='Group_By'>Group By</button>
                  <button id='Wishlist'>Wishlist</button>
                </div>
            </div>
    </div>
    <hr/>
    </>
  )
}

export default HeaderMenu