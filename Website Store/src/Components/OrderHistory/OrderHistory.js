import React, { useState } from "react";
import "./OrderHistory.css";
import Header from "../Header/Header";
import PaginationFooter from "../StoreSearch/Components/PaginationFooter/PaginationFooter";
import OrderHistorySearch from "./Components/OrderHistorySearch/OrderHistorySearch";
import { OrderHistoryData } from "../../Data";
// import { Link } from "react-router-dom";

function OrderHistory({ address, setAddress }) {
  const [orderItemDropdown, setOrderItemDropdown] = useState("close");
  const toggleOrderItemDropdown = (id) => {
    setOrderItemDropdown(orderItemDropdown === id ? undefined : id);
  };
  return (
    <>
      <Header address={address} setAddress={setAddress} />
      <div className="OrderHistoryMainContainer">
        <div className="OrderHistoryMainContainerHeader">
          <div className="OrderHistoryMainContainerHeaderText">
            <div id="OrderHistoryMainContainerHeaderText">
              Order History
              <img
                id="headerRightArrow"
                src={require("./rightArrow.png")}
                alt="right arrow icon"
                height="20px"
              />
            </div>
            <div id="OrderHistoryMainContainerHeaderSubText">
              My Profile / Order History
            </div>
          </div>
          <div className="OrderHistoryMainContainerSubHeader">
            <div id="OrderHistoryMainContainerSubHeaderText">My Orders</div>
            <div id="OrderHistoryMainContainerSubHeaderTextSubtext">
              Showing results for last 30 days
            </div>
          </div>
          <OrderHistorySearch />
        </div>
        <div className="OrderHistoryMainContent">
          <div className="chatRouletteFilters">
            <div id="chatRouletteFiltersHeader">Filters</div>
            <hr id="chatRouletteHR" />
            <div id="chatRouletteFiltersOrderStatus">Order Status</div>
            <input
              type="checkbox"
              id="OnTheWay"
              name="OnTheWay"
              value="OnTheWay"
            />
            <label for="OnTheWay">On the Way</label>
            <br></br>
            <input
              type="checkbox"
              id="Delivered"
              name="Delivered"
              value="Delivered"
            />
            <label for="Delivered">Delivered</label>
            <br></br>
            <input
              type="checkbox"
              id="Cancelled"
              name="Cancelled"
              value="Cancelled"
            />
            <label for="Cancelled">Cancelled</label>
            <br></br>
            <hr id="chatRouletteHR" />
            <div id="chatRouletteFiltersOrderTime">Order Time</div>
            <input
              type="checkbox"
              id="Last30Days"
              name="Last30Days"
              value="Last30Days"
            />
            <label for="Last30Days">Last 30 Days</label>
            <br></br>
            <input type="checkbox" id="2022" name="2022" value="2022" />
            <label for="2022">2022</label>
            <br></br>
            <input type="checkbox" id="2021" name="2021" value="2021" />
            <label for="2021">2021</label>
            <br></br>
            <input type="checkbox" id="2020" name="2020" value="2020" />
            <label for="2020">2020</label>
            <br></br>
          </div>
          <div className="OrderHistoryItems">
            {OrderHistoryData.map((order) => {
              return (
                <>
                  <div className="OrderHistoryItem" key={order.id}>
                    <div className="orderStatus">
                      <div id="orderStatusHeader">{order.status}</div>
                    </div>
                    <div className="orderID">
                      <div id="orderIDHeader">
                        Order ID<div id="orderID">{order.ID}</div>
                      </div>
                    </div>
                    <div className="orderPlacedDetails">
                      <div id="orderPlacedDetailsHeader">
                        Order Placed
                        <div id="orderPlacedDetails">
                          {order.timestampPlaced}
                        </div>
                      </div>
                    </div>
                    <div className="orderAmount">
                      <div id="orderAmountHeader">
                        Amount<div id="orderAmount">{order.amount}</div>
                      </div>
                    </div>
                    <div className="orderItemsBtn">
                      <button id="viewItemsBtn">View 9 Items</button>
                    </div>
                    <div
                      id="OrderDetailsDropdownMenu"
                      onClick={() => toggleOrderItemDropdown(order.id)}
                    >
                      <button>
                        <img src={require("./dropdown.png")} alt="dropdown" />
                      </button>
                    </div>
                  </div>
                  {orderItemDropdown === order.id ? (
                    <div className="OrderHistoryItemOnDropdown">
                      <div className="orderType">
                        <div id="orderTypeHeader">
                          Type<div id="orderType">{order.type}</div>
                        </div>
                      </div>
                      <div className="orderAddress">
                        <div id="orderAddressHeader">
                          Address
                          <div id="orderName">{order.name}</div>
                          <div id="orderAddress">{order.address}</div>
                        </div>
                      </div>
                      <div className="orderMode">
                        <div id="orderModeHeader">
                          Payment Info
                          <div id="orderMode">
                            Mode Of Payment: {order.paymentMode}
                          </div>
                        </div>
                      </div>
                      <div className="orderAmountExtra">
                        <div id="orderAmountExtraHeader">
                          Amount Info
                          <div id="orderAmountExtraAmount">
                            Amount: {order.amount}
                          </div>
                          <div id="orderAmountExtraSavings">
                            Savings:{" "}
                            <span id="orderAmountExtraSavingsAmt">
                              {order.savings}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <PaginationFooter />
      </div>
    </>
  );
}

export default OrderHistory;
