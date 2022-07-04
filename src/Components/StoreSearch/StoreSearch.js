import React from 'react'
import Header from "../Header/Header"
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import PaginationFooter from './Components/PaginationFooter/PaginationFooter'
import StoreResults from './Components/StoreResults/StoreResults'
import StoreSearchHeader from './Components/StoreSearchHeader/StoreSearchHeader'

function StoreSearch() {
  return (
    <>
        <Header />
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