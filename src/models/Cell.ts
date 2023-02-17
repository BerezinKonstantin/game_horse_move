import { Board } from "./Board";
import { Counter } from "./Counter";

export class Cell {
  readonly x: number;
  readonly y: number;
  full: boolean;
  available: boolean;
  board: Board;
  id: number;
  counter: Counter | null;
  cellnumber: number | null;
  constructor(board: Board, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.full = false;
    this.available = false;
    this.id = Math.random();
    this.counter = null;
    this.cellnumber = null;
  }

  public increaseCounter(counter: Counter) {
    return (this.cellnumber = counter.number++);
  }
}
