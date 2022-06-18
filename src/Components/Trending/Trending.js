import React from 'react'
import "./Trending.css"
import {TrendingData} from "../../Data"

function Trending() {
  return (
    <div className='trendingContainer'>
        <section id="trending-heading">Trending <br />Items</section>
          {TrendingData.map((trendingItem)=>{
            return <img id="trendingItem" key={trendingItem.id} src={require("./"+trendingItem.src)} alt={trendingItem.alt} />
          })}
    </div>
  )
}

export default Trending