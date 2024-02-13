import { useQuery } from "@tanstack/react-query";
import JobRow from "./JobRow";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const AllJobs = () => {
  const axiosPublic = useAxiosPublic()
  const { data: allJobsData = [], refetch } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => {

      const {data} = await axiosPublic.get("/jobs");
      return data?.data;

    },
  });
  // console.log(allJobsData);
  return (
    <div className="overflow-x-auto">
      <table className="table  lg:w-full">
        <thead className="">
          <tr>
            <th className="text-lg capitalize text-left">
              <div className="mr-4">S/N</div>
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">Job Title</th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">Department</th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">Type</th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">Salary</th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">Action</th>
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
