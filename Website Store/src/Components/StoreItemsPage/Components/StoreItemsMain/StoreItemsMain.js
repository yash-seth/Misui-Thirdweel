import React from 'react'
import "./StoreItemsMain.css"
import {categoryDropdownData, StoreItemsProducts, StoreItemsCart} from "../../../../Data"
import {useState} from 'react'
import {Link} from "react-router-dom"

function StoreItemsMain() {
    const [currentCategory, setCurrentCategory] = useState(categoryDropdownData[0].name)

  return (
    <div className="StoreItemsMainContainer">
        <div className='StoreItemsMainContainerCategories'>
            <div className='StoreItemsMainContainerCategoriesHeader'>
                Categories
            </div>
            <div className='StoreItemsMainContainerCategoriesList'>
                {categoryDropdownData.map((category)=>{
                    return (<button><div key={category.id} id="StoreItemsCategory" value={category.name} onClick={()=>setCurrentCategory(category.name)}>{category.name}</div></button>)
                })}
            </div>
        </div>
        <div className='StoreItemsMainContainerItems'>
            <div className='StoreItemsMainContainerItemsHeader'>
                {currentCategory}
            </div>
            <div className='StoreItemsMainContainerItemsProducts'>
                
                {StoreItemsProducts.map((product)=>{
                    return (
                        <div className='StoreItemsMainContainerItemsProduct'>
                            <img key={product.id} src={require("./"+product.src)} alt={product.alt} />
                            <div className="StoreItemsProductDetails">
                                <div id="StoreItemsProductDetailsProductName">{product.name}</div>
                                <div id="StoreItemsProductDetailsProductWeight">{product.weight}</div>
                                <div id="StoreItemsProductDetailsProductPrice">{product.price}</div>
                            </div>
                            <div className="StoreItemsMainContainerItemsProductControls">
                                <div className="StoreItemsMainContainerItemsProductAmountControls">
                                    <button><img src={require("./addQuantity.png")} alt="add quantity" height="17px"/></button>
                                    <div id="StoreItemsMainContainerItemsProductQuantity">{product.quantity}</div>
                                    <button><img src={require("./minusQuantity.png")} alt="remove quantity" height="17px"/></button>
                                </div>
                                <button><img src={require("./check availability button.png")} alt="check availability" height="30px"/></button>
                            </div>
                        </div>
                    )
                    })}
            </div>
        </div>
        <div className='StoreItemsMainContainerOffersCart'>
            <div className='StoreItemsMainContainerOffers'>
                <div className='StoreItemsMainContainerOffersHeading'>Offers</div>
                <div className='StoreItemsMainContainerOffersImages'>
                    <img id="offerBanner" src={require("./offer png.png")} alt="offer banner" />
                    <img id="offerBanner" src={require("./offer png.png")} alt="offer banner" />
                    <img id="offerBanner" src={require("./offer png.png")} alt="offer banner" />
                </div>
            </div>
            <div className='StoreItemsMainContainerCart'>
                <div className='StoreItemsMainContainerCartHeading'>Your cart</div>
                <div className='StoreItemsMainContainerCartAmount'>{StoreItemsCart.length} items</div>
                <div className="StoreItemsMainContainerCartContents">
                    {StoreItemsCart.map((item)=>{
                        return(
                            <div className='StoreItemsMainContainerCartItem'>
                                <div className="StoreItemsMainContainerCartItemDetails">
                                    <div id='StoreItemsMainContainerCartItemDetailsName'><b>{item.name}</b></div>
                                    <div id='StoreItemsMainContainerCartItemDetailsWeight'>{item.weight}</div>
                                </div>
                                <div className="StoreItemsMainContainerItemsProductAmountControls">
                                    <button><img src={require("./addQuantity.png")} alt="add quantity" height="17px"/></button>
                                    <div id="StoreItemsMainContainerItemsProductQuantity">{item.quantity}</div>
                                    <button><img src={require("./minusQuantity.png")} alt="remove quantity" height="17px"/></button>
                                </div>
                                <div id='StoreItemsMainContainerCartItemDetailsPrice'>{item.price}</div>
                            </div>    
                        )
                    })}
                </div>
            </div>
            <div className='StoreItemsMainContainerCheckoutBtn'>
                <Link to="/cartHomeDelivery" style={{textDecoration: "none"}} ><button id="StoreItemsMainContainerCheckoutBtn">Checkout</button></Link>
            </div>
        </div>
    </div>
  )
}

export default StoreItemsMain