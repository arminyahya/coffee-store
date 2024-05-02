"use client"
import Image from "next/image";
import Link from 'next/link';
import { useContext } from "react";
import { CartContext } from './provider'
type Props = {
    title: string;
    prize: string;
    imageAddress: string;
    id: number;
}

export default function ProductItem(props: Props) {
    const { title, prize, imageAddress, id } = props;
    const context = useContext(CartContext);
    return (
        <Link href={`/Products/${id}`} >
            <div className="product-item">
                <div className="product-item_image-wrapper">
                    <Image alt="product" src={imageAddress} fill />
                </div>
                <div className="product-item_title">{title}</div>
                <div className="product_item_prize">{prize}</div>
                <div className="product_item_add-to-cart" onClick={() => context.setShoppingList([...context.shoppingList, { title, price: prize }])}>add to cart</div>
            </div>
        </Link>
    )
}