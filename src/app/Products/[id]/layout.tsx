import Breadcrumb from "@/app/_Components/breadcrumb";
import RelatedProducts from "@/app/_Components/related-products";

export default function ProductLyout({ children, params }: any) {
    return <>
        <Breadcrumb productId={params.id}  />
        {children}
        <RelatedProducts productId={params.id} />
    </>
}