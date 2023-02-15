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
}
