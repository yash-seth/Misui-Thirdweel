import React from 'react'
import "./FAQFooterNav.css"

function FAQFooterNav() {
  return (
    <>
        <div className='FAQFooterNavContainer'>
            <div className='FAQFooterNavContainerHeader'>
                <div id="FAQFooterNavContainerHeaderText">Haven't found the solution to your problem?</div>
                <div id="FAQFooterNavContainerHeaderSubText">We're there for you. Call us or chat with us, we will help you out.</div>
                <div className='FAQFooterNavButtons'>
                    <button id="chatWithUsBtn">
                        <img src={require("./message.png")} alt="message icon" />Chat with us
                    </button>
                    OR
                    <button id="callUsBtn">
                        <img src={require("./phone.png")} alt="message icon" />Call us
                    </button>
                </div>
            </div>
            <img src={require("./illustration.png")} alt="illustration of support" />
        </div>
    </>
  )
}

export default FAQFooterNav