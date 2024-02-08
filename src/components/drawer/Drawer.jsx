import UserProductCart from "../userProductCart/UserProductCart";


const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? "fixed inset-0 pt-10 bg-gray-300 bg-opacity-30 z-50" : ""}>
      <div className={`fixed inset-y-0 left-0 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-4/12  p-4 transition-transform ease-in-out duration-300`}>
        {/* Drawer content goes here */}
        <UserProductCart></UserProductCart>
        <button className="text-gray-500" onClick={onClose}>Close Drawer</button>
      </div>
    </div>
  );
};


export default Drawer;