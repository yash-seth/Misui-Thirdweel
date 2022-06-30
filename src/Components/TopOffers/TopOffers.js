import React from 'react'
import './TopOffers.css'
// import {TopOfferData} from "../../Data"
import { useState, useEffect } from 'react'

function TopOffers() {
  const [topOffers, setTopOffers] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8012/bestOffers")
    .then(response => response.json())
    .then(data => setTopOffers(data))
  },[])
  return (
    <div className='TopOffersContainer'>
        <div className='TopOffersHeading'>
            <section id="top-offers-heading">Top Offers</section>
            <img id="arrow" src={require("./arrow.png")} alt="arrow" />
        </div>
        <div className='offers'>
            {topOffers.map((TopOffer)=>{
              return <img id="discount" key={TopOffer.uuid} src={TopOffer.src} alt={TopOffer.alt}/>
              })}
        </div>
    </div>
  )
}

export default TopOffers