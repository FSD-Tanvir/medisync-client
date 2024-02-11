import { useEffect, useState } from "react";
import useAllProducts from "../../../../hooks/useAllProducts";
import ProductsRow from "./productsRow";


const AllProducts = () => {
    const category = "all";
    const [products, isLoading, refetch] = useAllProducts({ category });
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {

        window.scroll(0, 0);
        setCurrentPage(1); // Reset current page when category changes
    }, []);

    const totalPageCount = Math.ceil(products.length / pageSize);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, products.length);

    // Slice the products array to get the products for the current page
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const MAX_VISIBLE_PAGES = 3; // Number of pages to show at a time

    const renderPaginationButtons = () => {
        const buttons = [];
        let startPage = Math.max(
            1,
            currentPage - Math.floor(MAX_VISIBLE_PAGES / 2)

        );
        let endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPageCount);

        if (currentPage > totalPageCount - Math.floor(MAX_VISIBLE_PAGES / 2)) {
            startPage = Math.max(1, totalPageCount - MAX_VISIBLE_PAGES + 1);
            endPage = totalPageCount;
        }

        if (startPage > 1) {
            buttons.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={`mx-1 px-3 py-1 border ${currentPage === 1 ? "bg-[#003049] text-white" : "bg-white"
                        }`}
                >
                    1
                </button>
            );

            if (startPage > 2) {
                buttons.push(<span key="ellipsis-start">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`mx-1 px-3 py-1 border ${currentPage === i ? "bg-[#003049] text-white" : "bg-white"
                        }`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < totalPageCount) {
            if (endPage < totalPageCount - 1) {
                buttons.push(<span key="ellipsis-end">...</span>);
            }

            buttons.push(
                <button
                    key={totalPageCount}
                    onClick={() => handlePageChange(totalPageCount)}
                    className={`mx-1 px-3 py-1 border ${currentPage === totalPageCount
                            ? "bg-[#003049] text-white"
                            : "bg-white"
                        }`}
                >
                    {totalPageCount}
                </button>
            );
        }

        return buttons;
    };



    return (
        <div className="overflow-x-auto">
            <table className="table lg:w-full">
                <thead className="">
                    <tr>
                        <th className="text-lg capitalize text-left">
                            <div className="mr-4">S/N</div>
                        </th>
                        <th className=" text-base sm:text-lg capitalize text-left px-3 xl:pl-3">Product Image</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Product Name</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Category</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Company Name</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Price</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts &&
                        currentProducts.map((product, idx) => (
                            <ProductsRow refetch={refetch} key={product?._id} product={product} idx={idx} />
                        ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-5 mb-5">
                {/* Pagination controls */}
                {!isLoading && (
                    <div className="flex items-center gap-3">
                        {renderPaginationButtons()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProducts;