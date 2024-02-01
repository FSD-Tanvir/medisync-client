import { useForm } from "react-hook-form";
// import axios from "axios"
// import toast from "react-hot-toast";
import Navbar from "./Navbar";

const AddAdvice = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const adviceInfo = {
            title: data?.advice_title,
        }
        console.log(adviceInfo);

        // try {
        //     const result = await axios.post("http://localhost:5000/jobs/add-job", adviceInfo)
        //     if (result.data?.status === true) {
        //         toast.success("Your advice added successfully")
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
    };


    return (
        <div>
            <Navbar></Navbar>
            <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
                {/* register form  */}
                <form onSubmit={handleSubmit(onSubmit)} className={`p-8 w-full`}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8  capitalize">
                        Add An Advice
                    </h1>
                    <div className="space-y-5">
                        {/* job title  */}
                        <div className="space-y-5 drop-shadow-md">
                            <label htmlFor="job_title" className="block">
                                Advice Title
                            </label>
                            <input
                                id="advice_title"
                                type="text"
                                {...register("advice_title", { required: true })}
                                placeholder="Advice Title"
                                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                            />
                            {/* errors will return when field validation fails  */}
                            {errors.advice_title && (
                                <span className="text-red-600 font-medium">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    {/* add job button  */}
                    <div className="text-center mt-8">
                        <button className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
                            Add Advice
                        </button>

                    </div>

                    {/* <p className="mb-3 text-center">Already have an account?<Link className="underline font-semibold">Login</Link></p> */}
                </form>
            </div>
        </div>
    );
};

export default AddAdvice;
