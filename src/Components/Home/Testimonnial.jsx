import { RiArrowLeftFill, RiArrowRightFill } from "@remixicon/react";
import React from "react";

const Testimonials = ({ name, review }) => {
    
  return (
    <>
      <div
        id="testimonial"
        className="flex flex-col items-center gap-5 justify-center "
      >
        <div className="flex flex-col items-center gap-5 ">
          <h1 className="text-lg font-bold text-yellow-500 ">{name}</h1>
          <p className="leading-relaxed text-center text-sm w-4/5">{review} </p>
        </div>

        <div className="flex justify-beween space-x-4 items-center">
          <RiArrowLeftFill className="text-yellow-500 cursor-pointer" />
          <RiArrowRightFill className="text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
