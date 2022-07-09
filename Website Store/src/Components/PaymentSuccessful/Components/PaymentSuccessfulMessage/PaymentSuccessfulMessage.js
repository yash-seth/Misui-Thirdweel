import React from "react";
import "./PaymentSuccessfulMessage.css";
import { useState, useEffect } from "react";
import { cartCheckoutPickupData } from "../../../../Data";
import {Link} from "react-router-dom"

function PaymentSuccessfulMessage({paymentView}) {
  const [timestampPlaced, setTimestampPlaced] = useState("");
  useEffect(() => {
    var today = new Date();
    var currentTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setTimestampPlaced(currentTime);
  },[]);

  return (
    <>
      <div className="PaymentSuccessfulMessageContainer">
        <div className="PaymentSuccessfulMessageContainerHeader">
          {paymentView==="normal" ? (<img src={require("./successTick.png")} alt="success tick" />):(<img src={require("./orangeTick.png")} alt="success tick" />)}
          <div className="PaymentSuccessfulMessageContainerHeaderText">
            <div id="PaymentSuccessfulMessageContainerHeading">
              Payment Successful
            </div>
            <div id="PaymentSuccessfulMessageContainerSubHeading">
              Thank You!
            </div>
            <div id="PaymentSuccessfulMessageContainerFooter">
              Your order #BE12345 has been placed.
            </div>
            <div id="PaymentSuccessfulMessageContainerDescription">
              We sent an email to orders@banuelson.com with your order
              confirmation and bill.
            </div>
            <div id="PaymentSuccessfulMessageContainerTimeStamp">
              Time placed: {timestampPlaced}
            </div>
          </div>
        </div>
        <div className="PaymentSuccessfulMessageCartPickUpPointMainContainer">
          <div className="PaymentSuccessfulMessageCartPickUpPointMainContainerHeader">
            Pick Up Addresses - ({cartCheckoutPickupData.length} Stores)
          </div>
          <hr id="PaymentSuccessfulMessageCartHomeDeliveryMainHR" />
          <div className="PaymentSuccessfulMessagepickupUpPointAddrList">
            {cartCheckoutPickupData.map((addr) => {
              return (
                <>
                  <div className="PaymentSuccessfulMessagepickupUpPointAddr">
                    <div id="PaymentSuccessfulMessagepickupUpPointAddrHeading">
                      Pick- up point {addr.id + 1} address
                    </div>
                    <div className="PaymentSuccessfulMessagepickupUpPointAddrNameContainer">
                      <img src={require("./shop icon.png")} alt="shop icon" />
                      <div id="PaymentSuccessfulMessagepickupUpPointAddrName">
                        {addr.name}
                      </div>
                    </div>
                    <div id="PaymentSuccessfulMessagepickupUpPointAddr">
                      {addr.addr}
                    </div>
                    <div id="PaymentSuccessfulMessagepickupUpPointAddrTimeSlotHeading">
                      Choose Time Slot
                    </div>
                    <select id="PaymentSuccessfulMessagepickupUpPointAddrTimeSlotDropdown">
                      {addr.timeSlots.map((timeslot) => {
                        return (
                          <>
                            <option key={timeslot.id}>{timeslot.slot}</option>
                          </>
                        );
                      })}
                    </select>
                    <div id="PaymentSuccessfulMessagepickupUpPointAddrFooterText">
                      Delivery Charges{" "}
                      <span id="PaymentSuccessfulMessagefreeText">Free</span>
                    </div>
                  </div>
                  {addr.key === cartCheckoutPickupData.length - 1 ? (
                    <span></span>
                  ) : (
                    <hr id="PaymentSuccessfulMessageCartHomeDeliveryMainHR" />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="PaymentSuccessfulMessageFooterButtons">
            {paymentView==="normal" ? 
            (<Link to="/" style={{textDecoration: "none"}}><button id="continueShopping">Continue Shopping</button></Link>)
            :
            (<Link to="/teamBuyProductDescription" style={{textDecoration: "none"}}><button id="teamBuyPageBtn">Continue to Team Buy Page</button></Link>)}
            <Link to="/MyCart" style={{textDecoration: "none"}}><button id="viewOrder">View Order</button></Link>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccessfulMessage;
