import useUser from "../../../hooks/useUser";

const UserProfile = () => {
  const userData = useUser();
  return (
    <div className="flex justify-center items-center bg-slate-100  mx-5 border min-h-screen">
      <div>
        <div className="w-32 h-32 mx-auto flex justify-center border-2 border-blue-600 rounded-full mb-12">
          <img
            src={userData?.photoURL}
            alt=""
            className="object-fill rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              <span>{userData?.name}</span>
            </p>
            <p>
              {" "}
              <span className="font-semibold">Role: </span>
              <span>{userData?.role}</span>
            </p>
            <p>
              {" "}
              <span className="font-semibold">Email: </span>
              <span>{userData?.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
