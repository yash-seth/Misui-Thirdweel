import React from 'react'
import "./PaymentSuccessfulKeepShopping.css"
import {storeProfileTopProducts} from "../../../../Data"
import {Link} from "react-router-dom"

function PaymentSuccessfulKeepShopping() {
  return (
    <div className="PaymentSuccessfulKeepShoppingContainer">
        <div className='PaymentSuccessfulKeepShoppingHeader'>Keep Shopping for</div>
        <div className="PaymentSuccessfulKeepShoppingProductsContainerImages">
            {storeProfileTopProducts.map((image)=>{
                        return (
                            <>
                            <div className='productBanner'>
                                <img id="product_frame" src={require("./product_frame.png")} alt="product_frame" height="auto"/>
                                <Link to="/productDescription" style={{ textDecoration: 'none' }}> <img id="product" key={image.id} src={require("./" + image.src)} alt={image.alt} /></Link>
                                <div className='productBannerText'>
                                    <div>
                                        <div id="product-header">{image.name}<br/></div>
                                        <div id="product-weight">{image.weight}</div>
                                        <div className='add_to_cart'>
                                            <div id="product-price">{image.price}</div>
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
    </div>
  )
}

export default PaymentSuccessfulKeepShopping