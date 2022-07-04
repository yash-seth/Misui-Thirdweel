import React from 'react'
import "./StoreProfilePageHeader.css"
import {storeProfileData} from "../../../../Data"

function StoreProfilePageHeader() {
  return (
    <div className="StoreProfilePageHeaderMain">
        <div className="StoreProfilePageHeaderMainTopContainer"><span></span></div>
        <div className="StoreProfileDetails">
            <div className="StoreProfileDetailsMain">
                <div id="storeProfileName">{storeProfileData[0].name}</div>
                <div className="StoreProfileDetailsMainExtra">
                    <div id="storeProfileName">{storeProfileData[0].distance}</div>
                    <img src={require("./"+storeProfileData[0].rating)} alt="store rating" />
                </div>
            </div>
            <div className='StoreProfileDetailsPostsCount'>
                <div className="StoreProfileDetailsPostsCountHeader">Posts</div>
                <div className="StoreProfileDetailsPostsCountNumber">{storeProfileData[0].postsCount}</div>
            </div>
            <div className='StoreProfileDetailsFollowersCount'>
                <div className="StoreProfileDetailsFollowersCountHeader">Followers</div>
                <div className="StoreProfileDetailsFollowersCountNumber">{storeProfileData[0].followersCount}</div>
            </div>
        </div>
    </div>
  )
}

export default StoreProfilePageHeader