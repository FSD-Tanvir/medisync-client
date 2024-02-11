import { FaEdit, FaTrashAlt } from "react-icons/fa";


const ProductsRow = ({refetch,product,idx}) => {
    const {_id,name,image,company,category,price} = product || {}
    return (
        <tr>
      <th className="text-left">{idx + 1}</th>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <img className="px-3 xl:pl-3 w-16  h-16 rounded-full" src={image} alt="" />
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
          
          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaEdit size={13} />
        </button>
        <button
          
          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-red-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaTrashAlt size={13} />
        </button>
      </td>
    </tr>
    );
};

export default ProductsRow;