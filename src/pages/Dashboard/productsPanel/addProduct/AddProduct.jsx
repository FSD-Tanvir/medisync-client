import { useForm } from "react-hook-form";
import Button from "../../../../components/shared/button/Button";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className="w-full lg:w-3/4 mx-auto bg-blue-500 bg-opacity-20 flex items-center relative overflow-hidden shadow-xl rounded-lg">
            {/* register form  */}
            <form onSubmit={handleSubmit(onSubmit)} className={`p-4 lg:p-8 w-full`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
                    add product
                </h1>
                <div className="space-y-5 grid gap-5 grid-cols-1 sm:grid-cols-2 justify-center items-baseline">
                    {/* Product Name  */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="productName"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Product Name
                        </label>
                        <input
                            id="productName"
                            type="text"
                            {...register("productName", { required: true })}
                            placeholder="Enter Product Name"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.productName && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Product Categorey  */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="productCategorey"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Categorey
                        </label>
                        <input
                            id="productCategorey"
                            type="text"
                            {...register("job_type", { required: true })}
                            placeholder="Enter Product Categorey"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.productCategorey && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Company Name */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="companyName"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Company Name
                        </label>
                        <input
                            id="companyName"
                            type="text"
                            {...register("companyName", { required: true })}
                            placeholder="Enter Company Name"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.companyName && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* product overview */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="productOverview"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Product Overview
                        </label>
                        <input
                            id="productOverview"
                            type="text"
                            {...register("productOverview", {
                                required: true,
                                valueAsNumber: true,
                            })}
                            placeholder="Enter Product Overview"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.productOverview && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label htmlFor="image" className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2">
                            image
                        </label>
                        <input
                            id="image"
                            type="text"
                            {...register("image", { required: true })}
                            placeholder="image"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.image && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                </div>
                {/* add job button  */}
                <div className="text-center mt-8">
                    <Button btnName="add job" classForButton="px-2 w-1/3" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;