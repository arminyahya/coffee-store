import Image from "next/image";

type Props =  {
    title: string;
    prize: string;
    imageAddress: string;
}

export default function ProductItem(props: Props) {
    const { title, prize, imageAddress } = props;
    return (
        <div className="product-item">
            <div className="product-item_image-wrapper">
            <Image alt="product" src={imageAddress} fill/>
            </div>
            <div className="product-item_title">{title}</div>
            <div className="product_item_prize">{prize}</div>
            <div className="product_item_add-to-cart">add to cart</div>
        </div>
    )
}