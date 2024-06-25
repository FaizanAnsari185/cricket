"use client";
import Playbutton from "@/components/playbutton";
import Run from "@/components/run";
import React, { useEffect, useState } from "react";

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
  //Team Innings End
  const [teamOneInningsEnd, setTeamOneInningsEnd] = useState(false);
  const [teamTwoInningsEnd, setTeamTwoInningsEnd] = useState(false);
  //Winner
  const [winner, setWinner] = useState(0);
  const [matchTie, setMatchTie] = useState(0);

  useEffect(() => {
    if (teamTwoInningsEnd) {
      if (teamOneRun > teamTwoRun) {
        setWinner(1);
      } else if (teamOneRun < teamTwoRun) {
        setWinner(2);
      } else if (teamOneRun === teamTwoRun) {
        setMatchTie("Match Tie");
      }
    }
  }, [teamTwoInningsEnd]);

  function updateRun(pb) {
    if (wicket === 9) {
      if (teamOneInningsEnd === false) {
        setTeamOneRun(run);
        setTeamOneWicket(wicket + 1);
        if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
        } else {
          setTeamOneOver(over);
          setTeamOneBallInOneOver(ballInOneOver + 1);
        }
        setTeamOneInningsEnd(true);
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
        setTeamTwoInningsEnd(true);
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
        if (teamOneInningsEnd === false) {
          setTeamOneRun(run);
          setTeamOneWicket(wicket);
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
          setTeamOneInningsEnd(true);
        } else {
          setTeamTwoRun(run);
          setTeamTwoWicket(wicket);
          setTeamTwoOver(over + 1);
          setTeamTwoBallInOneOver(0);
          setTeamTwoInningsEnd(true);
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
        if (teamOneInningsEnd === false) {
          setTeamOneRun(run);
          setTeamOneWicket(wicket + 1);
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
          setTeamOneInningsEnd(true);
        } else {
          setTeamTwoRun(run);
          setTeamTwoWicket(wicket + 1);
          setTeamTwoOver(over + 1);
          setTeamTwoBallInOneOver(0);
          setTeamTwoInningsEnd(true);
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
      if (teamOneRun === run) {
        setTeamTwoRun(run + 1);
        setTeamTwoWicket(wicket);
        setTeamTwoOver(over);
        setTeamTwoBallInOneOver(ballInOneOver);
        setTeamTwoInningsEnd(true);
      } else {
        setRunInOneOver([...runInOneOver, "NB"]);
        setRun(run + 1);
      }
      return;
    }

    if (pb === "Wide Ball") {
      if (teamOneRun === run) {
        setTeamTwoRun(run + 1);
        setTeamTwoWicket(wicket);
        setTeamTwoOver(over);
        setTeamTwoBallInOneOver(ballInOneOver);
        setTeamTwoInningsEnd(true);
        setRunInOneOver([...runInOneOver, "WB"]);
        setRun(run + 1);
      } else {
        setRunInOneOver([...runInOneOver, "WB"]);
        setRun(run + 1);
      }
      return;
    } else {
      if (over === MAX_OVERS - 1 && ballInOneOver === 5) {
        if (teamOneInningsEnd === false) {
          setTeamOneRun(run + pb);
          setTeamOneWicket(wicket);
          setTeamOneOver(over + 1);
          setTeamOneBallInOneOver(0);
          setTeamOneInningsEnd(true);
        } else {
          setTeamTwoRun(run + pb);
          setTeamTwoWicket(wicket);
          setTeamTwoOver(over + 1);
          setTeamTwoBallInOneOver(0);
          setTeamTwoInningsEnd(true);
        }

        setRun(0);
        setWicket(0);
        setOver(0);
        setBallInOneOver(0);
        setRunInOneOver([]);
      } else if (teamOneInningsEnd && teamOneRun < run + pb) {
        setTeamTwoRun(run + pb);
        setTeamTwoWicket(wicket);
        setTeamTwoOver(over);
        setTeamTwoBallInOneOver(ballInOneOver + 1);
        setTeamTwoInningsEnd(true);
        setRunInOneOver([...runInOneOver, pb]);
        setBallInOneOver(ballInOneOver + 1);
        setRun(run + pb);
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
          {winner === 0 && (
            <div className="flex justify-center">
              Current Score: {run}-{wicket} / {over + "." + ballInOneOver}
            </div>
          )}
          {teamOneInningsEnd && (
            <div className="flex justify-center">
              Team 1 Total Score: {teamOneRun}-{teamOneWicket} /{" "}
              {teamOneOver + "." + teamOneBallInOneOver}
            </div>
          )}
          {teamTwoInningsEnd && (
            <div className="flex justify-center">
              Team 2 Total Score: {teamTwoRun}-{teamTwoWicket} /{" "}
              {teamTwoOver + "." + teamTwoBallInOneOver}
            </div>
          )}
          {winner !== 0 && (
            <div className="flex justify-center">Team {winner} Won</div>
          )}
          {matchTie !== 0 && (
            <div className="flex justify-center">{matchTie}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div className="flex justify-center">
              Team 1 Won By 8 Wicket (15 Ball Left)
            </div>
            <div className="flex justify-center">
              Team 1 Won By 5 Wicket
            </div>
            <div className="flex justify-center">
              Team 1 Won By 20 Run
            </div>
            <div className="flex justify-center">
              Team 1 Win By 7 Wicket
            </div>
            <div className="flex justify-center">
              Match Tie
            </div> */
}
