import { useEffect, useState } from "react";
import "./App.scss";
import "./components/BoardComponent";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Counter } from "./models/Counter";
import { Cell } from "./models/Cell";
import logo from "./assets/black-knight.png";

const App = () => {
  const [boardSize, setBoardSize] = useState(8);
  const [board, setBoard] = useState(new Board(boardSize));
  const [counter, setCounter] = useState(new Counter());
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const boardSizesArr: number[] = [5, 6, 7, 8, 9, 10];
  function restart() {
    const newBoard = new Board(boardSize);
    const newCounter = new Counter();
    newBoard.boardSize = boardSize;
    newBoard.initCells();
    setBoard(newBoard);
    setCounter(newCounter);
    setSelectedCell(null);
  }
  function changeBoardSize(e: React.MouseEvent<HTMLButtonElement>) {
    setBoardSize(Number((e.target as HTMLButtonElement).value));
    restart();
  }
  useEffect(() => {
    restart();
  }, [boardSize]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="app__title">ИГРА "ХОД КОНЁМ"</h1>
        <img className="app__logo" src={logo} />
        <p className="app__text">
          Ваша цель - заполнить все клетки. Расставляйте цифры по правилам
          передвижения коня в шахматах.
        </p>
      </header>
      <div className="main_wrapper">
        <button className="app__button" type="reset" onClick={restart}>
          Restart
        </button>
        <BoardComponent
          board={board}
          counter={counter}
          setBoard={setBoard}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
        <div className="radio_buttons ">
          {boardSizesArr.map((size, i) => (
            <button
              key={i}
              className="app__button"
              value={size}
              onClick={changeBoardSize}
            >
              {`${size}x${size}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
