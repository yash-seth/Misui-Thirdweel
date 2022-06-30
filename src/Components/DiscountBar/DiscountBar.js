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

//getting data from endpoint

// import React from 'react'
// import "./DiscountBar.css"
// // import {DiscountBarData} from "../../Data"
// import { useState, useEffect } from 'react'

// function DiscountBar() {
//   const [discounts, setDiscounts] = useState([{}])

//   useEffect(() => {
//     fetch("http://localhost:8012/stories")
//     .then(response => response.json())
//     .then(data => setDiscounts(data))
//   },[])
//   return (
//     <>
//         <div className='discountBarcontainer'>
//         {discounts.map((Discount)=>{
//               return <img className="banner" key={Discount.uuid} src={Discount.src} alt={Discount.alt}/>
//               })}
//         </div>
//     </>
//   )
// }

// export default DiscountBar