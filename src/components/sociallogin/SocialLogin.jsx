import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    return (
        <div>
            <h1 className="text-lg font-bold text-center">Or Continue with</h1>
            <div className="flex justify-center items-center gap-4">
                <button className="text-white bg-[#3d5a9a] text-xl p-3 rounded-lg"><FaFacebookF /></button>
                <button className="text-white bg-slate-200 text-xl p-2 rounded-lg"><FcGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;