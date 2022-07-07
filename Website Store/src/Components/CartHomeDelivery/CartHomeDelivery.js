import React from "react";
import Header from "../Header/Header";
import "./CartHomeDelivery.css";
import CartHomeDeliveryMain from "./Components/CartHomeDeliveryMain/CartHomeDeliveryMain";

function CartHomeDelivery({address, setAddress}) {
  return (
    <>
      <Header setAddress={setAddress}/>
        <div className='CartHomeDeliveryApp'>
            <CartHomeDeliveryMain address={address}/>
        </div>
    </>
  );
}

export default CartHomeDelivery;
