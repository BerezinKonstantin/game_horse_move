import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/BoardComponent";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Counter } from "./models/Counter";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [counter, setCounter] = useState(new Counter());
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }
  useEffect(() => {
    restart();
  }, []);
  return (
    <div className="app">
      <BoardComponent board={board} counter={counter} setBoard={setBoard} />
    </div>
  );
};

export default App;
