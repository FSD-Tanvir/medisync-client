import AppointmentChart from "./appointmentChart/AppointmentChart";

const Charts = () => {


    

    return (
        <div className="grid gap-5 grid-cols-5 ">
        <AppointmentChart/>
        {/* new Users */}
        <div className="col-span-2 border rounded-lg h-[20vh] p-4 shadow-lg">
          <h3 className="text-lg font-semibold">New Users</h3>
        </div>
      </div>
    );
};

export default Charts;