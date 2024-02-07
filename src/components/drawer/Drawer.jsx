
const Drawer = ({ isOpen, onClose }) => {
    return (
      <div className={`fixed inset-y-0 left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800 w-80 p-4 transition-transform ease-in-out duration-300`}>
        {/* Drawer content goes here */}
        <button className="text-white" onClick={onClose}>Close Drawer</button>
      </div>
    );
  };
  
  
  export default Drawer;