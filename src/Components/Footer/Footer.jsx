import React from "react";
import {
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookFill,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 w-screen flex justify-center items-center flex-col p-10">
        <div
          id="main"
          className="flex md:justify-around w-10/12 flex-col md:flex-row p-4 gap-5"
        >
          <section className="flex flex-1 items-start flex-col justify-center">
            <div id="logo" className=" w-full">
              <img src="./src/assets/logo2.png" className="" />
            </div>
            <p className="text-white">
              {" "}
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
            <div
              id="social"
              className="flex items-center justify-center gap-3 m-5"
            >
              <RiInstagramLine
                size={"45"}
                className="p-2 bg-white rounded-full"
              />
              <RiTwitterLine
                size={"45"}
                className="p-2 bg-white rounded-full"
              />
              <RiFacebookFill
                size={"45"}
                className="p-2 bg-white rounded-full"
              />
            </div>
          </section>
          <section className="flex flex-col flex-1 gap-6 p-5 justify-start">
            <h1 className="text-red-500 font-bold text-2xl">Pages</h1>
            <ul className="text-white flex flex-col items-start justify-center gap-8">
              <li className="">
                <NavLink
                  exact
                  to="/"
                  className="duration-300 text-lg hover:text-rose-500"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="menu"
                  className="duration-300  hover:text-rose-500 text-lg"
                >
                  Menu
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  to="order"
                  className="duration-300 text-lg hover:text-rose-500"
                >
                  Order Online
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="contact"
                  className="duration-300  hover:text-rose-500"
                >
                  Contact
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="reservation"
                  className="duration-300  hover:text-rose-500"
                >
                  Reservation
                </NavLink>
              </li>
            </ul>
          </section>
          <section className="flex flex-col flex-1 gap-6 p-5 justify-start">
            <h1 className="text-red-500 font-bold text-2xl">Information</h1>
            <ul className="text-white">
              <li>
                <NavLink to="about" className="duration-300  hover:text-rose-500">
                  About
                </NavLink>
              </li>
              <li className="my-10">
                <NavLink
                  to="testimonial"
                  className="duration-300  hover:text-rose-500"
                >
                  Testimonial
                </NavLink>
              </li>
              <li className="my-10">
                <NavLink
                  to="event"
                  className="duration-300  hover:text-rose-500"
                >
                  Event
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
        <h1 className="text-center w-full text-white">Copyright © 2024</h1>
      </footer>
    </>
  );
}

export default Footer;
<li>
  <NavLink to="abt" className="duration-300 hover:text-rose-500">
    About
  </NavLink>
</li>;
