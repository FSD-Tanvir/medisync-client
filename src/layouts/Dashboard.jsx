/* eslint-disable react/no-unescaped-entities */
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
// import useAdmin from "../../hooks/useAdmin";
import { useEffect, useState } from "react";
import doctorIcon from "../assets/DashboardIcons/images.png"
import newsIcon from "../assets/DashboardIcons/news.png"
import adviceIcon from "../assets/DashboardIcons/advice.png"
import jobIcon from "../assets/DashboardIcons/jobs.png"
import homeIcon from "../assets/DashboardIcons/home.webp"

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const isAdmin = " ";
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard" || false;


  useEffect(() => {
    console.log(location.pathname);
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
    <div className="flex flex-col  md:flex-row ">
      <div className={`w-full ${open ? "md:w-[40%] lg:w-[20%]" : "md:w-[10%] lg:w-[5%]"} duration-300 md:min-h-screen bg-[#f5f5f5] text-white pt-20 relative`}>
        <div onClick={() => setOpen(!open)} className="md:-right-[13px] top-9 cursor-pointer w-[28px] h-[28px] rounded-full bg-blue-600 flex justify-center items-center absolute hidden md:flex">
          <IoMdArrowDropright className={`${open && "rotate-180"}`} ></IoMdArrowDropright>
        </div>
        <ul className="menu space-y-2 text-black">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/Dashboard/doctors"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"}
                >
                  {open ? <span className="flex justify-center items-center gap-2"> <img src={doctorIcon} className="w-6 bg-white" alt="" />
                    All Doctors</span> : <img src={doctorIcon} className="w-6 bg-white" alt="" />}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/add-articles"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"}
                >
                  {open ? <span className="flex justify-center items-center gap-2"> <img src={newsIcon} className="w-6 bg-white" alt="" />
                    Add News & Articles</span> : <img src={newsIcon} className="w-6 bg-white" alt="" />}
                </NavLink>
              </li>
              <li>
                <NavLink

                  to="/Dashboard/all-articles"

                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"}
                >
                  {open ? <span className="flex justify-center items-center gap-2"> <img src={newsIcon} className="w-6 bg-white" alt="" />
                    All News & Articles</span> : <img src={newsIcon} className="w-6 bg-white" alt="" />}
                </NavLink>
              </li>
              <li>
                <NavLink

                  to="/dashboard/advices/allAdvices"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"}
                >
                  {open ? <span className="flex justify-center items-center gap-2"> <img src={adviceIcon} className="w-6 bg-white" alt="" />
                    Advices</span> : <img src={adviceIcon} className="w-6 bg-white" alt="" />}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/job-panel"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"}
                >
                  {open ? <span className="flex justify-center items-center gap-2"> <img src={jobIcon} className="w-6 bg-white" alt="" />
                  All Jobs</span> : <img src={jobIcon} className="w-6 bg-white" alt="" />}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/Dashboard/MyProfile"
                  className="font-semibold flex justify-start items-center gap-1 pl-2 mt-5"
                >
                  <CgProfile></CgProfile>My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/RequestedMeals"
                  className="font-semibold flex justify-start items-center gap-1 pl-2"
                >
                  <GiMeal></GiMeal>My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/RequestedMeals"
                  className="font-semibold flex justify-start items-center gap-1 pl-2"
                >
                  <GiMeal></GiMeal>My Doctor's
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/MyReviews"
                  className="font-semibold flex justify-start items-center gap-1 pl-2"
                >
                  <MdRateReview /> My Reviews
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="divider"></div>
        <>
          <ul className="menu text-black">
            <li>
              <NavLink
                to="/"
                className="font-semibold flex justify-start items-center gap-1 pl-2 mt-5 w-[70%] mx-auto pb-5"
              >
                {open ? <span className="flex justify-center items-center gap-2"> <img src={homeIcon} className="w-6" alt="" />
                  Home</span> : <img src={homeIcon} className="w-6" alt="" />}
              </NavLink>
            </li>
          </ul>
        </>
      </div>

      <div className="flex-1 overflow-auto md:w-[70%] lg:px-20">
        {isDashboard ? <><div className="flex items-center justify-center bg-blue-300 text-2xl lg:text-6xl font-bold min-h-screen text-center ">Welcome <br /> To  <br /> Admin Dashboard</div></> : <Outlet></Outlet>}
      </div>
    </div>
  );

};

export default Dashboard;
