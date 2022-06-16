import React from 'react'
import "./DiscountBar.css"

function DiscountBar() {
  return (
    <>
        <div className='discountBarcontainer'>
            <img className="banner" src={require("./appBanner.png")} alt="app banner" />
            <img className="banner" src={require("./discountBanner.png")} alt="app banner" />
        </div>
    </>
  )
}

export default DiscountBar