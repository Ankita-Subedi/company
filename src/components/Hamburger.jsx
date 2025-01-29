import React from "react";

const Hamburger = () => {
  return (
    <div className="cursor-pointer bg-blue-950 p-2 rounded-md flex flex-col items-center justify-center">
      <div className="h-0.5 w-6 bg-white my-1 rounded"></div>
      <div className="h-0.5 w-6 bg-white my-1 rounded"></div>
      <div className="h-0.5 w-6 bg-white my-1 rounded"></div>
    </div>
  );
};

export default Hamburger;
