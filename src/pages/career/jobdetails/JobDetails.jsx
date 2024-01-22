import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [jobsData, setJobsData] = useState([]);
  const [singleJob, setSingleJob] = useState(null);

  {
    "id",
      "title",
      "job_type",
      "department",
      "vacancy",
      "compensation_and_benefits",
      "salary",
      "job_context",
      "job_responsibilities",
      "educational_requirements",
      "experience_requirements",
      "additional_requirements",
      "workplace",
      "job_location",
      "address";
  }

  console.log(id);
  useEffect(() => {
    const fetchData = () => {
      fetch("../../../../public/jobcirculardepartments.json")
        .then((res) => res.json())
        .then((data) => setJobsData(data));
    };
    fetchData();
  }, []);
  useEffect(() => {
    const selectedJob = jobsData.find((job) => job.id === +id);
    setSingleJob(selectedJob);
  }, [id, jobsData]);
  return (
    <div className="min-h-[90vh] bg-white rounded-lg px-4 py-3">
      {/* job details banner  */}
      <div
        className="h-[55vh] w-full bg-fixed bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/jwRHNF3/we-are-hiring-digital-collage.jpg)",
        }}
      >
        <div className="bg-black/25 text-white h-full flex justify-center items-center">
          <p className="drop-shadow-md">
            <span className="text-4xl font-semibold text-black/70">
              {" "}
              Join Us!
            </span>
          </p>
        </div>
      </div>
      {/* job details main content  */}
      <div className="my-16">
        {/* heading  */}
        <h3 className="text-3xl text-black/70 font-bold mb-8">
          Job: {singleJob?.title}
        </h3>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Position:
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.title}
            </h3>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Department:
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.department}
            </h3>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Address:
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.address}
            </h3>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Job Context
            </h3>
            <h4 className="text-black/70">{singleJob?.vacancy}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Job Context
            </h3>
            <h4 className="text-black/70">{singleJob?.job_context}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Job Responsibilities
            </h3>
            {singleJob?.job_responsibilities?.map((r, index) => (
              <span className="text-black/70" key={index}>
                ({index + 1}){r}
                <br />
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Employment Status
            </h3>
            <h4 className="text-black/70">{singleJob?.job_type}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Educational Requirements
            </h3>
            <h4 className="text-black/70">{singleJob?.educational_requirements}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Experience Requirements
            </h3>
            <h4 className="text-black/70">{singleJob?.experience_requirements}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Additional Requirements
            </h3>
            <h4 className="text-black/70">{singleJob?.additional_requirements}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Workplace
            </h3>
            <h4>{singleJob?.workplace}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Job Location
            </h3>
            <h4 className="text-black/70">{singleJob?.job_location}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Salary
            </h3>
            <h4 className="text-black/70">{singleJob?.salary}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Compensation and Benefits
            </h3>
            <h4 className="text-black/70">{singleJob?.compensation_and_benefits}</h4>
          </div>
          <div
            className="w-full lg:w-3/4
                mt-4"
          >
            <button 
            onClick={()=>toast.success("Your Application Succeeded")}
              type="submit"
              className="px-10 ml-32 lg:ml-0 lg:px-20 bg-cyan-400 py-2 rounded- uppercase hover:bg-cyan-500 hover:border- transition ease-in duration-300"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
