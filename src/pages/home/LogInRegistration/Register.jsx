/* eslint-disable react/no-unescaped-entities */
import { FaCamera, FaUser } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../../Porviders/AuthProvider";
import Swal from "sweetalert2";
import { VscLoading } from "react-icons/vsc";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../../components/sociallogin/SocialLogin";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// custom css for swiper
import "./swiperCustomStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import Button from "../../../components/shared/button/Button";
import { saveImage } from "../../../utils/utils";
import { StateManager } from "../../../Porviders/StateProvider";

const Register = ({ setShowRegister }) => {
  const { createUser, setLoading, loading, updateUserProfile } = useContext(AuthContext);
  const [whichPhotoSelected, setWhichPhotoSelected] = useState(null);
  const { showModal, setShowModal } = useContext(StateManager);
  const axiosPublic = useAxiosPublic();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    const image = form.photo?.files[0];

    console.log(name, email, password, image);

    // save image on imgbb and get display_url
    const { data } = await saveImage(image);
    const imgUrl = data?.display_url;
    const userInfo = {
      name: name,
      email: email,
      photoURL: data?.display_url,
    };

    createUser(email, password)
      .then(async (res) => {
        updateUserProfile(name, imgUrl)
        const { data } = await axiosPublic.post(
          `/users/create-user/${res?.user?.email}`,
          userInfo
        );
        console.log("Success ", data);
        if (data?.status === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            background: "#3b82f6",
            color: "white",
            title: "Your Registration Successful",
            showConfirmButton: false,
            timer: 2500,
          });
          form.reset();
          setLoading(false);
          setShowModal(false);
        }
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          position: "center",
          icon: "error",
          background: "#3b82f6",
          color: "white",
          text: `${err}`,
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
    <div className="flex flex-col lg:flex-row items-center justify-center ">
      <div className=" w-full hidden lg:w-[50%] sm:flex flex-col items-center mb-8 lg:mb-0">
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
      {/* register form */}
      <div className="flex flex-col w-full lg:w-[50%] ">
        <h2 className="font-bold text-center text-xl sm:text-3xl py-2 mb-6">
          Please Register Here{" "}
        </h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center gap-5 px-6"
        >
          <div className="flex items-center w-full border-b border-black gap-2">
            <FaUser />
            <input
              name="name"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="User Name"
              required
            />
          </div>
          <div className="flex items-center w-full border-b border-black gap-2">
            <MdAttachEmail />
            <input
              name="email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex gap-2 justify-center w-full">
            <label
              title={whichPhotoSelected}
              htmlFor="photo"
              className="flex gap-2 justify-center items-center px-2 w-full border-dotted border-[3px] border-blue-500/25 py-1"
            >
              {/* if photo selected then showing photo name or showing Profile Photo */}
              <span className="font-semibold">
                {whichPhotoSelected
                  ? whichPhotoSelected.length > 25
                    ? whichPhotoSelected.slice(0, 25)
                    : whichPhotoSelected
                  : "Profile Photo"}
              </span>
              {/* if photo selected then showing refresh icon or showing camera icon  */}
              {whichPhotoSelected ? (
                <IoMdRefresh size={30} className="text-text-color-blue" />
              ) : (
                <FaCamera size={30} className="text-text-color-blue" />
              )}
              <input
                onChange={(e) =>
                  setWhichPhotoSelected(e.target?.files[0]?.name)
                }
                name="photo"
                id="photo"
                className="appearance-none absolute -top-[1000px] bg-transparent border-none text-gray-700 mr-3 leading-tight focus:outline-none"
                type="file"
                accept="image/*"
                required
              />
            </label>
          </div>
          <div className="flex items-center w-full border-b border-black gap-2">
            <FaUnlockKeyhole />
            <input
              name="password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            {loading ? (
              <button
                className=" text-white px-4 py-3 rounded-lg bg-[#4D779F]"
                disabled
              >
                <VscLoading className="animate-spin text-2xl" />
              </button>
            ) : (
              <Button
                btnType="submit"
                btnName="register"
                classForButton="px-2 w-full rounded-md text-xs sm:text-sm md:text-xs lg:text-sm"
              />
            )}

            <p>
              {`Already Have Account ?`}{" "}
              <button
                onClick={() => setShowRegister(false)}
                className="font-bold py-2 text-center text-text-color-blue"
              >
                Log In
              </button>
            </p>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
