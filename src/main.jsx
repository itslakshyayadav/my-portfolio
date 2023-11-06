import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Navbar from "./pages/navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);
