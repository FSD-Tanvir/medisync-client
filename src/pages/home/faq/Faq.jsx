// import FaqCard from "./FaqCard";
// import faqData from "./faqData";

// const Faq = () => {
//   return (
//     <div className="w-full  px-2 py-5   rounded-md">
//       <h1 className="text-2xl font-bold my-10 text-gray-700">
//         Your Guide to Using Medisync
//       </h1>
//       <div className="w-full md:w-[80%] mx-auto">
//         {faqData.map((fData, i) => (
//           <FaqCard key={fData.id} fData={fData} i={i} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;

import { useState } from "react";
import FaqCard from "./FaqCard";
import faqData from "./faqData";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full px-2 py-5 rounded-md">
      <h1 className="text-2xl font-bold my-10 text-gray-700">
        Your Guide to Using Medisync
      </h1>
      <div className="w-full md:w-[80%] mx-auto">
        {faqData.map((fData, index) => (
          <FaqCard
            key={fData.id}
            fData={fData}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
