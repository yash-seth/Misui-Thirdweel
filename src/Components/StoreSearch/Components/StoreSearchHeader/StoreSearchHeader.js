import React from 'react'
import "./StoreSearchHeader.css"
import {sortByData} from "../../../../Data"

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
                {sortByData.map((sortBy)=>{
                          return (<>
                                    <button id="sortByButton" style={{textDecoration:"none"}}><div id="sortByName">{sortBy.name}</div></button><br/>
                                  </>
                          )
                        })}
                    </div>
            </div>
        </div>
        <hr id="hr"/>
    </>
  )
}

export default StoreSearchHeader