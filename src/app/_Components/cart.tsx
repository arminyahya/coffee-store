"use client"
import { useState } from "react"

export default function Cart() {
    const [showCart, setShowCart] = useState<boolean>(false)
    return (
        <>
            <div onClick={() => setShowCart(prev => !prev)} >
                cart
            </div>
            {showCart && <div className="cart">
                Your Card
            </div>}
        </>
    )

}