import React from 'react'
import Header from '../Header/Header'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import PaymentSuccessfulKeepShopping from './Components/PaymentSuccessfulKeepShopping/PaymentSuccessfulKeepShopping'
import PaymentSuccessfulMessage from './Components/PaymentSuccessfulMessage/PaymentSuccessfulMessage'
import PaymentSuccessfulScratchCards from './Components/PaymentSuccessfulScratchCards/PaymentSuccessfulScratchCards'
import "./PaymentSuccessful.css"

function PaymentSuccessful({setAddress}) {
  return (
    <>
        <Header setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu />
        </div>
        <div className='PaymentSuccessfulBody'>
            <PaymentSuccessfulMessage/>
            <div className='PaymentSuccessfulBodyExtra'>
                <PaymentSuccessfulScratchCards/>
                <PaymentSuccessfulKeepShopping/>
            </div>
        </div>
    </>
  )
}

export default PaymentSuccessful