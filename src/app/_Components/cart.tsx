"use client"

import { useContext, useState } from "react"
import { CartContext } from './provider';
import CartItem from "./cart-item";

export default function Cart() {
    const [showCart, setShowCart] = useState<boolean>(false);
    const context = useContext(CartContext);
    return (
        <>
            <div onClick={() => setShowCart(prev => !prev)} >
                cart
            </div>
            {showCart && <div className="cart">
                <h2>Your Cart</h2>
                {context.shoppingList.map(item =>
                    <CartItem item={item} />)}
            </div>}
        </>
    )

}