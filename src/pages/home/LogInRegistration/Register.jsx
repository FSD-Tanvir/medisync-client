import { FaUser } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import regImg from '../../../assets/LogIn/doctor-register.jpg'
import { useContext, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../../Porviders/AuthProvider";
import { updateProfile } from "@firebase/auth";
import Swal from "sweetalert2";
import { VscLoading } from "react-icons/vsc";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



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
                axiosPublic.post('/users', {name, email})
                .then(res=>{
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
        <div className="relative p-5 flex-auto ">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
                <div className="w-[300px] flex flex-col items-center gap-4">
                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3000">
                        <img src={regImg} alt="" className="rounded-3xl" />
                    </div>
                    <p>{`Already Have Account ?`} <button onClick={() => setShowRegister(false)} className="font-bold">Log In</button></p>
                </div>
                <div className="flex flex-col gap-6">
                    <form onSubmit={handleRegister} className="flex flex-col items-center gap-5">
                        <div className="flex items-center border-b border-black gap-2">
                            <FaUser />
                            <input name="name" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="User Name" required/>
                        </div>
                        <div className="flex items-center border-b border-black gap-2">
                            <MdAttachEmail />
                            <input name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" required/>
                        </div>
                        <div className="flex items-center border-b border-black gap-2">
                            <FaUnlockKeyhole />
                            <input name="password" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" required />
                        </div>
                        <div>
                            {
                                loading ? <button className=" text-white px-12 py-3 rounded-lg bg-[#4D779F]" disabled><VscLoading className="animate-spin text-2xl"/></button> :
                                    <button className="bg-[#6eabe4] text-white px-8 py-3 rounded-lg hover:bg-[#4D779F]">Register</button>
                            }
                        </div>
                    </form>
                    <h1 className="text-lg font-bold text-center">Or Continue with</h1>
                    <div className="flex justify-center  items-center gap-4">
                        <button className="text-white bg-[#3d5a9a] text-3xl p-3 rounded-lg" ><FaFacebookF /></button>
                        <button className="text-white bg-slate-200 text-4xl p-2 rounded-lg" ><FcGoogle /></button>
                        <button className="text-white bg-[#1ba0f0] text-4xl p-2 rounded-lg" ><FaTwitter /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;