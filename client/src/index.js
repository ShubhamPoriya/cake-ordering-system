import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "../src/Error";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: <Orders />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/about",
  //   element: <AddContactPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
