import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./AddAddress.css"

function AddAddress({address, setAddress}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <Footer/>
    </>
  )
}

export default AddAddress