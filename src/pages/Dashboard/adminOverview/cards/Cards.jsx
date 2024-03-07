import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react"; "react-router-dom"
import { LiaCommentsDollarSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import { BsCartCheck } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import useUsers from "../../../../hooks/useUsers";
import useAllDoctors from "../../../../hooks/useAllDoctors";
import useAllProducts from "../../../../hooks/useAllProducts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Cards = () => {
    const category = "all"
    const [users,,] = useUsers()
    const [allDoctorsData,] = useAllDoctors()
    const [products,,] = useAllProducts({category})
    const axiosSecure = useAxiosSecure()
    const [allOrders,setAllOrders] = useState([])


    useEffect(()=>{
      const fetchData = async()=>{
        const {data} = await axiosSecure.get(`/allOrders/all`)
        setAllOrders(data)
      }
      fetchData()
    },[axiosSecure])

    console.log(allOrders)

    // console.log(products);
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 my-6">
      {/* users card  */}
      <div className="flex gap-4 items-center px-5 py-3 border rounded-lg text-white shadow-lg users-gradient-bg">
        <span>
          <FaUsers size={24} />
        </span>
        <div>
          <p className=" font-bold uppercase">Total Users</p>
          <span className="font-semibold">{users && users.length}</span>
        </div>
      </div>
      {/* doctors card  */}
      <div className="flex gap-4 items-center px-5 py-3 border rounded-lg text-white shadow-lg doctors-gradient-bg">
        <span>
          <FaUserDoctor size={24} />
        </span>
        <div>
          <p className=" font-bold uppercase">All Doctors</p>
          <span className="font-semibold">{allDoctorsData && allDoctorsData.length}</span>
        </div>
      </div>
      {/* Total Orders */}
      <div className="flex gap-4 items-center px-5 py-3 border rounded-lg text-white shadow-lg orders-gradient-bg">
        <span>
          <BsCartCheck size={24} />
        </span>
        <div>
          <p className=" font-bold uppercase">Total Orders</p>
          <span className="font-semibold">44</span>
        </div>
      </div>
      {/* Total Products */}
      <div className="flex gap-4 items-center px-5 py-3 border rounded-lg text-white shadow-lg revenue-gradient-bg">
        <span>
          <GiMedicines size={24} />
        </span>
        <div>
          <p className=" font-bold uppercase">Total Products</p>
          <span className="font-semibold">{products && products.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
