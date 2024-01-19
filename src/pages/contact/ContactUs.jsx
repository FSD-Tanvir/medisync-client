import toast from "react-hot-toast";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    toast.success("Thank you for contacting us");
    e.target.reset();
  };

  return (
    <div className="min-h-screen ">
      {/* contact banner section  */}
      <div
        className="h-[55vh] w-full bg-bottom bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(https://i.ibb.co/JRMRpvD/3117.jpg)" }}
      >
        <div className="bg-black/25 text-white h-full flex justify-center items-center">
          <p className="drop-shadow-md">
            <Link to="/">
              <span className="text-2xl font-semibold text-white border-r-4 border-white pr-2">
                Home
              </span>
            </Link>
            <span className="text-2xl font-semibold text-white">
              {" "}
              ContactUs
            </span>
          </p>
        </div>
      </div>
      {/* contact main content */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center">
          Get Us in Your Touch
        </h2>
        <div className="w-full flex flex-col  md:flex-row gap-6 py-16">
          {/* left  */}
          <div className="flex-1 ">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-black/70 font-semibold mt-2 mb-4 w-3/4">
              Please share your thoughts with us about how we can make MediSync
              better. We welcome questions, bug reports, compliments,
              complaints, and feature requests.
            </p>
            <div className="flex flex-col gap-2">
              {/* <p className="flex gap-2 items-center text-lg font-medium">
              <FaUser size={20} className="text-cyan-400" /> Md Hasan Ali
            </p> */}
              <p className="flex gap-2 flex-wrap items-center text-black/70 text-lg font-medium">
                <FaEnvelope size={20} className="text-cyan-400" />{" "}
                mdhasanali9139@gmail.com
              </p>
              <p className="flex gap-2 items-center text-lg text-black/70 font-medium">
                <FaPhone size={20} className="text-cyan-400" /> +8801512345678,
                +8801512345678
              </p>
              <p className="flex gap-2 items-center text-lg text-black/70 font-medium">
                <FaLocationDot size={20} className="text-cyan-400" /> This is a
                dummy address -- Mirpur 1, Block-A - 1216.
              </p>
            </div>
          </div>
          {/* form  */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold ">Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="border border-cyan-400 w-3/4  focus:outline-cyan-400 focus:outline px-3 py-2 "
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="border border-cyan-400 w-3/4 focus:outline-cyan-400 focus:outline px-3 py-2 "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border border-cyan-400 w-3/4 focus:outline-cyan-400 focus:outline px-3 py-2"
                />

                <textarea
                  name="message"
                  placeholder="message"
                  required
                  className="border border-cyan-400 w-3/4 focus:outline-cyan-400 focus:outline px-3 py-2 "
                ></textarea>
                <div className="w-3/4 mt-4">
                  <button
                    type="submit"
                    className="px-20 bg-cyan-400 py-2 rounded-none uppercase hover:bg-cyan-500 hover:border-none transition ease-in duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
