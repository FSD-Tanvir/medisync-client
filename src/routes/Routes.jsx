import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import AboutUs from "../pages/AboutUs/AboutUs";

import Career from "../pages/career/Career";
import JobDetails from "../pages/career/jobdetails/JobDetails";
import ContactUs from "../pages/contactUs/ContactUs";
import Doctors from "../pages/doctors/Doctors";

import Advice from "../pages/home/ThreeCards/Advice";


import NewsArticles from "../pages/News&Articles/NewsArticles";
import NewsArticlesDetails from "../pages/News&Articles/NewsArticlesDetails";


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
        element: <AboutUs />,
      },

      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/advice",
        element: <Advice></Advice>,
      },
      {
        path: "/articles",
        element: <NewsArticles />,
      },
      {
        path: "/articles/:id",
        element: <NewsArticlesDetails />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
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
