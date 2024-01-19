import icon1 from "../../../assets/CardIcons/icon1.png"
import icon2 from "../../../assets/CardIcons/icon2.png"
import icon3 from "../../../assets/CardIcons/icon3.png"


const ThreeCards = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="rounded-md w-full h-[100px] flex justify-center items-center bg-cyan-500 font-semibold text-white text-2xl md:text-xl lg:text-2xl gap-1 p-1">
                <span> <img src={icon1} className="w-[40px]" alt="" /> </span>
                <h1>Take Advice</h1>
            </div>
            <div className="rounded-md w-full h-[100px] flex justify-center items-center bg-cyan-500 font-semibold text-white text-2xl md:text-xl lg:text-2xl gap-1 p-1">
                <span><img src={icon2} className="w-[40px]" alt="" /></span>
                <h1> Learn Health Care</h1>
            </div>
            <div className="rounded-md w-full h-[100px] flex justify-center items-center bg-cyan-500 font-semibold text-white text-2xl md:text-xl lg:text-2xl p-1">
                <span><img src={icon3} className="w-[60px]" alt="" /></span>
                <h1>Appointment</h1>
            </div>
        </div>
    );
};

export default ThreeCards;