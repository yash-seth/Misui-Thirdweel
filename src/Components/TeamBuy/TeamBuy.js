import React from 'react'
import "./TeamBuy.css"
import {TeamBuyData} from "../../Data"

function TeamBuy() {
    return (
        <div className='TeamBuyContainer'>
            <div className='TeamBuyHeading'>
                <section id="TeamBuy-heading">Team Buy</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
            <div className='TeamBuyBanners'>
                {TeamBuyData.map((TeamBuyProduct)=>{
                    return <img id="TeamBuyBanner" key={TeamBuyProduct.id} src={require("./"+TeamBuyProduct.src)} alt={TeamBuyProduct.alt} />
                })}
            </div>
        </div>
      )
    }

export default TeamBuy
