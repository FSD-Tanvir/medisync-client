import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // doctors data fetch here
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  // Extract unique specializations for dropdown options
  const uniqueSpecializations = Array.from(
    new Set(doctors.map((doctor) => doctor.specialization))
  );

  // Filter doctors based on selected specialization
  const filteredDoctors =
    selectedSpecialization === "All"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.specialization === selectedSpecialization
        );

  // Paginate doctors based on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredDoctors.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" pb-5">
      <div className="relative">
        <div>
          <BannerSimple
            imgUrl="https://i.ibb.co/JRMRpvD/3117.jpg"
            text1="Meet with Our Doctors"
            pageName="meetDoctors"
          />
        </div>
        {/* Specialization Filter */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-4 absolute left-1/2 top-[45%] sm:top-[50%] -translate-x-1/2">
          <label className="sm:mr-2 text-lg sm:text-2xl text-white">
            Filter by Specialization
          </label>
          <select
            className="border border-gray-300 p-2 rounded-md"
            value={selectedSpecialization}
            onChange={(e) => {
              setCurrentPage(1);
              setSelectedSpecialization(e.target.value);
            }}
          >
            <option value="All">All</option>
            {/* Add options for each specialization */}
            {uniqueSpecializations.map((specialization) => (
              <option key={specialization} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Filtered Doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 px-1 ">
        {currentCards.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-20">
        <button
          className="bg-[#003049] text-white px-4 py-2 rounded-full focus:outline-none hover:bg-[#00ffff] hover:text-black"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">{currentPage}</span>
        <button
          className="bg-[#003049] text-white px-4 py-2 rounded-full focus:outline-none hover:bg-[#00ffff] hover:text-black"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastCard >= filteredDoctors.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Doctors;
