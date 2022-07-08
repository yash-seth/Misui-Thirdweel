import React from 'react'
import "./PaymentSuccessfulScratchCards.css"
import {paymentSuccessfulScatchCardData} from "../../../../Data"

function PaymentSuccessfulScratchCards() {
  return (
    <>
        <div className='PaymentSuccessfulScratchCardsContainer'>
            <img src={require("./confetti.png")} alt="confetti emoji"/>
            <div className='PaymentSuccessfulScratchCardsContainerHeader'>You've unlocked {paymentSuccessfulScatchCardData.name} Scatch Cards</div>
            <div className='PaymentSuccessfulScratchCards'>
                {paymentSuccessfulScatchCardData.scatchCards.map((scratchCard)=>{
                   return scratchCard.unlocked ? 
                   (
                    <div className='scratchCard'>
                        <button><img key={scratchCard.id} src={require("./" + scratchCard.src)} alt={scratchCard.alt} /></button>
                        <div id="scratchCardInfo">You Got!</div>
                    </div>
                   )
                    : 
                    (
                        <div className='scratchCard'>
                             <button><div id="emptyScratchCard"></div></button>
                            <div id="emptyScratchCardInfo">{scratchCard.id*2} Purchases Later</div>
                        </div>
                    )
                })}
            </div>
            <div className='scratchCardsText'>Keep shopping to get scratch cards from the store and keep getting exciting offers.</div>
        </div>
    </>
  )
}

export default PaymentSuccessfulScratchCards