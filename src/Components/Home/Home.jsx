import React from "react";
import Button from "../Utilitycomp/Button";
import "./Home.css";
import MenuCard from "../Utilitycomp/MenuCard";
import foodItemsHome from "../../assets/Data/FoodData.js";
import chefData from "../../assets/Data/ChefData.js";
import ChefCard from "../Utilitycomp/ChefCard.jsx";
import CustomerReview from "../Utilitycomp/CustomerReview.jsx";

function Home() {
  return (
    <>
      <div id="main" className=" flex items-center justify-center flex-col">
        {/* page 1 */}
        <div
          id="page1"
          className=" bg-red-100  w-screen py-32  grid-cols-1 flex-wrap
          grid md:grid-cols-2 gap-5"
        >
          <div
            id="page1-text"
            className=" px-10 gap-5 flex-col flex items-center text-center md:text-start md:items-start justify-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-center md:text-start">
              Best Restaurant In <span className="text-red-500">Town.</span>
            </h1>
            <p className="text-lg text-slate-600">
              We provide best food in town, we provide home delivery and dine in
              services.
            </p>
            <div
              id="buttons"
              className="p-3 flex items-center justify-center md:justify-start  gap-5"
            >
              <Button
                text={"Order Now"}
                path={"order"}
                css={"h-12 w-36 bg-red-500 text-white"}
              />
              <Button
                text={"Reservation"}
                path={"reservation"}
                css={"h-12 w-36 text-red-500 bg-red-200"}
              />
            </div>
          </div>
          <div
            id="page1-img"
            className="flex-1 flex justify-center items-center px-10 "
          >
            <img
              src="./src/assets/HomePage/Spaghetti.png"
              alt=""
              className="rotateAnimation"
            />
          </div>
        </div>
        {/* page 2 */}
        <div
          id="page2"
          className=" bg-emerald-50 w-screen grid-cols-1 flex-wrap
          grid md:grid-cols-2 py-10"
        >
          <div
            id="page2-text"
            className=" px-10 gap-5 flex-col flex items-center text-center md:text-start md:items-start justify-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold">
              Our Most Popular <span className="text-red-500">Dish</span>
            </h1>
            <p className="text-lg text-slate-600">
              This dish is full of flavor and nutrition! Quinoa is a complete
              protein, providing all the essential amino acids your body needs,
              and is also a good source of fiber.
            </p>
            <Button
              text={"Order Now"}
              path={"order"}
              css={"h-12 w-36 bg-red-500 text-white"}
            />
          </div>
          <div
            id="page2-img"
            className="flex-1 flex items-center justify-center"
          >
            <img src="./src/assets/HomePage/img2.png" alt="" />
          </div>
        </div>
        {/* page 3 */}
        <div
          id="page3"
          className="py-10 flex items-center justify-center flex-col gap-5"
        >
          <h1 className="text-center text-5xl font-semibold">
            Our Popular Menu
          </h1>
          <ul className="flex gap-5 items-center justify-center my-10">
            <li>All Category</li>
            <li>Dinner</li>
            <li>Lunch</li>
            <li>Dessert</li>
            <li>Drink</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-10/12">
            {foodItemsHome.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center  gap-5 my-5">
            <div className="text-xl p-3 bg-black text-white w-10 text-center h-12 rounded-lg flex items-center  justify-center">
              <h1>1</h1>
            </div>
            <div className="text-xl p-3 bg-slate-300 text-black w-10 text-center h-12 rounded-lg flex items-center  justify-center">
              <h1>2</h1>
            </div>
            <div className="text-xl p-3 bg-slate-300 text-black w-10 text-center h-12 rounded-lg flex items-center  justify-center">
              <h1>3</h1>
            </div>
            <div className="text-xl p-3 bg-slate-300 text-black w-10 text-center h-12 rounded-lg flex items-center  justify-center">
              <h1>..</h1>
            </div>
          </div>
        </div>

        {/* page 4 */}
        <div
          id="page4"
          className="py-10 flex items-center justify-center flex-col gap-5"
        >
          <h1 className="text-center text-5xl font-semibold">
            Our Popular Chef
          </h1>
          <div className=" my-5  grid grid-cols-1  md:grid-cols-3 w-8/12 gap-4">
            {chefData.map((item) => (
              <ChefCard item={item} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              text={"View  All"}
              path={"Chef"}
              css={"h-12 w-36 bg-red-500 text-white"}
            />
          </div>
        </div>

        {/* page 5 */}
        <div
          id="page5"
          className="py-10 flex items-center justify-center flex-col gap-5  "
        >
          <h1 className="text-center text-5xl font-semibold">
            What Our Customers Say
          </h1>
          <CustomerReview />
        </div>

        {/* page 6 */}
        <div
          id="page6"
          className="my-10 flex rounded-3xl items-center sm:w-2/3 bg-red-100 h-1/2vh  justify-center flex-col gap-5 w-full"
        >
          <h1 className="text-5xl font-bold text-center">
            Hungry? We are open now..
          </h1>

          <div
            id="buttons"
            className="p-3 flex items-center justify-center md:justify-start  gap-5 flex-col sm:flex-row "
          >
            <Button
              text={"Order Now"}
              path={"order"}
              css={"h-16 w-44 bg-red-500 text-white"}
            />
            <Button
              text={"Reservation"}
              path={"reservation"}
              css={"h-16 w-44 text-red-500 bg-red-200"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
