import { FaUser } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import regImg from '../../../assets/LogIn/doctor-register.jpg'
import { useContext, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../../Porviders/AuthProvider";
import { updateProfile } from "@firebase/auth";
import Swal from "sweetalert2";
import { VscLoading } from "react-icons/vsc";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../../components/sociallogin/SocialLogin";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Register = ({ setShowRegister, setShowModal }) => {
    const { createUser, setLoading, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const handleRegister = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name
                })
                axiosPublic.post('/users', { name, email })
                    .then(res => {
                        console.log("Success ", res.data)
                    })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    background: '#116977',
                    color: 'white',
                    title: "Successfully Registered !",
                    showConfirmButton: false,
                    timer: 2500
                });
                form.reset()
                setLoading(false)
                setShowModal(false)
            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    background: '#116977',
                    color: 'white',
                    text: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                });
                setLoading(false)
            })
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center ">
            <div className=" w-full hidden lg:w-[50%] sm:flex flex-col items-center mb-8 lg:mb-0">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* SwiperSlides go here */}
                    <SwiperSlide><div className="mx-4 py-4 text-center">
                        <img className=" rounded-lg shadow-md mb-4" src="https://i.ibb.co/rMgb1GB/download.jpg" alt="" />
                        <p className="font-bold text-2xl py-2">Instant support & reply</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="mx-4 py-4 text-center">
                        <img className=" rounded-lg shadow-md mb-4" src="https://i.ibb.co/jfsJTPr/resize-1.jpg" alt="" />
                        <p className="font-bold text-2xl py-2">Easy & multi-payment solutions</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="mx-4 py-4 text-center">
                        <img className="rounded-lg shadow-md mb-4" src="https://i.ibb.co/HNqV1rb/resize-17.jpg" alt="" />
                        <p className="font-bold text-2xl py-2">Quick & easy ordering process</p>
                    </div></SwiperSlide>
                </Swiper>
            </div>
            <div className="flex w-full lg:w-50%  flex-col ">
                <h2 className="font-bold text-center text-xl sm:text-3xl py-2 mb-6">Please Registation </h2>
                <form onSubmit={handleRegister} className="flex flex-col items-center gap-5">
                    <div className="flex items-center border-b border-black gap-2">
                        <FaUser />
                        <input name="name" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="User Name" required />
                    </div>
                    <div className="flex items-center border-b border-black gap-2">
                        <MdAttachEmail />
                        <input name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" required />
                    </div>
                    <div className="flex items-center border-b border-black gap-2">
                        <FaUnlockKeyhole />
                        <input name="password" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" required />
                    </div>
                    <div>
                        {
                            loading ? <button className=" text-white px-12 py-3 rounded-lg bg-[#4D779F]" disabled><VscLoading className="animate-spin text-2xl" /></button> :
                                <button className="hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 w-full rounded-md text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4]">Register</button>
                        }
                    </div>
                    <p>{`Already Have Account ?`} <button onClick={() => setShowRegister(false)} className="font-bold">Log In</button></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;