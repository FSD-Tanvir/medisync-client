import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

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
        path: "/career",
        element: <Home />,
      },
    ],
  },
]);
