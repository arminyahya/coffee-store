


export default function CartItem(props: any) {
    const { title, price } = props.item;
    return (
        <div className="cart-item">
            <div className="">{title}</div>
            <div className="">{price}</div>
        </div>
    )
}