import useUser from "../../../hooks/useUser";
import ShowDate from "./ShowDate";
import ShowDoctor from "./ShowDoctor";

const MyDoctors = () => {
  const userData = useUser();

  return (
    <div className="my-8 px-4">
      {/* heading  */}
      <h2 className="w-min whitespace-nowrap mx-auto font-bold text-3xl text-center mt-10 mb-10 lg:mt-0 border-b-4 border-b-blue-500">
        My
        <span className="text-blue-600"> Doctors</span>
      </h2>
      {/* all appointments here  */}
      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 box-border">
        {userData &&
          userData.appointments.map((appointment, idx) => (
            <div
              key={idx}
              className=" w-full min-h-[10vh] p-4 rounded-lg shadow-lg border-t bg-blue-500/10"
            >
              <ShowDoctor doctorId={appointment.doctorId} />
              <p
                className=" select-none whitespace-nowrap min-h-6"
                title="On click to select and copy link font-semibold"
              >
                Meeting Link:
                <span className="select-all font-normal text-green-700 overflow-auto scrollBarHidden block p-2 bg-white rounded-lg">
                  {appointment?.meetingLinks}
                </span>
              </p>
              <ShowDate date={appointment?.date} />
              <p className="select-none font-semibold">
                TimeSlot:
                <span className="font-normal"> {appointment?.timeSlot}</span>{" "}
                (24 hours format)
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyDoctors;
