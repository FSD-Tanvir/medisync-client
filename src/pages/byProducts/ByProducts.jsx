import { useEffect, useState } from "react";
import useAllProducts from "../../hooks/useAllProducts";
import ProductsCard from "../home/products/ProductsCard";
import OTC from "../../assets/CategoryIcons/OTC.png"
import BABY from "../../assets/CategoryIcons/baby.webp"
import DENTAL from "../../assets/CategoryIcons/dental.png"
import DIABETIC from "../../assets/CategoryIcons/diabetic.png"
import PERSONAL from "../../assets/CategoryIcons/personal.png"
import PRESCRIPTION from "../../assets/CategoryIcons/prescription.png"
import WOMEN from "../../assets/CategoryIcons/women.png"
import { useParams } from "react-router-dom";
import CardLoading from "../../assets/Loading/CardLoading";



const ByProducts = () => {
    const pageSize = 10;
    const [category, setCategory] = useState('all')
    const { cat } = useParams()
    useEffect(() => {
        setCategory(cat)
    }, [cat])
    const [currentPage, setCurrentPage] = useState(1);
    const [products, isLoading] = useAllProducts({ category })
    //    console.log(products)

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, products.length);

    // Slice the products array to get the products for the current page
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="">
            <h2 className="text-center font-bold text-xl mt-2 mb-2">All MediSync </h2>
            <div className="flex gap-5">
                <div className="bg-gray-200 rounded-lg h-[560px]  lg:w-1/5">
                    <ul>
                        <li onClick={() => setCategory('otc')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={OTC} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">OTC Medicine</h2>
                        </li>
                        <li onClick={() => setCategory('women')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={WOMEN} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">For Women</h2>
                        </li>
                        <li onClick={() => setCategory('baby')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={BABY} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">Baby Care</h2>
                        </li>
                        <li onClick={() => setCategory('dental')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={DENTAL} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">Dental Care</h2>
                        </li>
                        <li onClick={() => setCategory('diabetic')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={DIABETIC} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">Diabetic Care</h2>
                        </li>
                        <li onClick={() => setCategory('personal')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={PERSONAL} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">Personal Care</h2>
                        </li>
                        <li onClick={() => setCategory('prescription')} className="flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-slate-300">
                            <img className="w-8 h-8" src={PRESCRIPTION} alt="" />
                            <h2 className="font-bold text-xl text-stone-600">Prescription Medicine</h2>
                        </li>


                        {/* Add more routes as needed */}
                    </ul>
                </div>

                {
                    isLoading ? <CardLoading /> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:w-4/5">
                            {
                                currentProducts.map(product => (
                                    <ProductsCard key={product._id} product={product} />
                                ))
                            }
                        </div>
                }
            </div>
            <div className="flex justify-center mt-5">
                {/* Pagination controls */}
                {
                    isLoading ? <p></p> :
                        Array.from({ length: Math.ceil(products.length / pageSize) }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? 'bg-cyan-400' : 'bg-white'}`}
                            >
                                {index + 1}
                            </button>
                        ))
                }
            </div>
        </div>
    );
};


export default ByProducts;