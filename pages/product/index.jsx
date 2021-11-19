import ProductPage from "../../components/Product";
import axios from 'axios';

function ProductIndex({ product }) {
    return <ProductPage product={product} />
}

export const getStaticProps = async () => {
    try {
        const res = await axios.get('http://localhost:3001/product');
        const product = res.data;
        return {
            props: {
                product
            }
        }
    } catch (error) {
        return { error };
    }
};





export default ProductIndex;