import { GoHome } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FiFilePlus } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const menuItems = [
  { id: 1, icon: <GoHome />, item: "Home" },
  { id: 2, icon: <BiPurchaseTagAlt />, item: "Buy Products" },
  { id: 3, icon: <CiCirclePlus />, item: "Free Advice" },
  { id: 4, icon: <FiFilePlus />, item: "Articles" },
  { id: 5, icon: <FaUserDoctor />, item: "Meet Doctors" },
  { id: 6, icon: <GrWorkshop />, item: "Career" },
];

const Navbar = () => {
  return (
    <div className="bg-[#a2d2ff] px-2 ">
      {/* navbar with search bar */}
      <div className="flex justify-between py-2 items-center">
        <div>
          <span>Medi</span>
          <span>Sync</span>
        </div>
        <div className="relative ">
          <input
            type="text"
            name="searchProducts"
            id="searchProducts"
            placeholder="Please write here which product you want"
            className="w-96 border-2 p-2 rounded-full pr-8 border-white"
          />
          <div className="absolute right-2 top-3 ">
            <div>
              <IoSearchOutline size={24} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <IoCartOutline size={36} />
          </div>
          <div className="border border-black px-3 py-1 cursor-pointer">Login</div>
        </div>
      </div>
      {/* navbar with menu items */}
      <div className="py-2">
        <ul className="flex gap-5">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              className="flex items-center pr-4 gap-2 border-r border-black"
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
