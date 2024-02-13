import { useQuery } from "@tanstack/react-query";
import DoctorRow from "./DoctorRow";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllDoctors = () => {
  const axiosPublic = useAxiosPublic()
  const { data: allDoctorsData = [], refetch } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: async () => {

      const res = await axiosPublic.get("/doctors");
      return res?.data;
    },
  });
  console.log(allDoctorsData);
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="">
          <tr>
            <th className="text-lg capitalize text-left">
              <div className="mr-4">S/N</div>
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              Dr. Name
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              contact
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              specialization
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              experience_years
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              qualification
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allDoctorsData &&
            allDoctorsData.map((doctor, idx) => (
              <DoctorRow refetch={refetch} key={doctor?._id} doctor={doctor} idx={idx} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDoctors;
