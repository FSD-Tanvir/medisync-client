import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import AboutUs from "../pages/AboutUs/AboutUs";

import ContactUs from "../pages/contactUs/ContactUs";
import Doctors from "../pages/doctors/Doctors";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/aboutUs",
        element: <AboutUs />
      },

      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/advice",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/career",
        element: <Home />,
      },
      { path: "contact-us", element: <ContactUs /> },

    ],
  },
]);
