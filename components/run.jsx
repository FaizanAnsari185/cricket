import React from "react";

const Run = ({ runwicket }) => {
  return (
    <div className="flex gap-3 justify-around ">
      <div className="flex justify-center items-center border border-black rounded-full h-12 w-12 p-2 ">
        {runwicket}
      </div>
    </div>
  );
};

export default Run;
