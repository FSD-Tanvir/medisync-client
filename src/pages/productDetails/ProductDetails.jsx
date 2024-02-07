import { useLoaderData } from "react-router-dom";
import PRESCRIPTION from "../../assets/CategoryIcons/prescription.png"
import { useState } from "react";





const ProductDetails = () => {
    const productDetails = useLoaderData()
    // console.log(productDetails)
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const totalAmount = productDetails.price * quantity;

    return (
        // <section className="mb-5">
        //     <div className="flex flex-col gap-5 mt-10 mb-10 lg:flex-row">
        //         {/* Product Image Section */}
        //         <div className="lg:w-3/4">
        //             <img className="w-full mb-4 lg:mb-0" src={productDetails.image} alt="prduct image" />
        //         </div>

        //         {/* Name,Price Section */}
        //         <div className="lg:w-1/2 border-2 border-blue-200 rounded m-2">
        //             <div className="flex flex-col lg:flex-row gap-5 items-center">
        //                 <h2 className="font-bold text-4xl italic m-4">{productDetails.name}</h2>
        //                 <span className="text-gray">{productDetails?.weight}</span>
        //             </div>
        //             <div>
        //                 <h2 className="font-medium text-blue-500 text-xl m-4">{productDetails?.company}</h2>
        //                 <span className="text-xl font-bold m-4">Best Price: ${productDetails?.price} <span className="text-blue-500">/piece</span> </span>
        //                 <h2 className="font-bold text-xl m-4">Total Price: ${totalAmount.toFixed(2)}</h2>
        //                 <div className="flex justify-center items-center gap-2 border-2 p-2 m-4 bg-[#FFF7F4] rounded">
        //                     <button className="text-black text-2xl px-4 py-2" onClick={handleDecrement}>
        //                         -
        //                     </button>
        //                     <span className="text-2xl font-bold">{quantity}</span>
        //                     <button className="text-black px-4 py-2 text-2xl" onClick={handleIncrement}>
        //                         +
        //                     </button>
        //                 </div>
        //             </div>
        //             <button className="hover:border-blue-500 hover:text-blue-500 font-semibold py-4 px-4 w-full rounded-md text-xs sm:text-xl md:text-xs lg:text-sm xl:text-xs shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4]">Add To Cart</button>
        //         </div>
        //     </div>
        //     <div className="flex gap-2 mt-5">
        //         <img className="w-8 h-8" src={PRESCRIPTION} alt="" />
        //         <h2 className="font-bold text-2xl">Medicine Overview</h2>
        //     </div>
        //     <p className="font-medium text-gray text-xl mt-2">{productDetails?.description}</p>
        // </section>
        <section className="mb-5">
            <div className="flex flex-col gap-5 mt-10 mb-10 lg:flex-row">
                {/* Product Image Section */}
                <div className="lg:w-1/2 h-80"> {/* Set a fixed height for the image container */}
                    <img className="w-full h-full object-cover mb-4 lg:mb-0" src={productDetails.image} alt="product image" />
                </div>

                {/* Name, Price Section */}
                <div className="lg:w-1/2 border-2 border-blue-200 rounded m-2 p-4">
                    <div className="flex flex-col gap-5 items-center">
                        <h2 className="font-bold text-4xl italic">{productDetails.name}</h2>
                        <span className="text-gray">{productDetails?.weight}</span>
                    </div>
                    <div>
                        <h2 className="font-medium text-blue-500 text-xl">{productDetails?.company}</h2>
                        <span className="text-xl font-bold ">Best Price: ${productDetails?.price} <span className="text-blue-500">/piece</span></span>
                        <h2 className="font-bold text-xl mt-4">Total Price: ${totalAmount.toFixed(2)}</h2>
                        <div className="flex justify-center items-center gap-2 border-2 p-2 mt-4 bg-[#FFF7F4] rounded">
                            <button className="text-black text-2xl px-4 py-2" onClick={handleDecrement}>
                                -
                            </button>
                            <span className="text-2xl font-bold">{quantity}</span>
                            <button className="text-black px-4 py-2 text-2xl" onClick={handleIncrement}>
                                +
                            </button>
                        </div>
                    </div>
                    <button className="border hover:border-blue-500 text-white hover:text-blue-500 bg-blue-500 hover:bg-[#FFF7F4] font-semibold py-4 px-4 w-full  rounded-md text-xs sm:text-xl md:text-xs lg:text-sm xl:text-xs mt-4 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)]">
                        Add To Cart
                    </button>
                </div>
            </div>
            <div className="flex gap-2 mt-5">
                <img className="w-8 h-8" src={PRESCRIPTION} alt="" />
                <h2 className="font-bold text-2xl">Medicine Overview</h2>
            </div>
            <p className="font-medium text-gray text-xl mt-2">{productDetails?.description}</p>
        </section>

    );

};

export default ProductDetails;