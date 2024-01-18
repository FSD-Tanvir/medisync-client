import { GoHome } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FiFilePlus } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { IoCartOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import { useState } from "react";

const menuItems = [
  { id: 1, icon: <GoHome />, item: "Home" },
  { id: 2, icon: <BiPurchaseTagAlt />, item: "Buy Products" },
  { id: 3, icon: <CiCirclePlus />, item: "Free Advice" },
  { id: 4, icon: <FiFilePlus />, item: "Articles" },
  { id: 5, icon: <FaUserDoctor />, item: "Meet Doctors" },
  { id: 6, icon: <GrWorkshop />, item: "Career" },
];

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 ">
      {/* navbar with search bar */}
      <div className="flex justify-between items-center bg-[#a2d2ff] p-2">
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row gap-2">
          <h2 className="text-4xl font-bold">
            Medi<span className="text-[#61a1de]">Sync</span>
          </h2>
          <div className="relative ">
            <input
              type="text"
              name="searchProducts"
              id="searchProducts"
              placeholder="Please write here which product you want"
              className="w-44 lg:w-96 border-2 p-2 rounded-full pr-8 border-white"
            />
            <div className="absolute right-2 top-3 ">
              <div>
                <IoSearchOutline size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-2 lg:gap-8">
            <div>
              <IoCartOutline size={36} />
            </div>
            <div className="border border-black px-3 py-1 cursor-pointer">
              Login
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <IoClose size={24} /> : <TiThMenu size={24} />}
          </div>
        </div>
      </div>
      {/* navbar with menu items */}
      <div className=" relative ">
        <ul
          className={`flex flex-col lg:flex-row gap-5 absolute lg:static bg-[#a2d2ff] p-5 z-[-1]  transition-all duration-500 ease-in ${
            open ? "top-0" : "top-[-500px]"
          } `}
        >
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              className="flex items-center pr-4 gap-2 lg:border-r border-black"
            >
              {menuItem.icon}
              <span>{menuItem.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
