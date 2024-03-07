import { useEffect } from "react";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";
import Faq from "../../pages/home/faq/Faq";
import TestimonialsCard from "../home/testimonials/Testimonials";

const AboutUs = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <>
      <div className="flex flex-col lg:w-full">
        {/* about us banner  */}
        <BannerSimple imgUrl="https://i.ibb.co/hLk27DB/close-up-glasses-with-employees-background.jpg" text1="About Us" pageName="aboutUs"/>
        
        <div>
          <div className="p-8">
            <h1 className="text-2xl font-bold">About Us</h1>
            <div>
              <p className="py-4 text-justify">
                Welcome to Medisync, your trusted partner in health and
                well-being. At Medisync, we are dedicated to providing a
                seamless and reliable platform for all your pharmaceutical
                needs. As a leading online pharmacy, we take pride in offering a
                vast selection of quality medicines to ensure the health and
                happiness of our customers.
              </p>
              <p className="py-4 text-justify">
                Our commitment goes beyond just providing medications. We
                believe in a holistic approach to healthcare, which is why we've
                integrated a convenient appointment system with our team of
                experienced doctors. Whether you need professional advice,
                prescription refills, or consultations, our dedicated medical
                professionals are here to guide you on your journey to optimal
                health.
              </p>
              <p className="py-4 text-justify">
                With a user-friendly interface, secure transactions, and a focus
                on customer satisfaction, Medisync aims to redefine the way you
                experience healthcare services. Trust us to be your reliable
                companion, ensuring that you and your loved ones have access to
                the best pharmaceutical and medical care from the comfort of
                your home.
              </p>
              <p className="py-4 text-justify">
                Thank you for choosing Medisync, where your well-being is our
                priority.
              </p>
            </div>
          </div>
          <div>
            <TestimonialsCard />
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
