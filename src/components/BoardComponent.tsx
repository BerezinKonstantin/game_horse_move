import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Counter } from "../models/Counter";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  counter: Counter;
  selectedCell: Cell | null;
  setSelectedCell: (cell: Cell) => void;
  setBoard: (board: Board) => void; // ??&&&&&&
}

const BoardComponent: FC<BoardProps> = ({
  board,
  counter,
  selectedCell,
  setSelectedCell,
  setBoard,
}) => {
  function click(cell: Cell) {
    if (!cell.cellnumber && (cell.available || !selectedCell)) {
      setSelectedCell(cell);
      cell.increaseCounter(counter);
    }
  }
  function highlightCells() {
    board.highlightCells(selectedCell);
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  useEffect(() => {
    highlightCells();
    updateBoard();
  }, [selectedCell]);

  return (
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
  );
};

export default BoardComponent;
