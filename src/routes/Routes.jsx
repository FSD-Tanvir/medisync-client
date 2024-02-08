import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Career from "../pages/career/Career";
import JobDetails from "../pages/career/jobDetails/JobDetails";
import ContactUs from "../pages/contactUs/ContactUs";
import Doctors from "../pages/doctors/Doctors";
import Advice from "../pages/home/ThreeCards/Advice";
import NewsArticles from "../pages/News&Articles/NewsArticles";
import NewsArticlesDetails from "../pages/News&Articles/NewsArticlesDetails";
import ByProducts from "../pages/byProducts/ByProducts";
import Dashboard from "../layouts/Dashboard";
import AddAdvice from "../pages/Dashboard/Advices/AddAdvice";
import AllAdvices from "../pages/Dashboard/Advices/AllAdvices";
import JobPanel from "../pages/Dashboard/jobPanel/JobPanel";
import Overview from "../pages/dashboard/jobPanel/overview/Overview";
import AddJob from "../pages/Dashboard/jobPanel/addJob/AddJob";
import AllJobs from "../pages/Dashboard/jobPanel/allJobs/AllJobs";

import AllArticles from "../pages/Dashboard/allArticles/AllArticles";

import UpdateJob from "../pages/dashboard/jobPanel/allJobs/UpdateJob";
import axios from "axios";
import UpdateDoctor from "../pages/Dashboard/doctors/UpdateDoctor";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import MyDoctors from "../pages/Dashboard/MyDoctors/MyDoctors";
import AdvicePanel from "../pages/Dashboard/Advices/advicePanel";
import DoctorsPanel from "../pages/Dashboard/doctors/doctorsPanel";
import ArticlesPanel from "../pages/Dashboard/allArticles/articlesPanel";



export const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <ByProducts></ByProducts>,
      },
      {
        path: "/all-products/:cat",
        element: <ByProducts></ByProducts>,
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
        element: <Career />,
      },
      {
        path: "career/job-details/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/single/${params.id}`),
      },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  // Dashboard Layout
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>
      },
      {
        path: "doctors-panel",
        element: <DoctorsPanel></DoctorsPanel>
      },
      {
        path: "articles-panel",
        element: <ArticlesPanel></ArticlesPanel>
      },
      {
        path: "advice-panel",
        element: <AdvicePanel></AdvicePanel>
      },
      {
        path: "job-panel",
        element: <JobPanel />,
      },
      {
        path: "job-panel/overview",
        element: <Overview />,
      },
      {
        path: "job-panel/add-job",
        element: <AddJob />,
      },
      {
        path: "job-panel/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "job-panel/update-job/:id",
        element: <UpdateJob />,
        loader: async ({ params }) => {
          return await axios.get(
            `http://localhost:5000/jobs/single/${params.id}`

          )
        },
      },
      {
        path: "advices/addAdvice",
        element: <AddAdvice></AddAdvice>,
      },
      {
        path: "advices/allAdvices",

        element: <AllAdvices></AllAdvices>,
      },
      {
        path: "all-articles",
        element: <AllArticles />,
      },
      {
        path: "doctors/update-doctor/:id",
        element: <UpdateDoctor />,
        loader: async ({ params }) => {
          return await axios.get(
            `http://localhost:5000/doctors/${params.id}`

          )
        },
      },
      {
        path: "myProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "myReviews",
        element: <MyReviews />
      },
      {
        path: "myDoctors",
        element: <MyDoctors></MyDoctors>
      },
    ],
  },
]);
