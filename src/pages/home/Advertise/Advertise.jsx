import { useEffect, useState } from "react";
import StartInterval from "./StartInterval";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/button/Button";

const Advertise = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // doctors data fetch here
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  // individual doctor display functionality here
  const displayDoctor = () => {
    const doctor = doctors[currentIndex];

    return (
      <div className="w-full p-3">
        <div className="h-[380px] xl:h-[320px]">
          <img
            className="w-full h-[200px] object-cover"
            src={doctor?.image}
            alt={doctor?.name}
          />
          <h2 className="font-semibold text-xl text-cyan-400 mt-2 mb-1 text-center">
            {doctor?.name}
          </h2>
          <p className="font-medium">
            <span className="font-semibold">Specialist: </span>
            {doctor?.specialization}
          </p>
          <p>
            <span className="font-semibold ">Email:</span>{" "}
            {doctor?.contact?.email}
          </p>
          <p className="mb-10">
            <span className="font-semibold ">Phone:</span>{" "}
            {doctor?.contact?.phone}
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <Link to="/doctors">
            <Button btnName="appointment" classForButton="px-4 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs lg:w-full xl:w-fit"/>
          </Link>
        </div>
      </div>
    );
  };

  // after 5 second individual doctor data display functionality here
  useEffect(() => {
    let intervalId;
    if (doctors.length > 0) {
      intervalId = StartInterval(setCurrentIndex, doctors);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, doctors, setCurrentIndex]);

  return (
    <div className="shadow-xl min-h-screen mt-5 bg-[#FFF7F4]  sticky top-[80px] hidden lg:block">
      {displayDoctor()}
    </div>
  );
};

export default Advertise;
