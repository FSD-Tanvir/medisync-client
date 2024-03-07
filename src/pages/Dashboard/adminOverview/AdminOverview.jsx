
import "./AdminOverview.css";
import Cards from "./cards/Cards";
import Charts from "./charts/Charts";

// import appointmentChartImg from "/src/assets/Business_icons_Ultraviolet_by_Icons8_SVG/Bar Chart.svg"

const AdminOverview = () => {
  return (
    <div className="min-h-screen p-5 admin-overview">
      <p className="w-full font-bold text-3xl sm:text-4xl text-center pt-8">
        Welcome to <span className="text-blue-600">Admin Dashboard</span>
      </p>
      {/* section top cards */}
      <Cards/>
      {/* another charts cards */}
      <Charts/>
      
    </div>
  );
};

export default AdminOverview;
