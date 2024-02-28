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
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { useEffect } from "react";
const UsersAnalytics = ({ setFilterTextUser, userStatisticsData,setWhichChart }) => {
  // destructuring user Statistics Data 
  const { userStatistics,increase, decrease, percentageIncrease, percentageDecrease } = userStatisticsData || {};
  // setting chart name  
  useEffect(()=>{
    setWhichChart("UserAnalytics")
  },[setWhichChart])

  const handleSorting = (e) =>{
    setWhichChart("UserAnalytics")
    setFilterTextUser(e?.target?.value?.toLowerCase().replace(" ", "_"))
  }

  return (
    <div className="border rounded-lg  p-4 shadow-lg">
      
        <div className="flex justify-between">
          {/* title  */}
          <h3 className="text-lg font-semibold">Users Statistics ({userStatistics &&userStatistics[userStatistics?.length-1]?.totalUsers})</h3>
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
          <LineChart data={userStatistics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="totalUsers" />
            <YAxis/>
            <Tooltip />
            <Legend/>
            <Line type="Function" dataKey="totalUsers" stroke="#8884d8" />
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
  );
};

export default UsersAnalytics;
