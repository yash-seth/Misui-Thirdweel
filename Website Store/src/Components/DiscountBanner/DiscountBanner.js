import React, { useState, useEffect } from 'react'
import "./DiscountBanner.css"
import { DiscountBannerData } from "../../Data"
import axios from 'axios';
import { websiteStoreUrl } from '../../api/urls';

function DiscountBanner() {

  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    axios
      .get(`${websiteStoreUrl}/discounts`)
      .then((response) => {
        console.log(response)
        setDiscounts(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='discountBannerContainer'>
      {discounts.map((discountBanner) => {
        return <img id="discountBanner" key={discountBanner.id} src={discountBanner.src} alt={discountBanner.alt} />
      })}
    </div>
  )
}

export default DiscountBanner