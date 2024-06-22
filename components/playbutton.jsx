import React from "react";

const Playbutton = ({ pb, updateRun }) => {
  return (
    <div className="flex gap-3 justify-around">
      <button
        onClick={() => updateRun(pb)}
        className="bg-blue-500 rounded-md p-4 text-white"
      >
        {pb}
      </button>
    </div>
  );
};

export default Playbutton;
