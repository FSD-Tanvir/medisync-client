import useAllProducts from "../../../../hooks/useAllProducts";
import ProductsRow from "./productsRow";


const AllProducts = () => {
    const category = "all";
    const [products, , refetch] = useAllProducts({ category })
    console.log(products)
    return (
        <div className="overflow-x-auto">
            <table className="table lg:w-full">
                <thead className="">
                    <tr>
                        <th className="text-lg capitalize text-left">
                            <div className="mr-4">S/N</div>
                        </th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Product Name</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Category</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Company Name</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Price</th>
                        <th className="text-lg capitalize text-left px-3 xl:pl-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((product, idx) => (
                            <ProductsRow refetch={refetch} key={product?._id} product={product} idx={idx} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;