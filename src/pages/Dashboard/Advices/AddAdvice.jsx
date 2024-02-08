import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddAdvice = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await axiosPublic.post('/advices/addAdvice', data)
        .then(res => {
            console.log(res.data);
            if (res.data) {
                Swal.fire({
                    title: "Success!",
                    text: "Advice Added Successfully.",
                    icon: "success"
                });
                // reset()
            }
        })
    };


    return (
        <div>
            <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
                {/* register form  */}
                <form onSubmit={handleSubmit(onSubmit)} className="px-8 pb-8 w-full">
                            <h1 className="backdrop-blur-sm pt-5 text-2xl lg:text-4xl whitespace-nowrap text-center mb-5  capitalize w-full">
                                Add An Advice
                            </h1>
                            <div className="space-y-2">

                                <div className="flex gap-5">
                                    {/* disease title  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="title" className="block">
                                            Disease Title
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            {...register("title", { required: true })}
                                            placeholder="Disease Title"
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
                                    <div className="space-y-2 drop-shadow-md w-1/2">
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
                                </div>

                                <div className="flex gap-5">
                                    {/* tips_title_1  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_title_1" className="block">
                                            tips_title_1
                                        </label>
                                        <input
                                            id="tips_title_1"
                                            type="text"
                                            {...register("tips_title_1", { required: true })}
                                            placeholder="tips_title_1"
                                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                                        />
                                        {/* errors will return when field validation fails  */}
                                        {errors.tips_title_1 && (
                                            <span className="text-red-600 font-medium">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    {/* tips_title_2  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_title_2" className="block">
                                            tips_title_2
                                        </label>
                                        <input
                                            id="tips_title_2"
                                            type="text"
                                            {...register("tips_title_2", { required: true })}
                                            placeholder="tips_title_2"
                                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                                        />
                                        {/* errors will return when field validation fails  */}
                                        {errors.tips_title_2 && (
                                            <span className="text-red-600 font-medium">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    {/* tips_para_2  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_para_2" className="block">
                                            tips_para_2
                                        </label>
                                        <input
                                            id="tips_para_2"
                                            type="text"
                                            {...register("tips_para_2", { required: true })}
                                            placeholder="tips_para_2"
                                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                                        />
                                        {/* errors will return when field validation fails  */}
                                        {errors.tips_title_1 && (
                                            <span className="text-red-600 font-medium">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    {/* tips_title_3  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_title_3" className="block">
                                            tips_title_3
                                        </label>
                                        <input
                                            id="tips_title_3"
                                            type="text"
                                            {...register("tips_title_3", { required: true })}
                                            placeholder="tips_title_3"
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

                                <div className="flex gap-5">
                                    {/* tips_para_3  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_para_3" className="block">
                                            tips_para_3
                                        </label>
                                        <input
                                            id="tips_para_3"
                                            type="text"
                                            {...register("tips_para_3", { required: true })}
                                            placeholder="tips_para_3"
                                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                                        />
                                        {/* errors will return when field validation fails  */}
                                        {errors.tips_title_1 && (
                                            <span className="text-red-600 font-medium">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    {/* tips_title_4  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_title_4" className="block">
                                            tips_title_4
                                        </label>
                                        <input
                                            id="tips_title_4"
                                            type="text"
                                            {...register("tips_title_4", { required: true })}
                                            placeholder="tips_title_4"
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

                                <div className="flex gap-5">
                                    {/* tips_para_4  */}
                                    <div className="space-y-2 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_para_4" className="block">
                                            tips_para_4
                                        </label>
                                        <input
                                            id="tips_para_4"
                                            type="text"
                                            {...register("tips_para_4", { required: true })}
                                            placeholder="tips_para_4"
                                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                                        />
                                        {/* errors will return when field validation fails  */}
                                        {errors.tips_title_1 && (
                                            <span className="text-red-600 font-medium">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    {/* tips_title_5  */}
                                    <div className="space-y-1 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_title_5" className="block">
                                            tips_title_5
                                        </label>
                                        <input
                                            id="tips_title_5"
                                            type="text"
                                            {...register("tips_title_5", { required: true })}
                                            placeholder="tips_title_5"
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
                                <div className="flex gap-5">
                                    {/* tips_para_5  */}
                                    <div className="space-y-1 drop-shadow-md w-1/2">
                                        <label htmlFor="tips_para_5" className="block">
                                            tips_para_5
                                        </label>
                                        <input
                                            id="tips_para_5"
                                            type="text"
                                            {...register("tips_para_5", { required: true })}
                                            placeholder="tips_para_5"
                                            className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                                        />
                                        {/* errors will return when field validation fails  */}
                                        {errors.tips_title_1 && (
                                            <span className="text-red-600 font-medium">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    {/* conclusion  */}
                                    <div className="space-y-1 drop-shadow-md w-1/2">
                                        <label htmlFor="conclusion" className="block">
                                            conclusion
                                        </label>
                                        <input
                                            id="conclusion"
                                            type="text"
                                            {...register("conclusion", { required: true })}
                                            placeholder="conclusion"
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
                                {/* image  */}
                                <div className="space-y-1 drop-shadow-md">
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
                            <div className="text-center mt-5">
                                <button className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
                                    Add Advice
                                </button>
                            </div>
                        </form>
            </div>
        </div>
    );
};

export default AddAdvice;
