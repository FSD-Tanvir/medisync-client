import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const handelGoogleLogin = (media) => {
        media()
            .then(result => {
                // console.log(result)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photoURL:result.user?.photoURL
                }
                console.log(userInfo)
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log(res.data)
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Create Sucessfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h1 className="text-lg font-bold text-center py-2">Or Continue with</h1>
            <div className="flex justify-center items-center gap-4 mb-4 sm:mb-2">
                <button className="text-white bg-[#3d5a9a] text-xl p-2 rounded-lg"><FaFacebookF /></button>
                <button onClick={() => handelGoogleLogin(googleLogin)} className="text-white bg-slate-200 text-xl p-2 rounded-lg"><FcGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;