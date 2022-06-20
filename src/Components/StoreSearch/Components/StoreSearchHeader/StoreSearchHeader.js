import React from 'react'
import "./StoreSearchHeader.css"

function StoreSearchHeader() {
  return (
    <>
        <div className='StoreSearchHeaderContainer'>
            <div id="itemInfo">
                Items (50+)
            </div>
            <div id="storeInfo">
                <b>Stores (36+)</b>
            </div>
            <div id="StoreSearchSort">
                Sort By: Relevance
                <img id="dropdown" src={require("./dropdown.png")} alt="dropdown icon" height="20px"/>
            </div>
        </div>
        <hr id="hr"/>
    </>
  )
}

export default StoreSearchHeader