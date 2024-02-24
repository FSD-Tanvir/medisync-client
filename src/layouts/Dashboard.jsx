/* eslint-disable react/no-unescaped-entities */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineWork, MdReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { BsCapsule } from "react-icons/bs";
import useUser from "../hooks/useUser";
import "./Dashboard.css";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FaUsers } from "react-icons/fa";


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const userData = useUser();
  const isAdmin = userData?.role === "admin" ? true : false;
  // const isAdmin = "true"
  const { logOut } = useAuth()
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      document.title = "MediSync | Home";
    } else {
      document.title = `MediSync | Dashboard ${location.pathname.replace(
        "/Dashboard/",
        "| "
      )}`;
    }
  }, [location.pathname]);

  const handleLogOut = () =>{
    logOut().then(()=>{
      toast.success("You successfully logged out")
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <div className={`flex ${open && "flex-col"} flex-row sm:flex-row max-w-[1300px] mx-auto`}>
      <div
        className={`w-full ${
          open
            ? "max-[639.5px]:w-full sm:w-[35%] md:w-[40%] lg:w-[20%]"
            : "max-[639.5px]:w-0  sm:w-[10%] md:w-[10%] lg:w-[5%]"
        }  duration-300 md:min-h-screen bg-blue-600 text-white mt-0  sm:fixed sm:z-[300] sm:min-h-screen sm:max-h-screen sm:overflow-hidden sm:overflow-y-auto custom-scrollbar-dashboard-nav`}
      >
        <div className="sticky top-0 z-[900]">
<<<<<<< HEAD
=======

>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154
          <div
            onClick={() => setOpen(!open)}
            className={`hidden sm:flex sm:right-[3px] top-4 cursor-pointer justify-center items-center absolute z-[900] `}
          >
            {!open ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg>
            )}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`sm:hidden ${open ? "right-[13px]" : "left-[10px] "
              }  top-2 cursor-pointer p-1 bg-blue-500 rounded-lg absolute z-[900] border border-white/80`}
          >
            {!open ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg>
            )}
          </div>
        </div>
        <div>
          <ul
            className={`h-full text-black w-full ${!open && "max-[639.5px]:-ml-24"
              } mt-20 ${!open && "w-0 sm:w-full h-0 mt-0"
              } relative navItem-dashboard`}
          >
            {/* admin panel */}
            {isAdmin ? (
              <div className="flex justify-center flex-col space-y-3 ">
                {/* admin panel overview route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="overview-admin"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-l-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <TbDeviceAnalytics
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></TbDeviceAnalytics>
                        Overview
                      </span>
                    ) : (
                      <TbDeviceAnalytics
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></TbDeviceAnalytics>
                    )}
                  </NavLink>
                </li>
                {/* admin-profile route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="adminProfile"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <CgProfile
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></CgProfile>
                        Admin Profile
                      </span>
                    ) : (
                      <CgProfile
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></CgProfile>
                    )}
                  </NavLink>
                </li>
                {/* production-panel route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="products-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <BsCapsule
                          className="w-16 sm:w-6 text-[40px] ml-2"
                        ></BsCapsule>
                        Product Management
                      </span>
                    ) : (
                      <BsCapsule
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                      ></BsCapsule>
                    )}
                  </NavLink>
                </li>
                {/* doctors-panel route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="doctors-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <FaUserDoctor
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></FaUserDoctor>
                        All Doctors
                      </span>
                    ) : (
                      <FaUserDoctor
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></FaUserDoctor>
                    )}
                  </NavLink>
                </li>
                {/* articles-panel route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="articles-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <ImNewspaper
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></ImNewspaper>
                        News & Articles
                      </span>
                    ) : (
                      <ImNewspaper
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></ImNewspaper>
                    )}
                  </NavLink>
                </li>
                {/* advice-pane route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="advice-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <BiMessageRoundedDetail
                          // src={overviewIcon}

                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></BiMessageRoundedDetail>
                        Advices
                      </span>
                    ) : (
                      <BiMessageRoundedDetail
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></BiMessageRoundedDetail>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="manage-users"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <FaUsers
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          ></FaUsers>
                        Manage Users
                      </span>
                    ) : (
                      <FaUsers
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                      ></FaUsers>
                    )}
                  </NavLink>
                </li>
                {/* job-panel route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="/Dashboard/job-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <MdOutlineWork
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></MdOutlineWork>
                        Jobs
                      </span>
                    ) : (
                      <MdOutlineWork
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></MdOutlineWork>
                    )}
                  </NavLink>
                </li>
              </div>
            ) : (
              // user panel
              <div className="flex justify-center flex-col space-y-3">
                {/* user-panel-oveview */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="overview-user"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <TbDeviceAnalytics
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></TbDeviceAnalytics>
                        Overview
                      </span>
                    ) : (
                      <TbDeviceAnalytics
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></TbDeviceAnalytics>
                    )}
                  </NavLink>
                </li>
                {/* myProfile route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="myProfile"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <CgProfile
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></CgProfile>
                        My Profile
                      </span>
                    ) : (
                      <CgProfile
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></CgProfile>
                    )}
                  </NavLink>
                </li>
                {/* myCart route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="myCart"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <IoCartOutline
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></IoCartOutline>
                        My Cart
                      </span>
                    ) : (
                      <IoCartOutline
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></IoCartOutline>
                    )}
                  </NavLink>
                </li>
                {/* myReview route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="myReviews"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <MdReviews
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></MdReviews>
                        My Reviews
                      </span>
                    ) : (
                      <MdReviews
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></MdReviews>
                    )}
                  </NavLink>
                </li>
                {/* myDoctor's route */}
                <li>
                  <NavLink
                  onClick={()=>setOpen(false)}
                    to="myDoctors"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <FaUserDoctor
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></FaUserDoctor>
                        My Doctor's
                      </span>
                    ) : (
                      <FaUserDoctor
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></FaUserDoctor>
                    )}
                  </NavLink>
                </li>
<<<<<<< HEAD

                {/* Customer services */}
                <li>
                  <NavLink
                    to="customerCare"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <RiCustomerService2Fill
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></RiCustomerService2Fill>
                        Customer Care
                      </span>
                    ) : (
                      <RiCustomerService2Fill
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></RiCustomerService2Fill>
                    )}
                  </NavLink>
                </li>

                {/* <li className="sm:hidden">
                  <NavLink
                    to="/"
                    className={
                      "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <img
                          src={homeIcon}
                          className="w-16  sm:w-6 object-fill bg-white"
                          alt=""
                        />
                        Advices
                      </span>
                    ) : (
                      <img
                        src={homeIcon}
                        className="w-16  sm:w-6 object-fill bg-white"
                        alt=""
                      />
                    )}
                  </NavLink>
                </li> */}
=======
>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154
              </div>
            )}
            {/* devider  */}
            <div className="border border-white/20 my-4 h-1 bg-blue-500"></div>
            <>
              <ul className="text-black bg-blue-600 py-3 h-full space-y-3">
                {/* home route */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                          ? ""
                          : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <IoHomeOutline
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></IoHomeOutline>
                        Home
                      </span>
                    ) : (
                      <IoHomeOutline
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></IoHomeOutline>
                    )}
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <RiLogoutCircleLine
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""

                        ></RiLogoutCircleLine>
                        LogOut
                      </span>
                    ) : (
                      <RiLogoutCircleLine
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""

                      ></RiLogoutCircleLine>
                    )}
                  </button>
                </li>
              </ul>
            </>
          </ul>
        </div>
      </div>
<<<<<<< HEAD

      <div
        className={`w-[100%] ${
          open
            ? "sm:pl-[35%] md:pl-[40%] lg:pl-[20%]"
            : "sm:pl-[10%] lg:pl-[5%]"
        } mx-auto relative overflow-auto`}
=======
      {/* Outlet here - showing all children */}
      <div
        className={`w-[100%] ${
          open
            ? "sm:pl-[37%] md:pl-[42%] lg:pl-[20%] xl:pl-[22%] 2xl:pl-[22%]"
            : "sm:pl-[10%] lg:pl-[5%]"
        } mx-auto relative overflow-hidden bg-blue-50 min-h-screen`}
>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;