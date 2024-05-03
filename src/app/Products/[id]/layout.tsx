import RelatedProducts from "@/app/_Components/related-products";

export default function ProductLyout({ children, params }: any) {
    return <>
        {children}
        <RelatedProducts productId={params.id} />

    </>
}