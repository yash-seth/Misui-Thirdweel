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
                <button style={{textDecoration: "none"}}><img id="dropdown" src={require("./dropdown.png")} alt="dropdown icon" height="20px"/></button>
                <div className='sortByMenuContainer'>
                        <p>Relevance</p>
                        <p>Rating</p>
                    </div>
            </div>
        </div>
        <hr id="hr"/>
    </>
  )
}

export default StoreSearchHeader