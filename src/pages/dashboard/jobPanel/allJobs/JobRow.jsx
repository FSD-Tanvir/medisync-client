import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2/src/sweetalert2.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobRow = ({ job, idx, refetch }) => {
  const navigate = useNavigate();
  // destructuring job
  const { _id, title, department, salary, jobType } = job || {};

  // handle update job
  const handleUpdateJob = () => {
    console.log(_id);
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
          const res = await axios.delete(
            `http://localhost:5000/jobs/delete-job/${_id}`
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
    <tr>
      <th className="text-left">{idx + 1}</th>
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
          className=" border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaEdit size={13} />
        </button>
        <button
          onClick={handleDeleteJob}
          className=" border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-red-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaTrashAlt size={13} />
        </button>
      </td>
    </tr>
  );
};

export default JobRow;
