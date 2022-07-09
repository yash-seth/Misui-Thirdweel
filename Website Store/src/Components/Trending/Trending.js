import React from 'react'
import "./Trending.css"
// import {TrendingData} from "../../Data"
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { websiteStoreUrl } from '../../api/urls';
import axios from 'axios'

function Trending() {
  const [trendingItems, setTrendingItems] = useState([])

  useEffect(() => {
    axios
      .get(`${websiteStoreUrl}/trendingItems`)
      .then(response => {
        console.log(response)
        setTrendingItems(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='trendingContainer'>
      <section id="trending-heading">Trending <br />Items</section>
      {trendingItems.map((trendingItem) => {
        return <Link to="/productDescription" style={{ textDecoration: 'none' }}><img id="trendingItem" key={trendingItem.uuid} src={trendingItem.src} alt={trendingItem.alt} height="100px" /></Link>
      })}
    </div>
  )
}

export default Trending