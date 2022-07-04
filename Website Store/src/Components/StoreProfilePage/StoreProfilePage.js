import React from 'react'
import "./StoreProfilePage.css"
import Header from "../Header/Header"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import StoreProfilePageHeader from './Components/StoreProfilePageHeader/StoreProfilePageHeader'

function StoreProfilePage() {
  return (
    <>
        <Header/>
        <div className='mobileView'>
          <HeaderMenu />
        </div>
        <div className="StoreProfilePageMain">
            <div className="StoreProfilePageMainDetails">
                <StoreProfilePageHeader/>
            </div>
        </div>
        
    </>
  )
}

export default StoreProfilePage