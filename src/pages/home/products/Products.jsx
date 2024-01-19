import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {
    const [products, setProducts] = useState()
    // console.log(products)

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from an API endpoint (replace with your API URL)
                const response = await fetch('product.json');
                const result = await response.json();
                // console.log(result)

                // Update the state with the fetched data
                setProducts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // Call the fetchData function
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">All Medicine Products Here</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    products?.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;