import { useState } from "react";

const FaqCard = ({ fData }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full bg-white my-3 p-3 rounded-md">
      <div
        onClick={() => setActive(!active)}
        className="flex justify-between items-center"
      >
        <h1 className="text-left my-2 text-xl">{fData.question}</h1>
        {active ? (
          <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ) : (
          <span className="cursor-pointer w-5 h-5 rounded-full bg-black text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
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
