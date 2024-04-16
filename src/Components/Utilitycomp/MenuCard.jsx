import React from "react";
import { RiStarFill } from "@remixicon/react";
import Button from "./Button";

function MenuCard({ item }) {
  return (
    <div id="main" className="m-3 flex justify-center">
      <div className="rounded-3xl border-2  flex flex-col items-center justify-center gap-3 py-5 h-10/12 sm:h-auto">
        <img src={item.imgSrc} alt={item.title} className="w-10/12" />
        <h1 className="font-bold">{item.title}</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          eligendi alias optio illum fugit ex.
        </p>
        <div className="flex items-center justify-center py-3">
          <RiStarFill className="text-red-500" />
          <RiStarFill className="text-red-500" />
          <RiStarFill className="text-red-500" />
          <RiStarFill className="text-red-500" />
          <RiStarFill className="text-red-500" />
        </div>
        <div className="flex items-center justify-around w-full">
          <h1 className="font-semibold text-2xl">{item.price}</h1>
          <Button
            text={"Order Now"}
            path={"order"}
            css={"h-10 w-28 bg-red-500 text-white"}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuCard;