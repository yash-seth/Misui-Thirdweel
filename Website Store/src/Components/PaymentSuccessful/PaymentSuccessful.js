import React from 'react'
import Header from '../Header/Header'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import PaymentSuccessfulKeepShopping from './Components/PaymentSuccessfulKeepShopping/PaymentSuccessfulKeepShopping'
import PaymentSuccessfulMessage from './Components/PaymentSuccessfulMessage/PaymentSuccessfulMessage'
import PaymentSuccessfulScratchCards from './Components/PaymentSuccessfulScratchCards/PaymentSuccessfulScratchCards'
import "./PaymentSuccessful.css"

function PaymentSuccessful({address, setAddress, paymentView, setProfileView}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu setProfileView={setProfileView}/>
        </div>
        <div className='PaymentSuccessfulBody'>
            <PaymentSuccessfulMessage paymentView={paymentView}/>
            <div className='PaymentSuccessfulBodyExtra'>
                <PaymentSuccessfulScratchCards/>
                <PaymentSuccessfulKeepShopping/>
            </div>
        </div>
    </>
  )
}

export default PaymentSuccessful