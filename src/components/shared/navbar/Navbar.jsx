import { GoHome } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FiFilePlus } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { IoCartOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { id: 1, icon: <GoHome />, item: "Home", link: "/" },
  { id: 2, icon: <BiPurchaseTagAlt />, item: "Buy Products", link: "/" },
  { id: 3, icon: <CiCirclePlus />, item: "Free Advice", link: "/" },
  { id: 4, icon: <FiFilePlus />, item: "Articles", link: "/" },
  { id: 5, icon: <FaUserDoctor />, item: "Meet Doctors", link: "/" },
  { id: 6, icon: <GrWorkshop />, item: "Career", link: "/career" },
];

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* logo navbar  for small device */}

      <div className=" sticky top-0  lg:hidden  flex items-center justify-between bg-cyan-400 p-2 z-50 ">
        {/* logo */}

        <div className="relative">
          <h2 className="text-4xl font-bold ">
            Medi<span className="text-cyan-700">Sync</span>
          </h2>
        </div>

        {/* cart , login and profile division  */}
        <div>
          <div className="flex flex-col items-end gap-5 ">
            <div className="flex items-center gap-2 lg:gap-8">
              <div>
                <IoCartOutline size={36} />
              </div>
              <div className="border border-black px-3 py-1 cursor-pointer">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" sticky top-0  lg:hidden  flex items-center justify-between bg-cyan-400 p-2 z-50 ">
        {/* search bar */}

        <div className="relative">
          <input
            type="text"
            name="searchProducts"
            id="searchProducts"
            placeholder="here search your product "
            className="w-64 md:w-96 border-2 p-1 pl-4 pr-8 rounded-full  border-white"
          />
          <div className="absolute right-2  top-2">
            <div>
              <IoSearchOutline size={24} />
            </div>
          </div>
        </div>

        {/* menu icon */}
        <div className="flex items-center gap-2">
          <div onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
            {openMenu ? <IoClose size={32} /> : <TiThMenu size={32} />}
          </div>
        </div>
      </div>

      {/* navbar for desktop */}

      <div className="hidden lg:block z-50 ">
        <div className="flex justify-between items-center bg-cyan-400 p-2">
          {/* logo */}

          <h2 className="text-4xl font-bold">
            Medi<span className="text-cyan-700">Sync</span>
          </h2>

          {/* search bar */}

          <div className="relative">
            <input
              type="text"
              name="searchProducts"
              id="searchProducts"
              placeholder="here search your product "
              className="w-64 md:w-96 border-2 p-1 pl-5 pr-8  rounded-full  border-white"
            />
            <div className="absolute right-2  top-2">
              <div>
                <IoSearchOutline size={24} />
              </div>
            </div>
          </div>

          {/* cart , login and profile division  */}

          <div className="flex flex-col items-end gap-5">
            <div className="flex items-center gap-2 lg:gap-8">
              <div>
                <IoCartOutline size={36} />
              </div>
              <div className="border border-black px-3 py-1 cursor-pointer">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar with menu items */}

      <div className="sticky lg:top-0 top-[50px] z-10 ">
        <div className="relative ">
          <ul
            className={`flex flex-col lg:flex-row gap-5 absolute lg:static  bg-cyan-400  p-5  transition-all duration-500 ease-in ${
              openMenu ? "top-0 w-full" : "top-[-500px] w-full "
            } `}
          >
            {menuItems.map((menuItem) => (
              <Link
                key={menuItem.id}
                to={menuItem.link}
                className="flex items-center font-semibold hover:text-cyan-700  pr-4 gap-2 lg:border-r border-white"
              >
                {menuItem.icon}
                <span>{menuItem.item}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
