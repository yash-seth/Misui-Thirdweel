import React from 'react'
import './TopOffers.css'
// import {TopOfferData} from "../../Data"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { websiteStoreUrl } from '../../api/urls'

function TopOffers() {
  const [topOffers, setTopOffers] = useState([{}])

  useEffect(() => {
    axios
      .get(`${websiteStoreUrl}/bestOffers`)
      .then(response => {
        console.log(response)
        setTopOffers(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='TopOffersContainer'>
      <div className='TopOffersHeading'>
        <section id="top-offers-heading">Top Offers</section>
        <img id="arrow" src={require("./arrow.png")} alt="arrow" />
      </div>
      <div className='offers'>
        {topOffers.map((TopOffer) => {
          return <img id="discount" key={TopOffer.uuid} src={TopOffer.src} alt={TopOffer.alt} />
        })}
      </div>
    </div>
  )
}

export default TopOffers