import React from 'react'
import './TeamBuyBoughtTogether.css'
import {BoughtTogetherData} from "../../../../Data"
import {Link} from 'react-router-dom'

function BoughtTogether() {
  return (
    <div className='BoughtTogetherContainer'>
        <hr/>
        <div className="BoughtTogetherHeader">
            <p id="BoughtTogetherHeading">Bought Together</p>
            <img src={require("./right_arrow.png")} alt="right arrow" />
      </div>
      <div className="BoughtTogetherItems">
        {BoughtTogetherData.map((product)=>{
          return product.id!==BoughtTogetherData.length-1?
           (
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
              <img src={require("./add.png")} alt="add icon" height="15px"/>
              </>
          )
          :
            (
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
        <div className="BoughtTogehterCheckoutDetails">
            Total Cost $150
            <button id="add_to_cart_bought_together">Add all 3 to cart</button>
        </div>
      </div>
    </div>
  )
}

export default BoughtTogether