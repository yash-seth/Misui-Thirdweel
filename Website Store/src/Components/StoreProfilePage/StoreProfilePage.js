import React from 'react'
import "./StoreProfilePage.css"
import Header from "../Header/Header"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import StoreProfilePageHeader from './Components/StoreProfilePageHeader/StoreProfilePageHeader'
import StoreProfilePageTopProducts from './Components/StoreProfilePageTopProducts/StoreProfilePageTopProducts'

function StoreProfilePage({address, setAddress, setProfileView, profileView}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu setProfileView={setProfileView}/>
        </div>
        <div className="StoreProfilePageMain">
            <div className="StoreProfilePageMainDetails">
                <StoreProfilePageHeader profileView={profileView}/>
            </div>
            <div className='StoreProfilePageTopProducts'>
              <StoreProfilePageTopProducts/>
            </div>
        </div>
        
    </>
  )
}

export default StoreProfilePage