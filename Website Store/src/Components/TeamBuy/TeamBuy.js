import React from 'react'
import "./TeamBuy.css"
import {TeamBuyData} from "../../Data"
import {Link} from "react-router-dom"

function TeamBuy() {
    return (
        <div className='TeamBuyHomepageContainer'>
            <div className='TeamBuyHeading'>
                <section id="TeamBuy-heading">Team Buy</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
            <div className='TeamBuyBanners'>
                {TeamBuyData.map((TeamBuyProduct)=>{
                    return <Link to="/teamBuyItemSearch"><img id="TeamBuyBanner" key={TeamBuyProduct.id} src={require("./"+TeamBuyProduct.src)} alt={TeamBuyProduct.alt} height="200px"/></Link>
                })}
            </div>
        </div>
      )
    }

export default TeamBuy
