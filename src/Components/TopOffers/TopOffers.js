import React from 'react'
import './TopOffers.css'
import {TopOfferData} from "../../Data"

function TopOffers() {
  return (
    <div className='TopOffersContainer'>
        <div className='TopOffersHeading'>
            <section id="top-offers-heading">Top Offers</section>
            <img id="arrow" src={require("./arrow.png")} alt="arrow" />
        </div>
        <div className='offers'>
            {TopOfferData.map((TopOffer)=>{
              return <img id="discount" key={TopOffer.id} src={require("./"+TopOffer.src)} alt={TopOffer.alt}/>
              })}
        </div>
    </div>
  )
}

export default TopOffers