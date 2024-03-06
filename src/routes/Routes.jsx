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
import AddJob from "../pages/Dashboard/jobPanel/addJob/AddJob";
import AllJobs from "../pages/Dashboard/jobPanel/allJobs/AllJobs";
import AllArticles from "../pages/Dashboard/allArticles/AllArticles";
import UpdateJob from "../pages/dashboard/jobPanel/allJobs/UpdateJob";
import axios from "axios";
import UpdateDoctor from "../pages/Dashboard/doctors/UpdateDoctor";

import MyCart from "../pages/Dashboard/MyCart/MyCart";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import MyDoctors from "../pages/Dashboard/MyDoctors/MyDoctors";
import AdvicePanel from "../pages/Dashboard/Advices/advicePanel";
import DoctorsPanel from "../pages/Dashboard/doctors/doctorsPanel";
import ArticlesPanel from "../pages/Dashboard/allArticles/articlesPanel";
import ProductsPanel from "../pages/Dashboard/productsPanel/ProductsPanel";
import Overview from "../pages/Dashboard/overview/Overview";
import PrivateRoute from "./PrivateRoute";
import TakeAppointment from "../pages/takeAppointment/TakeAppointment";
import UpdateProduct from "../pages/Dashboard/productsPanel/updateProduct/UpdateProduct";
import ManageUsers from "../pages/Dashboard/manageUsers/ManageUsers";
import AllUsers from "../pages/Dashboard/manageUsers/AllUsers";
import CheckOut from "../pages/checkOut/CheckOut";
import PaymentSuccess from "../pages/paymentSuccess/paymentSuccess";
import AdminOverview from "../pages/Dashboard/adminOverview/AdminOverview";
import Profiles from "../pages/Dashboard/profiles/Profiles";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Success from "../pages/takeAppointment/otherPages/Success";
import ZegoMeeting from "../pages/takeAppointment/otherPages/zegoMeeting/ZegoMeeting";


export const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/payment/success/tranId",
        element: <PaymentSuccess></PaymentSuccess>,
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
        path: "/product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allProducts/${params.id}`),
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
        path: "/doctors/appointment/:id",
        element: (
          <PrivateRoute>
            <TakeAppointment />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/success/:tranId",
        element: (
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        ),
      },
      {
        path: "room/id/:roomId",
        element: (
          <PrivateRoute>
            <ZegoMeeting />
          </PrivateRoute>
        ),
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
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "checkout",
        element:<CheckOut></CheckOut>
      },
    ],
  },
  // Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminProfile",
        element: <Profiles></Profiles>,
      },
      {
        path: "products-panel",
        element: <ProductsPanel></ProductsPanel>,
      },
      {
        path: "products-panel/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: async ({ params }) => {
          return await axios.get(
            `http://localhost:5000/allProducts/${params.id}`
          )

        },
      },
      {
        path: "overview-user",
        element: <Overview />,
      },
      {
        path: "overview-admin",
        element: <AdminOverview/>
      },
      {
        path: "doctors-panel",
        element: <DoctorsPanel></DoctorsPanel>,
      },
      {
        path: "doctors-panel/update-doctor/:id",
        element: <UpdateDoctor />,
        loader: async ({ params }) => {
          return await axios.get(`http://localhost:5000/doctors/${params.id}`);
        },
      },
      {
        path: "articles-panel",
        element: <ArticlesPanel></ArticlesPanel>,
      },
      {
        path: "advice-panel",
        element: <AdvicePanel></AdvicePanel>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>
      },
      {
        path: "job-panel",
        element: <JobPanel />,
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
          );
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
          return await axios.get(`http://localhost:5000/doctors/${params.id}`);
        },
      },
      {
        path: "myProfile",
        element: <Profiles></Profiles>,
      },
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "myReviews",
        element: <MyReviews />,
      },
      {
        path: "myDoctors",
        element: <MyDoctors></MyDoctors>,
      },
    ],
  },
]);
