import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const FaqCard = ({ fData }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full  border-blue-500 font-semibold  text-2xl md:text-xl lg:text-2xl gap-1  cursor-pointer shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] hover:shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)]  border-4 my-3 p-3 rounded-md">
      <div
        onClick={() => setActive(!active)}
        className="flex justify-between items-center"
      >
        <h1 className="text-left my-2 text-xl text-black">{fData.question}</h1>
        {active ? (
          <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
            <IoIosArrowUp />
          </span>
        ) : (
          <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
            <MdKeyboardArrowDown />
          </span>
        )}
      </div>
      <p
        className="text-left text-black text-base"
        style={{ display: active ? "block" : "none" }}
      >
        {fData.answer}
      </p>
    </div>
  );
};

export default FaqCard;
