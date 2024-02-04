import Navbar from "./Navbar";
import useAdvices from "../../../hooks/useAdvices";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import AdviceUpdate from "./AdviceUpdate";

const AllAdvices = () => {
    const [advices, , refetch] = useAdvices();
    const [showModal, setShowModal] = useState(false);
    const [clickAbleId, setClickAbleId] = useState(" ")
    const axiosPublic = useAxiosPublic()
    console.log(advices);
    const generalStyle = "text-left text-gray-700 text-center capitalize  px-2 py-2"
    const flexStyle = "flex justify-center items-center"

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosPublic.delete(`/advices/deleteAdvice/${id}`)
                .then(res => {
                    console.log(res.data)
                        if (res.data.deletedCount > 0 ) {
                            Swal.fire({
                                title: "Success!",
                                text: "Deleted Successfully.",
                                icon: "success"
                            });
                            refetch()
                        }
                })
            }
          });
        
    }
const handleModal = (_id) => {
    setShowModal(!showModal)
    setClickAbleId(_id)
}
console.log(clickAbleId);
    return (
        <div>
            <Navbar></Navbar>
            <div id="app" className=" min-h-screen ">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 ">
                    <div className="overflow-x-auto md:overflow-x-auto">
                        <table className="w-full  border border-blue-500">
                            <thead className="visible relative bg-gray-100 w-full ">
                                <tr className=" ">
                                    <th className={generalStyle}>SL.NO.</th>
                                    <th className={generalStyle}>Title</th>
                                    <th className={generalStyle}>Image</th>
                                    <th className={generalStyle}>Action</th>
                                    <th className={generalStyle}>Action</th>
                                    <th className={generalStyle}>Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advices.map((advice, index) => (
                                    <tr key={advice.id} className="bg-white shadow-lg sm:shadow-none mb-6 sm:mb-0 cursor-pointer hover:bg-gray-100  hover:-gray-600">
                                        <th className="text-left px-2 py-2 font-normal "><div className="flex justify-center items-center">{index + 1}</div></th>
                                        <th className=" "><div className="font-normal px-2">
                                            {advice?.title}</div></th>
                                        <th className={`${flexStyle}`}>
                                            <div className={`${flexStyle} w-[150px] p-1`}>
                                                <img src={advice?.image} alt="" className="w-full" />
                                            </div>
                                        </th>
                                        <th className="">
                                            <div className={flexStyle}>
                                                <FaEdit onClick={() => handleModal(advice._id)} className="text-xl bg-green-500 text-white p-[2px] "></FaEdit>
                                            </div>
                                        </th>
                                        <th className="">
                                            <div className={flexStyle}>
                                                <MdDeleteOutline onClick={() => handleDelete(advice._id)} className="text-2xl text-white bg-red-500 p-[2px]"></MdDeleteOutline>
                                            </div>
                                        </th>
                                        <th>
                                            <div className={` w-[150px]`}>
                                                Sayedul
                                            </div>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <AdviceUpdate clickAbleId={clickAbleId} showModal={showModal} setShowModal={setShowModal}></AdviceUpdate>
        </div >
    );
};

export default AllAdvices;
