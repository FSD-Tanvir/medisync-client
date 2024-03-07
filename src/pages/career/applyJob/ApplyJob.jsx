import Button from "../../../components/shared/button/Button";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ApplyJob = () => {
  const partialData = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const { titleAndId } = partialData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const applierData = {
      name: form?.user_name?.value,
      email: form?.user_email?.value,
      phoneNumber: form?.phone_number?.value,
      education: form?.education?.value,
      age: form?.age?.value,
      expectedSalary: form?.expected_salary?.value,
      cv: form?.cv?.value,
      jobName: titleAndId?.title,
      jobId: titleAndId?._id,
    };

    try {
      const { data } = await axiosSecure.post(
        "/jobApplications/save-application",
        applierData
      );
      if (data?.acknowledge) {
        toast.success("Your application succeeded");
      }
    } catch (err) {
      if (err.response.status === 403) {
        toast.error(
          `You are already applied for ${titleAndId?.title.replace(/_/g, " ")}`
        );
      }
    }
  };

  return (
    <div className="w-full lg:w-[90%] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl rounded-lg">
      {/* register form  */}
      <form onSubmit={handleSubmit} className={`p-4 lg:p-8 w-full`}>
        <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
          apply job
        </h1>
        <div className="space-y-5 grid gap-5 grid-cols-1 md:grid-cols-2 justify-center items-baseline">
          {/* user name  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="user_name"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              required
              placeholder="Enter Your Name"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
          </div>
          {/* user email  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="user_email"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              required
              placeholder="Enter Your Email"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
          </div>
          {/* user age  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="age"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              required
              placeholder="Enter Your Age"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
          </div>
          {/* phone number  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="phone_number"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Phone Number
            </label>
            <input
              id="phone_number"
              type="number"
              name="phone_number"
              required
              placeholder="Enter Phone Number"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
          </div>
          {/* user education  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="education"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Education
            </label>
            <input
              id="education"
              type="text"
              name="education"
              required
              placeholder="Enter Your Education"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}

            <span className="text-red-600 font-medium">
              ex: subject/institute name/oct 2018 - sep 2023, subject/institute
              name/oct 2016 - sep 2020
            </span>
          </div>
          {/* user expected salary  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="expected_salary"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Expected salary
            </label>
            <input
              id="expected_salary"
              type="number"
              name="expected_salary"
              required
              placeholder="Enter Expected Salary"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
          </div>
          {/* user cv  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="cv"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Your Cv
            </label>
            <input
              id="cv"
              type="url"
              name="cv"
              required
              placeholder="Enter Your CV Link"
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {/* errors will return when field validation fails  */}
          </div>
          {/* job name  */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="job_name"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2  w-min whitespace-nowrap"
            >
              Job Name
            </label>
            <input
              id="job_name"
              type="text"
              name="job_name"
              required
              defaultValue={titleAndId?.title.replace("_", " ")}
              disabled
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
          </div>
        </div>
        {/* apply job button  */}
        <Button
          btnName="Apply job"
          classForButton="px-2 w-1/3"
          btnType="submit"
          classForDiv="text-center mt-8"
        />
      </form>
    </div>
  );
};

export default ApplyJob;
