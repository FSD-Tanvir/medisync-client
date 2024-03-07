import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Calendar from "react-calendar"; // Import the React calendar component
import "react-calendar/dist/Calendar.css"; // Import the calendar styles
import TakeAppointmentModal from "./TakeAppointmentModal";
import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TakeAppointment = () => {
  const [doctor, setDoctor] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [extraInfoOfUser, setExtraInfoOfUser] = useState(Number);
  const [bookedDates, setBookedDates] = useState([]);
  const [bookedDoctorIds, setBookedDoctorIds] = useState([]);
  const [startTime, setStartTime] = useState(null)
  const [isModal, setIsModal] = useState(false);
  const userData = useUser();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // go to top when navigated
  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  // calculate the start & end time
  useEffect(()=>{
    if(selectedDate && selectedTimeSlot){
  // converting the selectedDate to iso string 
    const selectedDateIso = selectedDate.toISOString()
    // split the timeSlot into hours & minutes
    const [hours,minutes] = selectedTimeSlot.split(":");
    // creating the new date object for start time 
    const start = new Date(selectedDateIso);
    start.setHours(hours,minutes,0,0);

    setStartTime(start)
    }
  },[selectedDate,selectedTimeSlot])


  // set all appointment dates to setBookedDates if they are have booked any appointment
  //  and set all doctors id to setBookedDoctorIds if their any id 
  useEffect(() => {
    setBookedDates(
      userData?.appointments.map((appointment) => new Date(appointment?.date))
    );
    setBookedDoctorIds(
      userData?.appointments.map((appointment) => appointment?.doctorId)
    );
  }, [userData?.appointments]);

  // check if already booked
  const handleCheckBookedDate = ({ date }) => {
    const today = new Date();
    today.setHours(0,0,0,0) // here  I have set today's time to midnight
    const isDoctorAppointed = bookedDates?.some((bookedDate,idx) =>(
      bookedDoctorIds[idx] === id && 
      bookedDate.getDate() === date.getDate() &&
          bookedDate.getMonth() === date.getMonth() &&
          bookedDate.getFullYear() === date.getFullYear()
    ))
    return date < today || isDoctorAppointed
  };

  // fetching doctor data
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

  // show modal if date & time slot are selected
  useEffect(() => {
    if (selectedDate && selectedTimeSlot) {
      setIsModal(true);
    }
  }, [selectedDate, selectedTimeSlot]);

  // Function to generate time slots from 7 pm to 10 pm with 30 minutes intervals
  const generateTimeSlots = () => {
    const startTime = 17 * 60; // 05:00 pm in minutes
    const endTime = 22 * 60; // 10:00 pm in minutes
    const interval = 30; // 30 minutes interval
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can perform any actions like submitting the form data to a backend server
    // with the selected date and time slot

    // created appointment info object
    const appointmentInfo = {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      mobileNumber: +extraInfoOfUser?.mobile_number,
      userEmail:userData?.email,
      currency:extraInfoOfUser?.currency,
      doctorId: id,
    };
    console.log(appointmentInfo)
    try {
      const { data } = await axiosSecure.post(
        `/doctorAppointments/save-appointment/${userData?._id}?startTime=${startTime}`,
        appointmentInfo
      );
        window.location.replace(data?.url)

      console.log(data);
    } catch (err) {
      if (
        err?.response?.data?.message ===
        "You have already booked this slot and date"
      ) {
        toast.error("You have already booked this slot and date");
      }
      console.log(err);
    }
  };

  return (
    <div className="py-10 px-5 ">
      <h2 className="text-3xl font-medium text-center pb-10 ">
        Appointment of {doctor?.name}
      </h2>

      {/* Calendar component for selecting date ---- flex */}
      <div className="flex text-center  justify-center pb-10">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={handleCheckBookedDate}
        />
      </div>

      {/* Time slot selection ---- flex */}
      <div className="flex justify-center pb-10 flex-wrap gap-5 ">
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
      {/* modal showing here  */}
      {isModal && (
        <TakeAppointmentModal
          setExtraInfoOfUser={setExtraInfoOfUser}
          setIsModal={setIsModal}
        />
      )}

      {/* Form submission */}
      <form onSubmit={handleSubmit} className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 disabled:opacity-25 disabled:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          disabled={!selectedDate || !selectedTimeSlot} // Disable button if date or time slot is not selected
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default TakeAppointment;
