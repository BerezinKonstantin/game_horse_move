import { useEffect, useState } from "react";
import "./App.css";
import "./components/BoardComponent";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Counter } from "./models/Counter";
import { Cell } from "./models/Cell";
import logo from "./assets/black-knight.png";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [counter, setCounter] = useState(new Counter());
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function restart() {
    const newBoard = new Board();
    const newCounter = new Counter();
    newBoard.initCells();
    setBoard(newBoard);
    setCounter(newCounter);
    setSelectedCell(null);
  }
  useEffect(() => {
    restart();
  }, []);
  return (
    <div className="app">
      <h1 className="app__title">ИГРА "ХОД КОНЁМ"</h1>
      <img className="app__logo" src={logo} />
      <p className="app__text">
        Ваша цель - заполнить все клетки. Расставляйте цифры по правилам
        передвижения коня в шахматах.
      </p>
      <BoardComponent
        board={board}
        counter={counter}
        setBoard={setBoard}
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
      />
      {board.isLose && counter.number > 2 && (
        <p className="app__text">
          У вас не осталось доступных ходов, попробуйте еще раз
        </p>
      )}
      <button className="app__button" type="reset" onClick={restart}>
        Reset
      </button>
      <div className="radio_buttons">
        <button className="app__button" value={5} name="boardSize">
          5x5
        </button>
        <button className="app__button" value={8} name="boardSize">
          8x8
        </button>
      </div>
    </div>
  );
};

export default App;
