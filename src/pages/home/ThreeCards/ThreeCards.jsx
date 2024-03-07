import { Link } from "react-router-dom";
import icon1 from "../../../assets/CardIcons/icon1.png"
import icon2 from "../../../assets/CardIcons/icon2.png"
import icon3 from "../../../assets/CardIcons/icon3.png"


const ThreeCards = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 px-2 ">

            {/* take advice card */}
            <Link to="/advice">
                <div className="rounded-lg w-3/4 mx-auto h-[70px] sm:w-4/5 md:w-full md:h-[100px] flex justify-center items-center text-text-color-blue border border-blue-500 font-semibold  text-xl md:text-xl  gap-1 p-1 cursor-pointer shadow hover:shadow-lg duration-1000 hover:scale-105">
                    <span> <img src={icon1} className="w-[40px]" alt="" /> </span>
                    <h1>Take Advice</h1>
                </div>
            </Link>

            {/* Learn Health Care Card Here  */}
            <Link to="/articles">
            <div className="rounded-lg w-3/4 mx-auto h-[70px] sm:w-4/5 md:w-full md:h-[100px] flex justify-center items-center text-text-color-blue border border-blue-500 font-semibold  text-xl md:text-xl  gap-1 p-1 cursor-pointer shadow hover:shadow-lg duration-1000 hover:scale-105">
                <span><img src={icon2} className="w-[40px]" alt="" /></span>
                <h1> Learn Health Care</h1>
            </div>
            </Link>

            {/* Appointment card here  */}
            <Link to="/doctors">
            <div className="rounded-lg w-3/4 mx-auto h-[70px] sm:w-4/5 md:w-full md:h-[100px] flex justify-center items-center text-text-color-blue border border-blue-500 font-semibold  text-xl md:text-xl  p-1 cursor-pointer shadow hover:shadow-lg duration-1000 hover:scale-105">
                <span><img src={icon3} className="w-[60px]" alt="" /></span>
                <h1>Appointment</h1>
            </div>
            </Link>
        </div>
    );
};

export default ThreeCards;