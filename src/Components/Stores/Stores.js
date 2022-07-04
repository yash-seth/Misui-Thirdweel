import React from 'react'
import "./Stores.css"
import {StoreData} from "../../Data"

function Stores() {
    return (
        <div className='storesContainer'>
            <div className='storesHeading'>
                <section id="stores-heading">Nearby Stores</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
            <div className='stores'>
                {StoreData.map((Story)=>{
                    return <img id="store" key={Story.id} src={require("./"+Story.src)} alt={Story.alt} />
                })}
            </div>
        </div>
      )
    }

export default Stores
