import { useQuery } from "@tanstack/react-query";
import JobRow from "./JobRow";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const AllJobs = () => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const { data: allJobsData = [], refetch } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/jobs");
      return data?.data;
    },
  });
  // console.log(allJobsData);
  return (
    <div className="overflow-x-auto ">
      <table className={`table w-full ml-4 ${isOpen && "mt-10"}`}>
        <thead className="">
          <tr>
            <th className="text-lg capitalize text-left">
              <div className="mr-4">S/N</div>
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              <div className="flex items-center gap-2 relative">
                Job Title
                <span onClick={() => setIsOpen(!isOpen)}>
                  <FaAngleDown className={`${isOpen && "rotate-180"}`}/>
                </span>
                <select className={`px-3 py-1 text-sm ${isOpen ? "block": "hidden"} absolute -top-8 z-[40000] rounded-md border outline-none `}>
                  <option>Filter By Title</option>
                  <option>option1</option>
                  <option>option2</option>
                  <option>option3</option>
                  <option>option4</option>
                </select>
              </div>
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              Department
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              Type
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              Salary
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allJobsData &&
            allJobsData.map((job, idx) => (
              <JobRow refetch={refetch} key={job?._id} job={job} idx={idx} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJobs;
