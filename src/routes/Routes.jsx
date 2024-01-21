import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import AboutUs from "../pages/AboutUs/AboutUs";

import ContactUs from "../pages/contact/ContactUs";
import Career from "../pages/career/Career";
import JobDetails from "../pages/career/jobdetails/JobDetails";


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
        element: <Home />,
      },
      {
        path: "career",
        element: <Career/>,
      },
      {
        path: "career/job-details/:id",
        element: <JobDetails />
      },
      { path: "contact-us", element: <ContactUs /> },

    ],
  },
]);
