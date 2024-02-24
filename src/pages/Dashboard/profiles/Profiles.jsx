import { useState } from "react";
import useUser from "../../../hooks/useUser";
import UpdateProfile from "./UpdateProfile";

const Profiles = () => {
    const userData = useUser();
  const [isUpdateProfileClicked,setIsUpdateProfileClicked] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center mx-5 min-h-screen">
      {/* heading  */}
      <h2 className="font-bold text-3xl text-center mt-10 mb-10 lg:mt-0 border-b-4 border-b-blue-500">
        {isUpdateProfileClicked ? "Update" : "My"} <span className="text-blue-600">Profile</span>
      </h2>
      {isUpdateProfileClicked ? 
      <>
        <UpdateProfile setIsUpdateProfileClicked={setIsUpdateProfileClicked}/>
      </>
      :
      <div className="w-full  lg:w-3/5 relative py-12 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)]  px-3 md:p-8 rounded-lg">
        <div className="w-32 h-32 mx-auto flex justify-center border-2 border-blue-600 rounded-full mb-12">
          <img
            src={userData?.photoURL}
            alt=""
            className="rounded-full w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              <span>{userData?.name}</span>
            </p>
            <p>
              {" "}
              <span className="font-semibold">Role: </span>
              <span>{userData?.role}</span>
            </p>
            <p>
              {" "}
              <span className="font-semibold">Email: </span>
              <span>{userData?.email}</span>
            </p>
          </div>
        </div>
        <button
          onClick={()=>setIsUpdateProfileClicked(true)}
          className="absolute top-0 right-0  hover:border-hover-border-color hover:text-hover-text-color text-xs md:text-sm font-semibold py-2 px-2 rounded-bl-md rounded-tr-md w-min whitespace-nowrap shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <span>Update Profile</span>
        </button>
      </div>}
    </div>
  );
};

export default Profiles;