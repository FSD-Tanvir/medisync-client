import FaqCard from "./FaqCard";
import faqData from "./faqData";

const Faq = () => {
  return (
    <div className="w-full mt-20 p-8 bg-zinc-100">
      <h1 className="text-2xl font-bold">Your Guide to Using Medisync</h1>
      <div>
        {faqData.map((fData, index) => (
          <FaqCard key={fData.id} fData={fData} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
