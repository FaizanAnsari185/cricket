"use client";
import Playbutton from "@/components/playbutton";
import Run from "@/components/run";
import React, { useState } from "react";

const page = () => {
  const [runInOneOver, setRunInOneOver] = useState([]);
  const [ballInOneOver, setBallInOneOver] = useState(0);
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [teamOneOver, setTeamOneOver] = useState(0);
  const [teamBallInOneOver, setTeamBallInOneOver] = useState(0);
  const [teamOneRun, setTeamOneRun] = useState(0);
  const [teamOneWicket, setTeamOnewWicket] = useState(0);
  const MAX_OVERS = 2;
  function updateRun(pb) {
    if (wicket === 10 || over === MAX_OVERS) {
      setTeamOneRun(run);
      setTeamOnewWicket(wicket);
      setTeamOneOver(over);
      setTeamBallInOneOver(ballInOneOver);

      setRun(0);
      setWicket(0);
      setOver(0);
      setBallInOneOver(0);
      setRunInOneOver([]);
      return;
    }
    if (ballInOneOver === 6) {
      return;
    }
    // if (ballInOneOver === 5 && over === MAX_OVERS - 1) {
    //   setTeamOneRun(run);
    //   setTeamOnewWicket(wicket);
    //   setTeamOneOver(over);
    //   setTeamBallInOneOver(ballInOneOver);
      
      
     
    // }
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
      setRun(run + 1);
      return;
    }
    if (pb === "Wide Ball") {
      setRunInOneOver([...runInOneOver, "WB"]);
      setRun(run + 1);
      return;
    } else {
      setRunInOneOver([...runInOneOver, pb]);
      setBallInOneOver(ballInOneOver + 1);
      setRun(run + pb);
    }
  }

  function updateOver() {
    setRunInOneOver([]);
    setOver(over + 1);
    setBallInOneOver(0);
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
            {ballInOneOver === 6 && (
              <button
                onClick={updateOver}
                className="bg-green-500 rounded-md p-4 text-white hover:bg-green-600"
              >
                Next Over
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-around">
          <div className="flex justify-center">
            Current Score: {run}-{wicket} / {over + "." + ballInOneOver}
          </div>
          {(teamOneOver === MAX_OVERS || teamOneWicket === 10) && (
            <div className="flex justify-center">
              Team 1 Total Score: {teamOneRun}-{teamOneWicket} /{" "}
              {teamOneOver + "." + teamBallInOneOver}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
