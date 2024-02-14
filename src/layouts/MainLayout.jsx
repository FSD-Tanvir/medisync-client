import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Advertise from "../pages/home/Advertise/Advertise";
import Chatbot from "../components/shared/chatbot/Chatbot";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || false;

  return (
    <div className="bg-navbar-bg-color">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:w-full">
          <div className={`w-full ${isHomePage && "lg:w-3/4 text-white"}`}>
            <Outlet />
          </div>
          {isHomePage && (
            <div className="lg:pl-3 lg:w-1/4">
              <Advertise />
            </div>
          )}
        </div>
      </div>

      <Footer />
      <Chatbot></Chatbot>
    </div>
  );
};

export default MainLayout;
