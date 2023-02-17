import { Board } from "./Board";
import { Counter } from "./Counter";

export class Cell {
  readonly x: number;
  readonly y: number;
  available: boolean;
  board: Board;
  id: number;
  cellnumber: number | null;
  constructor(board: Board, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.available = false;
    this.id = Math.random();
    this.cellnumber = null;
  }

  public increaseCounter(counter: Counter) {
    return (this.cellnumber = counter.number++);
  }
  canBeNext(target: Cell): boolean {
    const dx = Math.abs(this.x - target.x);
    const dy = Math.abs(this.y - target.y);
    return (
      !target.cellnumber && ((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
    );
  }
}
