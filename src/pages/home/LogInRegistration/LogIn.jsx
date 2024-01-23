import { useContext, useEffect } from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../../Porviders/AuthProvider";
import Swal from "sweetalert2";
import { VscLoading } from "react-icons/vsc";


const LogIn = ({ setShowRegister, setShowModal }) => {

    const { logIn, loading, setLoading } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    background: '#116977',
                    color: 'white',
                    title: "Successfully Logged In !",
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
                    title: `${err.message}`,
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
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center ">
                <div className="w-[400px] flex flex-col items-center">
                    <p className="p-4">
                        <h1 className="text-2xl font-semibold mb-2"><Typewriter
                            delaySpeed={1000}
                            deleteSpeed={25}
                            typeSpeed={75}
                            words={[
                                'Some Usefull Tips '
                            ]}
                        /></h1>
                        <ul className="list-disc flex flex-col gap-2 text-sm p-3">
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                                <li>Drink an adequate amount of water each day to stay hydrated.</li>
                            </div>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="2000">
                                <li>Consume a well-balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats.</li>
                            </div>
                            <li>
                                <div data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-duration="3000">
                                    Engage in regular physical activity to promote cardiovascular health, muscle strength, and overall well-being.
                                </div>
                            </li>
                        </ul>
                    </p>
                    <p>{`Don't Have Account ?`} <button onClick={() => setShowRegister(true)} className="font-bold">Register</button></p>
                </div>
                <div className="flex flex-col gap-6">
                    <form onSubmit={handleLogIn} className="flex flex-col items-center gap-5">
                        <div className="flex items-center border-b border-black gap-2">
                            <MdAttachEmail className="text-xl" />
                            <input name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder='Email ' />
                        </div>
                        <div className="flex items-center border-b border-black gap-2">
                            <FaUnlockKeyhole />
                            <input name="password" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" />
                        </div>
                        <div>
                            {
                                loading ? <button className=" text-white px-12 py-3 rounded-lg bg-[#4D779F]" disabled><VscLoading className="animate-spin text-2xl" /></button> :
                                    <button className="bg-[#6eabe4] text-white px-8 py-3 rounded-lg hover:bg-[#4D779F]">Log In</button>
                            }
                        </div>
                    </form>
                    <h1 className="text-lg font-bold text-center">Or Continue with</h1>
                    <div className="flex justify-center items-center gap-4">
                        <button className="text-white bg-[#3d5a9a] text-3xl p-3 rounded-lg" ><FaFacebookF /></button>
                        <button className="text-white bg-slate-200 text-4xl p-2 rounded-lg" ><FcGoogle /></button>
                        <button className="text-white bg-[#1ba0f0] text-4xl p-2 rounded-lg" ><FaTwitter /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;