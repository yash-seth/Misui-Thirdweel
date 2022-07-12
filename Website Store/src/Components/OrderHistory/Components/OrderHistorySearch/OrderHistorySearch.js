import React from 'react'
import "./OrderHistorySearch.css"

function OrderHistorySearch() {
  return (
    <div className='ProductAvailabilitySearchContainer'>
        <div className="ProductAvailabilitySearch">
            <div className="ProductAvailabilitySearchIcon">
            </div>
            <input id="ProductAvailabilitySearch" type="text" placeholder="Search in order history"></input>
          </div>
    </div>
  )
}

export default OrderHistorySearch