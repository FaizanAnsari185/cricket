import Run from "@/components/run";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-4 border shadow-2xl rounded-md p-4 font-bold">
        <div className="flex flex-col gap-5 justify-around">
          <div className="flex gap-4 justify-around">
            {[1, 2, 3, 4, 6, "*", "W", "WB", "NB"].map((item) => (
              <Run runwicket={item} />
            ))}
          </div>
          <div className="flex gap-3 justify-around">
            <button className="bg-blue-500 rounded-md p-4 text-white">1</button>
            <button className="bg-blue-500 rounded-md p-4 text-white">2</button>
            <button className="bg-blue-500 rounded-md p-4 text-white">3</button>
            <button className="bg-blue-500 rounded-md p-4 text-white">4</button>
            <button className="bg-blue-500 rounded-md p-4 text-white">6</button>
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
          <div className="flex justify-center">
            Team 1 Current Score: 0 Runs and 0 Wicket
          </div>
          <div className="flex justify-center">
            Current Score: 0 Runs and 0 Wicket
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
