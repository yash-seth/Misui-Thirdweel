import React from 'react'
import "./StoreItemsPage.css"
import Header from "../Header/Header"
import StoreItemsHeader from './Components/StoreItemsHeader/StoreItemsHeader'
import StoreItemsSearch from './Components/StoreItemsSearch/StoreItemsSearch'
import StoreItemsMain from './Components/StoreItemsMain/StoreItemsMain'

function StoreItemsPage({address, setAddress}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <StoreItemsHeader/>
        <StoreItemsSearch/>
        <StoreItemsMain/>
    </>
  )
}

export default StoreItemsPage