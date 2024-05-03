
import { getProductByID } from '../../server'
import Image from "next/image";
import AddToCart from '@/app/_Components/addToCart';

export default async function DetailProduct({ params }: any) {
    const { imageAddress, title, price } = await getProductByID(params.id);

    return (
        <div className='product-detail'>
            <div className='product-detail-inner'>
                <div>Name : {title}</div>
                <div>Price : {price}</div>
                <AddToCart title={title} price={price} />
            </div>
            <div className='product-detail-inner'>
                <div className='product-detail-inner-image'>
                    <Image alt="product" src={imageAddress} fill />
                </div>
            </div>
        </div>
    )
}