import React, { useState } from "react";

const boardItems = () => {
  const [X, setX] = useState(" ");

  const setOnClick = () => {
    setX("X");
  };
  return (
    <div className="w-max flex justify-center px-8 py-8 bg-white rounded-full">
      <button onClick={setOnClick} className="text-3xl">
        {X}
      </button>
    </div>
  );
};

export default boardItems;
