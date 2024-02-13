/* eslint-disable react/no-unescaped-entities */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineWork, MdReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import useUser from "../hooks/useUser";
import "./Dashboard.css";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const userData = useUser();
  console.log(userData);
  const isAdmin = userData?.role === "admin" ? true : false;
  // console.log(isAdmin);
  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname == "/") {
      document.title = "MediSync | Home";
    } else {
      document.title = `MediSync | Dashboard ${location.pathname.replace(
        "/Dashboard/",
        "| "
      )}`;
    }
  }, [location.pathname]);

  return (
    <div className={`flex ${open && "flex-col"} flex-row sm:flex-row`}>
      <div
        className={`w-full ${
          open
            ? "max-[639.5px]:w-full sm:w-[35%] md:w-[40%] lg:w-[20%]"
            : "max-[639.5px]:w-0  sm:w-[10%] md:w-[10%] lg:w-[5%]"
        }  duration-300 md:min-h-screen bg-blue-600 text-white mt-0  sm:fixed sm:z-[300] sm:max-h-screen sm:overflow-y-auto custom-scrollbar-dashboard-nav`}
      >
        <div className="sticky top-0 z-[900]">
          
          <div
            onClick={() => setOpen(!open)}
            className={`hidden sm:flex sm:right-[3px] top-4 cursor-pointer justify-center items-center absolute z-40 `}
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
            className={`sm:hidden ${
              open ? "right-[13px]" : "left-[10px] "
            }  top-2 cursor-pointer p-1 bg-blue-500 rounded-lg absolute z-40 border border-white/80`}
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
        <div className="">
          <ul
            className={`h-full text-black w-full ${
              !open && "max-[639.5px]:-ml-24"
            } mt-20 ${
              !open && "w-0 sm:w-full h-0 mt-0"
            } relative navItem-dashboard`}
          >
            {isAdmin ? (
              <div className="flex justify-center flex-col space-y-3 ">
                <li>
                  <NavLink
                    to="overview"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
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
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></TbDeviceAnalytics>
                        Overview
                      </span>
                    ) : (
                      <TbDeviceAnalytics
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></TbDeviceAnalytics>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="adminProfile"
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
                        <CgProfile
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></CgProfile>
                        Admin Profile
                      </span>
                    ) : (
                      <CgProfile
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></CgProfile>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="doctors-panel"
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
                        <FaUserDoctor
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></FaUserDoctor>
                        All Doctors
                      </span>
                    ) : (
                      <FaUserDoctor
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></FaUserDoctor>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="articles-panel"
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
                        <ImNewspaper
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></ImNewspaper>
                        News & Articles
                      </span>
                    ) : (
                      <ImNewspaper
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></ImNewspaper>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="advice-panel"
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
                        <BiMessageRoundedDetail
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></BiMessageRoundedDetail>
                        Advices
                      </span>
                    ) : (
                      <BiMessageRoundedDetail
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></BiMessageRoundedDetail>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Dashboard/job-panel"
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
                        <MdOutlineWork
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></MdOutlineWork>
                        Jobs
                      </span>
                    ) : (
                      <MdOutlineWork
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></MdOutlineWork>
                    )}
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="flex justify-center flex-col space-y-3">
                <li>
                  <NavLink
                    to="overview"
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
                        <TbDeviceAnalytics
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></TbDeviceAnalytics>
                        Overview
                      </span>
                    ) : (
                      <TbDeviceAnalytics
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></TbDeviceAnalytics>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="myProfile"
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
                        <CgProfile
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></CgProfile>
                        My Profile
                      </span>
                    ) : (
                      <CgProfile
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></CgProfile>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="myCart"
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
                        <IoCartOutline
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></IoCartOutline>
                        My Cart
                      </span>
                    ) : (
                      <IoCartOutline
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></IoCartOutline>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="myReviews"
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
                        <MdReviews
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></MdReviews>
                        My Reviews
                      </span>
                    ) : (
                      <MdReviews
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></MdReviews>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="myDoctors"
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
                        <FaUserDoctor
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></FaUserDoctor>
                        My Doctor's
                      </span>
                    ) : (
                      <FaUserDoctor
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></FaUserDoctor>
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
              </div>
            )}
            {/* devider  */}
            <div className="border border-white/20 my-4 h-1 bg-blue-500"></div>
            <>
              <ul className="text-black bg-blue-600 py-3 h-full space-y-3">
                <li>
                  <NavLink
                    to="/"
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
                        <IoHomeOutline
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></IoHomeOutline>
                        Home
                      </span>
                    ) : (
                      <IoHomeOutline
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></IoHomeOutline>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
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
                        <RiLogoutCircleLine
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2"
                          // alt=""
                        ></RiLogoutCircleLine>
                        LogOut
                      </span>
                    ) : (
                      <RiLogoutCircleLine
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]"
                        // alt=""
                      ></RiLogoutCircleLine>
                    )}
                  </NavLink>
                </li>
              </ul>
            </>
          </ul>
        </div>
      </div>

      <div className={`w-[100%] ${open ? "sm:pl-[35%] md:pl-[40%] lg:pl-[20%]":"sm:pl-[10%] lg:pl-[5%]"} mx-auto relative overflow-auto`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
