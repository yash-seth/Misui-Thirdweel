import React from 'react'
import "./DiscountBanner.css"

function DiscountBanner() {
  return (
    <div className='discountBannerContainer'>
        <img id="discountBanner" src={require("./discountBanner.png")} alt="discountBanner"/>
    </div>
  )
}

export default DiscountBanner