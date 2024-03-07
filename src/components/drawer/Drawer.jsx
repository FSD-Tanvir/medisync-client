import { ImCross } from "react-icons/im";
import UserProductCart from "../userProductCart/UserProductCart";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? "fixed inset-0 pt-10 bg-gray-300 bg-opacity-30 z-[1000]" : ""}>
      <div className={`fixed inset-y-0 left-0 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 transition-transform ease-in-out duration-300`}>
        <div className="flex justify-between items-center mb-4">
          <button className="text-gray-500" onClick={onClose}>
            <ImCross />
          </button>
          <button onClick={onClose}>Back to Home</button>
        </div>
        {/* Drawer content goes here */}
        <UserProductCart onClose={onClose} />
      </div>
    </div>
  );
};

export default Drawer;

