import { Board } from "./Board";

export class Cell {
  readonly x: number;
  readonly y: number;
  full: boolean;
  available: boolean;
  board: Board;
  id: number;
  constructor(board: Board, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.full = false;
    this.available = false;
    this.id = Math.random();
  }
}
