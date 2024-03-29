import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2/src/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const JobRow = ({ job, idx, refetch }) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  // destructuring job
  const { _id, title, department, salary, jobType } = job || {};

  // handle update job
  const handleUpdateJob = () => {
    navigate(`/dashboard/job-panel/update-job/${_id}`);
  };
  const handleDeleteJob = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteJob = async () => {

          const res = await axiosPublic.delete(
            `/jobs/delete-job/${_id}`

          );
          if (res.data.status === true) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Job deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Job can't be deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        };
        deleteJob();
      }
    });
  };

  return (
    <tr className="hover:bg-blue-100">
      <th className="text-left">
      <div className="pl-2">{idx + 1}</div>
      </th>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{title.replace(/_/g, " ")}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{department.replace(/_/g, " ")}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3 py-3">{jobType}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{salary}</div>
      </td>
      <td className="capitalize flex gap-2 mt-[10px]">
        {/* action buttons  */}

        <button
          onClick={handleUpdateJob}
          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaEdit size={13} />
        </button>
        <button
          onClick={handleDeleteJob}
          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-red-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaTrashAlt size={13} />
        </button>
      </td>
    </tr>
  );
};

export default JobRow;
