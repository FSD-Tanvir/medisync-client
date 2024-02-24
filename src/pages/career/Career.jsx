import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";

import useAxiosPublic from "../../hooks/useAxiosPublic";

const Career = () => {
  const axiosPublic = useAxiosPublic();
  const [searchText, setSearchText] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [departments, setDepartments] = useState([]);

  // console.log(departments);

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
            // console.log(testArr);
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
  }, [axiosPublic,searchText]);

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
          <select onChange={(e)=>handleDepartment(e?.target?.value?.replace(/ /g,"_"))} name="job_department" className="w-[170px] rounded-full pl-3 capitalize outline-none py-[10px]">
            <option value="all_jobs">all jobs</option>
            {
              departments && departments.map((department,idx)=>(
                <option key={idx} value={department}>{department.replace(/_/g," ")}</option>
              ))
            }
          </select>
        </div>
      </div>

      {/* department cards  */}

      {/* <div className="flex gap-6 w-11/12 sm:w-4/5 mx-auto p-3 pt-0 rounded-lg -mt-[30px] bg-primary-color-bg drop-shadow-lg "> */}
      {/* department cards*/}
      {/* <Swiper
          slidesPerView={"auto"}
          spaceBetween={-40}
          centeredSlides={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar]}
          className=""
        > */}
      {/* this is for all jobs  */}
      {/* <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div
              onClick={() => handleDepartment("all_jobs")}
              className="relative flex justify-center items-center bg-primary-bg-color rounded-lg shadow-lg border h-[40px] sm:h-[60px] w-3/4 mr-[0px]  cursor-pointer my-8"
            >
              <h3 className="flex justify-center items-center sm:text-xl text-white font-bold select-none">
                All Jobs
                <span className="flex justify-center absolute z-[100_!important] -top-3 -right-3 bg-primary-bg-color items-center ml-2 border w-8 h-8 rounded-full">
                  {jobsData?.length}
                </span>
              </h3>
            </div>
          </SwiperSlide> */}
      {/* rest of departments card here  */}
      {/* {departments?.map((department, idx) => (
            <SwiperSlide
              style={{ backgroundColor: "transparent" }}
              onClick={() => handleDepartment(department)}
              key={idx}
            >
              <div className="relative flex justify-center items-center bg-primary-bg-color rounded-lg shadow-lg border h-[40px] sm:h-[60px] w-3/4 cursor-pointer my-8 ">
                <h3 className="flex justify-center items-center sm:text-xl text-white font-bold">
                  {department.replace(/_/g, " ")}
                  <span className="flex justify-center absolute -top-3 -right-3 bg-primary-bg-color items-center ml-2 border w-8 h-8 rounded-full">
                {jobsData[idx].vacancy}
              </span>
                </h3>
              </div>
            </SwiperSlide>
          ))} */}
      {/* </Swiper> */}
      {/* </div> */}

      {/* all jobs */}
      <div className="mt-14 px-3">
        {/* heading  */}
        <h2 className="text-3xl text-black/70 whitespace-nowrap w-min font-semibold text-left border-b-4 border-b-blue-500 ">
          All Jobs
        </h2>
        {/* jobs  */}
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
      </div>
    </div>
  );
};

export default Career;
