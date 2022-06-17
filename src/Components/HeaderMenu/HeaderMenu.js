import React from 'react'
import "./HeaderMenu.css"
import { Routes, Route, Link } from "react-router-dom";

function HeaderMenu() {
  return (
      <>
    <div className="headerMenuContainer">
         <div className='headerMenuButtons'>
                <img id="burgerMenu" src={require("./burgerMenu.png")} alt="burgerMenu" height="30px"/>
                <div className="headerMenuButton">
                  <div className='categoryDropdown'>
                    <button id='Categories'>Categories</button>
                    <div className='categoriesMenuContainer'>
                        <p>Sports</p>
                        <p>Electronics</p>
                    </div>
                  </div>
                  <Link to="/Offers" style={{ textDecoration: 'none' }}>
                    <button id='Offers'>Offers</button>
                  </Link>
                  <div className='groupByDropdown'>
                    <button id='Group_By'>Group By</button>
                    <div className='groupByMenuContainer'>
                        <p>Price</p>
                        <p>Relevance</p>
                    </div>
                  </div>
                  <Link to="/Wishlist" style={{ textDecoration: 'none' }}>
                    <button id='Wishlist'>Wishlist</button>
                  </Link>
                </div>
            </div>
    </div>
    <hr/>
    </>
  )
}

export default HeaderMenu