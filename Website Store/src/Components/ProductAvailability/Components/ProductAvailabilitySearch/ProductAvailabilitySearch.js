import React from 'react'
import "./ProductAvailabilitySearch.css"

function ProductAvailabilitySearch() {
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

export default ProductAvailabilitySearch