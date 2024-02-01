import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const jobData = {
      title: data?.job_title,
      jobType: data?.job_type,
      department: data?.job_department,
      vacancy: data?.job_vacancy,
      compensationAndBenefits: data?.compensation_and_benefits,
      salary: data?.job_salary,
      jobContext: data?.job_context,
      jobResponsibilities: data?.job_responsibilities?.split(","),
      educationalRequirements: data?.educational_requirements,
      experienceRequirements: data?.experience_requirements,
      additionalRequirements: data?.additional_requirements,
      workplace: data?.workplace,
      jobLocation: data?.job_location,
      address: data?.address,
    };

    try {
      const result = await axios.post(
        "http://localhost:5000/jobs/add-job",
        jobData
      );
      if (result.data?.status === true) {
        toast.success("Your job added successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
      {/* register form  */}
      <form onSubmit={handleSubmit(onSubmit)} className={`p-4 lg:p-8 w-full`}>
        <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
          add job
        </h1>
        <div className="space-y-5 grid gap-5 grid-cols-1 sm:grid-cols-2 justify-center items-baseline">
          {/* job title  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_title" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Title
            </label>
            <input
              id="job_title"
              type="text"
              {...register("job_title", { required: true })}
              placeholder="Enter Job Title"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_title && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          {/* job type  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_type" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Type
            </label>
            <input
              id="job_type"
              type="text"
              {...register("job_type", { required: true })}
              placeholder="Enter Job Type"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_type && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          {/* job department  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_department" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Department
            </label>
            <input
              id="job_department"
              type="text"
              {...register("job_department", { required: true })}
              placeholder="Enter Job Department"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_title && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          {/* job vacancy  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_vacancy" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job vacancy
            </label>
            <input
              id="job_vacancy"
              type="number"
              {...register("job_vacancy", {
                required: true,
                valueAsNumber: true,
              })}
              placeholder="Enter job Vacancy"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_vacancy && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          {/* compensation And Benefits  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="compensation_and_benefits"
              className="block text-blue-500 border-l-2 font-semibold pl-2"
            >
              Job Compensation and Benefits
            </label>
            <input
              id="compensation_and_benefits"
              type="text"
              {...register("compensation_and_benefits", { required: true })}
              placeholder="Enter Compensation and Benefits"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.compensation_and_benefits && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* job Context  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_salary" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Salary
            </label>
            <input
              id="job_salary"
              type="text"
              {...register("job_salary", { required: true })}
              placeholder="Enter Salary ex: $50,000 - $60,000_per_year"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_salary && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* job context  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_context" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Context
            </label>
            <input
              id="job_context"
              type="text"
              {...register("job_context", { required: true })}
              placeholder="Enter Job Context"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_context && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* job Responsibilities  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="job_responsibilities"
              className="block text-blue-500 border-l-2 font-semibold pl-2"
            >
              Job Responsibilities
            </label>
            <input
              id="job_responsibilities"
              type="text"
              {...register("job_responsibilities", { required: true })}
              placeholder="Enter Job Context"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_responsibilities && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* educational Requirements  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="educational_requirements"
              className="block text-blue-500 border-l-2 font-semibold pl-2"
            >
              Educational Requirements
            </label>
            <input
              id="educational_requirements"
              type="text"
              {...register("educational_requirements", { required: true })}
              placeholder="Enter Educational Requirements"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.educational_requirements && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* experience Requirements  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="experience_requirements"
              className="block text-blue-500 border-l-2 font-semibold pl-2"
            >
              Experience Requirements
            </label>
            <input
              id="experience_requirements"
              type="text"
              {...register("experience_requirements", { required: true })}
              placeholder="Enter Experience Requirements"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.experience_requirements && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* experience Requirements  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="additional_requirements"
              className="block text-blue-500 border-l-2 font-semibold pl-2"
            >
              Additional Requirements
            </label>
            <input
              id="additional_requirements"
              type="text"
              {...register("additional_requirements", { required: true })}
              placeholder="Enter Additional Requirements"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.additional_requirements && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* workplace  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="workplace" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Workplace
            </label>
            <input
              id="workplace"
              type="text"
              {...register("workplace", { required: true })}
              placeholder="Enter Workplace"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.workplace && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* job Location  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="job_location" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Location
            </label>
            <input
              id="job_location"
              type="text"
              {...register("job_location", { required: true })}
              placeholder="Enter Job Location"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.job_location && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
          {/* job address  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label htmlFor="address" className="block text-blue-500 border-l-2 font-semibold pl-2">
              Job Address
            </label>
            <input
              id="address"
              type="text"
              {...register("address", { required: true })}
              placeholder="Enter Company address"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
            {errors.address && (
              <span className="text-red-600 font-medium text-right">
                This field is required
              </span>
            )}
          </div>
        </div>
        {/* add job button  */}
        <div className="text-center mt-8">
          <button className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;