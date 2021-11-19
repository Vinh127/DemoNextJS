import Reeact, { useState } from 'react';
import { useRouter } from 'next/router';
import ProductDetailPage from '../../components/ProductDetail';

import axios from 'axios';


function ProductDetailIndex({ productDetail }) {
    return (
        <ProductDetailPage productDetail={productDetail} />
    )
};




export async function getServerSideProps(context) {
    let productId = context.query.id;
    const res = await axios.get(`http://localhost:3001/product/${productId}`);
    const product = res.data;

    return {
        props: {
            productDetail: product
        }
    }

}




export default ProductDetailIndex;