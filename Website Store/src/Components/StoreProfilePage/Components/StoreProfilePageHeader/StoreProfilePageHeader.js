import React from 'react'
import "./StoreProfilePageHeader.css"
import {storeProfileData, storeProfileImages} from "../../../../Data"
import {Link} from "react-router-dom"

function StoreProfilePageHeader() {
  return (
    <div className="StoreProfilePageHeaderMain">
        <div className="StoreProfilePageHeaderMainTopContainer"><span></span></div>
        <div className="StoreProfileDetails">
            <div className="StoreProfileDetailsMain">
                <div id="storeProfileName">{storeProfileData[0].name}</div>
                <div className="StoreProfileDetailsMainExtra">
                    <div id="storeProfileDistance">{storeProfileData[0].distance}</div>
                    <img id="storeProfileRating" src={require("./"+storeProfileData[0].rating)} alt="store rating" />
                </div>
            </div>
            <div className="storeProfileNumbers">
            <div className='StoreProfileDetailsPostsCount'>
                <div className="StoreProfileDetailsPostsCountHeader">Posts</div>
                <div className="StoreProfileDetailsPostsCountNumber">{storeProfileData[0].postsCount}</div>
            </div>
            <div className='StoreProfileDetailsFollowersCount'>
                <div className="StoreProfileDetailsFollowersCountHeader">Followers</div>
                <div className="StoreProfileDetailsFollowersCountNumber">{storeProfileData[0].followersCount}</div>
            </div>
            </div>
            <div className='storeProfileControlButtons'>
                <button id="follow">Follow</button>
                <Link to="/storeItems" style={{textDecoration:"none"}}><button id="visitStorePage">Visit Store</button></Link>
            </div>
        </div>
        <div className="StoreProfileExtraDetails">
            <div className='storeProfileExtraInfo'>
                <div className="storeProfileDistance"><button id="storeLocation"><img src={require("./location icon.png")} alt="location icon"/>{storeProfileData[0].location}</button></div>
                <div className="storeProfileAboutHeader">
                    <div className='storeProfileAboutHeading'>About Store</div>
                    <div className='storeProfileAbout'>{storeProfileData[0].about.substring(0,150)} <button><b>{"Read More..."}</b></button></div>
                </div>
            </div>
            <div className='StoreProfileExtraDetailsControls'>
                <div className="StoreProfileExtraDetailsControlsContainer">
                    <button id= "chatWithSeller"><img src={require("./message icon.png")} alt="message icon"/>
                    <div>Chat with Seller</div></button>    
                </div>
                <div className='storeProfileContacts'><img src={require("./phone.png")} alt="phone icon"/><div>{storeProfileData[0].contactDetails}</div></div>
            </div>
        </div>
        <div className='storeProfileImages'>
            {storeProfileImages.map((image)=>{
            return (<img id="storeProfileImage" key={image.key} src={require("./" + image.src)} alt={image.alt}/>)
            })}
        </div>
        <img id="storeProfilePhoto" src={require("./Ellipse 72.png")} alt="store profile" />
    </div>
  )
}

export default StoreProfilePageHeader