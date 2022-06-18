import React from 'react'
import "./DiscountBanner.css"
import {DiscountBannerData} from "../../Data"

function DiscountBanner() {
  return (
    <div className='discountBannerContainer'>
        {DiscountBannerData.map((discountBanner)=>{
              return <img id="discountBanner" key={discountBanner.id} src={require("./"+discountBanner.src)} alt={discountBanner.alt}/>
              })}
    </div>
  )
}

export default DiscountBanner