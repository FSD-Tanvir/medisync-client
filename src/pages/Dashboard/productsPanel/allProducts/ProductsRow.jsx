import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProductsRow = ({ refetch, product, idx }) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { _id, name, image, company, category, price } = product || {};

  // handle update product
  const handleUpdateProduct = () => {
    navigate(`/dashboard/products-panel/update-product/${_id}`);
  };

  // delte job
  const handeldeleteProduct = () => {
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
        const deleteProduct = async () => {
          const res = await axiosPublic.delete(`/allProducts/${_id}`);
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
        deleteProduct();
      }
    });
  };
  return (
    <tr>
      <th className="text-left">{idx + 1}</th>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <img
          className="px-3 xl:pl-3 w-16  h-16 rounded-full"
          src={image}
          alt=""
        />
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{name}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{category}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3 py-3">{company}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{price}</div>
      </td>
      <td className="capitalize flex gap-2 mt-[10px]">
        {/* action buttons  */}
        <button
          onClick={handleUpdateProduct}
          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaEdit size={13} />
        </button>
        <button
          onClick={handeldeleteProduct}
          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-red-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaTrashAlt size={13} />
        </button>
      </td>
    </tr>
  );
};

export default ProductsRow;
