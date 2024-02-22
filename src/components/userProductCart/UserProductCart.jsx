import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import useProductCart from "../../hooks/useProductCart";
import Button from "../shared/button/Button";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UserProductCart = ({ onClose }) => {
  const [productCart, isLoading, refetch] = useProductCart();
  const [initialQuantity, setInitialQuantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleDeleteProduct = async (productId) => {
    try {
      await axiosSecure.delete(`/productCart/${productId}`);
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

  const subTotal = productCart.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  // increment and decrement func here
  const handleUpdateProduct = async (id, quantity, price, action) => {
    // setQuantity(quantity)
    let updatedQuantity;
    let updatedTotalPrice;

    // checking if action are increment or decrement
    if (action === "increment") {
      setIsDisabled(false)
      updatedQuantity = quantity + 1;
      updatedTotalPrice = price * updatedQuantity;
    } else {
      if (quantity === initialQuantity) {
        updatedQuantity = quantity;
        updatedTotalPrice = price * updatedQuantity;
        return setIsDisabled(true)
      }
      setIsDisabled(false)
      updatedQuantity = quantity - 1;
      updatedTotalPrice = price * updatedQuantity;
    }
    const { data } = await axiosSecure.patch(
      `/productCart/update-product/${id}`,
      { quantity: updatedQuantity, totalPrice: updatedTotalPrice }
    );
    if (data?.updateResult.modifiedCount > 0) {
      refetch();
    }
  };

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div
      className={`flex flex-col ${location.pathname === "/checkout" &&
        "md:flex-row sm:justify-between gap-5"
        }`}
    >
      <div
        className={`${location.pathname === "/checkout" && "md:w-3/4"}`}
      >
        {productCart.map((product, index) => (
          <div key={index} className="p-4 mb-4 shadow-md rounded-md">
            <div className="flex items-center relative">
              <img
                className="w-16 h-16 mr-4"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {product.name} {product.weight}
                </h2>
                <p className="text-gray-500">{product.company}</p>
              </div>
              <button
                onClick={() => handleDeleteProduct(product._id)}
                className="absolute top-0 right-0 max-[380px]:-top-3 max-[380px]:-right-3 border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-1 px-1 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-red-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
              >
                <FaTrashAlt size={13} />
              </button>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-700">
                <span className="font-bold">Price:</span> ${product.price}{" "}
                /piece
              </p>
              <div className="flex justify-center items-center gap-2 border-2 bg-[#fcfcfc] rounded cursor-context-menu">
                <button
                  onClick={() =>
                    handleUpdateProduct(
                      product?._id,
                      product?.quantity,
                      product?.price,
                      "decrement"
                    )
                  }
                  className="text-black text-xl w-[26px] hover:bg-red-300 transition duration-200 ease-linear rounded-l select-none"
                  disabled={isDisabled ? true : false}
                >
                  -
                </button>
                <span className="text-lg font-bold px-1 cursor-context-menu select-none">
                  {product?.quantity}
                </span>
                <button
                  onClick={() =>
                    handleUpdateProduct(
                      product?._id,
                      product?.quantity,
                      product?.price,
                      "increment"
                    )
                  }
                  className="text-black text-xl w-[26px] hover:bg-blue-300 transition duration-200 ease-linear rounded-r select-none"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-2">
              <div className="text-gray-700">
                <p className="font-bold">
                  Total Price: <span>${product?.totalPrice.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gap between cards and sub-total/checkout */}
      {/* <div className="my-4"></div> */}
      {/* Sub-total and Checkout */}
      <div
        className={`flex flex-col ${location.pathname === "/checkout" && "md:w-1/3"
          } p-3 shadow-md rounded-md`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={`p-4 lg:p-8 w-full`}>
          <div className="space-y-5  gap-5 justify-center items-baseline">
            {/* job title  */}
            <div className="space-y-5 drop-shadow-md w-full">
              <label
                htmlFor="user_name"
                className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
              >
                User Name
              </label>
              <input
                id="user_name"
                type="text"
                {...register("user_name", { required: true })}
                placeholder="Enter Job Title"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
              />
              {/* errors will return when field validation fails  */}
              {errors.user_name && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
            {/* user email  */}
            <div className="space-y-5 drop-shadow-md w-full">
              <label
                htmlFor="user_email"
                className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
              >
                User Email
              </label>
              <input
                id="user_email"
                type="email"
                {...register("user_email", { required: true })}
                placeholder="Enter Job Type"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
              />
              {/* errors will return when field validation fails  */}
              {errors.user_email && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
            {/* job department  */}
            <div className="space-y-5 drop-shadow-md w-full">
              <label
                htmlFor="currency"
                className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
              >
                Seclect Currency
              </label>
              <select {...register("currency")} className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600">
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
              </select>
              {/* errors will return when field validation fails  */}
              {errors.currency && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
            {/* job vacancy  */}
            <div className="space-y-5 drop-shadow-md w-full">
              <label
                htmlFor="user_location"
                className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
              >
                User Location
              </label>
              <textarea
                id="user_location"
                type="text"
                {...register("user_location", {
                  required: true,
                })}
                placeholder="Enter user location"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
              />
              {/* errors will return when field validation fails  */}
              {errors.user_location && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* add pay button  */}
          <p className="text-gray-700 mb-4 mt-4">
            <span className="font-bold">Sub Total:</span> ${subTotal.toFixed(2)}
          </p>
          <div onClick={onClose}>
            <Link to="checkout">
              <Button
                btnName="Proceed To Checkout"
                classForButton="px-4 py-3 w-full rounded-md text-xs sm:text-xs lg:text-sm xl:text-xs"
              />
            </Link>
          </div>
        </form>

        {/* <p className="text-gray-700 mb-2">
          <span className="font-bold">Sub Total:</span> ${subTotal.toFixed(2)}
        </p>
        <div onClick={onClose}>
          <Link to="checkout">
            <Button
              btnName="Proceed To Checkout"
              classForButton="px-4 py-3 w-full rounded-md text-xs sm:text-xs lg:text-sm xl:text-xs"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default UserProductCart;
