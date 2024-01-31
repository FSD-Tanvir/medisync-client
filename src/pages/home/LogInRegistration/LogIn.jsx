import { useContext, useEffect } from "react";
import { FaFacebookF, FaUnlockAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../../Porviders/AuthProvider";
import Swal from "sweetalert2";
import { VscLoading } from "react-icons/vsc";
const LogIn = ({ setShowRegister, setShowModal }) => {
    const { logIn, loading, setLoading } = useContext(AuthContext);

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
                    background: '#116977',
                    color: 'white',
                    title: "Successfully Logged In!",
                    showConfirmButton: false,
                    timer: 2500
                });
                form.reset();
                setLoading(false);
                setShowModal(false);
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    background: '#116977',
                    color: 'white',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                });
                setLoading(false);
            });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="relative p-5 flex-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
                <div className="w-full lg:w-[50%] flex flex-col items-center">
                    <div className="mx-4 py-4 text-center">
                        <img className="w-[250px] rounded-lg shadow-md mb-4" src="https://i.ibb.co/rMgb1GB/download.jpg" alt="" />
                        <p className="font-bold text-2xl py-2">Instant support & reply</p>
                        <p className="text-blue-500 py-2">
                            Medisync will receive your order and be able to <br /> reply to you once you place an order and ask for help.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full lg:w-[50%]">
                    <h2 className="font-bold text-3xl text-center mb-2">Login</h2>
                    <p className="text-blue-500 text-center text-sm mb-4">Login to make an order, access your orders, and health tips!</p>
                    <form onSubmit={handleLogIn} className="flex flex-col items-center gap-5">
                        <div className="flex items-center border-b border-black gap-2">
                            <MdEmail className="text-xl" />
                            <input
                                name="email"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex items-center border-b border-black gap-2">
                            <FaUnlockAlt />
                            <input
                                name="password"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mt-2">
                            {loading ? (
                                <button className="text-white px-4 py-3 rounded-lg bg-[#4D779F]" disabled>
                                    <VscLoading className="animate-spin text-2xl" />
                                </button>
                            ) : (
                                <button className="bg-[#6eabe4] w-full text-white px-4 py-2 mb-2 rounded-lg hover:bg-[#4D779F]">Log In</button>
                            )}
                            <p>{`Don't Have Account ?`} <button onClick={() => setShowRegister(true)} className="font-bold text-center">Register</button></p>
                        </div>
                    </form>
                    <h1 className="text-lg font-bold text-center">Or Continue with</h1>
                    <div className="flex justify-center items-center gap-4">
                        <button className="text-white bg-[#3d5a9a] text-xl p-3 rounded-lg"><FaFacebookF /></button>
                        <button className="text-white bg-slate-200 text-xl p-2 rounded-lg"><FcGoogle /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;
