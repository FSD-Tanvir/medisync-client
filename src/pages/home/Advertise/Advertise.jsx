import { useEffect, useState } from "react";
import StartInterval from "./StartInterval";

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
      <div className="w-full p-3 ">
        <h2>{doctor?.name}</h2>
        <p>{doctor?.specialization}</p>
        <img
          className="w-full h-[200px] object-cover"
          src={doctor?.image}
          alt={doctor?.name}
        />
        <p className="mt-2">
          <span className="font-semibold">Email:</span> {doctor?.contact?.email}
        </p>
        <p className="">
          <span className="font-semibold">Phone:</span> {doctor?.contact?.phone}
        </p>
        <p>
          <span className="font-semibold">Availability:</span>{" "}
          {JSON.stringify(doctor?.availability)}
        </p>
        <div className="flex justify-center items-center mt-2">
          <button className="btn bg-[#0acafa] px-4 py-1 font-semibold text-white">
            Appointment
          </button>
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
    <div className="shadow-xl border sticky top-[100px] hidden lg:block">
      {displayDoctor()}
    </div>
  );
};

export default Advertise;
