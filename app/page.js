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
  // Both Teams Innings
  const [teamOneInnings, setTeamOneInnings] = useState(false);
  const [teamTwoInnings, setTeamTwoInnings] = useState(false);

  function updateRun(pb) {
    if (wicket === 9) {
      if (teamOneInnings === false) {
        setTeamOneRun(run);
        setTeamOneWicket(wicket + 1);
        if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
        } else {
          setTeamOneOver(over);
          setTeamOneBallInOneOver(ballInOneOver + 1);
        }
        setTeamOneInnings(true);
      } else {
        setTeamTwoRun(run);
        setTeamTwoWicket(wicket + 1);
        if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
        } else {
          setTeamOneOver(over);
          setTeamOneBallInOneOver(ballInOneOver + 1);
        }
        setTeamTwoInnings(true);
      }

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

      if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
        if (teamOneInnings === false) {
          setTeamOneRun(run);
          setTeamOneWicket(wicket);
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
          setTeamOneInnings(true);
        } else {
          setTeamTwoRun(run);
          setTeamTwoWicket(wicket);
          setTeamTwoOver(over + 1);
          setTeamTwoBallInOneOver(0);
          setTeamTwoInnings(true);
        }

        setRun(0);
        setWicket(0);
        setOver(0);
        setBallInOneOver(0);
        setRunInOneOver([]);
      }
      return;
    }
    if (pb === "Wicket") {
      if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
        if (teamOneInnings === false) {
          setTeamOneRun(run);
          setTeamOneWicket(wicket + 1);
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
          setTeamOneInnings(true);
        } else {
          setTeamTwoRun(run);
          setTeamTwoWicket(wicket + 1);
          setTeamTwoOver(over + 1);
          setTeamTwoBallInOneOver(0);
          setTeamTwoInnings(true);
        }

        setRun(0);
        setWicket(0);
        setOver(0);
        setBallInOneOver(0);
        setRunInOneOver([]);
        return;
      }
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
      if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
        if (teamOneInnings === false) {
          setTeamOneRun(run + pb);
          setTeamOneWicket(wicket);
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
          setTeamOneInnings(true);
        } else {
          setTeamTwoRun(run + pb);
          setTeamTwoWicket(wicket);
          setTeamTwoOver(over + 1);
          setTeamTwoBallInOneOver(0);
          setTeamTwoInnings(true);
        }

        setRun(0);
        setWicket(0);
        setOver(0);
        setBallInOneOver(0);
        setRunInOneOver([]);
      } else {
        setRunInOneOver([...runInOneOver, pb]);
        setBallInOneOver(ballInOneOver + 1);
        setRun(run + pb);
      }
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
          {teamOneInnings && (
            <div className="flex justify-center">
              Team 1 Total Score: {teamOneRun}-{teamOneWicket} /{" "}
              {teamOneOver + "." + teamOneBallInOneOver}
            </div>
          )}
          {teamTwoInnings && (
            <div className="flex justify-center">
              Team 2 Total Score: {teamTwoRun}-{teamTwoWicket} /{" "}
              {teamTwoOver + "." + teamTwoBallInOneOver}
            </div>
          )}
          <div className="flex justify-center">
              Team 1 Win By 10 Run and 4 Wicket
            </div>
            <div className="flex justify-center">
              Team 2 Win By 20 Run and 5 Wicket
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
