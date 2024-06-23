"use client";

import Playbutton from "@/components/playbutton";
import Run from "@/components/run";
import React, { useState } from "react";
import { MAX_OVERS } from "../constants";

const Home = () => {
  // current innings states
  const [runInOneOver, setRunInOneOver] = useState([]);
  const [ballInOneOver, setBallInOneOver] = useState(0);
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  // Team one states
  const [teamOneOver, setTeamOneOver] = useState(0);
  const [teamOneBallInLastOver, setTeamOneBallInLastOver] = useState(0);
  const [teamOneRun, setTeamOneRun] = useState(0);
  const [teamOneWicket, setTeamOnewWicket] = useState(0);
  const [teamOneInningsOver, setTeamOneInningsOver] = useState(false); //true
  // Team two states
  const [teamTwoOver, setTeamTwoOver] = useState(0);
  const [teamTwoBallInLastOver, setTeamTwoBallInLastOver] = useState(0);
  const [teamTwoRun, setTeamTwoRun] = useState(0);
  const [teamTwoWicket, setTeamTwowWicket] = useState(0);
  const [teamTwoInningsOver, setTeamTwoInningsOver] = useState(false);

  function updateRun(pb) {
    if (ballInOneOver === 6) {
      return;
    }

    if (pb === "Dot Ball") {
      setRunInOneOver((prev) => [...prev, "*"]);
      setBallInOneOver((prev) => prev + 1);

      if (ballInOneOver === 5 && over === MAX_OVERS - 1) {
        console.log("overs completed");
        if (teamOneInningsOver === false) {
          finishTeamOneInnings();
        } else {
          finishTeamTwoInnings();
        }
      }
      return;
    }

    if (pb === "Wicket") {
      setRunInOneOver([...runInOneOver, "W"]);
      setBallInOneOver(ballInOneOver + 1);
      setWicket(wicket + 1);

      if (wicket === 9) {
        console.log("all out");
        if (teamOneInningsOver === false) {
          finishTeamOneInnings();
        } else {
          finishTeamTwoInnings();
        }
      }

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

      if (ballInOneOver === 5 && over === MAX_OVERS - 1) {
        console.log("overs completed");
        if (teamOneInningsOver === false) {
          finishTeamOneInnings();
        } else {
          finishTeamTwoInnings();
        }
      }
    }
  }

  function updateOver() {
    setRunInOneOver([]);
    setOver(over + 1);
    setBallInOneOver(0);
  }
  function finishTeamOneInnings() {
    setTeamOneRun(run);
    setTeamOnewWicket(wicket);
    setTeamOneOver(over);
    if (ballInOneOver === 5) {
      setTeamOneOver(over + 1);
      setTeamOneBallInLastOver(0);
    }
    setTeamOneInningsOver(true);
    //
    setRunInOneOver([]);
    setBallInOneOver(0);
    setRun(0);
    setWicket(0);
    setOver(0);
  }

  function finishTeamTwoInnings() {
    setTeamTwoRun(run);
    setTeamTwowWicket(wicket);

    if (ballInOneOver === 5) {
      setTeamTwoOver(over + 1);
      setTeamTwoBallInLastOver(0);
    }

    setTeamTwoInningsOver(true);
    //
    setRunInOneOver([]);
    setBallInOneOver(0);
    setRun(0);
    setWicket(0);
    setOver(0);
  }
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-4 border shadow-2xl rounded-md p-4 font-bold">
        <div className="flex flex-col gap-5 justify-around">
          <div className="flex gap-4 justify-center">
            {runInOneOver.map((item, index) => (
              <Run runwicket={item} key={index} />
            ))}
          </div>
          <div className="flex gap-3 justify-around">
            {[1, 2, 3, 4, 6, "Dot Ball", "Wicket", "No Ball", "Wide Ball"].map(
              (item) => (
                <Playbutton pb={item} updateRun={updateRun} key={item} />
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
          {teamOneInningsOver && (
            <div className="flex justify-center">
              Team 1 Total Score: {teamOneRun}-{teamOneWicket} /{" "}
              {teamOneOver + "." + teamOneBallInLastOver}
            </div>
          )}
          {teamTwoInningsOver && (
            <div className="flex justify-center">
              Team 2 Total Score: {teamTwoRun}-{teamTwoWicket} /{" "}
              {teamTwoOver + "." + teamTwoBallInLastOver}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
