import { FaUser } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import regImg from '../../../assets/LogIn/doctor-register.jpg'
// import { useEffect } from "react";



const Register = ({setShowRegister}) => {
    
    return (
        <div className="relative p-5 flex-auto ">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
                <div className="w-[400px] flex flex-col items-center gap-4">
                    <img src={regImg} alt="" className="rounded-3xl"/>
                    <p>{`Already Have Account ?`} <button onClick={()=> setShowRegister(false)} className="font-bold">Log In</button></p>
                </div>
                <div className="flex flex-col gap-6">
                    <form className="flex flex-col items-center gap-5">
                        <div className="flex items-center border-b border-black gap-2">
                            <FaUser />
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="User Name" />
                        </div>
                        <div className="flex items-center border-b border-black gap-2">
                            <MdAttachEmail />
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" />
                        </div>
                        <div className="flex items-center border-b border-black gap-2">
                            <FaUnlockKeyhole />
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" />
                        </div>
                        <div>
                            <button className="bg-[#6eabe4] text-white px-8 py-3 rounded-lg hover:bg-[#4D779F]">Register</button>
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