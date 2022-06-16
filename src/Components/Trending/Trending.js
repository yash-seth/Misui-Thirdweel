import React from 'react'
import "./Trending.css"

function Trending() {
  return (
    <div className='trendingContainer'>
        <section id="trending-heading">Trending <br />Items</section>
        <img id="trendingItem" src={require("./trendingItem.png")} alt="trendingItem" />
        <img id="trendingItem" src={require("./trendingItem.png")} alt="trendingItem" />
        <img id="trendingItem" src={require("./trendingItem.png")} alt="trendingItem" />
        <img id="trendingItem" src={require("./trendingItem.png")} alt="trendingItem" />
        <img id="trendingItem" src={require("./trendingItem.png")} alt="trendingItem" />
    </div>
  )
}

export default Trending