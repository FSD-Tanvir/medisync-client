import { useState } from "react";
import useAllProducts from "../../hooks/useAllProducts";
import ProductsCard from "../home/products/ProductsCard";


const ByProducts = () => {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [products] = useAllProducts([])
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
             <h2 className="text-center font-bold text-xl mt-2 mb-2">All Mediisync </h2>
            <div className="flex gap-5">
                <div className="bg-gray-200 rounded-lg h-[560px]  lg:w-1/5">
                    <ul>
                        <li><a href="/route1">Route 1</a></li>
                        <li><a href="/route2">Route 2</a></li>
                        {/* Add more routes as needed */}
                    </ul>
                </div>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:w-4/5">
                    {
                        currentProducts.map(product => (
                            <ProductsCard key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center mt-5">
                {/* Pagination controls */}
                {Array.from({ length: Math.ceil(products.length / pageSize) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? 'bg-cyan-400' : 'bg-white'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default ByProducts;