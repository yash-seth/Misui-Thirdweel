import React from 'react'
import "./HeaderMenu.css"
import { Link } from "react-router-dom";
import {categoryDropdownData, groupByDropdownData} from "../../Data"

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
                      <div className='categoryMenu'>
                        {categoryDropdownData.map((category)=>{
                          return (<>
                                    <button id="categoryButton" style={{textDecoration:"none"}}><div id="categoryName">{category.name}</div></button><br/>
                                  </>
                          )
                        })}
                        </div>
                        <div className='categorySubMenu'>
                        {categoryDropdownData.map((category)=>{
                          return (<>
                                    <button id="categoryButton" style={{textDecoration:"none"}}><div id="categoryName">{category.name}</div></button><br/>
                                  </>
                          )
                        })}
                        </div>
                        <div className='categorySubMenu'>
                        {categoryDropdownData.map((category)=>{
                          return (<>
                                    <button id="categoryButton" style={{textDecoration:"none"}}><div id="categoryName">{category.name}</div></button><br/>
                                  </>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <Link to="/offers" style={{ textDecoration: 'none' }}>
                    <button id='Offers'>Offers</button>
                  </Link>
                  <div className='groupByDropdown'>
                    <button id='Group_By'>Group By</button>
                    <div className='groupByMenuContainer'>
                        {groupByDropdownData.map((groupBy)=>{
                          return (<>
                                    <button id="groupByButton" style={{textDecoration:"none"}}><div id="groupByName">{groupBy.name}</div></button><br/>
                                  </>
                          )
                        })}
                    </div>
                  </div>
                  <Link to="/wishlist" style={{ textDecoration: 'none' }}>
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