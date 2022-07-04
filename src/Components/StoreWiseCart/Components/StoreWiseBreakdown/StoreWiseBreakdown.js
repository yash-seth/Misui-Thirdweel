import React from "react";
import "./StoreWiseBreakdown.css";
import { storeWiseCartData } from "../../../../Data";

function StoreWiseBreakdown() {
  return (
    <div className="StoreWiseBreakdownContainer">
      <div className="StorewiseBreakdown">
        <div className="StoreWiseBreakdownHeader">
          <div id="StoreWiseBreakdownHeaderText">Cart</div>
          <img
            src={require("./rightArrow.png")}
            alt="right arrow"
            height="30px"
          />
        </div>
        <div className="StoreWiseBreakdownHeaderSubText">
          Showing results for 3 stores
        </div>
        <div className="storeWiseBreakdown">
          <div className="storeBreakdown">
            {storeWiseCartData.map((storeData) => {
              return (
                <>
                  <div className="storeBreakdownHeader">
                    <div className="storeBreakdownDetailsHeader">
                      <div className="storeBreakdownDetails">
                        <div className="storeBreakdownDetailsHeading">
                          {storeData.name}
                        </div>
                        <div className="storeBreakdownDetailsDistance">
                          {storeData.distance}
                        </div>
                      </div>
                      <div className="storeBreakdownAddr">{storeData.addr}</div>
                    </div>
                    <div className="storeBreakdownMoney">
                      <div id="storeBreakdownChargesText">
                        Total Charges: <b>{storeData.total}</b>
                      </div>
                      <div id="storeBreakdownSavingsText">
                        Savings: {storeData.savings}
                      </div>
                    </div>
                  </div>
                  <div className="StoreWiseProducts">
                    {storeData.products.map((product) => {
                      return (
                        <>
                          <div className="StoreWiseProduct" key={product.key}>
                            <img
                              id="storeWiseProdImg"
                              src={require("./" + product.imgSrc)}
                              alt="product image"
                            />
                            <div className="StoreWiseProductInfo">
                              <div className="storeWiseProdNameHeader">
                                <div id="storeWiseProdName">{product.name}</div>
                                <div>
                                  <button>
                                    <img
                                      id="crossButton"
                                      src={require("./Cross button.png")}
                                      alt="cross button"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div id="storeWiseProdAmt">{product.amount}</div>
                              <div id="storeWiseProdStatus">
                                {product.status}
                              </div>
                              <div className="storeWiseProdQuantityPrice">
                                <div id="storeWiseProdPrice">
                                  Cost: {product.cost}
                                </div>
                                <div id="storeWiseProdQuantity">
                                  Quantity: {product.quantity}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="proceedToCheckoutContanier">
        <div className="proceedToCheckoutContanierHeader">Price Details</div>
        <hr />
        <div className="proceedToCheckoutBody">
          <div className="price">
            <div id="priceHeader">Price (4 items)</div>
            <div id="'priceAmount">$1470</div>
          </div>
          <div className="discount">
            <div id="discountHeader">Discount</div>
            <div id="discountAmount">$256</div>
          </div>
          <div className="coupons">
            <div id="couponsHeader">Coupons</div>
            <div id="couponsAmount">$120</div>
          </div>
          <div className="deliveryCharges">
            <div id="deliveryChargesHeader">Delivery Charges</div>
            <div id="deliveryChargesAmount">$60</div>
          </div>
          <div id="dottedSeparator"></div>
        </div>
        <div className="totalCharges">
          <div id="totalChargesHeader">Total Charges</div>
          <div id="totalChargesAmount"><b>$1154</b></div>
        </div>
        <div className="totalChargesText">You will save $442 on this order</div>
        <div className="walletInfo">Save extra $62 using thirdweel wallet</div>
        <div className="filler"></div>
        <button id="proceedButton">Proceed</button>
      </div>
    </div>
  );
}

export default StoreWiseBreakdown;
