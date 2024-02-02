import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const doctorData = {
      name: data?.name,
      specialization: data?.specialization,
      image: data?.image,
      qualification: data?.qualification,
      experience_years: data?.experience_years,
      contact: {
        email: data?.email,
        phone: data?.phone,
      },
      university: data?.university,
    };

    try {
      const result = await axios.post(
        "http://localhost:5000/doctors",
        doctorData
      );
      if (result.data?.status === true) {
        toast.success("Doctor added successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-full">
        <h1 className="text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
          Add Doctor
        </h1>
        <div className="space-y-5">
          {/* Doctor Name */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="name" className="block text-blue-500">
              Doctor Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true, minLength: 3 })}
              placeholder="Enter Doctor Name"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.name && (
              <span className="text-red-600 font-medium">
                This field is required and must be at least 3 characters long
              </span>
            )}
          </div>
          {/* Specialization */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="specialization" className="block text-blue-500">
              Specialization
            </label>
            <input
              id="specialization"
              type="text"
              {...register("specialization")}
              placeholder="Enter Specialization"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md"
            />
          </div>
          {/* Image URL */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="image" className="block text-blue-500">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              {...register("image")}
              placeholder="Enter Image URL"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md"
            />
          </div>
          {/* Qualification */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="qualification" className="block text-blue-500">
              Qualification
            </label>
            <input
              id="qualification"
              type="text"
              {...register("qualification")}
              placeholder="Enter Qualification"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md"
            />
          </div>
          {/* Experience Years */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="experience_years" className="block text-blue-500">
              Experience Years
            </label>
            <input
              id="experience_years"
              type="number"
              {...register("experience_years", { valueAsNumber: true })}
              placeholder="Enter Experience Years"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md"
            />
          </div>
          {/* Contact Email */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="email" className="block text-blue-500">
              Contact Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Contact Email"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.email && (
              <span className="text-red-600 font-medium">
                This field is required and must be a valid email address
              </span>
            )}
          </div>
          {/* Contact Phone */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="phone" className="block text-blue-500">
              Contact Phone
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Enter Contact Phone"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md"
            />
          </div>
          {/* University */}
          <div className="space-y-5 drop-shadow-md">
            <label htmlFor="university" className="block text-blue-500">
              University
            </label>
            <input
              id="university"
              type="text"
              {...register("university")}
              placeholder="Enter University"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md"
            />
          </div>
        </div>
        {/* Add Doctor Button */}
        <div className="text-center mt-8">
          <button className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
