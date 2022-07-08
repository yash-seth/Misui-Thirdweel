import React from 'react'
import Header from "../Header/Header"
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import PaginationFooter from './Components/PaginationFooter/PaginationFooter'
import StoreResults from './Components/StoreResults/StoreResults'
import StoreSearchHeader from './Components/StoreSearchHeader/StoreSearchHeader'

function StoreSearch({address, setAddress}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu />
        </div>
        <StoreSearchHeader />
        <StoreResults />
        <PaginationFooter />
    </>
  )
}

export default StoreSearch