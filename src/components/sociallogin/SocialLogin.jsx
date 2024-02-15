import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { StateManager } from "../../Porviders/StateProvider";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const {showModal,setShowModal} = useContext(StateManager);
  const axiosPublic = useAxiosPublic();

  const handelGoogleLogin = (media) => {
    media()
      .then(async(result) => {
        // console.log(result)
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          photoURL: result.user?.photoURL,
        };
        console.log(userInfo);
        const {data} = await axiosPublic.post(`/users/create-user/${result?.user?.email}`, userInfo)
        console.log(data?.message);
        if(data?.status === true){
          Swal.fire({
            position: "center",
            icon: "success",
            background: "#3b82f6",
            color: "white",
            title: "Registration with google Successful",
            showConfirmButton: false,
            timer: 2500,
          });
          setShowModal(false);
        }else if(data?.message === "You are already registered"){
          Swal.fire({
            position: "center",
            icon: "success",
            background: "#3b82f6",
            color: "white",
            title: "Login with google successfully",
            showConfirmButton: false,
            timer: 2500,
          });
          setShowModal(false);
        }
      })
      .catch((error) => {
        console.log(error.message)
        // if(error === "Firebase: Error (auth/popup-closed-by-user)." || error === "Firebase: Error (auth/cancelled-popup-request)."){

        // }
    });
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center py-2">Or Continue with</h1>
      <div className="flex justify-center items-center gap-4 mb-4 sm:mb-2">
        <button className="text-white bg-[#3d5a9a] text-xl p-2 rounded-lg">
          <FaFacebookF />
        </button>
        <button
          onClick={() => handelGoogleLogin(googleLogin)}
          className="text-white bg-slate-200 text-xl p-2 rounded-lg"
        >
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
