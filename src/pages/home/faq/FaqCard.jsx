// import { useState } from "react";
// import { IoIosArrowUp } from "react-icons/io";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const FaqCard = ({ fData, i }) => {
//   const [active, setActive] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const toggle = (i) => {
//     console.log(i);
//     if (selected === i) {
//       return setSelected(null);
//     }
//     return setSelected(i);
//   };
//   return (
//     <div className="w-full border-blue-500 font-semibold  text-2xl md:text-xl lg:text-2xl gap-1  cursor-pointer shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] hover:shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)]  border-2 my-3 p-3 rounded-md">
//       <div
//         // onClick={() => setActive(!active)}
//         onClick={() => toggle(fData.id)}
//         className="flex justify-between items-center"
//       >
//         <h1 className="text-left my-2 text-xl text-black">{fData.question}</h1>
//         {selected === i ? (
//           <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
//             <IoIosArrowUp />
//           </span>
//         ) : (
//           <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
//             <MdKeyboardArrowDown />
//           </span>
//         )}
//       </div>
//       <p
//         className={
//           selected === fData.id
//             ? "h-auto max-h-screen transition-all duration-500 ease-linear "
//             : "max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
//         }
//         // style={{ display: active ? "block" : "none" }}
//       >
//         {fData.answer}
//       </p>
//     </div>
//   );
// };

// export default FaqCard;

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const FaqCard = ({ fData, index, selected, setSelected }) => {
  const toggle = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="w-full border-blue-500 font-semibold text-2xl md:text-xl lg:text-2xl gap-1 cursor-pointer shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] hover:shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)] border-2 my-3 p-3 rounded-md">
      <div
        onClick={() => toggle(index)}
        className="flex justify-between items-center"
      >
        <h1 className="text-left my-2 text-xl text-black">{fData.question}</h1>
        <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
          {selected === index ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </div>
      <p
        className={
          selected === index
            ? "h-auto max-h-screen transition-all duration-500 ease-linear"
            : "max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
        }
      >
        <span className="text-zinc-700 text-sm ">{fData.answer}</span>
      </p>
    </div>
  );
};

export default FaqCard;
