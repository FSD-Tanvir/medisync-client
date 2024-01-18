import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Advertise from "../pages/home/Advertise/Advertise";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || false;
  console.log(location);
  console.log(isHomePage);
  return (
    <>
      <Navbar />
      <div className="flex lg:w-full">
        <div className={`w-full lg:w-3/4"`}>
          <Outlet />
        </div>
        {isHomePage && <div className="lg:w-1/4">
          <Advertise />
        </div>}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
