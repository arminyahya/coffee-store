import coffees from "@/data/coffees";
import { useMemo } from "react"
import ProductItem from "./product-item";

export default function RelatedProducts({productId} : {productId: number}) {
    const products = useMemo(() => { return getRandomItems(coffees, 5) }, []);
    return <div className="related-products">{products.map(p => <ProductItem key={productId} {...p} />)}</div>;
}

const getRandomItems = (list: any, numItems: number) => {
    const randomItems = [];
    const totalItems = list.length;

    for (let i = 0; i < numItems; i++) {
        const randomIndex = Math.floor(Math.random() * totalItems);
        randomItems.push(list[randomIndex]);
    }

    return randomItems;
};