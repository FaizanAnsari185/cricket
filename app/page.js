"use client"
import Playbutton from "@/components/playbutton";
import Run from "@/components/run";
import React, { useState } from "react";

const page = () => {

const [runInOneOver, setRunInOneOver] = useState([])

function updateRun(pb){

  
  setRunInOneOver([...runInOneOver,pb])
}

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-4 border shadow-2xl rounded-md p-4 font-bold">
        <div className="flex flex-col gap-5 justify-around">
          <div className="flex gap-4 justify-center">
            {runInOneOver.map((item) => (
              <Run runwicket={item} />
            ))}
          </div>
          <div className="flex gap-3 justify-around">
            {[1,2,3,4,6,"Dot Ball","Wicket","No Ball","Wide Ball","New Over"].map((item) => (
              <Playbutton pb={item} updateRun= {updateRun}/>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-around">
          <div className="flex justify-center">
            Team 1 Current Score: {0} Runs and 0 Wicket
          </div>
          <div className="flex justify-center">
            Current Score: {0} Runs and 0 Wicket
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
