import { useContext, useEffect } from "react";

import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../../Porviders/AuthProvider";
import Swal from "sweetalert2";
import { FaUnlockAlt } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialLogin from "../../../components/sociallogin/SocialLogin";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
// custom css for swiper 
import "./swiperCustomStyles.css"
// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import Button from "../../../components/shared/button/Button";
import { StateManager } from "../../../Porviders/StateProvider";

const LogIn = ({ setShowRegister }) => {
  const { logIn, loading, setLoading } = useContext(AuthContext);
  const {showModal,setShowModal} = useContext(StateManager);
  const handleLogIn = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          background: "#3b82f6",
          color: "white",
          title: "Successfully Logged In!",
          showConfirmButton: false,
          timer: 2500,
        });
        form.reset();
        setLoading(false);
        setShowModal(false);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          background: "#3b82f6",
          color: "white",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full hidden lg:w-[50%] sm:flex flex-col items-center mb-8 -mt-8 lg:mb-0">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation, Scrollbar]}
          className="mySwiper "
        >
          {/* SwiperSlides go here */}
          <SwiperSlide>
            <div className="mx-4 py-4">
              <div className="w-[160px] h-[160px] flex justify-center mx-auto">
                <img
                  className=" rounded-lg shadow-md mb-4 w-full  "
                  src="https://i.ibb.co/rMgb1GB/download.jpg"
                  alt=""
                />
              </div>

              <p className="font-bold text-xl py-2 text-center">
                Instant support & reply
              </p>
              <p className="text-sm py-1 text-center">
                This is a dummy tips for you, don't forget to connect with us
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-4 py-4">
              <div className="w-[160px] h-[160px] flex justify-center mx-auto">
                <img
                  className=" rounded-lg shadow-md mb-4 w-full  "
                  src="https://i.ibb.co/jfsJTPr/resize-1.jpg"
                  alt=""
                />
              </div>

              <p className="font-bold text-xl py-2 text-center">
                Easy & multi-payment solutions
              </p>
              <p className="text-sm py-1 text-center">
                This is a dummy tips for you, don't forget to connect with us
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-4 py-4">
              <div className="w-[160px] h-[160px] flex justify-center mx-auto">
                <img
                  className=" rounded-lg shadow-md mb-4 w-full  "
                  src="https://i.ibb.co/HNqV1rb/resize-17.jpg"
                  alt=""
                />
              </div>

              <p className="font-bold text-xl py-2 text-center">
                Quick & easy ordering process
              </p>
              <p className="text-sm py-1 text-center">
                This is a dummy tips for you, don't forget to connect with us
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col w-full lg:w-[50%]">
        <h2 className="font-bold text-xl sm:text-3xl py-2 text-center mb-6">
          Please Login Here
        </h2>
        <form
          onSubmit={handleLogIn}
          className="flex flex-col items-center gap-5"
        >
          {/* Form fields go here */}
          <div className="flex items-center border-b border-black gap-2">
            <MdEmail className="text-xl" />
            <input
              name="email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="flex items-center border-b border-black gap-2">
            <FaUnlockAlt />
            <input
              name="password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="mt-2">
            {loading ? (
              <button
                className="text-white px-4 py-3 rounded-lg bg-[#4D779F]"
                disabled
              >
                <VscLoading className="animate-spin text-2xl" />
              </button>
            ) : (
              <Button
                btnName="Log In"
                btnType="submit"
                classForButton="px-2 w-full rounded-md text-xs sm:text-sm md:text-xs lg:text-sm"
              />
            )}
            <p>
              {`Don't Have Account ?`}{" "}
              <button
                onClick={() => setShowRegister(true)}
                className="font-bold py-2 text-center text-text-color-blue"
              >
                Register
              </button>
            </p>
          </div>
        </form>
        {/* social login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default LogIn;
