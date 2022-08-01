import React from 'react'
import "./StoreItemsMain.css"
import {categoryDropdownData, StoreItemsProducts, StoreItemsCart} from "../../../../Data"
import {useState} from 'react'
import {Link} from "react-router-dom"

function StoreItemsMain() {
    const [currentCategory, setCurrentCategory] = useState(categoryDropdownData[0].name)
    const [quantityCustomizationModal, setQuantityCustomizationModal] = useState();

    const toggleQuantityCustomizationModal = (id) => {
        setQuantityCustomizationModal(quantityCustomizationModal === id ? undefined : id);
        if(quantityCustomizationModal!==undefined) document.getElementsByClassName("quantityCustomizationModalOverlay")[0].style.display = "block";
        else document.getElementsByClassName("quantityCustomizationModalOverlay")[0].style.display = "none";
    };
  return (
    <>
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
                        <>
                        <div className='StoreItemsMainContainerItemsProduct'>
                            <img key={product.id} src={require("./"+product.src)} alt={product.alt} />
                            <div className="StoreItemsProductDetails">
                                <div id="StoreItemsProductDetailsProductName">{product.name}</div>
                                <div id="StoreItemsProductDetailsProductWeight">{product.weight}</div>
                                <div id="StoreItemsProductDetailsProductPrice">{product.price}</div>
                            </div>
                            <div className="StoreItemsMainContainerItemsProductControls" onClick={()=>toggleQuantityCustomizationModal(product.id)}>
                                <div className="StoreItemsMainContainerItemsProductAmountControls">
                                    <button><img src={require("./addQuantity.png")} alt="add quantity" height="17px"/></button>
                                    <div id="StoreItemsMainContainerItemsProductQuantity">{product.quantity}</div>
                                    <button><img src={require("./minusQuantity.png")} alt="remove quantity" height="17px"/></button>
                                </div>
                                <button><img src={require("./check availability button.png")} alt="check availability" height="30px"/></button>
                            </div>
                        </div>
                        {quantityCustomizationModal===product.id? (
                        <>
                        <div className='quantityCustomizationModal'>
                                <img src={require("./closeModalItemCustomization.png")} alt="close modal button" id="closeModalItemCustomization" onClick={()=>toggleQuantityCustomizationModal()}/>
                                <div className='quantityCustomizationModalHeader'>Available Quantities</div>
                                <div className='quantityCustomizationModalProductName'>{product.name}</div>
                                <div className='quantityCustomizationModalMain'>
                                    <div className='quantityCustomizationModalMainHeader'>Choose Quantity</div>
                                    <div className='quantityCustomizationModalMainQuantities'>
                                        <div id="quantityCustomizationModalMainQuantitiesList">
                                            <div id="quantityCustomizationModalMainQuantitiesListItem">
                                                <input type="radio" id="50gm" name="itemWeight"/>
                                                <label for="50gm">50gm - $25</label>
                                            </div>
                                            <div id="quantityCustomizationModalMainQuantitiesListItem">
                                                <input type="radio" id="50gm" name="itemWeight"/>
                                                <label for="50gm">100gm - $50</label>
                                            </div>
                                            <div id="quantityCustomizationModalMainQuantitiesListItem">
                                                <input type="radio" id="50gm" name="itemWeight"/>
                                                <label for="50gm">150gm - $100</label>
                                            </div>
                                            <div id="quantityCustomizationModalMainQuantitiesListItem">
                                                <input type="radio" id="50gm" name="itemWeight"/>
                                                <label for="50gm">200gm - $150</label>
                                            </div>
                                        </div>
                                        <img id="quantitiesModalGraphic" src={require("./quantitiesModalGraphic.png")} alt="modal graphic" height="100px"/>
                                    </div>
                                    <hr />
                                    <div className='quantityCustomizationModalMainFooter'>
                                        <div className='quantityCustomizationModalMainItemTotal'>Item Total: $20</div>
                                        <button id="addItemQuantityCustomizationModal">Add item</button>
                                    </div>
                                </div>
                            </div>
                            <div className='quantityCustomizationModalOverlay'></div>
                            </>)
                            :
                            (<span></span>)
                    }
                        </>
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
                        return(<>
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
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='StoreItemsMainContainerCheckoutBtn'>
                <Link to="/CartCheckout" style={{textDecoration: "none"}} ><button id="StoreItemsMainContainerCheckoutBtn">Checkout</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default StoreItemsMain