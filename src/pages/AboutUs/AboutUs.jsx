import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/footer/Footer";
import Faq from "../../pages/home/faq/Faq";
import TestimonialsCard from "../home/testimonials/Testimonials";

import { Link, Outlet, useLocation } from "react-router-dom";

import Advertise from "../../pages/home/Advertise/Advertise";

const AboutUs = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || false;
  return (
    <>
      <div className="flex flex-col lg:w-full">
        <div
          className="h-[55vh] w-full bg-bottom bg-cover bg-no-repeat"
          style={{ backgroundImage: "url(https://i.ibb.co/JRMRpvD/3117.jpg)" }}
        >
          <div className="bg-black/25 text-white h-full flex justify-center items-center">
            <p className="drop-shadow-md">
              <Link to="/">
                <span className="text-2xl font-semibold text-[#ffc8dd] border-r-4 border-[#ffc8dd] pr-2">
                  Home
                </span>
              </Link>
              <span className="text-2xl font-semibold text-[#ffc8dd]">
                {" "}
                AboutUs
              </span>
            </p>
          </div>
        </div>

        <div>
          <img src="" alt="" />
        </div>
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
