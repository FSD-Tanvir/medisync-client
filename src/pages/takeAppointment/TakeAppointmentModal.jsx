import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { IoClose } from "react-icons/io5";

const TakeAppointmentModal = ({setExtraInfoOfUser, setIsModal}) => {
  const [currency, setCurrency] = useState("BDT");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mobile_number = e.target?.mobile_number?.value;
    if(mobile_number){
      setExtraInfoOfUser({mobile_number,currency})
      setIsModal(false)
    }
    // console.log(mobile_number);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-primary-bg-color/40 flex justify-center items-center">
      <div>
        <form onSubmit={handleSubmit} className={`p-4 lg:p-8 relative w-full sm:w-auto my-6 mx-auto max-w-3xl shadow-lg  bg-blue-500/40 rounded-lg`}>
          <button 
          onClick={()=>setIsModal(false)}
          className="backdrop-blur-sm absolute right-2 top-1 text-white hover:text-red-500 transition-colors duration-200 ease-linear">
            <IoClose size={24}/>
          </button>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-center items-baseline mb-3">
            {/* user mobile number  */}
            <div className="space-y-5 drop-shadow-md w-full">
              <label
                htmlFor="mobile_number"
                className="block text-white border-l-2 border-white font-semibold pl-2"
              >
                Mobile Number
              </label>
              <input
                id="mobile_number"
                type="number"
                name="mobile_number"
                required
                placeholder="Enter Your Mobile Number"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
              />
            </div>
            {/* user mobile number  */}
            <div className="space-y-5 drop-shadow-md w-full">
              <label
                htmlFor="currency"
                className="block text-white border-l-2 border-white font-semibold pl-2"
              >
                Select Currency
              </label>
              <select onChange={(e)=>setCurrency(e.target?.value)} id="currency" name="currency" defaultValue="BDT" className="outline-none rounded-lg px-3 border">
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
          {/* next button  */}
          <Button
            btnName="Next"
            classForButton="px-2 w-1/3"
            btnType="submit"
            classForDiv="text-center mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default TakeAppointmentModal;
