import React from "react";
import Header from "../Header/Header";
import "./CartCheckout.css";
import CartCheckoutMain from "./Components/CartCheckoutMain/CartCheckoutMain";

function CartCheckout({address, setAddress}) {
  return (
    <>
      <Header setAddress={setAddress}/>
        <div className='CartHomeDeliveryApp'>
            <CartCheckoutMain address={address}/>
        </div>
    </>
  );
}

export default CartCheckout;
