import React from 'react'
import "./ItemsToExplore.css"
import {itemsToExplore} from "../../../../Data"
import {Link} from 'react-router-dom'

function ItemsToExplore() {
  return (
    <div className="ItemsToExploreContainer">
      <hr />
      <div className="ItemsToExploreHeader">
        <p id="ItemsToExploreHeading">More Items to Explore</p>
        <img src={require("./right_arrow.png")} alt="right arrow" />
      </div>
      <div className="items">
        {itemsToExplore.map((product)=>{
          return (
              <>
              <div className='productBanner'>
                  <img id="product_frame" src={require("./product_frame.png")} alt="product_frame" height="auto"/>
                  <Link to="/productDescription" style={{ textDecoration: 'none' }}> <img id="product" key={product.id} src={require("./" + product.src)} alt={product.alt}/></Link>
                  <div className='productBannerText'>
                      <div>
                          <div id="product-header">{product.name}<br/></div>
                          <div id="product-weight">{product.weight}</div>
                          <div className='add_to_cart'>
                              <div id="product-price">{product.price}</div>
                              <button style={{textDecoration:"none"}}>
                              <div id="add_button">
                                  <img id="add_frame" src={require("./add_frame.png")} alt="add_frame"/>
                                  <img id="add" src={require("./add.png")} alt="add" /><div id="add-button-text">ADD</div>
                              </div>   
                              </button>
                          </div>
                          
                      </div>
                  </div>
              </div>
              </>
          )
      })}
    </div>
    <hr/>
    </div>
  )
}

export default ItemsToExplore