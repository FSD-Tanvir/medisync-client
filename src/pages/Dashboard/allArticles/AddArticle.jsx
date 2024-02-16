import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddArticle = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await axiosPublic.post('/newAndArticles/addArticle', data)
        .then(res => {
            console.log(res.data);
            if (res.data) {
                Swal.fire({
                    title: "Success!",
                    text: "Article Added Successfully.",
                    icon: "success"
                });
            }
        })
    };


    return (
        <div>
            <div className="w-full lg:w-[90%] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl rounded-lg">
                {/* register form  */}
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 lg:p-8 w-full">
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
                        Add An Article
                    </h1>
                    <div className="space-y-5 grid gap-5 grid-cols-1 md:grid-cols-2 justify-center items-baseline">
                        {/* disease title  */}
                        <div className="space-y-5 drop-shadow-md">
                            <label htmlFor="title" className="block">
                                Article Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                {...register("title", { required: true })}
                                placeholder="Article Title"
                                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                            />
                            {/* errors will return when field validation fails  */}
                            {errors.title && (
                                <span className="text-red-600 font-medium">
                                    This field is required
                                </span>
                            )}
                        </div>
                        {/* description  */}
                        <div className="space-y-5 drop-shadow-md">
                            <label htmlFor="description" className="block">
                                Description
                            </label>
                            <input
                                id="description"
                                type="text"
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                            />
                            {/* errors will return when field validation fails  */}
                            {errors.description && (
                                <span className="text-red-600 font-medium">
                                    This field is required
                                </span>
                            )}
                        </div>
                         {/* image  */}
                         <div className="space-y-5 drop-shadow-md">
                            <label htmlFor="image" className="block">
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
                            {errors.tips_title_1 && (
                                <span className="text-red-600 font-medium">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    {/* add job button  */}
                    <div className="text-center mt-8">
                        <button className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
                            Add Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArticle;
