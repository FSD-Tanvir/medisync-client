import { useLoaderData, useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { IoBriefcaseSharp, IoWalletSharp } from "react-icons/io5";
import BannerSimple from "../../../components/shared/Banners/BannerSimple/BannerSimple";
import Button from "../../../components/shared/button/Button";
import RelatedJobs from "./RelatedJobs";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const JobDetails = () => {
  const { data: singleJob } = useLoaderData();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [relatedJobsData, setRelatedJobsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosPublic.get(`/jobs`);
        const relatedJobs = data?.data.filter(
          (job) =>
            job?.department.toLowerCase() ===
              singleJob?.department.toLowerCase() &&
            job?.title !== singleJob?.title
        );
        setRelatedJobsData(relatedJobs);
      } catch (err) {
        console.log(err);
      }
    };
    // calling the fetchData func
    fetchData();
  }, [axiosPublic, singleJob]);

  const handleApply = (id) => {
    navigate(`/career/job-details/apply-job/${id}`);
  };

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

      <div className="my-14 relative w-full px-4 pb-8 md:w-10/12 lg:w-3/4 mx-auto shadow-lg rounded-lg">
        {/* heading  */}
        <h3 className="text-lg sm:text-3xl text-black/70 font-bold mb-1">
          {singleJob?.title.replace(/_/g, " ")}
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span>
              <IoBriefcaseSharp className="text-blue-500" />
            </span>

            <h4 className="text-black/70">{singleJob?.jobType}</h4>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <IoWalletSharp className="text-blue-500" />
            </span>
            <h4 className="text-black/70">
              {singleJob?.salary.replace(/_/gi, " ")}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <MdLocationPin className="text-blue-500" />
            </span>
            <h4 className="text-black/70">{singleJob?.jobLocation}</h4>
          </div>
        </div>
        <div className="flex gap-4 mt-3">
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Department
            </h3>
            <h3 className="text-black/70 font-medium  cursor-pointer">
              {singleJob?.department.replace(/_/g, " ")}
            </h3>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Job vacancy
            </h3>
            <h4 className="text-black/70">{singleJob?.vacancy}</h4>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
              Workplace
            </h3>
            <h4>{singleJob?.workplace}</h4>
          </div>
        </div>

        <div className="">
          <div className="space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
                Job Context:
              </h3>
              <h4 className="text-black/70">{singleJob?.jobContext}</h4>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
                Job Responsibilities:
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
                Educational Requirements:
              </h3>
              <h4 className="text-black/70">
                {singleJob?.educationalRequirements}
              </h4>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
                Experience Requirements:
              </h3>
              <h4 className="text-black/70">
                {singleJob?.experienceRequirements}
              </h4>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
                Additional Requirements:
              </h3>
              <h4 className="text-black/70">
                {singleJob?.additionalRequirements}
              </h4>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl text-black/70 font-bold  cursor-pointer">
                Compensation and Benefits:
              </h3>
              <h4 className="text-black/70">
                {singleJob?.compensationAndBenefits}
              </h4>
            </div>
          </div>
          <RelatedJobs />
        </div>
        <div
          onClick={() => handleApply(singleJob?._id)}
          className="mt-2 static md:absolute top-0 md:right-0 lg:left-2/3 "
        >
          <Button
            btnName="apply now"
            classForButton="px-5 text-sm md:text-md  xl:w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
