import toast from "react-hot-toast";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5kh83xc", "template_le7xmvf", form.current, {
        publicKey: "P2LmmYYgwMmNEKEx5",
      })
      .then(
        () => {
          toast("Thank you for your contacting us");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen ">
      {/* contact banner section  */}

      <BannerSimple
        imgUrl="https://i.ibb.co/JRMRpvD/3117.jpg"
        text1="Contact Us"
      />
      {/* contact main content */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center">
          Get Us in Your Touch
        </h2>
        <div className="w-full flex flex-col  md:flex-row gap-6 py-16">
          {/* left  */}
          <div className="flex-1 lg:pl-5">
            <h2 className="text-xl font-semibold text-center lg:text-start">
              Contact
            </h2>
            <p className="text-black/70 font-semibold mt-2 mb-4 lg:w-3/4 pl-5 lg:pl-0 pr-1 lg:pr-0">
              Please share your thoughts with us about how we can make MediSync
              better. We welcome questions, bug reports, compliments,
              complaints, and feature requests.
            </p>
            <div className="flex flex-col gap-2 pl-5 lg:pl-0">
              <p className="flex gap-2 flex-wrap items-center text-black/70 text-lg font-medium">
                <FaEnvelope size={20} className="text-blue-500" />{" "}
                mdhasanali9139@gmail.com
              </p>
              <p className="flex gap-2 items-center text-lg text-black/70 font-medium">
                <FaPhone size={20} className="text-blue-500" /> +8801512345678,
                +8801512345678
              </p>
              <p className="flex gap-2 items-center text-lg text-black/70 font-medium">
                <FaLocationDot size={20} className="text-blue-500" /> This is a
                dummy address -- Mirpur 1, Block-A - 1216.
              </p>
            </div>
          </div>
          {/* form  */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-center lg:text-start">
              Send Message
            </h2>
            <div className="px-1">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-blue-500 w-full lg:w-3/4 focus:outline-blue-500 focus:outline px-3 py-2 my-5"
                  name="user_name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-blue-500 w-full lg:w-3/4 focus:outline-blue-500 focus:outline px-3 py-2 "
                  name="user_email"
                />
                <textarea
                  name="message"
                  placeholder="Write here your message"
                  className="border border-blue-500 w-full lg:w-3/4 focus:outline-blue-500 focus:outline px-3 py-2 my-5"
                />
                <input
                  type="submit"
                  className="border capitalize rounded-md hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-button-bg-color text-white hover:bg-button-bg-hover-color transition duration-[250] ease-linear w-full lg:w-3/4 "
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
