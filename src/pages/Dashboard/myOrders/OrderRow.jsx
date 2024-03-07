const OrderRow = ({order,idx}) => {

    // destructuring order
  const { user_email, user_name, orderStatus, location,transactionId,total_amount } = order || {};

    return (
        <tr className="hover:bg-blue-100">
      <th className="text-left">
      <div className="pl-2">{idx + 1}</div>
      </th>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{user_name}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{user_email}</div>
      </td>      
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3 py-3">{location}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{total_amount}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{orderStatus}</div>
      </td>
      <td className="capitalize text-left w-min whitespace-nowrap">
        <div className="px-3 xl:pl-3">{transactionId}</div>
      </td>
      <td className="capitalize flex gap-2 mt-[10px]">
        {/* action buttons  */}

        {/* <button
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
        </button> */}
      </td>
    </tr>
    );
};

export default OrderRow;