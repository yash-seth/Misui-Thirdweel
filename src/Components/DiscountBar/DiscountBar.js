import React from 'react'
import "./DiscountBar.css"
import {DiscountBarData} from "../../Data"

function DiscountBar() {
  return (
    <>
        <div className='discountBarcontainer'>
        {DiscountBarData.map((Discount)=>{
              return <img className="banner" key={Discount.id} src={require("./"+Discount.src)} alt={Discount.alt}/>
              })}
        </div>
    </>
  )
}

export default DiscountBar