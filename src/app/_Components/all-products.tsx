import { getAllProducts } from "../server";
import ProductItem from "./product-item";

export default async function AllProducts() {
    const products = await getAllProducts();
    return <div className="all-products">{products.map(product => (
        <ProductItem
        title={product.title}
        prize={product.prize}
        imageAddress={product.imageAddress}
        />
    ))}
    </div> 
}