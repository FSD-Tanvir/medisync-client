import DoctorRow from "./DoctorRow";
import useAllDoctors from "../../../hooks/useAllDoctors";

const AllDoctors = () => {
  const [allDoctorsData,refetch] = useAllDoctors()
  return (
    <div className="overflow-x-auto">
      <table className="table w-full ml-4">
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
