import { useParams, Link } from "react-router-dom";
import Lottie from "lottie-react";
import successPaymentAnimation from "../../../assets/Animations/success-payment-animation.json";
import Button from "../../../components/shared/button/Button";

const OrderSuccess = () => {
  const { tranId } = useParams();

  return (
    <div className="w-3/5 mx-auto rounded-lg shadow-lg p-4 min-h-[30vh] my-10 border-t">
      <div className="flex flex-col justify-center items-center mb-6">
        <Lottie
          animationData={successPaymentAnimation}
          loop={false}
          style={{ width: "250px" }}
        />
        <p className="text-green-600">Your Order success</p>
      </div>
      <p className="text-lg text-center">
        Transaction Id:{" "}
        <span className="text-base text-green-500">{tranId}</span>
      </p>

      <Link
        to="/dashboard/myOrders"
        replace={true}
        className="text-center my-4 block"
      >
        <Button btnName="see orders" classForButton="px-2" />
      </Link>
    </div>
  );
};

export default OrderSuccess;
