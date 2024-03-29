import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      onClick={() => click(cell)}
      className={[
        "cell",
        selected ? "cell__selected" : "",
        cell.cellnumber ? "cell__full" : "",
      ].join(" ")}
    >
      {cell.cellnumber}
      {!cell.cellnumber && cell.available && (
        <div className="cell__available" />
      )}
    </div>
  );
};

export default CellComponent;
