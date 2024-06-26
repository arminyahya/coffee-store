import { getAllProducts } from "../server";
import ProductItem from "./product-item";

export default async function AllProducts() {
    const products = await getAllProducts();
    return <div className="all-products">{products.map(product => (
        <ProductItem
            title={product.title}
            price={product.price}
            imageAddress={product.imageAddress}
            id={product.id}
        />
    ))}
    </div>
}