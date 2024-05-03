"use client"

import { Dispatch, createContext, useState } from "react";

export const CartContext = createContext<{
    shoppingList: {
        title: string,
        price: string
    }[],
    setShoppingList: Dispatch<any>
}
>({
    shoppingList: [],
    setShoppingList: () => null
});
export default function Provider(props: any) {
    const [shoppingList, setShoppingList] = useState<any>([])
    return <CartContext.Provider value={{ shoppingList, setShoppingList }}>

        {props.children}
    </CartContext.Provider>
}