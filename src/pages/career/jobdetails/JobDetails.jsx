import { useLoaderData } from "react-router-dom";
import BannerSimple from "../../../components/shared/Banners/BannerSimple/BannerSimple";
import Button from "../../../components/shared/button/Button";
import toast from "react-hot-toast"

const JobDetails = () => {
  const { data: singleJob } = useLoaderData();

  return (
    <div className="min-h-[90vh] bg-white rounded-lg px-4 py-3">
      {/* job details banner  */}
      <BannerSimple
        imgUrl="https://i.ibb.co/hMNQW0v/ethnic-businessman-giving-hand-shake.jpg"
        text1="Join Us!"
        text2="We are Hiring"
        pageName="career"
      />
      {/* job details main content  */}
      <div className="my-16">
        {/* heading  */}
        <h3 className="text-lg sm:text-3xl text-black/70 font-bold mb-8">
          Job: {singleJob?.title}
        </h3>
        <div className="space-y-4">
          <div>
            <h3 className="sm:text-xl text-black/70 font-bold  cursor-pointer">
              Position:
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.title}
            </h3>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Department:
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.department}
            </h3>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Address:
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.address}
            </h3>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Job Context
            </h3>
            <h4 className="text-black/70">{singleJob?.vacancy}</h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Job Context
            </h3>
            <h4 className="text-black/70">{singleJob?.jobContext}</h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
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
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Employment Status
            </h3>
            <h4 className="text-black/70">{singleJob?.jobType}</h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Educational Requirements
            </h3>
            <h4 className="text-black/70">
              {singleJob?.educationalRequirements}
            </h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Experience Requirements
            </h3>
            <h4 className="text-black/70">
              {singleJob?.experienceRequirements}
            </h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Additional Requirements
            </h3>
            <h4 className="text-black/70">
              {singleJob?.additionalRequirements}
            </h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Workplace
            </h3>
            <h4>{singleJob?.workplace}</h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Job Location
            </h3>
            <h4 className="text-black/70">{singleJob?.jobLocation}</h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Salary
            </h3>
            <h4 className="text-black/70">
              {singleJob?.salary.replace(/_/gi, " ")}
            </h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Compensation and Benefits
            </h3>
            <h4 className="text-black/70">
              {singleJob?.compensationAndBenefits}
            </h4>
          </div>
          <div
          onClick={()=> toast.success("Your application succeeded")}
          >
            <Button btnName="apply now" classForButton="px-5 text-sm md:text-md lg:text-lg xl:w-fit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
