import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const TestimonialsCard = ({ testimonialData }) => {
  return (
    <>
      <div className="w-full bg-[#003049] rounded-md p-8 border-4">
        <div className="">
          <p className=" text-sm">
            <span>
              <FaQuoteLeft className="text-3xl text-white" />
            </span>
            {testimonialData.content}
            <span>
              <FaQuoteRight className="text-3xl text-white" />
            </span>
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 my-4">
          <img
            className="testimonial-image border-2"
            src={testimonialData.image}
            alt={testimonialData.name}
          />
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-base">{testimonialData.name}</h1>
            <p className="text-sm text-zinc-700">
              {testimonialData.occupation}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
