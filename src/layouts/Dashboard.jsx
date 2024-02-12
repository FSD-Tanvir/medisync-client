/* eslint-disable react/no-unescaped-entities */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
// import useAdmin from "../../hooks/useAdmin";
import { useEffect, useState } from "react";
import doctorIcon from "../assets/DashboardIcons/images.png";
import newsIcon from "../assets/DashboardIcons/news.png";
import adviceIcon from "../assets/DashboardIcons/advice.png";
import jobIcon from "../assets/DashboardIcons/jobs.png";
import homeIcon from "../assets/DashboardIcons/home.webp";
import adminIcon from "../assets/DashboardIcons/admin.png";
import cartIcon from "../assets/DashboardIcons/cart.png";
import reviewsIcon from "../assets/DashboardIcons/reviews.png";
import medisyncProduct from "../assets/DashboardIcons/medisyncProduct.webp"

const Dashboard = () => {
  const [open, setOpen] = useState(false);
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
      <div
        className={`w-full ${
          open ? "md:w-[40%] lg:w-[20%]" : "md:w-[10%] lg:w-[5%]"
        } duration-300 md:min-h-screen bg-[#f5f5f5] text-white py-5 sm:pt-20 relative`}
      >
        <div
          onClick={() => setOpen(!open)}
          className="md:-right-[13px] top-9 cursor-pointer w-[28px] h-[28px] rounded-full bg-blue-600  justify-center items-center absolute hidden md:flex"
        >
          <IoMdArrowDropright
            className={`${open && "rotate-180"}`}
          ></IoMdArrowDropright>
        </div>
        <ul className="menu space-y-2 text-black">
          {isAdmin ? (
            <div className="flex justify-center sm:flex-col">
              <li>
                <NavLink
                  to="adminProfile"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={adminIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      Admin Profile
                    </span>
                  ) : (
                    <img
                      src={adminIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products-panel"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={medisyncProduct}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      Product Maintenance
                    </span>
                  ) : (
                    <img
                      src={medisyncProduct}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="doctors-panel"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={doctorIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      All Doctors
                    </span>
                  ) : (
                    <img
                      src={doctorIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="articles-panel"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={newsIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      News & Articles
                    </span>
                  ) : (
                    <img
                      src={newsIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="advice-panel"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={adviceIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      Advices
                    </span>
                  ) : (
                    <img
                      src={adviceIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
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
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={jobIcon}
                        className="w-16 h-[30px]  sm:w-6 object-cover bg-white"
                        alt=""
                      />
                      Jobs
                    </span>
                  ) : (
                    <img
                      src={jobIcon}
                      className="w-16 h-[30px] sm:w-6 object-cover bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li className="sm:hidden">
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
                        className="w-16 h-[30px]  sm:w-6 object-fill bg-white"
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
              </li>
            </div>
          ) : (
            <div className="flex justify-center sm:flex-col">
              <li>
                <NavLink
                  to="myProfile"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={adminIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      My Profile
                    </span>
                  ) : (
                    <img
                      src={adminIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="myCart"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={cartIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      My Cart
                    </span>
                  ) : (
                    <img
                      src={cartIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="myReviews"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={reviewsIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      My Reviews
                    </span>
                  ) : (
                    <img
                      src={reviewsIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="myDoctors"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-[#3560fa] text-[#ffffff] w-[70%] mx-auto py-1"
                      : isPending
                      ? ""
                      : "font-semibold flex justify-start items-center gap-1 pl-2 w-[70%] mx-auto py-1"
                  }
                >
                  {open ? (
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      <img
                        src={doctorIcon}
                        className="w-16 sm:w-6 bg-white"
                        alt=""
                      />
                      My Doctor's
                    </span>
                  ) : (
                    <img
                      src={doctorIcon}
                      className="w-16 sm:w-6 bg-white"
                      alt=""
                    />
                  )}
                </NavLink>
              </li>
              <li className="sm:hidden">
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
              </li>
            </div>
          )}
        </ul>
        <div className="divider"></div>
        <>
          <ul className="menu text-black hidden sm:block">
            <li>
              <NavLink
                to="/"
                className="font-semibold flex justify-start items-center gap-1 pl-2 mt-5 w-[70%] mx-auto pb-5"
              >
                {open ? (
                  <span className="flex justify-center items-center gap-2">
                    {" "}
                    <img src={homeIcon} className="w-16 sm:w-6" alt="" />
                    Home
                  </span>
                ) : (
                  <img src={homeIcon} className="w-16 sm:w-6" alt="" />
                )}
              </NavLink>
            </li>
          </ul>
        </>
      </div>

      <div className="flex-1 overflow-auto md:w-[70%] lg:px-20">
        {isDashboard ? (
          <>
            <div className="flex items-center justify-center bg-blue-300 text-2xl lg:text-6xl font-bold min-h-screen text-center ">
              Welcome <br /> To <br /> Admin Dashboard
            </div>
          </>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
