import React from 'react'
import "./ProfilePage.css"
import Header from "../Header/Header"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import ProfilePageHeader from './Components/ProfilePageHeader/ProfilePageHeader'
import ProfilePageRecentlyBought from './Components/ProfilePageRecentlyBought/ProfilePageRecentlyBought'

function ProfilePage({address, setAddress, profileView, setProfileView}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu setProfileView={setProfileView}/>
        </div>
        <div className="ProfilePageMain">
            <div className="ProfilePageMainDetails">
                <ProfilePageHeader profileView={profileView}/>
            </div>
            <div className='ProfilePageTopProducts'>
              <ProfilePageRecentlyBought/>
            </div>
        </div>
        
    </>
  )
}

export default ProfilePage