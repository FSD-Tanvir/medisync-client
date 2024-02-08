import useAxiosPublic from "../../hooks/useAxiosPublic";
import useProductCart from "../../hooks/useProductCart";


const UserProductCart = () => {


    const [productCart, isLoading, refetch] = useProductCart();
    const axiosPublic = useAxiosPublic()


    const handleDeleteProduct = async (productId) => {
        try {
            const res = await axiosPublic.delete(`/productCart/${productId}`);
            // Product deleted successfully, refetch the productCart data
            refetch();
        } catch (error) {
            console.error("Error deleting product:", error);
            // Handle error, show a message, or take appropriate action
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    // console.log(productCart)
    if (!productCart || !productCart.length) {
        return <div>No product data available.</div>;
    }
    return (
        <div className="flex flex-col">
            {productCart.map((product, index) => (
                <div key={index} className=" p-4 mb-4 shadow-md rounded-md">
                    <div className="flex items-center">
                        <img className="w-16 h-16 mr-4" src={product.image} alt={product.name} />
                        <div>
                            <h2 className="text-lg font-semibold">{product.name} {product.weight}</h2>
                            <p className="text-gray-500">{product.company}</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-gray-700"><span className="font-bold">Price:</span> ${product.price} /piece</p>
                        <button onClick={() => handleDeleteProduct(product._id)} className="text-red-500">Delete </button>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-700"><span className="font-bold">Total Price:</span> ${product.totalPrice} <span className="font-bold">Quintity:</span>{product.quintity}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}


export default UserProductCart;