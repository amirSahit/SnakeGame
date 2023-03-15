import "./style.css";
import "./gameConfig";
import { COLS, ROWS } from "./gameConfig";
import { createBoard } from "./board";

console.log("hi");
console.log(ROWS);
console.log(COLS);

export const containerStyling = [
  "h-[420px]",
  "aspect-square",
  "grid",
  "grid-cols-21",
  "grid-rows-21",
  "border-4",
  "border-green-400",
];

const divEl = document.getElementById("grid-container") as HTMLDivElement;

createBoard(ROWS, COLS, divEl);
