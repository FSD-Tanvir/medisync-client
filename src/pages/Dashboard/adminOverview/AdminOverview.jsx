
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
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 my-6">
      {/* satisfied users */}
        <div className="border rounded-lg h-[20vh] p-4 shadow-lg">
          <h3 className="text-lg font-semibold">Satisfied Users</h3>
        </div>
      {/* Orders Timeline */}
        <div className="border rounded-lg h-[20vh] p-4 shadow-lg">
          <h3 className="text-lg font-semibold">Orders Timeline</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
