import SectionItem from "./SectionItem";
import {
  FaFacebookF,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="min-h-[80vh]  bg-[#003049] py-24 px-5 sm:px-10 space-y-10 text-white">
      <div>
        <h2 className="text-4xl font-bold text-white">
          Medi<span className="text-[#00FFFF]">Sync</span>
        </h2>
      </div>
      {/* footer content container  */}
      <div className="grid gap-3 lg:gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Our services  */}
        <div className="text-white">
          <h2 className="capitalize mb-3 text-white text-lg font-semibold">
            Our services
          </h2>
          {/* services items  */}
          <ul className="space-y-2">
            <SectionItem label="Order Medicines" address="#" />
            <SectionItem label="Consult with doctor" address="#" />
            <SectionItem label="news & articles" address="/articles" />
            <SectionItem label="health suggestion" address="#" />
          </ul>
        </div>
        {/* know Our policies  */}
        <div>
          <h2 className="capitalize mb-3 text-white text-lg font-semibold">
            Know Our policies
          </h2>
          {/* policies items  */}
          <ul className="space-y-2">
            <SectionItem label="Privacy Policy" address="#" />
            <SectionItem label="Terms and Condition" address="#" />
            <SectionItem label="Return Policy" address="#" />
          </ul>
        </div>
        {/* useful links  */}
        <div>
          <h2 className="capitalize mb-3 text-[#ffFFFF] text-lg font-semibold">
            useful links
          </h2>
          {/* services items  */}
          <ul className="space-y-2 text-white">
            {/* <SectionItem label="About Us" address="" /> */}
            <SectionItem label="About Us" address="/aboutUs" />
            <SectionItem label="Contact Us" address="/contact-us" />
            <SectionItem label="Careers" address="#" />
            <SectionItem label="Become a Partner" address="#" />
          </ul>
        </div>
        {/* contact us*/}
        <div>
          <div>
            <h2 className="capitalize mb-3 text-[#ffFFFF] text-lg font-semibold">
              Contact us
            </h2>
            {/* services items  */}
            <ul className="space-y-2 ">
              <li className="flex items-center gap-2 font-medium text-white">
                <span>
                  <FaLocationDot />
                </span>
                <address>
                  This is a dummy address -- Mirpur 1, Block-A - 1216.
                </address>
              </li>
              <li className="flex items-center gap-2 font-medium text-white">
                <span>
                  <FaPhone />
                </span>
                <address>+8801512345678, +8801512345678</address>
              </li>
            </ul>
          </div>
          {/* social links  */}
          <>
            <h2 className="capitalize mb-3 mt-2 text-[#ffFFFF] font-semibold">
              Social Links:
            </h2>
            <div className="flex justify-between gap-2 py-2 lg:px-10">
              <span className="w-[40px] h-[40px] cursor-pointer text-white border border-[#cdb4db] p-2 rounded-full hover:scale-110 transition duration-200 ease-linear">
                <FaFacebookF size={22} />
              </span>
              <span className="w-[40px] h-[40px] cursor-pointer text-white border border-[#cdb4db] p-2 rounded-full hover:scale-110 transition duration-200 ease-linear">
                <FaTwitter size={22} />
              </span>
              <span className="w-[40px] h-[40px] cursor-pointer text-white border border-[#cdb4db] p-2 rounded-full hover:scale-110 transition duration-200 ease-linear">
                <FaLinkedin size={22} />
              </span>
              <span className="w-[40px] h-[40px] cursor-pointer text-white border border-[#cdb4db] p-2 rounded-full hover:scale-110 transition duration-200 ease-linear">
                <FaYoutube size={22} />
              </span>
            </div>
          </>
        </div>
      </div>
      <div className="lg:px-32 sm:opacity-80">
        <div>
          <img 
            src="https://i.ibb.co/mSK9Syc/payment-options.png"
            alt="pay with ssl commerz image "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
