import React from "react";

function ChefCard({ item }) {
  return (
    <>
      <div id="main" className=" flex justify-center flex-col gap-5">
        <div className={`rounded-larger border-2  flex flex-col items-center  justify-center  ${item.bg} bg-contain`}>
          <img src={item.imgSrc} alt={"chef"} className="w-full h-full contain" />
        </div>
        <h1 className="text-2xl font-bold text-center">{item.name}</h1>
        <h1 className="text-semibold text-slate-500 text-2xl text-center">
          {item.designation}
        </h1>
      </div>
    </>
  );
}

export default ChefCard;
