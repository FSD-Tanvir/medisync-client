

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
    const [users, , refetch] = useUsers();
    console.log(users);
    const axiosPublic = useAxiosPublic();
    const generalStyle = "text-left text-gray-700 text-center capitalize  px-2 py-2";
    const flexStyle = "flex justify-center items-center";
    const handleAdmin = async (id) => {
        console.log(id);
        await axiosPublic.patch(`/users/make-admin/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }
    return (
        <div>
            <div id="app" className=" min-h-screen ">
                <div className=" px-4 sm:px-8 py-8 ">
                    <div className="overflow-x-auto md:overflow-x-auto">
                        <table className="w-full ">
                            <thead className="visible relative bg-gray-100 w-full ">
                                <tr className=" ">
                                    <th className={generalStyle}>SL.NO.</th>
                                    <th className={generalStyle}>User Name</th>
                                    <th className={generalStyle}>Email</th>
                                    <th className={generalStyle}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className="bg-white shadow-lg sm:shadow-none mb-6 sm:mb-0 cursor-pointer hover:bg-gray-100  hover:-gray-600"
                                    >
                                        <th className="text-left px-2 py-2 font-normal ">
                                            <div className="flex justify-center items-center">
                                                {index + 1}
                                            </div>
                                        </th>
                                        <th className=" ">
                                            <div className="font-normal px-2">{user?.name}</div>
                                        </th>
                                        <th className={`${flexStyle}`}>
                                            <div className="font-normal px-2 ">{user?.email}</div>
                                        </th>
                                        <th>
                                            <div className="flex justify-center">
                                                <div className={`${user?.role === 'admin' ? "bg-green-200" : "bg-red-200"} w-[110px]`}>{user?.role === "admin" ? user.role : <p onClick={() => handleAdmin(user._id)} className="w-full">make admin</p>}
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
