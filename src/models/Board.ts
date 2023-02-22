import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = [];
  boardSize: number;
  aviableCells: Cell[] = [];
  fullCells: Cell[] = [];
  isLose: boolean = false;
  isWin: boolean = false;
  constructor(boardSize: number) {
    this.boardSize = boardSize;
  }

  public initCells() {
    for (let i = 0; i < this.boardSize; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(new Cell(j, i));
      }
      this.cells.push(row);
    }
  }

  public highlightCells(selectedCell: Cell | null) {
    let newAviableCells: Cell[] = [];
    let newfullCells: Cell[] = [];
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if ((target.available = !!selectedCell?.canBeNext(target))) {
          newAviableCells.push(target);
        }
        if (target.cellnumber) {
          newfullCells.push(target);
        }
      }
    }
    this.aviableCells = newAviableCells;
    this.fullCells = newfullCells;
  }

  public getCopyBoard(): Board {
    const newBoard = new Board(this.boardSize);
    newBoard.cells = this.cells;
    newBoard.aviableCells = this.aviableCells;
    newBoard.fullCells = this.fullCells;
    if (
      newBoard.aviableCells.length === 0 &&
      newBoard.fullCells.length === newBoard.boardSize ** 2
    ) {
      newBoard.isWin = true;
    } else if (newBoard.aviableCells.length === 0) {
      newBoard.isLose = true;
    }
    return newBoard;
  }
}
