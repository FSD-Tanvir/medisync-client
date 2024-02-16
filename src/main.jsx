import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Porviders/AuthProvider.jsx";

// socket.io

import io from "socket.io-client";
import StateProvider from "./Porviders/StateProvider.jsx";

const socket = io.connect("http://localhost:5000");
console.log(socket);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StateProvider>
            <RouterProvider router={router} />
            <Toaster />
          </StateProvider>
        </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
