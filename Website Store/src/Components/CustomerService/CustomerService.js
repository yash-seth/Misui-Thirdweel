import React from 'react'
import "./CustomerService.css"
import Header from '../Header/Header'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Footer from '../Footer/Footer'
import FAQFooterNav from '../FAQ//Components/FAQFooterNav/FAQFooterNav'
import CustomerServiceMain from './Components/CustomerServiceMain/CustomerServiceMain'

function CustomerService({address, setAddress}) {
    return (
        <>
            <Header address={address} setAddress={setAddress}/>
            <div className='mobileView'>
                <HeaderMenu/>
            </div>
            <div className='CustomerServiceMainContainer'>
                <CustomerServiceMain/>
                <FAQFooterNav/>
            </div>
            <Footer/>
        </>
        )
}

export default CustomerService