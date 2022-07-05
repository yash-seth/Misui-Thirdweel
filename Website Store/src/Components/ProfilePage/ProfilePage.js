import React from 'react'
import "./ProfilePage.css"
import Header from "../Header/Header"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import ProfilePageHeader from './Components/ProfilePageHeader/ProfilePageHeader'
import ProfilePageRecentlyBought from './Components/ProfilePageRecentlyBought/ProfilePageRecentlyBought'

function ProfilePage() {
  return (
    <>
        <Header/>
        <div className='mobileView'>
          <HeaderMenu />
        </div>
        <div className="ProfilePageMain">
            <div className="ProfilePageMainDetails">
                <ProfilePageHeader/>
            </div>
            <div className='ProfilePageTopProducts'>
              <ProfilePageRecentlyBought/>
            </div>
        </div>
        
    </>
  )
}

export default ProfilePage