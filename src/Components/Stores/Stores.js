import React from 'react'
import "./Stores.css"

function Stores() {
    return (
        <div className='storesContainer'>
            <div className='storesHeading'>
                <section id="stores-heading">Nearby Stores</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
            <div className='stores'>
                <img id="store" src={require("./store1.png")} alt="store" />
                <img id="store" src={require("./store2.png")} alt="store" />
                <img id="store" src={require("./store1.png")} alt="store" />
                <img id="store" src={require("./store2.png")} alt="store" />
            </div>
        </div>
      )
    }

export default Stores
