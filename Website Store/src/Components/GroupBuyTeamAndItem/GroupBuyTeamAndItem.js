import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./GroupBuyTeamAndItem.css";
import { teamBuyTeamAndItemData, teamBuyTeamDetails} from "../../Data";
import {Link} from "react-router-dom"

function GroupBuyTeamAndItem({ address, setAddress, setProfileView }) {
  const [teamStatus, setTeamStatus] = useState(true)
  const [teamMembersLeft, setTeamMembersLeft] = useState(0)
  useEffect(() => {
    teamBuyTeamDetails.forEach((teamMember)=>{
      if(!teamMember.state){
        setTeamStatus(false);
        setTeamMembersLeft(teamMembersLeft+1);
      }
    })
  }, [teamBuyTeamDetails])
  
  return (
    <>
      <Header address={address} setAddress={setAddress} />
      <div className="mobileView">
        <HeaderMenu setProfileView={setProfileView}/>
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
                                <img src={require("./orange tick.png")} alt="orange tick" height="40px"/>
                                <img id="pfp" src={require('./' + teamMember.pfp)} alt="profile pic"/>
                                <div className="teamBuyTeamMemberDetailsInfo">
                                    <div id="teamMemberName">{teamMember.name}</div>
                                </div>
                            </div>
                            
                        )
                        :
                        (
                            teamMember.state ? (<div className="teamBuyTeamMemberDetails">
                                <img src={require("./orange tick.png")} alt="orange tick" height="40px"/>
                                <img id="pfp" src={require('./' + teamMember.pfp)} alt="profile pic"/>
                                <div className="teamBuyTeamMemberDetailsInfo">
                                    <div id="teamMemberName">{teamMember.name}</div>
                                    <div id="teamMemberTime">Joined team  {teamMember.timeJoined}</div>
                                </div>
                                <Link to="/profile" style={{textDecoration: "none"}}><button id="viewProfileTeamBuy" onClick={setProfileView(false)}>View Profile</button></Link>
                                <button id="followProfileTeamBuy">Follow</button>
                            </div>)
                            :
                            (<div className="teamBuyTeamMemberDetails">
                              <div className="notReadyTick">
                                <img src={require("./Ellipse 891.png")} alt="not ready tick" id="notReadyTickBackground" height="40px"/>
                                <img src={require("./notReadyTick.png")} alt="not ready tick" id="notReadyTick"/>
                              </div>
                              <div className="notReadyProfile">
                                <img src={require("./Ellipse 890.png")} alt="not ready tick" id="notReadyProfileBackground"/>
                                <img src={require("./teamProfile.png")} alt="not ready profile" id="notReadyProfile"/>
                              </div>
                              <div id="inviteTeamMember">Invite</div>
                              <img src={require("./share.png")} alt="share button" height="30px" id="inviteTeamMemberShare"/>
                        </div>)
                        )
                    }
                    </>
                    )
                })}
            </div>
            {teamStatus ? (<div className="groupBuyStatus">Confirmed</div>) 
            : 
            (
              <>
              <div className="groupBuyStatusNotConfirmed">
                  <div id="groupBuyStatusNotConfirmed">Not Confirmed</div>
                  <div id="groupBuyStatusNotConfirmedMembersLeft">
                    {teamMembersLeft} members left
                  </div>
                </div>
              </>)}
            {teamStatus && <div className="groupBuyItemStoreDetails">
                <div className="groupBuyItemStoreDetailsPurchasedFrom">
                    <div id="purchasedFrom">Purchased from</div>
                    <div className="purchasedFromDetailsAddr">
                        <div id="purchasedFromDetailsName">{teamBuyTeamAndItemData.purchasedFrom}</div>
                        <div id="purchasedFromDetailsDist">{teamBuyTeamAndItemData.dist}</div>
                    </div>
                    <div id="purchasedFromDetailsAddr">{teamBuyTeamAndItemData.addr}</div>
                </div>
                <div className="groupItemorderID">Order ID <div id="groupItemorderID">{teamBuyTeamAndItemData.orderID}</div></div>
                <div className="groupItemTimeStamp">Order Placed<div id="groupItemTimeStamp">{teamBuyTeamAndItemData.orderPlacedTS}</div></div>
            </div>}
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
