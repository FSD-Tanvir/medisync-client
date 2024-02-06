
import OTC from '../../assets/CategoryIcons/OTC.png'
import BABY from "../../assets/CategoryIcons/baby.webp"
import DENTAL from "../../assets/CategoryIcons/dental.png"
import DIABETIC from "../../assets/CategoryIcons/diabetic.png"
import PERSONAL from "../../assets/CategoryIcons/personal.png"
import PRESCRIPTION from "../../assets/CategoryIcons/prescription.png"
import WOMEN from "../../assets/CategoryIcons/women.png"



const SideNavbar = ({ setCategory, category }) => {
    return (
        <>
            <div className="bg-blue-100 rounded-lg  h-fit hidden lg:block  lg:w-1/5 shadow-[-10px_-10px_20px_4px_rgba(0,0,0,0.1),_10px_10px_20px_4px_rgba(0,0,0,0.1)]">
                <ul>
                    <li onClick={() => setCategory('otc')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg  ${category === 'otc' && 'bg-blue-300 '}`}>
                        <img className="w-8 h-8" src={OTC} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">OTC Medicine</h2>
                    </li>
                    <li onClick={() => setCategory('women')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg  ${category === 'women' && 'bg-blue-300 rounded-lg'}`}>
                        <img className="w-8 h-8" src={WOMEN} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">For Women</h2>
                    </li>
                    <li onClick={() => setCategory('baby')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${category === 'baby' && 'bg-blue-300'}`}>
                        <img className="w-8 h-8" src={BABY} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">Baby Care</h2>
                    </li>
                    <li onClick={() => setCategory('dental')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${category === 'dental' && 'bg-blue-300'}`}>
                        <img className="w-8 h-8" src={DENTAL} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">Dental Care</h2>
                    </li>
                    <li onClick={() => setCategory('diabetic')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${category === 'diabetic' && 'bg-blue-300'}`}>
                        <img className="w-8 h-8" src={DIABETIC} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">Diabetic Care</h2>
                    </li>
                    <li onClick={() => setCategory('personal')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${category === 'personal' && 'bg-blue-300'}`}>
                        <img className="w-8 h-8" src={PERSONAL} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">Personal Care</h2>
                    </li>
                    <li onClick={() => setCategory('prescription')} className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${category === 'prescription' && 'bg-blue-300'}`}>
                        <img className="w-8 h-8" src={PRESCRIPTION} alt="" />
                        <h2 className="font-bold text-xl text-blue-500">Prescription Medicine</h2>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideNavbar;