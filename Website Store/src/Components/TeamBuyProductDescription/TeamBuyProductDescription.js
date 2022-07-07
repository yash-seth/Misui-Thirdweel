import React from 'react'
import Header from '../Header/Header'
import TeamBuyBoughtTogether from './Components/TeamBuyBoughtTogether/TeamBuyBoughtTogether'
import TeamBuyDescription from './Components/TeamBuyDescription/TeamBuyDescription'
import TeamBuyItemsToExplore from './Components/TeamBuyItemsToExplore/TeamBuyItemsToExplore'
import "./TeamBuyProductDescription.css"

function ProductDescription({setAddress}) {
  return (
    <>
        <Header setAddress={setAddress}/>
        <TeamBuyDescription/>
        <TeamBuyBoughtTogether/>
        <TeamBuyItemsToExplore/>
    </>
  )
}

export default ProductDescription