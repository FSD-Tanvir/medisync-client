import { GoHome } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FiFilePlus } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../../../pages/home/LogInRegistration/Modal";
import useAuth from "../../../hooks/useAuth";

import useProductCart from "../../../hooks/useProductCart";
import Drawer from "../../drawer/Drawer";

import useUser from "../../../hooks/useUser";
import { StateManager } from "../../../Porviders/StateProvider";
import SearchBar from "./searchBar/SearchBar";

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
];

const Navbar = () => {
  const { user } = useAuth();
  const [productCart, ,] = useProductCart();

  let [openMenu, setOpenMenu] = useState(false);
  const { setShowModal } = useContext(StateManager);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userData = useUser();
  const isAdmin = userData?.role === "admin" ? true : false;

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* navbar  for small device */}

      <div className=" sticky top-0 lg:hidden flex items-center justify-between bg-navbar-bg-color shadow p-2 z-50 ">
        {/* logo */}

        <div className="relative">
          <h2 className="text-4xl font-bold ">
            Medi<span className="text-text-color-blue">Sync</span>
          </h2>
        </div>

        {/* cart , login and profile division  */}
        <div>
          <div className="flex flex-col items-end gap-5 text-text-color-blue">
            <div className="flex items-center gap-2 lg:gap-8">
              <div className="hover:text-[#00FFFF] cursor-pointer flex relative">
                <IoCartOutline onClick={openDrawer} size={36} />
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {productCart.length}
                </span>
                <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
              </div>
              {user?.email ? (
                <div className="flex gap-2 items-center">
                  <div>
                    {isAdmin ? (
                      <Link to="/dashboard/overview-admin">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user?.photoURL}
                        />
                      </Link>
                    ) : (
                      <Link to="/dashboard/overview-user">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user?.photoURL}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setShowModal(true)}
                  className="border border-blue-500 hover:bg-blue-500  hover:text-white px-3 py-1 rounded-lg cursor-pointer"
                >
                  Login
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sticky top-0  lg:hidden  flex items-center justify-between bg-[#FFF7F4] p-2 ${
          isDrawerOpen ? "" : "z-50"
        } `}
      >
        {/* search bar */}

        <SearchBar />

        {/* menu icon */}
        <div className="flex items-center gap-2 text-text-color-blue">
          <div onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
            {openMenu ? <IoClose size={32} /> : <TiThMenu size={32} />}
          </div>
        </div>
      </div>

      {/* navbar for desktop */}

      <div className="hidden lg:block z-10 bg-navbar-bg-color shadow ">
        <div className="flex justify-between items-center text-black p-2 max-w-7xl mx-auto">
          {/* logo */}

          <h2 className="text-4xl font-bold">
            Medi<span className="text-text-color-blue ">Sync</span>
          </h2>

          {/* search bar */}

          <SearchBar />

          {/* cart , login and profile division  */}

          <div className="flex flex-col items-end gap-5 ">
            <div className="flex items-center gap-2 lg:gap-6">
              <div className=" text-blue-500 flex ">
                <div className="hover:text-blue-700 cursor-pointer flex  relative">
                  <IoCartOutline onClick={openDrawer} size={36} />
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {productCart.length}
                  </span>
                  <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
                </div>
                {user?.email ? (
                  <div className="flex gap-2 items-center ml-2">
                    <div>
                      {isAdmin ? (
                        <Link to="/dashboard/overview-admin">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={user?.photoURL}
                          />
                        </Link>
                      ) : (
                        <Link to="/dashboard/overview-user">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={user?.photoURL}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setShowModal(true)}
                    className="border border-blue-500 hover:bg-blue-500  hover:text-white px-3 py-1 rounded-lg cursor-pointer ml-2"
                  >
                    Login
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar with menu items */}

      <div className="sticky lg:top-0 top-[50px] z-10 bg-navbar-bg-color  lg:rounded-b-xl  shadow ">
        <div className="relative max-w-7xl mx-auto">
          <ul
            className={`flex flex-col lg:flex-row gap-5 absolute lg:static bg-navbar-bg-color  rounded-b-xl  p-5  transition-all duration-500 ease-in ${
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
                      : "flex items-center font-semibold text-text-color-blue  pr-4 gap-2 lg:border-r border-black  hover:text-blue-700 "
                  }
                >
                  {menuItem.icon}
                  <span>{menuItem.item}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* showModal={showModal} setShowModal={setShowModal} */}
      <Modal />
    </>
  );
};

export default Navbar;
