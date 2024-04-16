import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
// import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import Order from "./Components/Order/Order";
import Chef from "./Components/Chef/Chef";
import Reservation from "./Components/Reservaation/Reservation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      {/* <Route path="menu" element={<Menu />} /> */}
      <Route path="contact" element={<Contact />} />
      <Route path="order" element={<Order />} />
      <Route path="chef" element={<Chef />} />
      <Route path="reservation" element={<Reservation/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
