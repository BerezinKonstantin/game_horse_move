import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Counter } from "../models/Counter";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  counter: Counter;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, counter, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (!cell.cellnumber && (cell.available || !selectedCell)) {
      setSelectedCell(cell);
      cell.increaseCounter(counter);
    }
  }

  useEffect(() => {
    highlightCells();
    updateBoard();
    console.log("useEffect");
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    console.log("highlightCells");
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      {board.isLose && (
        <p>У вас не осталось доступных ходов, попробуйте еще раз</p>
      )}
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
                click={click}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
