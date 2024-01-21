import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedQualification, setSelectedQualification] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // doctors data fetch here
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  // Extract unique qualifications for dropdown options
  const uniqueQualifications = Array.from(
    new Set(doctors.map((doctor) => doctor.qualification))
  );

  // Filter doctors based on selected qualification
  const filteredDoctors =
    selectedQualification === "All"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.qualification === selectedQualification
        );

  // Paginate doctors based on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredDoctors.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Meet Our Doctors
      </h1>

      {/* Qualification Filter */}
      <div className="flex justify-center items-center mb-4">
        <label className="mr-2">Filter by Qualification:</label>
        <select
          className="border border-gray-300 p-2 rounded-md"
          value={selectedQualification}
          onChange={(e) => {
            setCurrentPage(1);
            setSelectedQualification(e.target.value);
          }}
        >
          <option value="All">All</option>
          {/* Add options for each unique qualification */}
          {uniqueQualifications.map((qualification) => (
            <option key={qualification} value={qualification}>
              {qualification}
            </option>
          ))}
        </select>
      </div>

      {/* Display Filtered Doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 ">
        {currentCards.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-20">
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">{currentPage}</span>
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600"
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
