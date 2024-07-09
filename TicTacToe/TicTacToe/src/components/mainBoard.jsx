import React, { useState } from "react";
import BoardItems from "./boardItems";

const mainBoard = () => {
  return (
    <div className="h-screen bg-black">
      <p className=" flex justify-center text-5xl text-white">TIC-TAC-TOE</p>

      <div className=" ml-[200px] grid grid-cols-3 grid-rows-3">
        <BoardItems />
        <BoardItems />
        <BoardItems />
        <BoardItems />
        <BoardItems />
        <BoardItems />
        <BoardItems />
        <BoardItems />
        <BoardItems />
      </div>
    </div>
  );
};

export default mainBoard;
