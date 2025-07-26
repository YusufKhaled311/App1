import { useState } from "react";

import { Helmet } from 'react-helmet';

import Layout from "./assets/Components/Layout/Layout";
import Navbar from "./assets/Components/Navbar/Navbar";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Footer from "./assets/Components/Footer/Footer";
import Error from "./assets/Components/Error/Error";
import '@fortawesome/fontawesome-free/css/all.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import {  RouterProvider,Navigate, createHashRouter,} from "react-router-dom";

const router = createHashRouter([
  {path: "/", element: <Navigate to="/startFramework" />},

  {
    path: "/startFramework", element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // This is your default (home) page inside Layout
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
