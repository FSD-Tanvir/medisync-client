import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";

const Career = () => {
  const [jobsData, setJobsData] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobsData(data.data)
        setDisplayJobs(data.data)
      });
  }, []);

  const handleDepartment = (id) => {
    if (id !== "all_jobs") {
      const selectedDepartment = jobsData.filter(
        (job) => job._id === id
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
      <BannerSimple imgUrl="https://i.ibb.co/hMNQW0v/ethnic-businessman-giving-hand-shake.jpg" text1="Join Us!" text2="We are Hiring" pageName="career"/>
      
      {/* department cards  */}
      <div className="flex gap-6 w-4/5 mx-auto overflow-x-auto p-3 rounded-lg -mt-[30px] bg-cyan-400">
        {/* department card*/}
        {/* see all jobs button */}
        <div
          onClick={() => handleDepartment("all_jobs")}
          className="relative flex justify-center items-center bg-white rounded-lg shadow-lg border h-[60px] w-min  whitespace-nowrap px-4 cursor-pointer"
        >
          <h3 className="flex justify-center items-center text-xl text-cyan-400 font-bold select-">
            All Jobs
            <span className="flex justify-center absolute -top-3 -right-3 bg-white items-center ml-2 border w-8 h-8 rounded-full">
              {jobsData?.length}
            </span>
          </h3>
        </div>
        {/* showing departments  */}
        {jobsData?.map((job) => (
          <div
            onClick={() => handleDepartment(job._id)}
            key={job._id}
            className="relative flex justify-center items-center bg-white rounded-lg shadow-lg border h-[60px] w-min  whitespace-nowrap px-4 cursor-pointer"
          >
            <h3 className="flex justify-center items-center text-xl text-cyan-400 font-bold select-">
              {job.department.replace(/_/g, " ")}
              <span className="flex justify-center absolute -top-3 -right-3 bg-white items-center ml-2 border w-8 h-8 rounded-full">
                {job.vacancy}
              </span>
            </h3>
          </div>
        ))}
      </div>
      {/* all jobs */}
      <div className="mt-14">
        {/* heading  */}
        <h2 className="text-2xl text-black/70 font-semibold">All Jobs</h2>
        {/* jobs  */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
          {displayJobs?.map((job) => (
            <div
              onClick={() => handleJobClick(job._id)}
              key={job._id}
              className="bg-white rounded-lg shadow-lg border px-4 py-3"
            >
              <h3 className="text-xl text-cyan-400 font-bold select- cursor-pointer">
                {job.title}
              </h3>
              <h5 className="text-black/70 font-medium select- cursor-pointer">
                {job.department} | {job.jobType}
              </h5>
              <p className="text-black/70 font-medium select- cursor-pointer">
                {job.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
