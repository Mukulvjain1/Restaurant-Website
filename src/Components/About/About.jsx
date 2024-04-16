import React from "react";
import Button from "../Utilitycomp/Button";

function About() {
  return (
    <>
      <div
        id="main"
        className="pt-20 flex items-center justify-center flex-col min-h-screen w-screen my-10"
      >
        <div
          id="page1"
          className="flex items-center justify-evenly flex-col md:flex-row gap-3 pt-10  px-10 h-3/4"
        >
          <div
            id="page1-img"
            className="w-1/3 md:w-1/3 p-6 md:p-16
          rounded-full bg-gray-300 "
          >
            <img src="./src/assets/AboutPage/img1.png" />
          </div>
          <div
            id="page1-text"
            className=" w-1/2 flex justify-center items-center gap-5 flex-col"
          >
            <h1 className="text-5xl font-bold text-center">
              About Our <span className="text-red-500">Resturant</span>
            </h1>
            <p
              className="text-center text-lg
             md:text-start w-2/3"
            >
              This dish is full of flavor and nutrition! Quinoa is a complete
              protein, providing all the essential amino acids your body needs,
              and is also a good source of fiber.
            </p>
            <Button
              text={"Order Now"}
              path={"order"}
              css={"h-12 w-36 bg-red-500 text-white"}
            />
            ;
          </div>
        </div>
        <div
          id="page2"
          className="flex items-center justify-evenly flex-col md:flex-row gap-3 pt-10  px-10 h-3/4"
        >
          <div
            id="page2-text"
            className=" w-1/2 flex justify-center items-center gap-5 flex-col"
          >
            <p
              className="text-center text-lg
             md:text-start w-2/3"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
          <div
            id="page2-img"
            className="w-1/3 md:w-1/3 p-6 md:p-16
          rounded-full bg-gray-300 "
          >
            <img src="./src/assets/AboutPage/img2.png" />
          </div>
        </div>
        <div
          id="page3"
          className="flex items-center justify-evenly flex-col md:flex-row gap-3w-10/12 mx-5"
        >
          <div
            id="page3-img"
            className=" md:w-1/2 flex items-center justify-center "
          >
            <img
              src="./src/assets/AboutPage/img3.png"
              className=" w-1/2 rounded-xl"
            />
          </div>
          <div
            id="page3-text"
            className="flex-1 flex flex-col gap-5"
          >
            <h1 className="text-5xl font-bold">
              <span className="text-red-500">Owner </span> & Executive Chef
            </h1>
            <h3>Ismail Marzuki</h3>
            <p
              className="text-center text-lg
             md:text-start w-2/3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
