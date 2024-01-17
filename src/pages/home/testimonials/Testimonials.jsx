import TestimonialsCard from "./TestimonialsCards";
import testimonialsData from "./testimonialsData";

const Testimonials = () => {
  return (
    <div className="my-20 bg-[#bde0fe] p-8">
      <h1 className="text-2xl font-bold mb-12">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 my-10">
        {testimonialsData.map((testimonialData, index) => (
          <TestimonialsCard
            key={testimonialData.id}
            testimonialData={testimonialData}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
