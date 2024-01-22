import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Career = () => {

    const [jobsData,setJobsData] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = () =>{
            fetch("./jobcirculardepartments.json").then(res => res.json()).then(data => {
                setJobsData(data)
                setDisplayJobs(data)
            })
        }
        fetchData()
    },[])

    const handleDepartment = (department) =>{
      if(department !== "all_jobs"){
      const selectedDepartment = jobsData.filter(job => job.department === department)
      setDisplayJobs(selectedDepartment)
    }else{
      setDisplayJobs(jobsData)
    }
    }

    // handle job clicked 
    const handleJobClick = (id) =>{
      navigate(`/career/job-details/${id}`)
    }


  return (
    <div className="min-h-[90vh] mb-20">
      {/* Career banner section  */}
      <div
        className="h-[55vh] w-full bg-fixed bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hMNQW0v/ethnic-businessman-giving-hand-shake.jpg)",
        }}
      >
        <div className="bg-black/25 text-white h-full flex justify-center items-center">
          <Link to="/">
            <span className="drop-shadow-md text-2xl pr-2 text-cyan-400">Home</span>
          </Link>
          <p className="drop-shadow-md border-l-4 rounded-t-full pl-2">
            <span className="text-2xl font-semibold text-white">
              {" "}
              Join Us!
              <span className="text-cyan-700 drop-shadow-md border-b-4 rounded-l-full rounded-r-full border-t-4 rounded-t-full ml-3 p-[6px]"> We are Hiring</span>
            </span>
          </p>
        </div>
      </div>
      {/* department cards  */}
      <div className="flex gap-6 w-4/5 mx-auto overflow-x-auto p-3 rounded-lg -mt-[30px] bg-cyan-400">
        {/* department card*/}
        {/* see all jobs button */}
        <div onClick={()=>handleDepartment("all_jobs")} className="relative flex justify-center items-center bg-white rounded-lg shadow-lg border h-[60px] w-min  whitespace-nowrap px-4 cursor-pointer">
          <h3 className="flex justify-center items-center text-xl text-cyan-400 font-bold select-">
            All Jobs
            <span className="flex justify-center absolute -top-3 -right-3 bg-white items-center ml-2 border w-8 h-8 rounded-full">{jobsData?.length}</span>
          </h3>
        </div>
        {/* showing departments  */}
        {
            jobsData?.map(job => <div onClick={()=>handleDepartment(job.department)} key={job.id} className="relative flex justify-center items-center bg-white rounded-lg shadow-lg border h-[60px] w-min  whitespace-nowrap px-4 cursor-pointer">
          <h3 className="flex justify-center items-center text-xl text-cyan-400 font-bold select-">
            {job.department.replace(/_/g," ")}
            <span className="flex justify-center absolute -top-3 -right-3 bg-white items-center ml-2 border w-8 h-8 rounded-full">{job.vacancy}</span>
          </h3>
        </div>)
        }
      </div>
      {/* all jobs */}
      <div className="mt-14">
        {/* heading  */}
        <h2 className="text-2xl text-black/70 font-semibold">All Jobs</h2>
        {/* jobs  */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
          {
            displayJobs?.map(job => <div onClick={()=>handleJobClick(job.id)} key={job.id} className="bg-white rounded-lg shadow-lg border px-4 py-3">
            <h3 className="text-xl text-cyan-400 font-bold select- cursor-pointer">
              {job.title}
            </h3>
            <h5 className="text-black/70 font-medium select- cursor-pointer">
            {job.department} | {job.job_type}
            </h5>
            <p className="text-black/70 font-medium select- cursor-pointer">
            {job.address}
            </p>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Career;
