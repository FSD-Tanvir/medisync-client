// import { useState } from "react";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    image,
    specialization,
    qualification,
    university,
    experience_years,
  } = doctor;

  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const openModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <div className="container mx-auto mt-5 p-4 max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 hover:shadow-lg transition duration-300">
      {/* Doctor Image */}
      <img
        src={image}
        alt={`${name}'s Image`}
        className="w-full h-[240px] rounded-lg  object-cover object-center mb-4"
      />

      {/* Doctor Information */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{specialization}</p>
        <p className="text-gray-500 text-sm mb-2">{qualification}</p>
        <p className="text-gray-500 text-sm mb-2">{university}</p>
        <p className="text-gray-500 text-sm mb-2">
          Experience: {experience_years} years
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-[#003049] text-white text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full focus:outline-none hover:text-[#00ffff]"
          //   onClick={openModal}
        >
          Take Appointment
        </button>
        <div
          className="flex items-center cursor-pointer"
          // onClick={openModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm1-11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-cyan-500 text-sm underline  hover:text-cyan-600">Reviews (25)</p>
        </div>
      </div>

      {/* Review Modal */}
      {/* {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-800 opacity-75" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">{name}'s Reviews</h2>
            <p>Review 1</p>
            <p>Review 2</p>
            <button className="bg-[#003049] text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default DoctorCard;
