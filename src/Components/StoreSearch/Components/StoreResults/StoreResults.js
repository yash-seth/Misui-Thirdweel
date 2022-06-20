import React from 'react'
import "./StoreResults.css"
import {StoreSearchData} from "../../../../Data"

function StoreResults() {
  return (
    <>
        <div className='StoreResultsContainer'>
        <div className="StoreInfo">
                {StoreSearchData.map((Store)=>{
                    return (<>
                        <div className='store'>
                            <div className='StoreDetails'>
                                <img id="store" key={Store.id} src={require("./"+Store.src)} alt={Store.alt} height="200px"/>
                                <div className='StoreInformation'>
                                    <div id="store_name">
                                        {Store.name}
                                        <div id="store_distance">{Store.distance}</div>
                                        </div>  
                                    <div id="store_address">
                                        <div>{Store.address_line_one}</div>
                                        <div>{Store.address_line_two}</div>
                                        <div>{Store.address_line_three}</div>
                                        <div id="contactContainer">
                                            <img id="phone_icon" src={require("./phone.png")} alt="phone icon" height="10px"/>
                                            {Store.contact}
                                            </div>
                                    </div>
                                
                                    <div><img id="store_rating" src={require("./"+Store.rating)} alt="rating" /></div>
                                </div>
                            </div> 
                            <div className='StoreProducts'>
                                {Store.product.map((product)=>{
                                    return (
                                        <>
                                        <div className='productBanner'>
                                            <img id="product_frame" src={require("./product_frame.png")} alt="product_frame"/>
                                            <img id="product" key={product.id} src={require("./" + product.src)} alt={product.alt}/>
                                            <div className='productBannerText'>
                                                <div>
                                                    <div id="product-header">{product.name}<br/></div>
                                                    <div id="product-weight">{product.weight}</div>
                                                    <div id="product-price">{product.price}</div>
                                                    <button style={{textDecoration:"none"}}>
                                                    <div className='add_to_cart'>
                                                        <div id="add_button">
                                                            <img id="add" src={require("./add.png")} alt="add" />ADD
                                                        </div>
                                                        <img id="add_frame" src={require("./add_frame.png")} alt="add_frame"/>   
                                                    </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })}
                                    <img id="right_arrow" src={require("./right_arrow.png")} alt="right arrow" />
                            </div>
                        </div>
                    </>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default StoreResults