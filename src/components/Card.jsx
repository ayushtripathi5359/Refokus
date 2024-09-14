import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Card({ width, start, para, hover}) {
  return (
    <div
      className={`${width} hover:${hover} bg-zinc-800 p-5 rounded-xl flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className={`flex justify-between `}>
          <h3 className="font-light mb-2">edoen</h3>
          <FaArrowRight />
        </div>
        <h1 className=" text-2xl font-medium w-36">
          Let's get to it, Together.
        </h1>
      </div>
      <div className="down w-full mt-32">
        {start && (
          <>
            <h1 className=" font-bold text-6xl tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="py-2 px-5 rounded-full border mt-5">
              Contact US
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-400 font-medium">
            Lorem ipsum dolor sit.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
