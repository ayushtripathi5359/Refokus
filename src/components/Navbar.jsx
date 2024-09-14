import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="bg-zinc-900 sticky top-0 z-20">
      <div className="  bg-zinc-900 max-w-screen-lg mx-auto p-3 py-6 flex  items-center justify-between border-b-[1px] border-zinc-700">
        <div className="nleft flex items-center ">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
          <div className="links flex gap-14 ml-20 ">
            {["Home", "Work", "Culture", "", "News"].map((elem, i) =>
              elem.length === 0 ? (
                <span key={i} className=" w-0.5 bg-zinc-500"></span>
              ) : (
                <a key={i} className="text-sm items-center flex gap-1" href="#">
                  {i === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.25em #00FF19" }}
                      className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full"
                    ></span>
                  )}
                  {elem}
                </a>
              )
            )}
          </div>
        </div>
        <Button title={`Get Started`} />
      </div>
    </div>
  );
}

export default Navbar;
