import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";

import useAxiosPublic from "../../hooks/useAxiosPublic";

const Career = () => {
  const axiosPublic = useAxiosPublic();
  const [searchText, setSearchText] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [departments, setDepartments] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const departmentsArr = [];

    const fetchData = async () => {
      try {
        const { data } = await axiosPublic.get(`/jobs?search=${searchText}`);
        setJobsData(data.data);
        setDisplayJobs(data.data);
        data?.data.forEach((job) => {
          if (departmentsArr.includes(job.department.toLowerCase()) === false) {
            departmentsArr.push(job.department.toLowerCase());
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    // calling the fetchData func
    fetchData();
    // set departments
    setDepartments(departmentsArr);
  }, [axiosPublic, searchText]);

  const handleDepartment = (department) => {
    if (department !== "all_jobs") {
      const selectedDepartment = jobsData.filter(
        (job) => job?.department.toLowerCase() === department.toLowerCase()
      );

      setDisplayJobs(selectedDepartment);
    } else {
      setDisplayJobs(jobsData);
    }
  };

  // handle job clicked
  const handleJobClick = (id) => {
    navigate(`/career/job-details/${id}`);
  };

  return (
    <div className="min-h-[90vh] mb-20">
      {/* Career banner section  */}
      <BannerSimple
        imgUrl="https://i.ibb.co/hMNQW0v/ethnic-businessman-giving-hand-shake.jpg"
        text1="Join Us!"
        text2="We are Hiring"
        pageName="career"
      />

      <div className="flex flex-col sm:flex-row gap-6 w-11/12 sm:w-4/5 mx-auto p-3 py-6 rounded-lg -mt-[45px] bg-blue-500 drop-shadow-lg ">
        <div className="relative">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="searchProducts"
            id="searchProducts"
            placeholder="Search jobs"
            className="w-64 md:w-96 border-2 py-2 pl-10 pr-3 rounded-full focus:outline-blue-500 outline-none"
          />
          <div className="absolute left-2  top-1/2 -translate-y-1/2">
            <div>
              <IoSearchOutline size={24} />
            </div>
          </div>
        </div>
        <div>
          <select
            onChange={(e) =>
              handleDepartment(e?.target?.value?.replace(/ /g, "_"))
            }
            name="job_department"
            className="w-[170px] rounded-full pl-3 capitalize outline-none py-[10px]"
          >
            <option value="all_jobs">all jobs</option>
            {departments &&
              departments.map((department, idx) => (
                <option key={idx} value={department}>
                  {department.replace(/_/g, " ")}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* all jobs */}
      <div className="mt-14 px-3">
        {/* heading  */}
        <h2 className="text-3xl text-black/70 whitespace-nowrap w-min font-semibold text-left border-b-4 border-b-blue-500 ">
          All Jobs
        </h2>
        {/* jobs  */}
        {displayJobs.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
            {displayJobs?.map((job) => (
              <div
                onClick={() => handleJobClick(job._id)}
                key={job._id}
                className="bg-white rounded-lg shadow-lg border px-4 py-3"
              >
                <h3 className="text-lg sm:text-xl text-black font-bold cursor-pointer">
                  {job.title.split("_").join(" ")}
                </h3>
                <h5 className="text-black/70 font-medium cursor-pointer">
                  {job.department.replace(/_/g, " ")} | {job.jobType}
                </h5>
                <p className="text-black/70 font-medium cursor-pointer max-w-full">
                  {job.address}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-6">
            <div className="flex flex-col gap-0 justify-center items-center min-h-[60vh]">
              <div className="w-[45%] sm:w-[25%] lg:w-[20%] xl:w-[16%] mx-auto border-none rounded-lg">
                <img
                  src="https://i.ibb.co/pwdt62g/9214814.jpg"
                  className="opacity-90 rounded-lg"
                  alt="Jobs not found image"
                />
              </div>
              <div className="text-center mb-6 px-3 mt-2">
                <p className="text-4xl font-bold text-gray-800">
                  oOps<span className="text-red-600">!!!</span>
                </p>
                <p className="text-4xl font-bold text-gray-800">
                  Jobs Not Found 😢
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <IoIosRefresh
                  onClick={() => window.location.reload()}
                  size={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
