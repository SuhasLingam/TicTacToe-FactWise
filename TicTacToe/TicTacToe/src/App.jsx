import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Square = ({ value, onClick }) => (
  <button
    className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-black bg-white border border-white rounded-full"
    onClick={onClick}
  >
    {value === "X" ? <TiTick /> : value === "O" ? <RxCross2 /> : null}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div className="grid grid-cols-3 gap-1">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (winner || newSquares[i]) {
      return;
    }
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className=" mb-4 font-serif text-6xl">Tic Tac Toe</h1>
      <div className="mt-4 mb-5">
        {winner ? (
          <div className=" text-2xl font-semibold">{winner} Wins!</div>
        ) : (
          <div className="text-2xl font-semibold">
            Next Player: {isXNext ? "X" : "O"}
          </div>
        )}
      </div>
      <Board squares={squares} onClick={handleClick} />
      <button
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
