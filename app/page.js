"use client";
import Playbutton from "@/components/playbutton";
import Run from "@/components/run";
import React, { useState } from "react";

const page = () => {
  const [runInOneOver, setRunInOneOver] = useState([]);
  const [ballInOneOver, setBallInOneOver] = useState(0);
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);

  function updateRun(pb) {
    if (ballInOneOver === 6) {
      return;
    }
    if (pb === "Dot Ball") {
      setRunInOneOver([...runInOneOver, "*"]);
      setBallInOneOver(ballInOneOver + 1);
      return;
    }
    if (pb === "Wicket") {
      setRunInOneOver([...runInOneOver, "W"]);
      setBallInOneOver(ballInOneOver + 1);
      setWicket(wicket + 1);
      return;
    }
    if (pb === "No Ball") {
      setRunInOneOver([...runInOneOver, "NB"]);
      setScore(score+1)
      return;
    }
    if (pb === "Wide Ball") {
      setRunInOneOver([...runInOneOver, "WB"]);
      setScore(score+1)
      return;
    } else {
      setRunInOneOver([...runInOneOver, pb]);
      setBallInOneOver(ballInOneOver + 1);
      setScore(score+pb)
    }
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
            {[1, 2, 3, 4, 6, "Dot Ball", "Wicket", "No Ball", "Wide Ball"].map(
              (item) => (
                <Playbutton pb={item} updateRun={updateRun} />
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-around">
          <div className="flex justify-center">Current Score: {score}-{wicket} (0)</div>
          <div className="flex justify-center">
            Team 1 Current Score: {score}-{wicket} (0)
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
