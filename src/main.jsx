import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.jsx";
import "./index.css";
import Navbar from "./pages/Navbar.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);
