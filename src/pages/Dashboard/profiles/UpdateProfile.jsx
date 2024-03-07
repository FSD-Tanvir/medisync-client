import { FaEdit, FaTimes } from "react-icons/fa";
import Button from "../../../components/shared/button/Button";
import toast from "react-hot-toast";
import { saveImage } from "../../../utils/utils";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const UpdateProfile = ({ setIsUpdateProfileClicked }) => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [photoUrl, setPhotoUrl] = useState(undefined);
  const [activeUpdate, setActiveUpdate] = useState(false);
  const [isTooltip, setIsToolTip] = useState(false);

  const handleUploadImage = async (image) => {
    // save image on imgbb and get image url
    if (image) {
      const { data } = await saveImage(image);
      setPhotoUrl(data?.display_url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;

      const updatedProfileInfo = {
        name,
        image: photoUrl,
      };
      const { data } = await axiosSecure.put(
        `/users/update-user/${user?.email}`,
        updatedProfileInfo
      );
      if (data?.acknowledgement?.modifiedCount > 0) {
        toast.success("Your profile updated successfully");
        await updateUserProfile(name, photoUrl);
        setActiveUpdate(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full lg:w-3/5 pb-8 md:pb-0">
      <div className="w-full relative py-12 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-20">
            {/* profile photo  */}
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] p-1 bg-blue-500 rounded-full mb-4">
                <img
                  className="rounded-full w-full h-full object-cover object-top"
                  src={photoUrl || user?.photoURL}
                  alt="user image"
                />
              </div>
              <label
                className={`text-action-text disabled:text-gray-200 font-bold text-sm lg:text-lg w-min whitespace-nowrap select-none ${
                  !activeUpdate && "text-opacity-30 border-opacity-30"
                }  p-2 rounded-md border border-dashed border-blue-600`}
              >
                <input
                  onChange={(e) => handleUploadImage(e.target.files[0])}
                  disabled={!activeUpdate}
                  type="file"
                  accept="image/*"
                  name="photo"
                  required
                  className="absolute -top-[1000px]"
                />
                Upload Image
              </label>
            </div>
            {/* profile info  */}
            <div className="space-y-3">
              {/* full name  */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className={`text-lg text-black-text font-semibold`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.displayName}
                  readOnly={!activeUpdate}
                  required
                  className={`outline-none border placeholder-black px-3 py-4 rounded-md ${
                    activeUpdate ? "cursor-text" : "cursor-context-menu"
                  }`}
                />
              </div>
              {/* user email  */}
              <div className="flex flex-col relative">
                <label
                  htmlFor="email"
                  className="text-lg text-black-text font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
                  required
                  className={`outline-none border placeholder-black px-3 py-4 rounded-md ${
                    activeUpdate ? "cursor-text" : "cursor-context-menu"
                  }`}
                />
                {/* here is the tooltip  */}
                <span
                  onClick={() => setIsToolTip(!isTooltip)}
                  className="text-red-600 border rounded-full flex justify-center items-center w-4 h-4 cursor-pointer absolute right-[25%] top-[6px] p-2 select-none"
                >
                  <em className="">i</em>
                </span>
                {/* tooltip message  */}
                <span
                  className={`text-[13px] text-red-600 ml-1 w-min whitespace-nowrap absolute -right-[15%] -top-3 ${
                    isTooltip
                      ? "pointer-events-auto, opacity-100"
                      : "pointer-events-none, opacity-0"
                  } transition duration-200 ease-linear`}
                >
                  not changeable
                </span>
              </div>
            </div>
          </div>
          {/* update button  */}
          <div className="text-center py-7">
            <Button
              btnName="Update Profile"
              btnType={"submit"}
              classForButton={`px-7 disabled:opacity-15 disabled:hover:none`}
              isDisabled={!activeUpdate}
            />
          </div>
        </form>
        {/* edit button - for toggle update button and photo upload */}
        <button
          onClick={() => setActiveUpdate(!activeUpdate)}
          className="absolute top-0 right-0  hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-bl-md rounded-tr-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          {activeUpdate ? (
            "Cancel"
          ) : (
            <>
              {/* <button
                className="absolute -top-4 -right-5  hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-bl-md rounded-tr-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
              > */}
              <FaEdit size={17} />
              {/* </button> */}
            </>
          )}
        </button>
        {/* back to my profile button  */}
        <button
          onClick={() => setIsUpdateProfileClicked(false)}
          className="absolute top-0 left-0 flex items-center gap-2 hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-4 rounded-tl-md rounded-br-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
        >
          <FaTimes size={17} />
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
