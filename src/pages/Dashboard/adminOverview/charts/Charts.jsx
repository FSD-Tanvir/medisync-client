import { useEffect, useState } from "react";
import AppointmentChart from "./appointmentChart/AppointmentChart";
import UsersAnalytics from "./usersAnalytics/UsersAnalytics";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Charts = () => {
  const axiosSecure = useAxiosSecure();

  const [filterTextUser, setFilterTextUser] = useState("week");
  const [filterTextAppointment, setFilterTextAppointment] = useState("week");
  const [whichChart, setWhichChart] = useState("");
  const [userStatisticsData, setUserStatisticsData] = useState([]);
  const [appointmentStatisticsData, setAppointmentStatisticsData] = useState(
    []
  );

  useEffect(() => {
    // first checking is filterText != null
    if (filterTextUser) {
      const fetchData = async () => {
        const { data } = await axiosSecure.get(
          `/users/all?filter=${filterTextUser}`
        );
        setUserStatisticsData(data);
      };
      // calling fetchData function
      fetchData();
    }
  }, [axiosSecure, filterTextUser]);
  useEffect(() => {
    if (filterTextAppointment) {
      const fetchData = async () => {
        const { data } = await axiosSecure.get(
          `/doctorAppointments/all?filter=${filterTextAppointment}`
        );
        setAppointmentStatisticsData(data);
      };
      // calling fetchData function
      fetchData();
    }
  }, [axiosSecure, filterTextAppointment]);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
      <AppointmentChart
        setFilterTextAppointment={setFilterTextAppointment}
        appointmentStatisticsData={appointmentStatisticsData}
        setWhichChart={setWhichChart}
      />
      {/*Users analytics */}
      <UsersAnalytics
        setFilterTextUser={setFilterTextUser}
        userStatisticsData={userStatisticsData}
        setWhichChart={setWhichChart}
      />
    </div>
  );
};

export default Charts;
