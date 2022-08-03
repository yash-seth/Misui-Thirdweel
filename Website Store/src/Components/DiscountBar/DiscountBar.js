import React, {useState} from 'react'
import "./DiscountBar.css"
import {DiscountBarData} from "../../Data"

function DiscountBar() {
  const [learnMorePopup, setLearnMorePopup] = useState(false);
  return (
    <>
        <div className='discountBarcontainer'>
        {DiscountBarData.map((Discount)=>{
              return Discount.src==="learnMoreTeamBuy.png"? (<img onClick={()=>setLearnMorePopup(true)} className="banner" key={Discount.id} src={require("./"+Discount.src)} alt={Discount.alt} />) :(<img className="banner" key={Discount.id} src={require("./"+Discount.src)} alt={Discount.alt}/>)
              })}
        </div>
        {learnMorePopup && <div className='learnMorePopop'>
          <div className='learnMorePopopHeader'>
            <div id="learnMorePopopHeaderText">Team Buy for more discounts and lower prices never seen before</div>
            <button onClick={()=>setLearnMorePopup(false)}><img id="learnMoreCloseButton" src={require("./closeButton.png")} alt="close button"/></button>
          </div>
          <div className='learnMorePopopMain1'>
            <div className='step1'>
              <div className='stepHeader'><img id="step1" src={require("./step1.png")} alt="step 1"/>Select a team buy product from store or directly from the item description page</div>
              <img src={require("./image 235.png")} alt="step 1" />
            </div>
            <div className='step2'>
              <div className='stepHeader'><img id="step2" src={require("./step2.png")} alt="step 2"/>You can team with either friends or auto join teams to not go through the hassle to find teams</div>
              <img src={require("./image 236.png")} alt="step 2" />
            </div>
          </div>
          <div className='learnMorePopopMain2'>
            <div className='step3'>
              <div className='stepHeader'><img id="step1" src={require("./step3.png")} alt="step 3"/>Track your team status</div>
              <img src={require("./image 237.png")} alt="step 1" />
            </div>
            <div className='step4'>
              <div className='stepHeader'><img id="step2" src={require("./step4.png")} alt="step 4"/>You can view your team buy order history, and check your team history</div>
              <img src={require("./image 238.png")} alt="step 2" />
            </div>
          </div>
        </div>}
        <div className='learnMorePopupOverlay'></div>
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