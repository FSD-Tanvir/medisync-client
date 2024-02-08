import FaqCard from "./FaqCard";
import faqData from "./faqData";

const Faq = () => {
  return (
    <div className="w-full  px-2 py-5   rounded-md">
      <h1 className="text-2xl font-bold my-10 text-gray-700">Your Guide to Using Medisync</h1>
      <div className="w-full md:w-[80%] mx-auto">
        {faqData.map((fData) => (
          <FaqCard key={fData.id} fData={fData} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
