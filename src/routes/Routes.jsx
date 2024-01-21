import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import AboutUs from "../pages/AboutUs/AboutUs";

import ContactUs from "../pages/contact/ContactUs";

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
        element: <Home />,
      },
      {
        path: "/career",
        element: <Home />,
      },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
]);
