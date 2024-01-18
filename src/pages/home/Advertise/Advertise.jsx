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
      <div className="w-full p-3">
        <div className="h-[560px]">
          <h2 className="font-semibold text-xl text-green-400">{doctor?.name}</h2>
          <p className="font-medium mb-3">{doctor?.specialization}</p>
          <img
            className="w-full h-[200px] object-cover"
            src={doctor?.image}
            alt={doctor?.name}
          />
          <div className="mt-5">
            <h1 className="font-semibold text-center mt-2 text-xl">Availability</h1>
            <h2><span className="font-semibold">Saturday:</span> {JSON.stringify(doctor?.availability?.Saturday)}</h2>
            <h2><span className="font-semibold">Sunday:</span> {JSON.stringify(doctor?.availability?.sunday ? " " : "Not available")}</h2>
            <h2><span className="font-semibold">Monday:</span> {JSON.stringify(doctor?.availability?.monday)}</h2>
            <h2><span className="font-semibold">Tuesday:</span> {JSON.stringify(doctor?.availability?.tuesday)}</h2>
            <h2><span className="font-semibold">Wednesday:</span> {JSON.stringify(doctor?.availability?.wednesday)}</h2>
            <h2><span className="font-semibold">Thursday:</span> {JSON.stringify(doctor?.availability?.thursday)}</h2>
            <h2><span className="font-semibold">Friday:</span> {JSON.stringify(doctor?.availability?.friday)}</h2>
          </div>
          <p className="mt-3">
            <span className="font-semibold ">Email:</span> {doctor?.contact?.email}
          </p>
          <p className="mb-10">
            <span className="font-semibold ">Phone:</span> {doctor?.contact?.phone}
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className="btn bg-blue-400 px-4 py-1 font-semibold text-white">
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
    <div className="shadow-xl min-h-screen bg-gray-100 sticky top-[124px] hidden lg:block">
      {displayDoctor()}
    </div>
  );
};

export default Advertise;
