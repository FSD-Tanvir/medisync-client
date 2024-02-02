/* eslint-disable react/no-unescaped-entities */
import { FaHome, } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdFoodBank, MdRateReview } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";
// import useAdmin from "../../hooks/useAdmin";
import { useEffect } from "react";

const Dashboard = () => {
  const isAdmin = " ";
  const location = useLocation();
  const isDashboard =  location.pathname === "/dashboard" || false;


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
    <div className="flex flex-col max-w-7xl mx-auto md:flex-row-reverse">
      <div className="w-full md:w-64 md:min-h-screen bg-[#478097] text-white">
        <ul className="menu space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/Dashboard/doctors"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <MdFoodBank />
                  All Doctors
                </NavLink>
              </li>
              <li>
                <NavLink

                  to="/Dashboard/add-articles"

                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <BiSolidFoodMenu /> Add News & Articles
                </NavLink>
              </li>
              <li>
                <NavLink

                  to="/Dashboard/all-articles"

                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <BiSolidFoodMenu /> All News & Articles
                </NavLink>
              </li>
              <li>
                <NavLink

                  to="/Dashboard/advices"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <BiSolidFoodMenu />
                  Advices

                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/Dashboard/UpcomingMeals"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <BiSolidFoodMenu /> Add Job
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/Dashboard/job-panel"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <BiSolidFoodMenu /> All Jobs
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/Dashboard/MyProfile"
                  className="font-semibold flex justify-start items-center gap-1 pl-5 mt-5"
                >
                  <CgProfile></CgProfile>My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/RequestedMeals"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <GiMeal></GiMeal>My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/RequestedMeals"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <GiMeal></GiMeal>My Doctor's
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dashboard/MyReviews"
                  className="font-semibold flex justify-start items-center gap-1 pl-5"
                >
                  <MdRateReview /> My Reviews
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="divider"></div>
        <>
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                className="font-semibold flex justify-start items-center gap-1 pl-5"
              >
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </>
      </div>

      <div className="flex-1 overflow-auto">
        {isDashboard? <><div className="flex items-center justify-center bg-blue-300 text-2xl lg:text-6xl font-bold min-h-screen text-center ">Welcome <br /> To  <br /> Admin Dashboard</div></> : <Outlet></Outlet>}
      </div>
    </div>
  );     

};

export default Dashboard;
