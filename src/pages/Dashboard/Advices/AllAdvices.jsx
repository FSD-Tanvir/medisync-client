import Navbar from "./Navbar";
import useAdvices from "../../../hooks/useAdvices";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const AllAdvices = () => {
    const [advices, ,] = useAdvices();
    console.log(advices);
    const generalStyle = "text-left text-gray-700 text-center capitalize  px-2 py-2"
    const flexStyle = "flex justify-center items-center"

    const handleUpdate = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div id="app" className="bg-red-200 min-h-screen ">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
                    <div className="overflow-x-auto md:overflow-x-auto">
                        <table className="w-full">
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
                                        <th className="">
                                            <div className={`${flexStyle} w-[150px] p-1`}>
                                                <img src={advice?.image} alt="" className="w-full" />
                                            </div>
                                        </th>
                                        <th className="">
                                            <div className={flexStyle}>
                                                <FaEdit onClick={() => handleUpdate(advice._id)} className="text-xl "></FaEdit>
                                            </div>
                                        </th>
                                        <th className="">
                                            <div className={flexStyle}>
                                                <MdDeleteOutline onClick={() => handleDelete(advice._id)} className="text-2xl text-red-500"></MdDeleteOutline>
                                            </div>
                                        </th>
                                        <th >
                                            <div className={`${flexStyle} w-[150px]`}>
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
        </div >
    );
};

export default AllAdvices;
