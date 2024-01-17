import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Advertise from "../pages/home/Advertise/Advertise";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          <Outlet />
        </div>
        <Advertise />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
