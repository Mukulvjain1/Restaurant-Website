import React from "react";
import {
  RiShoppingCart2Line,
  RiMenuLine,
  RiCloseLargeLine,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  
  return (
    <>
      <header className="w-screen py-10 fixed bg-transparent">
        <nav className="flex justify-between px-4 md:justify-evenly items-center w-full relative">
          <div id="logo" className="flex items-center justify-center w-60">
            <img src="./src/assets/Logo.png" className="" />
          </div>
          <div id="Nav-items" className="flex items-center justify-center">
            <ul className="md:flex hidden items-center justify-center gap-4">
              <li>
                <NavLink exact to="/" className=" hover:text-rose-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="menu" className=" hover:text-rose-500">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className=" hover:text-rose-500">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="order" className=" hover:text-rose-500">
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink to="reservation" className=" hover:text-rose-500">
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" className=" hover:text-rose-500">
                  Contact
                </NavLink>
              </li>
            </ul>

            <RiMenuLine className="sm:hidden" />

            {/* Hamburger Menu for smaller device */}
            <ul
              className="hidden items-end px-5 justify-center  py-5 bg-white flex-col gap-5 w-1/4 
        backdrop-filter absolute top-0 right-0 bg-blur-sm animation "
            >
              <RiCloseLargeLine className="cursor-pointer absolute top-3 left-3  " />
              <li>
                <NavLink exact to="/" className=" hover:text-rose-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="menu" className=" hover:text-rose-500">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className=" hover:text-rose-500">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="order" className=" hover:text-rose-500">
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="reservation" className=" hover:text-rose-500">
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" className=" hover:text-rose-500">
                  Contact
                </NavLink>
              </li>
              <div id="Btn" className="flex items-end w-10/122 gap-3 flex-col">
                <RiShoppingCart2Line
                  size="50"
                  className="bg-red-300 text-black p-3 rounded-full"
                />
                <button className="h-10 w-24 rounded-lg bg-red-500 text-white">
                  Log in
                </button>
              </div>
            </ul>
          </div>
          <div
            id="Btn"
            className="hidden items-center justify-center gap-3 md:flex"
          >
            <RiShoppingCart2Line
              size="50"
              className="bg-white p-3 rounded-full"
            />
            <button className="h-10 w-24 rounded-lg bg-red-500 text-white">
                  Log in
                </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
