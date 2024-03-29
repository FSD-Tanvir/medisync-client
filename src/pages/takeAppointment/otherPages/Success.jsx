import { useParams, useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import successPaymentAnimation from "../../../assets/Animations/success-payment-animation.json";
import { useEffect, useState } from "react";

const Success = () => {
  const { tranId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const startTimeParam = searchParams.get("startTime");
    setStartTime(startTimeParam);
  }, [location.search]);

  const handleGetMeetingLink = () => {
    navigate(`/room/id/${tranId}?startTime=${startTime}`, { replace: true });
  };

  return (
    <div className="w-3/5 mx-auto rounded-lg shadow-lg p-4 min-h-[30vh] my-10 border-t">
      <div className="flex flex-col justify-center items-center mb-6">
        <Lottie
          animationData={successPaymentAnimation}
          loop={false}
          style={{ width: "250px" }}
        />
        <p className="text-green-600">Appointment Booked Successfully</p>
      </div>
      <p className="text-lg text-center">
        Transaction Id:{" "}
        <span className="text-base text-green-500">{tranId}</span>
      </p>
      <p className="text-lg text-center">
        Get your doctor meeting link
        <button
          onClick={handleGetMeetingLink}
          title="Must click for get meeting link"
          className="text-blue-500 font-bold px-2 py-1 hover:underline transition duration-200"
        >
          Get Link
        </button>
      </p>
    </div>
  );
};

export default Success;
