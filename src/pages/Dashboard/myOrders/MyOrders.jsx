import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data:allOrders,refetch } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allOrders/${user?.email}`);
      return data?.allOrders;
    },
  });
  console.log(allOrders);

  return (
    <div className="p-4">
      {/* heading  */}
      <h2 className="w-min whitespace-nowrap mx-auto font-bold text-3xl text-center mt-10 mb-10 lg:mt-0 border-b-4 border-b-blue-500">
        My
        <span className="text-blue-600"> Orders</span>
      </h2>
      <div className="overflow-x-auto ">
      <table className={`table w-full ml-4`}>
        <thead className="">
          <tr>
            <th className="text-lg capitalize text-left">
              <div className="mr-4">S/N</div>
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              <div className="flex items-center gap-2 relative">
                user name
              </div>
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              user email
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              location
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              total amount
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              order status
            </th>
            <th className="text-lg capitalize text-left px-3 xl:pl-3">
              transaction Id
            </th>
          </tr>
        </thead>
        <tbody>
          {allOrders &&
            allOrders.map((order, idx) => (
              <OrderRow refetch={refetch} key={order?._id} order={order} idx={idx} />
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MyOrders;
