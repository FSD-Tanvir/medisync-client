import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Button from "../../../../components/shared/button/Button";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const { data } = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const productId = data._id
    if (!productId) {
        console.error("undefine")
        return
    }

    const onSubmit = async (data) => {
        const updateProductData = {
            name: data?.name,
            company: data?.company,
            category: data?.category,
            price: data?.price,
            description: data?.description,
            image: data?.image,
            weight: data?.weight
        }
        try {

            const res = await axiosPublic.put(
                `/allProducts/update-product/${productId}`, updateProductData
            );
            if (res.data.status === true) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product Update Successfully.",
                        icon: "success"
                    });
                
            }
            
        } catch (err) {
            err.message;
        }
    }
    return (
        <div className="w-full lg:w-3/4 mx-auto bg-white flex items-center relative overflow-hidden shadow-xl rounded-lg">
            {/* register form  */}
            <form onSubmit={handleSubmit(onSubmit)} className={`p-4 lg:p-8 w-full`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
                    update product
                </h1>
                <div className="space-y-5 grid gap-5 grid-cols-1 sm:grid-cols-2 justify-center items-baseline">
                    {/* Product Name  */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="name"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Product Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            defaultValue={data?.name}
                            {...register("name", { required: true })}
                            placeholder="Enter Product Name"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.name && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Product weight  */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="weight"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Weight/Piece
                        </label>
                        <input
                            id="weight"
                            type="text"
                            defaultValue={data?.weight}
                            {...register("weight", { required: true })}
                            placeholder="Enter Product Weight"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.weight && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Product Categorey  */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="category"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Categorey
                        </label>
                        <input
                            id="category"
                            type="text"
                            defaultValue={data?.category}
                            {...register("category", { required: true })}
                            placeholder="Enter Product Categorey"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.category && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Product price  */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="price"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Product Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            defaultValue={data?.price}
                            {...register("price", { required: true })}
                            placeholder="Enter Product Price"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.price && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Company Name */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="company"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Company Name
                        </label>
                        <input
                            id="company"
                            type="text"
                            defaultValue={data?.company}
                            {...register("company", { required: true })}
                            placeholder="Enter Company Name"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.company && (
                            <span className="text-red-600 font-medium">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* product overview */}
                    <div className="space-y-5 drop-shadow-md w-full">
                        <label
                            htmlFor="description"
                            className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
                        >
                            Product Overview
                        </label>
                        <input
                            id="description"
                            type="text"
                            defaultValue={data?.description}
                            {...register("description", {
                                required: true,
                            })}
                            placeholder="Enter Product Overview"
                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.description && (
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
                            defaultValue={data?.image}
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
                    <Button btnName="update job" classForButton="px-2 w-1/3" classForDiv="text-center mt-8"/>
            </form>
        </div>
    );
};

export default UpdateProduct;