import { useLoaderData } from "react-router-dom";



const ProductDetails = () => {
    const productDetails = useLoaderData()
    console.log(productDetails)

    return (
        <div>
            Details
        </div>
    );
};

export default ProductDetails;