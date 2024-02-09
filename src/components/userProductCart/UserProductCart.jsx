import useAxiosPublic from "../../hooks/useAxiosPublic";
import useProductCart from "../../hooks/useProductCart";

const UserProductCart = () => {
  const [productCart, isLoading, refetch] = useProductCart();
  const axiosPublic = useAxiosPublic();

  const handleDeleteProduct = async (productId) => {
    try {
      const res = await axiosPublic.delete(`/productCart/${productId}`);
      refetch();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productCart || !productCart.length) {
    return <div>No product data available.</div>;
  }

  const subTotal = productCart.reduce((total, product) => total + product.totalPrice, 0);

  return (
    <div className="flex flex-col">
      {productCart.map((product, index) => (
        <div key={index} className="p-4 mb-4 shadow-md rounded-md">
          <div className="flex items-center">
            <img className="w-16 h-16 mr-4" src={product.image} alt={product.name} />
            <div>
              <h2 className="text-lg font-semibold">{product.name} {product.weight}</h2>
              <p className="text-gray-500">{product.company}</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-700"><span className="font-bold">Price:</span> ${product.price} /piece</p>
            <button onClick={() => handleDeleteProduct(product._id)} className="text-red-500">Delete</button>
          </div>
          <div className="mt-2">
            <p className="text-gray-700">
              <span className="font-bold">Total Price:</span> ${product.totalPrice} <span className="font-bold ml-4">Quantity: </span>{product.quintity}
            </p>
          </div>
        </div>
      ))}
      {/* Gap between cards and sub-total/checkout */}
      <div className="my-4"></div>
      {/* Sub-total and Checkout */}
      <div className="flex flex-col mt-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Sub Total:</span> ${subTotal.toFixed(2)}
        </p>
        <button className="border hover:border-blue-500 text-white hover:text-blue-500 bg-blue-500 hover:bg-[#FFF7F4] font-semibold py-4 px-4 w-full  rounded-md text-xs sm:text-xl md:text-xs lg:text-sm xl:text-xs mt-4 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)]" onClick={() => console.log("Checkout clicked")}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default UserProductCart;
