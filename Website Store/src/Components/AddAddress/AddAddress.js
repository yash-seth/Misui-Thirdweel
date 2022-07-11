import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import "./AddAddress.css"
import AddAddressMain from './Components/AddAddressMain/AddAddressMain'

function AddAddress({address, setAddress}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
            <HeaderMenu/>
        </div>
        <div className='AddAddressMainContainer'>
            <AddAddressMain/>
        </div>
        <Footer/>
    </>
  )
}

export default AddAddress