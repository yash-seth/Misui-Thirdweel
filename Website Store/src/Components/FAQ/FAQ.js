import React from 'react'
import "./FAQ.css"
import Header from '../Header/Header'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Footer from '../Footer/Footer'
import FAQFooterNav from './Components/FAQFooterNav/FAQFooterNav'
import FAQMain from './Components/FAQMain/FAQMain'

function FAQ({address, setAddress}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
            <HeaderMenu/>
        </div>
        <div className='FAQMainContainer'>
            <FAQMain/>
            <FAQFooterNav/>
        </div>
        <Footer/>
    </>
  )
}

export default FAQ