// import adminImg from "../../../assets/DashboardIcons/admin.png"
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
    const {user} = useAuth()
    return (
        <div className="p-20 mt-20 mx-5">
            <div className=" flex justify-center">
                <img src={user.photoURL} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p><span className="font-semibold">Name:</span> <span>{user.displayName}</span></p>
                    <p> <span className="font-semibold">Role: </span><span>Admin</span></p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;