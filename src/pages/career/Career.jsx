import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar } from "swiper/modules";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Career = () => {
  const axiosPublic = useAxiosPublic()
  const [jobsData, setJobsData] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [departments, setDepartments] = useState([]);
  // const [vacancies, setVacancies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const departmentsArr = [];
    // const vacancyArr = []

    const fetchData = async()=>{
      const {data} = await axiosPublic.get(`/jobs`)
      setJobsData(data.data);
      setDisplayJobs(data.data);
        data?.data.forEach((job) => {
          if (departmentsArr.includes(job.department.toLowerCase()) === false) {
            departmentsArr.push(job.department.toLowerCase());
            // console.log(testArr);
          }
          // if(departmentsArr.includes(job.department.toLowerCase()) === false){
          //   vacancyArr.push(job.vacancy)
          //   // console.log(vacancyArr);
          // }
        });
    }
    // calling the fetchData func 
    fetchData()
    // set departments 
    setDepartments(departmentsArr);
    // setVacancies(vacancyArr)
  }, [axiosPublic]);
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

      {/* department cards  */}

      <div className="flex gap-6 w-11/12 sm:w-4/5 mx-auto p-3 pt-0 rounded-lg -mt-[30px] bg-white drop-shadow-lg">
        {/* department cards*/}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          centeredSlides={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar]}
          className="mySwiper"
        >
          {/* this is for all jobs  */}
          <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div
              onClick={() => handleDepartment("all_jobs")}
              className="relative flex justify-center items-center bg-blue-500 rounded-lg shadow-lg border h-[40px] sm:h-[60px] w-full cursor-pointer my-8"
            >
              <h3 className="flex justify-center items-center sm:text-xl text-white font-bold select-">
                All Jobs
                <span className="flex justify-center absolute z-[100_!important] -top-3 -right-3 bg-blue-500 items-center ml-2 border w-8 h-8 rounded-full">
                  {jobsData?.length}
                </span>
              </h3>
            </div>
          </SwiperSlide>
          {/* rest of departments card here  */}
          {departments?.map((department, idx) => (
            <SwiperSlide
              style={{ backgroundColor: "transparent" }}
              onClick={() => handleDepartment(department)}
              key={idx}
            >
              <div className="relative flex justify-center items-center bg-blue-500 rounded-lg shadow-lg border h-[40px] sm:h-[60px] w-full cursor-pointer my-8">
                <h3 className="flex justify-center items-center sm:text-xl text-white font-bold select-">
                  {department.replace(/_/g, " ")}
                  <span className="flex justify-center absolute -top-3 -right-3 bg-blue-500 items-center ml-2 border w-8 h-8 rounded-full">
                {jobsData[idx].vacancy}
              </span>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
