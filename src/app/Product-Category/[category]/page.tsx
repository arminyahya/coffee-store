import { GetServerSideProps, NextPage } from 'next';
import { getAllProductsByCategory } from '../../server';
import ProductItem from '../../_Components/product-item';

export default async function ProductsByCategory(props: any) {
    const products = await getAllProductsByCategory(props.params.category);
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