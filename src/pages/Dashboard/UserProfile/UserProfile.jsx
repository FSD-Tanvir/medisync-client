import userIcon from "../../../assets/DashboardIcons/admin.png"

const UserProfile = () => {
    return (
        <div className="p-20 bg-slate-100 mt-20 mx-5">
        <div className=" flex justify-center">
            <img src={userIcon} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div>
                <p><span className="font-semibold">Nama:</span> <span>MD SAYEDUL HAQUE</span></p>
                <p> <span className="font-semibold">Role: </span><span>General</span></p>
            </div>
        </div>
    </div>
    );
};

export default UserProfile;