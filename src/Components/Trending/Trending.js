import React from 'react'
import "./Trending.css"
import {TrendingData} from "../../Data"
import { Link } from "react-router-dom";

function Trending() {
  return (
    <div className='trendingContainer'>
        <section id="trending-heading">Trending <br />Items</section>
          {TrendingData.map((trendingItem)=>{
            return <Link to="/productDescription" style={{ textDecoration: 'none' }}><img id="trendingItem" key={trendingItem.id} src={require("./"+trendingItem.src)} alt={trendingItem.alt} /></Link>
          })}
    </div>
  )
}

export default Trending