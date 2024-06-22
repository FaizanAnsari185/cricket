import React from "react";

const cricket = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 border-2 border-black rounded-md p-4">
        <div className="flex gap-3 justify-around text-white">
          <button className="bg-blue-500 rounded-md p-4">1</button>
          <button className="bg-blue-500 rounded-md p-4">2</button>
          <button className="bg-blue-500 rounded-md p-4">3</button>
          <button className="bg-blue-500 rounded-md p-4">4</button>
          <button className="bg-blue-500 rounded-md p-4">5</button>
          <button className="bg-blue-500 rounded-md p-4">6</button>
        </div>
        <div className="flex gap-3  justify-around text-white">
          <button className="bg-blue-500 rounded-md p-4">Dot Ball</button>
          <button className="bg-blue-500 rounded-md p-4">Wicket</button>
          <button className="bg-blue-500 rounded-md p-4">Wide Ball</button>
          <button className="bg-blue-500 rounded-md p-4">No Ball</button>
        </div>
      </div>
    </div>
  );
};

export default cricket;
