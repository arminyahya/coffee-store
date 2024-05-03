import { GetServerSideProps, NextPage } from 'next';
import { getProductByID } from '../../server'
import { ParsedUrlQuery } from 'querystring';

export default async function DetailProduct(props: any) {
    console.log(props);
    const product = await getProductByID(props.params.id);
    console.log(product);
    return <>{product ? product.title : null}</>
}