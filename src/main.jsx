import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./i18n.js"
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Porviders/AuthProvider.jsx";

// socket.io

import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
console.log(socket);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </React.Suspense>
  </React.StrictMode>
);
