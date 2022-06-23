import React from 'react'
import Header from '../Header/Header'
import BoughtTogether from './Components/BoughtTogether/BoughtTogether'
import ItemsToExplore from './Components/ItemsToExplore/ItemsToExplore'
import "./ProductDescription.css"

function ProductDescription() {
  return (
    <>
        <Header/>
        <BoughtTogether/>
        <ItemsToExplore/>
    </>
  )
}

export default ProductDescription