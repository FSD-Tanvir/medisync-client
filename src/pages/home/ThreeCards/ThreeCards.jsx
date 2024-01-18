import { GiHealthIncrease } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";
import { IoCalendarSharp } from "react-icons/io5";

const ThreeCards = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="border w-full h-[200px] flex justify-center items-center bg-blue-400 font-semibold text-white text-2xl md:text-xl lg:text-2xl gap-1 p-1">
                <span><BiAnalyse></BiAnalyse></span>
                <h1>Take Advice</h1>
            </div>
            <div className="border w-full h-[200px] flex justify-center items-center bg-blue-400 font-semibold text-white text-2xl md:text-xl lg:text-2xl gap-1 p-1">
                <span><GiHealthIncrease></GiHealthIncrease></span>
                <h1> Learn Health Care</h1>
            </div>
            <div className="border w-full h-[200px] flex justify-center items-center bg-blue-400 font-semibold text-white text-2xl md:text-xl lg:text-2xl gap-1 p-1">
                <span><IoCalendarSharp></IoCalendarSharp></span>
                <h1>Appointment</h1>
            </div>
        </div>
    );
};

export default ThreeCards;