import React from "react";

function CustomerReview() {
  return (
    <>
      <div id="main">
        <div className="width-10/12 flex items-center justify-center flex-col shadow-lg w-3/4 rounded-xl px-5 h-1/2vh">
          <p className="text-center font-medium text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <div className="flex justify-between items-center">
            <img src="./src/assets/HomePage/Userreview.png" className="w-1/5" />
            <div className="flex flex-col items-center justify-center gap-2 my-5">
              <h1 className="text-xl font-medium">Starla Virgoun</h1>
              <h2>Financial advisor</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
