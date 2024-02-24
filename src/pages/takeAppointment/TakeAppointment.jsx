import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Calendar from "react-calendar"; // Import the React calendar component
import "react-calendar/dist/Calendar.css"; // Import the calendar styles

const TakeAppointment = () => {
  const [doctor, setDoctor] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: doctor } = await axiosPublic.get(`/doctors/${id}`);
        setDoctor(doctor.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };
    fetchData();
  }, [id, axiosPublic]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Function to generate time slots from 7 pm to 10 pm with 15-minute intervals
  const generateTimeSlots = () => {
    const startTime = 19 * 60; // 7 pm in minutes
    const endTime = 22 * 60; // 10 pm in minutes
    const interval = 15; // 15 minutes interval
    const timeSlots = [];
    for (let time = startTime; time < endTime; time += interval) {
      const hours = Math.floor(time / 60);
      const minutes = (time % 60).toString().padStart(2, "0");
      const formattedTime = `${hours}:${minutes}`;
      timeSlots.push(formattedTime);
    }
    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  // Function to handle when a date is selected on the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset selected time slot when date changes
    setSelectedTimeSlot(null);
  };

  // Function to handle when a time slot is selected
  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any actions like submitting the form data to a backend server
    // with the selected date and time slot
  };

  return (
    <div className="py-10 px-5">
      <h2 className="text-3xl font-medium text-center pb-10 ">
        Appointment of {doctor?.name}
      </h2>

      {/* Calendar component for selecting date */}
      <div className="text-center  flex justify-center pb-10">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {/* Time slot selection */}
      <div className="flex justify-center pb-10 flex-wrap gap-5">
        {/* Displaying generated time slots */}
        {timeSlots.map((timeSlot, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 border ${
              selectedTimeSlot === timeSlot ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTimeSlotSelect(timeSlot)}
          >
            {timeSlot}
          </button>
        ))}
      </div>

      {/* Form submission */}
      <form onSubmit={handleSubmit} className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!selectedDate || !selectedTimeSlot} // Disable button if date or time slot is not selected
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default TakeAppointment;
