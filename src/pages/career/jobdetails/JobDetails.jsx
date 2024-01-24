import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {data: singleJob} = useLoaderData()

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
  console.log(singleJob);

  return (
    <div className="min-h-[90vh] bg-white rounded-lg px-4 py-3">
      {/* job details banner  */}
      <div
        className="h-[55vh] w-full bg-fixed bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hMNQW0v/ethnic-businessman-giving-hand-shake.jpg)",
        }}
      >
        <div className="bg-black/25 text-white h-full flex justify-center items-center">
          <Link to="/">
            <span className="drop-shadow-md text-2xl pr-2 text-cyan-400">
              Home
            </span>
          </Link>
          <p className="drop-shadow-md border-l-4 rounded-t-full pl-2">
            <span className="text-2xl font-semibold text-white">
              {" "}
              Join Us!
              <span className="text-cyan-700 drop-shadow-md border-b-4 rounded-l-full rounded-r-full border-t-4 rounded-t-full ml-3 p-[6px]">
                {" "}
                We are Hiring
              </span>
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
            <h4 className="text-black/70">{singleJob?.jobContext}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Job Responsibilities
            </h3>
            {singleJob?.jobResponsibilities?.map((r, index) => (
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
            <h4 className="text-black/70">{singleJob?.jobType}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Educational Requirements
            </h3>
            <h4 className="text-black/70">{singleJob?.educationalRequirements}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Experience Requirements
            </h3>
            <h4 className="text-black/70">{singleJob?.experienceRequirements}</h4>
          </div>
          <div>
            <h3 className="text-xl text-black/70 font-bold  cursor-pointer">
              Additional Requirements
            </h3>
            <h4 className="text-black/70">{singleJob?.additionalRequirements}</h4>
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
            <h4 className="text-black/70">{singleJob?.jobLocation}</h4>
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
            <h4 className="text-black/70">{singleJob?.compensationAndBenefits}</h4>
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
