import { Link } from "react-router-dom";
import errorSvg from "../../assets/error-page.svg"
import Button from "../../components/shared/button/Button";

const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-0 justify-center items-center min-h-screen">
            <div className="w-[45%] sm:w-[25%] lg:w-[20%] xl:w-[16%] mx-auto border-none">
                <img src={errorSvg} className="opacity-90" alt="error image"/>
            </div>
            <div className="text-center mb-6 px-3">
                <p className="text-4xl font-bold text-gray-800">oOps<span className="text-red-600">!!!</span></p>
                <p className="text-4xl font-bold text-gray-800">Page Not Found 😢</p>
            </div>
            <Link to="/">
            <Button btnName="go home" classForButton="px-3"/>
            </Link>
        </div>
    );
};

export default ErrorPage;