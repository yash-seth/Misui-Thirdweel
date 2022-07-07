import React from 'react'
import "./StoreItemsPage.css"
import Header from "../Header/Header"
import StoreItemsHeader from './Components/StoreItemsHeader/StoreItemsHeader'
import StoreItemsSearch from './Components/StoreItemsSearch/StoreItemsSearch'
import StoreItemsMain from './Components/StoreItemsMain/StoreItemsMain'

function StoreItemsPage({setAddress}) {
  return (
    <>
        <Header setAddress={setAddress}/>
        <StoreItemsHeader/>
        <StoreItemsSearch/>
        <StoreItemsMain/>
    </>
  )
}

export default StoreItemsPage