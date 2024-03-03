import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";


const AppointmentChart = ({setFilterTextAppointment,appointmentStatisticsData, setWhichChart}) => {

  // setting chart name 
  useEffect(()=>{
    setWhichChart("AppointmentAnalytics")
  },[setWhichChart])

  // destructuring appointment Statistics Data
  const {increase,
    decrease,
    percentageIncrease,
    percentageDecrease,
    appointmentStatistics} = appointmentStatisticsData || {}

    const handleSorting = (e) =>{
      setWhichChart("AppointmentAnalytics")
      setFilterTextAppointment(e?.target?.value?.toLowerCase().replace(" ", "_"))
    }

  return (
    <>
      {/* appointments */}
      <div className="border rounded-lg  p-4 shadow-lg">
      
        <div className="flex justify-between">
          {/* title  */}
          <h3 className="text-lg font-semibold">Appointment Statistics ({appointmentStatistics && appointmentStatistics[appointmentStatistics?.length-1]?.totalAppointments})</h3>
          {/* filtering section  */}
          <select
            defaultValue="week"
            onChange={(e) =>
              handleSorting(e)
            }
            className="outline-none rounded-full px-3 border "
          >
            <option value="all day">All day</option>
            <option value="today">Today</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <ResponsiveContainer width={"100%"} height="70%">
          <LineChart data={appointmentStatistics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="totalAppointments" />
            <YAxis/>
            <Tooltip />
            <Legend/>
            <Line type="Function" dataKey="totalAppointments" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex gap-5 items-center">
          <span className="flex items-center gap-2 text-green-500">
            Increased {increase > 0 ? increase:0} 
            <BsGraphUpArrow size={18} className="" />
            <span>{percentageIncrease > 0 ? percentageIncrease:0}%</span>
          </span>
          <span className="h-6 w-1 bg-blue-600"></span>
          <span className="flex items-center gap-2 text-red-500">
            Decreased {decrease > 0 ? decrease:0} 
            <BsGraphDownArrow size={18} className="" />
            <span>{percentageDecrease > 0 ? percentageDecrease: 0}%</span>
          </span>
        </div>
    </div>
    </>
  );
};

export default AppointmentChart;
