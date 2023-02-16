import { Cell } from "./Cell";

export class Counter {
  counter: number = 0;
  cell: Cell;
  constructor(cell: Cell) {
    this.cell = cell;
  }

  public increaseCounter() {
    return this.counter++;
  }

  canNext(target: Cell): boolean {
    return true;
  }
  nextStep(target: Cell) {}
}
