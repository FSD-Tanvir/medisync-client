import { useLoaderData } from "react-router-dom";
import PRESCRIPTION from "../../assets/CategoryIcons/prescription.png"





const ProductDetails = () => {
    const productDetails = useLoaderData()
    // console.log(productDetails)

    return (
        <>
            <div className="flex gap-10 mt-10">
                {/* Product Image Section */}
                <div className="w-3/4">
                    <img className="w-full" src={productDetails.image} alt="" />
                </div>

                {/* Content Section */}
                <div className="w-1/2 border-2 border-blue-200 rounded py-4">
                    <div className="flex gap-5  items-center">
                        <h2 className="font-bold text-4xl italic py-2">{productDetails.name}</h2>
                        <span className="text-gray">{productDetails?.weight}</span>
                    </div>
                    <div>
                        <h2 className="font-medium text-blue-500 text-xl py-4 px-2">{productDetails?.company}</h2>
                        <span className="text-xl font-bold py-4 px-2">Best Price: ${productDetails?.price}</span>
                    </div>


                </div>
            </div>
            <div className="flex gap-2 mt-5">
                <img className="w-8 h-8" src={PRESCRIPTION} alt="" />
                <h2 className="font-bold text-2xl">Medicine Overview</h2>

            </div>
            <p className="font-medium text-gray text-xl mt-2">{productDetails?.description}</p>
        </>
    );
};

export default ProductDetails;