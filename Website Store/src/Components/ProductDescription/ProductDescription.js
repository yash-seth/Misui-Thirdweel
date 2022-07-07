import React from 'react'
import Header from '../Header/Header'
import BoughtTogether from './Components/BoughtTogether/BoughtTogether'
import Description from './Components/Description/Description'
import ItemsToExplore from './Components/ItemsToExplore/ItemsToExplore'
import "./ProductDescription.css"

function ProductDescription({setAddress}) {
  return (
    <>
        <Header setAddress={setAddress}/>
        <Description/>
        <BoughtTogether/>
        <ItemsToExplore/>
    </>
  )
}

export default ProductDescription