import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = [];
  boardSize: number = 8;
  aviableCells: Cell[] = [];
  newAviableCells: Cell[] = [];
  isLose: boolean = false;

  public initCells() {
    for (let i = 0; i < this.boardSize; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(new Cell(this, j, i));
      }
      this.cells.push(row);
    }
  }

  public highlightCells(selectedCell: Cell | null) {
    let newAviableCells: Cell[] = [];
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if ((target.available = !!selectedCell?.canBeNext(target))) {
          newAviableCells.push(target);
        }
      }
    }
    return (this.aviableCells = newAviableCells);
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.aviableCells = this.aviableCells;
    if (newBoard.aviableCells.length === 0) {
      newBoard.isLose = true;
    }
    return newBoard;
  }
}
