import React from 'react'
import "./StoreItemsSearch.css"
import {StoreItemsPageInfo} from "../../../../Data"

function StoreItemsSearch() {
  return (
    <div className='StoreItemsSearchContainer'>
        <div className="StoreItemsSearch">
            <div className="StoreItemsSearchIcon">
            </div>
            <input id="StoreItemsSearch" type="text" placeholder="Search in Laxmi Stores..."></input>
          </div>
    </div>
  )
}

export default StoreItemsSearch