import React from "react";
import CartIcon from '../img/CartIcon.jpg'


export default function CartWidget() {
    return (
        <>
           <li><button><img className="cart-widget" src={CartIcon} /></button></li>
        </>
    )
}