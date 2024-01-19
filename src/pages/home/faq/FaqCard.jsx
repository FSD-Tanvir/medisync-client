import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const FaqCard = ({ fData }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full bg-cyan-400 my-3 p-3 rounded-md">
      <div
        onClick={() => setActive(!active)}
        className="flex justify-between items-center"
      >
        <h1 className="text-left my-2 text-xl">{fData.question}</h1>
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
        className="text-left text-gray-800"
        style={{ display: active ? "block" : "none" }}
      >
        {fData.answer}
      </p>
    </div>
  );
};

export default FaqCard;
