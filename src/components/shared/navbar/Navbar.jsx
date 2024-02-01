import { GoHome } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FiFilePlus } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { IoCartOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import Modal from "../../../pages/home/LogInRegistration/Modal";

const menuItems = [
  { id: 1, icon: <GoHome />, item: "Home", link: "/" },
  {
    id: 2,
    icon: <BiPurchaseTagAlt />,
    item: "Buy Products",
    link: "/all-products/all",
  },
  { id: 3, icon: <CiCirclePlus />, item: "Free Advice", link: "/advice" },
  { id: 4, icon: <FiFilePlus />, item: "Articles", link: "/articles" },
  { id: 5, icon: <FaUserDoctor />, item: "Meet Doctors", link: "/doctors" },
  { id: 6, icon: <GrWorkshop />, item: "Career", link: "/career" },
  { id: 6, icon: <GrWorkshop />, item: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* navbar  for small device */}

      <div className=" sticky top-0  lg:hidden  flex items-center justify-between bg-[#003049] p-2 z-50 ">
        {/* logo */}

        <div className="relative">
          <h2 className="text-4xl font-bold text-white">
            Medi<span className="text-[#00FFFF]">Sync</span>
          </h2>
        </div>

        {/* cart , login and profile division  */}
        <div>
          <div className="flex flex-col items-end gap-5 text-white">
            <div className="flex items-center gap-2 lg:gap-8">
              <div className=" hover:text-[#00FFFF] cursor-pointer">
                <IoCartOutline size={36} />
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="border border-[#ffFFFF] hover:text-[#00FFFF] hover:border-[#00FFFF] px-3 py-1 rounded-lg cursor-pointer"
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" sticky top-0  lg:hidden  flex items-center justify-between bg-[#003049] p-2 z-50 ">
        {/* search bar */}

        <div className="relative">
          <input
            type="text"
            name="searchProducts"
            id="searchProducts"
            placeholder="Here search your product "
            className="w-64 md:w-96 border-2 p-1 pl-4 pr-8 rounded-full  border-white"
          />
          <div className="absolute right-2  top-2">
            <div>
              <IoSearchOutline size={24} />
            </div>
          </div>
        </div>

        {/* menu icon */}
        <div className="flex items-center gap-2 text-white">
          <div onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
            {openMenu ? <IoClose size={32} /> : <TiThMenu size={32} />}
          </div>
        </div>
      </div>

      {/* navbar for desktop */}

      <div className="hidden lg:block z-10 bg-[#FFF7F4] shadow-xl ">
        <div className="flex justify-between items-center text-black p-2">
          {/* logo */}

          <h2 className="text-4xl font-bold">
            Medi<span className="text-blue-500 ">Sync</span>
          </h2>

          {/* search bar */}

          <div className="relative">
            <input
              type="text"
              name="searchProducts"
              id="searchProducts"
              placeholder="Here search your product "
              className="w-64 md:w-96 border-2 p-1 pl-5 pr-8  rounded-full  "
            />
            <div className="absolute right-2  top-2">
              <div>
                <IoSearchOutline size={24} />
              </div>
            </div>
          </div>

          {/* cart , login and profile division  */}

          <div className="flex flex-col items-end gap-5 ">
            <div className="flex items-center gap-2 lg:gap-8">
              <div className="hover:text-blue-500 text-blue-500   cursor-pointer">
                <IoCartOutline size={36} />
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="border text-blue-500  border-blue-500  hover:text-white hover:bg-blue-500  font-semibold px-3 py-1 rounded-lg cursor-pointer "
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar with menu items */}

      <div className="sticky lg:top-0 top-[50px] z-10 bg-[#FFF7F4]  lg:rounded-b-xl  shadow-lg ">
        <div className="relative ">
          <ul
            className={`flex flex-col lg:flex-row gap-5 absolute lg:static bg-[#FFF7F4]  rounded-b-xl  p-5  transition-all duration-500 ease-in ${
              openMenu ? "top-0 w-full " : "top-[-500px] w-full "
            } `}
          >
            {menuItems.map((menuItem) => (
              <li key={menuItem.id} className=" ">
              <NavLink
                to={menuItem.link}
                onClick={() => setOpenMenu(!openMenu)}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-blue-700  flex items-center font-semibold  pr-4 gap-2 lg:border-r border-black"
                    : isPending
                    ? ""
                    : "flex items-center font-semibold text-blue-500  pr-4 gap-2 lg:border-r border-black  hover:text-blue-700 "}
              >
                {menuItem.icon}
                <span >{menuItem.item}</span>
              </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Navbar;
