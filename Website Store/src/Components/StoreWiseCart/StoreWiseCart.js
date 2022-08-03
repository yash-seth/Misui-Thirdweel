import React from 'react'
import Header from '../Header/Header'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import PaginationFooter from './Components/PaginationFooter/PaginationFooter'
import StoreWiseBreakdown from './Components/StoreWiseBreakdown/StoreWiseBreakdown'
import "./StoreWiseCart.css"

function StoreWiseCart({address, setAddress, setProfileView}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu setProfileView={setProfileView}/>
        </div>
        <div className='StoreWiseCartApp'>
            <StoreWiseBreakdown/>
            <PaginationFooter/>
        </div>
    </>
  )
}

export default StoreWiseCart