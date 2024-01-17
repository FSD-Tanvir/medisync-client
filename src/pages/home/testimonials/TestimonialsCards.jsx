const TestimonialsCard = ({ testimonialData }) => {
  return (
    <>
      <div className="w-[100%] p-4 bg-white rounded-md relative">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-white border-4 absolute -top-12"
            src={testimonialData.image}
            alt={testimonialData.name}
          />
        </div>
        <div className="mt-16">
          <h1 className="text-left mt-20 mb-4 font-bold">
            {testimonialData.name}
          </h1>
          <p className="text-justify">{testimonialData.content}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
