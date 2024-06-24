"use client";
import Playbutton from "@/components/playbutton";
import Run from "@/components/run";
import React, { useState } from "react";

const MAX_OVERS = 2;

const page = () => {
  const [runInOneOver, setRunInOneOver] = useState([]);
  const [ballInOneOver, setBallInOneOver] = useState(0);
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  // Team One State
  const [teamOneOver, setTeamOneOver] = useState(0);
  const [teamOneBallInOneOver, setTeamOneBallInOneOver] = useState(0);
  const [teamOneRun, setTeamOneRun] = useState(0);
  const [teamOneWicket, setTeamOneWicket] = useState(0);
  // Team Two State
  const [teamTwoOver, setTeamTwoOver] = useState(0);
  const [teamTwoBallInOneOver, setTeamTwoBallInOneOver] = useState(0);
  const [teamTwoRun, setTeamTwoRun] = useState(0);
  const [teamTwoWicket, setTeamTwoWicket] = useState(0);
  
  function updateRun(pb) {
    if (wicket === 9 || over === MAX_OVERS) {
      setTeamOneRun(run);
      setTeamOneWicket(wicket);
      setTeamOneOver(over);
      setTeamOneBallInOneOver(ballInOneOver);

      setTeamTwoRun(run);
      setTeamTwoWicket(wicket);
      setTeamTwoOver(over);
      setTeamTwoBallInOneOver(ballInOneOver);

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

    // function updateRun(pb) {
    //   if (wicket === 9 || over === MAX_OVERS) {
    //   setTeamTwoRun(run);
    //   setTeamTwoWicket(wicket);
    //   setTeamTwoOver(over);
    //   setTeamTwoBallInOneOver(ballInOneOver);
  
    //   setRun(0);
    //   setWicket(0);
    //   setOver(0);
    //   setBallInOneOver(0);
    //   setRunInOneOver([]);
    //   return;
    //   }
    //   if (ballInOneOver === 6) {
    //     return;
    //   }
  
    //   if (pb === "Dot Ball") {
    //     setRunInOneOver([...runInOneOver, "*"]);
    //     setBallInOneOver(ballInOneOver + 1);
    //     return;
    //   }
    //   if (pb === "Wicket") {
    //     setRunInOneOver([...runInOneOver, "W"]);
    //     setBallInOneOver(ballInOneOver + 1);
    //     setWicket(wicket + 1);
    //     return;
    //   }
    //   if (pb === "No Ball") {
    //     setRunInOneOver([...runInOneOver, "NB"]);
    //     setRun(run + 1);
    //     return;
    //   }
    //   if (pb === "Wide Ball") {
    //     setRunInOneOver([...runInOneOver, "WB"]);
    //     setRun(run + 1);
    //     return;
    //   } else {
    //     setRunInOneOver([...runInOneOver, pb]);
    //     setBallInOneOver(ballInOneOver + 1);
    //     setRun(run + pb);
    //   }
    // }

    

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
          {(teamOneOver === MAX_OVERS || teamOneWicket === 9) && (
            <div className="flex justify-start text-red-700">
              Team 1 Total Score: {teamOneRun}-{teamOneWicket} /{" "}{teamOneOver + "." + teamOneBallInOneOver}
            </div>
          )}
          {(teamTwoOver === MAX_OVERS || teamTwoWicket === 9) && (
            <div className="flex justify-end text-amber-700">
              Team 2 Total Score: {teamTwoRun}-{teamTwoWicket} /{" "}{teamTwoOver + "." + teamTwoBallInOneOver}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;


// if (ballInOneOver === 5 && over === MAX_OVERS - 1) {
    //   setTeamOneRun(run);
    //   setTeamOneWicket(wicket);
    //   setTeamOneOver(over);
    //   setTeamOneBallInOneOver(ballInOneOver);
    // }

    // if (wicket === "9") {
    //   setTeamOneWicket(teamOneWicket + 1);
    //   setTeamOneBallInOneOver(teamOneBallInOneOver + 1);
    //   return;
    // }