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
      <div className="row_wrapper">
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
        {/*Исправить на map*/}
        <div className="radio_buttons col_wrapper">
          <button
            className="app__button"
            value={5}
            name="boardSize"
            onClick={changeBoardSize}
          >
            5x5
          </button>
          <button
            className="app__button"
            value={6}
            name="boardSize"
            onClick={changeBoardSize}
          >
            6x6
          </button>
          <button
            className="app__button"
            value={7}
            name="boardSize"
            onClick={changeBoardSize}
          >
            7x7
          </button>
          <button
            className="app__button"
            value={8}
            name="boardSize"
            onClick={changeBoardSize}
          >
            8x8
          </button>
          <button
            className="app__button"
            value={9}
            name="boardSize"
            onClick={changeBoardSize}
          >
            9x9
          </button>
          <button
            className="app__button"
            value={10}
            name="boardSize"
            onClick={changeBoardSize}
          >
            10x10
          </button>
        </div>
      </div>
      {board.isLose && counter.number > 2 && (
        <p className="app__text_conditions">
          У вас не осталось доступных ходов, попробуйте еще раз
        </p>
      )}
    </div>
  );
};

export default App;
