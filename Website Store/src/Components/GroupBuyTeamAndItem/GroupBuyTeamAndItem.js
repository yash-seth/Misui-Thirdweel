import React from "react";
import Header from "../Header/Header";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./GroupBuyTeamAndItem.css";
import { teamBuyTeamAndItemData, teamBuyTeamDetails} from "../../Data";

function GroupBuyTeamAndItem({ address, setAddress }) {
  return (
    <>
      <Header address={address} setAddress={setAddress} />
      <div className="mobileView">
        <HeaderMenu />
      </div>
      <div className="GroupBuyTeamAndItemContainer">
        <div className="GroupBuyTeamAndItemContainerHeader">
          Team and Item{" "}
          <img src={require("./right_arrow.png")} alt="right arrow" />
        </div>
        <div className="GroupBuyTeamAndItemContainerMain">
          <div className="GroupBuyTeamAndItemBreakdown">
            <div className="GroupBuyItemDescription">
              <img
                src={require("./" + teamBuyTeamAndItemData.src)}
                alt="product"
              />
              <div className="GroupBuyItemDescriptionDetails">
                <div id="groupItemName">{teamBuyTeamAndItemData.name}</div>
                <div id="groupItemAmount">{teamBuyTeamAndItemData.amount}</div>
                <div className="groupItemPriceDetails">
                  <div id="strikethrough">{teamBuyTeamAndItemData.price}</div>
                  <div id="groupItemAmountDiscountedPrice">
                    {teamBuyTeamAndItemData.discPrice}
                  </div>
                  <div id="groupItemAmountDiscount">30% off</div>
                </div>
              </div>
            </div>
            <div className="teamBuyTeamDetails">
            {teamBuyTeamDetails.map((teamMember)=>{
                    return(
                        <>{teamMember.id===0?
                        (
                            <div className="teamBuyTeamMemberDetails">
                                <img src={require("./orange tick.png")} alt="orange tick"/>
                                <img id="pfp" src={require('./' + teamMember.pfp)} alt="profile pic"/>
                                <div className="teamBuyTeamMemberDetailsInfo">
                                    <div id="teamMemberName">{teamMember.name}</div>
                                </div>
                            </div>
                            
                        )
                        :
                        (
                            <div className="teamBuyTeamMemberDetails">
                                <img src={require("./orange tick.png")} alt="orange tick"/>
                                <img id="pfp" src={require('./' + teamMember.pfp)} alt="profile pic"/>
                                <div className="teamBuyTeamMemberDetailsInfo">
                                    <div id="teamMemberName">{teamMember.name}</div>
                                    <div id="teamMemberTime">Joined team  {teamMember.timeJoined}</div>
                                </div>
                                <button id="viewProfileTeamBuy">View Profile</button>
                                <button id="followProfileTeamBuy">Follow</button>
                            </div>
                        )
                    }
                    </>
                    )
                })}
            </div>
            <div className="groupBuyStatus">Confirmed</div>
            <div className="groupBuyItemStoreDetails">
                <div className="groupBuyItemStoreDetailsPurchasedFrom">
                    <div id="purchasedFrom">Purchased from</div>
                    <div className="purchasedFromDetails">
                        <div id="purchasedFromDetailsName">{teamBuyTeamAndItemData.purchasedFrom}</div>
                        <div id="purchasedFromDetailsDist">{teamBuyTeamAndItemData.dist}</div>
                    </div>
                    <div id="purchasedFromDetailsAddr">{teamBuyTeamAndItemData.addr}</div>
                </div>
                <div className="groupItemorderID">Order ID <div id="groupItemorderID">{teamBuyTeamAndItemData.orderID}</div></div>
                <div className="groupItemTimeStamp">Order Placed<div id="groupItemTimeStamp">{teamBuyTeamAndItemData.orderPlacedTS}</div></div>
            </div>
          </div>
          <div className="GroupBuyTeamAndItemPriceBreakdown">
            <div id="GroupBuyTeamAndItemPriceBreakdownHeader">
              Price Details
            </div>
            <hr />
            <div className="GroupBuyTeamAndItemPriceBreakdownMain">
              <div className="groupBuyPriceContainer">
                <div id="groupBuyItemPriceHeader">Price</div>
                <div id="groupBuyItemPrice">
                  {" "}
                  {teamBuyTeamAndItemData.price}
                </div>
              </div>
              <div className="groupBuyTeamBuyContainer">
                <div id="groupBuyTeamBuyHeader">Team Buy</div>
                <div id="groupBuyItemPrice">
                  {" "}
                  {teamBuyTeamAndItemData.teamBuy}
                </div>
              </div>
              <div className="groupBuyDeliveryChargesContainer">
                <div id="groupBuyDeliveryChargesHeader">Delivery Charges</div>
                <div id="groupBuyDeliveryCharges">
                  {" "}
                  {teamBuyTeamAndItemData.deliveryCharges}
                </div>
              </div>
            </div>
            <hr />
            <div className="groupBuyTotalContainer">
              <div id="groupBuyItemPriceHeader">Total Charges</div>
              <div id="groupBuyItemPrice"> {teamBuyTeamAndItemData.total}</div>
            </div>
            <div className="groupBuySavingsContainer">
              <div id="groupBuySavingsHeader">
                You will save $442 on this order
              </div>
            </div>

            <div className="groupBuyWalletSavingsContainer">
              <div id="groupBuyWalletSavingsHeader">
                Save extra $62 by using thirdweel wallet
              </div>
            </div>
            <div id="groupByShareControls">
              <button id="shareBtn">
                <img src={require("./share.png")} alt="share button" height="50px"/>
              </button>
              <button id="shareLinkBtn">Share Link to Invite</button>
            </div>
          </div>
        </div>
        <div id="teamBuyNote">Note: Order will be cancelled automatically if team hasn't filled completely</div>
      </div>
    </>
  );
}

export default GroupBuyTeamAndItem;
