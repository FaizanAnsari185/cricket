import React from "react";
import Cricket from "@/components/cricket";
const page = () => {
  return (
    <div className="flex justify-center translate-y-52">
      <Cricket />
      <div className="flex flex-col gap-4 border shadow-2xl rounded-md p-4 font-bold">
        <div className="flex flex-col gap-5 justify-around">
          <div className="flex gap-4 justify-around">
          <div className="flex justify-center items-center border border-black rounded-full h-12 w-12 p-2">1</div>
          <div className="flex justify-center border border-black rounded-full p-2">2</div>
          <div className="flex justify-center border border-black rounded-full p-2">3</div>
          <div className="flex justify-center border border-black rounded-full p-2">4</div>
          <div className="flex justify-center border border-black rounded-full p-2">5</div>
          <div className="flex justify-center border border-black rounded-full p-2">6</div>
          <div className="flex justify-center border border-black rounded-full p-2">*</div>
          <div className="flex justify-center border border-black rounded-full p-2">W</div>
          <div className="flex justify-center border border-black rounded-full p-2">WB</div>
          <div className="flex justify-center border border-black rounded-full p-2">NB</div>
          </div>
          <div className="flex gap-3 justify-around">
            <button className="bg-blue-500 rounded-md p-4 text-white">
              1
            </button>
            <button className="bg-blue-500 rounded-md p-4 text-white">
              2
            </button>
            <button className="bg-blue-500 rounded-md p-4 text-white">
              3
            </button>
            <button className="bg-blue-500 rounded-md p-4 text-white">
              4
            </button>
            <button className="bg-blue-500 rounded-md p-4 text-white">
              6
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-around">
          <div className="flex gap-3 justify-around">
          <button className="bg-blue-500 rounded-md p-4 text-white">
            Dot Ball
          </button>
          <button className="bg-blue-500 rounded-md p-4 text-white">
            Wicket
          </button>
          <button className="bg-blue-500 rounded-md p-4 text-white">
            Wide Ball
          </button>
          <button className="bg-blue-500 rounded-md p-4 text-white ">
            No Ball
          </button>
          <button className="bg-blue-500 rounded-md p-4 text-white">
            New Over
          </button>
          </div>
          <div className="flex justify-center">Team 1 Current Score: 0 Runs and 0 Wicket</div>
          <div className="flex justify-center">Current Score: 0 Runs and 0 Wicket</div>
        </div>
      </div>
    </div>
  );
};

export default page;
