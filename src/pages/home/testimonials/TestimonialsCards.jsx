import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const TestimonialsCard = ({ testimonialData }) => {
  return (
    <>
      <div className="w-full  border-blue-500 font-semibold  text-2xl md:text-xl lg:text-2xl gap-1  cursor-pointer shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] hover:shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)] rounded-md p-8 border-2">
        <div>
          <p className="text-sm text-text-color-blue">
            <p>
              <FaQuoteLeft className="text-2xl text-text-color-blue" />
            </p>
            <p className="text-xs"> {testimonialData.content}</p>
            <p>
              <FaQuoteRight className="text-2xl text-text-color-blue" />
            </p>
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 my-4">
          <img
            className="testimonial-image border-2"
            src={testimonialData.image}
            alt={testimonialData.name}
          />
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-base text-text-color-blue">
              {testimonialData.name}
            </h1>
            <p className="text-sm text-text-color-blue">
              {testimonialData.occupation}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
