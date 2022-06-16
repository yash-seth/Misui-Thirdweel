import React from 'react'
import './TopOffers.css'

function TopOffers() {
  return (
    <div className='TopOffersContainer'>
        <div className='TopOffersHeading'>
            <section id="top-offers-heading">Top Offers</section>
            <img id="arrow" src={require("./arrow.png")} alt="arrow" />
        </div>
        <div className='offers'>
            <img id="discount" src={require("./discount1.png")} alt="discount" />
            <img id="discount" src={require("./discount2.png")} alt="discount" />
            <img id="discount" src={require("./discount1.png")} alt="discount" />
            <img id="discount" src={require("./discount2.png")} alt="discount" />
        </div>
    </div>
  )
}

export default TopOffers