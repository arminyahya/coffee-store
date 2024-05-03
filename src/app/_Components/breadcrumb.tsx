import Link from "next/link";
import { getProductByID } from "../server";

export default async function BreadCrumb({ productId }: any) {
    const { category, title } = await getProductByID(productId);

    return <div className="breadcrumb">
        <span><Link href="/">Home {` > `}</Link></span>
        <span><Link href={`/Product-Category/${category}`}> {`${category} > `}</Link></span>
        <span>{title}</span>

    </div>
}