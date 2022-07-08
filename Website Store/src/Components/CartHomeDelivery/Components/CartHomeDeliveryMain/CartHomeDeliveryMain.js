import React from "react";
import "./CartHomeDeliveryMain.css";
import { useState } from "react";
import { cartCheckoutPickupData } from "../../../../Data";
import { Link } from "react-router-dom";

function CartHomeDeliveryMain({ address }) {
  const [deliveryMethod, setDeliveryMethod] = useState("Home Delivery");
  return (
    <>
      <div className="CartHomeDeliveryMainContainer">
        <div className="CartHomeDeliveryMainDeliveryAddressContainer">
          <div className="CartHomeDeliveryMainDeliveryAddressContainerHeader">
            <div id="CartHomeDeliveryMainDeliveryAddressContainerHeaderText">
              Delivery Address
            </div>
            <img
              src={require("./rightArrow.png")}
              alt="right arrow"
              height="30px"
            />
          </div>
          <div className="CartHomeDeliveryMainDeliveryAddressContainerControls">
            <div className="CartHomeDeliveryMainDeliveryAddressContainerSelection">
              <button
                id="pickUpPoint"
                onClick={() => setDeliveryMethod("Pick Up Point")}
              >
                <div id="radioBtnText">
                  {deliveryMethod === "Pick Up Point" ? (
                    <img
                      id="homeDeliveryRadioBtn"
                      src={require("./radio_button_checked.png")}
                      alt="radio button"
                    />
                  ) : (
                    <span></span>
                  )}{" "}
                  <b>Pick Up Point</b>
                </div>
              </button>
              <button
                id="homeDelivery"
                onClick={() => setDeliveryMethod("Home Delivery")}
              >
                <div id="radioBtnText">
                  {deliveryMethod === "Home Delivery" ? (
                    <img
                      id="homeDeliveryRadioBtn"
                      src={require("./radio_button_checked.png")}
                      alt="radio button"
                    />
                  ) : (
                    <span></span>
                  )}{" "}
                  <b>Home Delivery</b>
                </div>
              </button>
            </div>
            {deliveryMethod === "Home Delivery" ? (
              <div className="CartHomeDeliveryMainDeliveryAddressContainerAddress">
                <div className="CartHomeDeliveryMainDeliveryAddressContainerAddressHeader">
                  <div id="CartHomeDeliveryMainDeliveryAddressContainerAddressLabelText">
                    {address.label}
                  </div>
                  <button id="changeAddr">
                    <img
                      src={require("./pencil icon.png")}
                      alt="pencil button"
                    />{" "}
                    Change
                  </button>
                </div>
                <div id="CartHomeDeliveryMainDeliveryAddressContainerAddressText">
                  {address.addr}
                </div>
              </div>
            ) : (
              <div className="CartPickUpPointMainContainer">
                <div className="CartPickUpPointMainContainerHeader">
                  Pick Up Addresses - ({cartCheckoutPickupData.length} Stores)
                </div>
                <hr id="CartHomeDeliveryMainHR" />
                <div className="pickupUpPointAddrList">
                  {cartCheckoutPickupData.map((addr) => {
                    return (
                      <>
                        <div className="pickupUpPointAddr">
                          <div id="pickupUpPointAddrHeading">
                            Pick- up point {addr.id + 1} address
                          </div>
                          <div className="pickupUpPointAddrNameContainer">
                            <img
                              src={require("./shop icon.png")}
                              alt="shop icon"
                            />
                            <div id="pickupUpPointAddrName">{addr.name}</div>
                          </div>
                          <div id="pickupUpPointAddr">{addr.addr}</div>
                          <div id="pickupUpPointAddrTimeSlotHeading">
                            Choose Time Slot
                          </div>
                          <select id="pickupUpPointAddrTimeSlotDropdown">
                            {addr.timeSlots.map((timeslot) => {
                              return (
                                <>
                                  <option key={timeslot.id}>
                                    {timeslot.slot}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                          <div id="pickupUpPointAddrFooterText">
                            Delivery Charges <span id="freeText">Free</span>
                          </div>
                        </div>
                        {addr.key === cartCheckoutPickupData.length - 1 ? (
                          <span></span>
                        ) : (
                          <hr id="CartHomeDeliveryMainHR" />
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="CartHomeDeliveryMainCheckoutContainer">
          <div className="CartHomeDeliveryMainCheckoutContainerHeader">
            <div id="CartHomeDeliveryMainCheckoutContainerHeaderText">
              Payment Method
            </div>
            <img
              src={require("./rightArrow.png")}
              alt="right arrow"
              height="30px"
            />
          </div>
          <div className="CartHomeDeliveryMainCheckoutContainerControls">
            <div className="CartHomeDeliveryMainCheckoutContainerSideMenu">
              <div className="CartHomeDeliveryMainCheckoutContainerSideMenuOptions">
                <button id="CartHomeDeliveryMainCheckoutContainerSideMenuOption">
                  Wallet
                </button>
                <button id="CartHomeDeliveryMainCheckoutContainerSideMenuOption">
                  Credit and Debit Cards
                </button>
                <button id="CartHomeDeliveryMainCheckoutContainerSideMenuOption">
                  UPI
                </button>
              </div>
            </div>
            <div className="CartHomeDeliveryMainCheckoutContainerPaymentDetails">
              <div id="CartHomeDeliveryMainCheckoutContainerPaymentDetailsHeader">
                Your Payment Details
              </div>
              <div className="CartHomeDeliveryMainCheckoutContainerPaymentForm">
                <div className="cardHolderName">Card Holder Name</div>
                <input
                  type="text"
                  id="cardHolderName"
                  placeholder="e.g John Doe"
                ></input>
                <div className="cardNumber">Card Number</div>
                <input
                  type="text"
                  id="cardHolderNumber"
                  placeholder="**** **** **** 1234"
                ></input>
                <div className="cardDetails">
                  <div className="buttongroup">
                    <div className="cardNumber">Expiration Date</div>
                    <input type="text" id="MM" placeholder="MM"></input>/
                    <input type="text" id="YY" placeholder="YY"></input>
                  </div>
                  <div className="buttongroup">
                    <div className="cardNumber">CVV</div>
                    <div className="cvvControls">
                      <input type="text" id="CVV" placeholder="***"></input>
                      <button>
                        <img
                          id="visibilityIcon"
                          src={require("./visibility eye password icon.png")}
                          alt="visibility icon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/paymentSuccessful" style={{ textDecoration: "none" }}>
                <button id="pay">Pay</button>
              </Link>
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
            <div id="totalChargesAmount">
              <b>$1154</b>
            </div>
          </div>
          <div className="totalChargesText">
            You will save $442 on this order
          </div>
          <div className="walletInfo">
            Save extra $62 using thirdweel wallet
          </div>
        </div>
      </div>
    </>
  );
}

export default CartHomeDeliveryMain;
