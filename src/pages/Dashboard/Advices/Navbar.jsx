import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-[#f5b0b0] py-5">
            <ul className="flex justify-center items-center gap-5 font-semibold text-[#000000]">
                <li>
                    <NavLink to="/dashboard/advices/allAdvices" className="hover:text-[#7e7a7a] cursor-pointer">All Advices</NavLink>
                </li>
                <li >
                    <NavLink to="/dashboard/advices/addAdvice" className="hover:text-[#7e7a7a] cursor-pointer">Add Advice</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;