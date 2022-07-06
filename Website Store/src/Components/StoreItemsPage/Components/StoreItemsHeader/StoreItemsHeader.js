import React from 'react'
import "./StoreItemsHeader.css"
import {StoreItemsPageInfo} from "../../../../Data"

function StoreItemsHeader() {
  return (
    <div className='StoreItemsHeaderContainer'>
        <div className="StoreItemsHeaderContainerImage">
            <div className='StoreItemsHeaderContainerImageNav'>Home {'>'} Bengaluru {'>'} <b>Phase 3</b></div>
            <img src={require("./"+StoreItemsPageInfo[0].src)} alt="Store"/>
        </div>
        <div className="StoreItemsHeaderContainerInfo">
            <div className='StoreItemsHeaderContainerInfoHeader'>{StoreItemsPageInfo[0].name}</div>
            <div className='StoreItemsHeaderContainerInfoDistance'>{StoreItemsPageInfo[0].dist}</div>
            <button id="StoreItemsHeaderContainerInfoLocationBtn"><div className='StoreItemsHeaderContainerInfoLocation'>
                <img src={require("./location icon.png")} alt="location icon"/>
                <div id="StoreItemsHeaderContainerInfoLocationText">{StoreItemsPageInfo[0].location}</div>
            </div></button>
            <div className='StoreItemsHeaderContainerInfoContact'>
                <img src={require("./call icon.png")} alt="call icon"/>
                <div id="StoreItemsHeaderContainerInfoContactText">{StoreItemsPageInfo[0].contact}</div>
            </div>
            <div className='StoreItemsHeaderContainerExtraInfo'>
                <img src={require("./Rating.png")} alt="rating icon"/>
                <button id="chatWithSeller">
                    <div className='chatWithSellerContainer'>
                        <img src={require("./message.png")} alt="message icon"/>
                        <div id="chatWithSellerText">Chat with Seller</div>
                    </div>
                </button>
            </div>
            <hr id="StoreItemsHeaderContainerInfoHr"/>
            <div className="StoreItemsHeaderContainerAboutHeader">
                    <div className='StoreItemsHeaderContainerAboutHeading'>About Store</div>
                    <div className='StoreItemsHeaderContainerAbout'>{StoreItemsPageInfo[0].about.substring(0,150)} <button id="readMore"><b>{"Read More..."}</b></button></div>
            </div>
        </div>
    </div>
  )
}

export default StoreItemsHeader