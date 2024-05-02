import Image from "next/image";

type Props =  {
    title: string;
    prize: string;
}

export default function ProductItem(props: Props) {
    const { title, prize } = props;
    return (
        <div className="product-item">
            <Image alt="product" src={''} />
            <div className="product-item_title">{title}</div>
            <div className="product_item_prize">{prize}</div>
        </div>
    )
}