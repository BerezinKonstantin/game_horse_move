import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = [];
  boardSize: number = 8;

  public initCells() {
    for (let i = 0; i < this.boardSize; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(new Cell(this, j, i));
      }
      this.cells.push(row);
    }
  }

  /*public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.counter?.canNext(target);
      }
    }
  }*/

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }
}
