import { useForm } from "react-hook-form";
import Button from "../shared/button/Button";
import useAuth from "../../hooks/useAuth";
import useProductCart from "../../hooks/useProductCart";
import axios from "axios";



const PaymentFrom = ({ subTotal }) => {
    const [productCart] = useProductCart();
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const orderData = {
            products: productCart,
            user_name:user?.displayName,
            user_email:user?.email,
            currency:data?.currency,
            location:data?.user_location,
            subTotal:subTotal,
        }
        try {
            const result = await axios.post("http://localhost:5000/allOrders/order",orderData);
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div
            className={`flex flex-col ${location.pathname === "/checkout" && "md:w-1/3"
                } p-3 shadow-md rounded-md`}
        >
            <form onSubmit={handleSubmit(onSubmit)} className={`p-4 lg:p-8 w-full`}>
                <div className="space-y-5  gap-5 justify-center items-baseline">
                    {/* user name  */}
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
                            value={user.displayName}
                            {...register("user_name", { required: true })}
                            placeholder="Enter your name"
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
                            value={user.email}
                            {...register("user_email", { required: true })}
                            placeholder="Enter your user email"
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
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>
                        {/* errors will return when field validation fails  */}
                        {errors.currency && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* userLocation  */}
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
                <Button
                    btnType="submit"
                    btnName="Pay Now"
                    classForButton="px-4 py-3 w-full rounded-md text-xs sm:text-xs lg:text-sm xl:text-xs"
                />
            </form>
        </div>
    );
};

export default PaymentFrom;