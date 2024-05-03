"use client"
import { CartContext } from './provider'
import { useContext } from 'react';

export default function AddToCart({ title, price }: any) {
    const context = useContext(CartContext);

    return (
        <div className="product_item_add-to-cart" onClick={() => context.setShoppingList([...context.shoppingList, { title, price }])}>add to cart</div>
    )
}