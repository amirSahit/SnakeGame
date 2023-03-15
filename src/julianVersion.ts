import "./style.css";
import "./gameConfig";
import { COLS, ROWS } from "./gameConfig";

console.log("hi");
console.log(ROWS);
console.log(COLS);

const divEl = document.getElementById("grid-container") as HTMLDivElement;

function coordToId([row, col]: [number, number]): `${number}-${number}` {
  return `${row}-${col}`;
}

//create a function to create board
function createBoard(
  numRows: number,
  numCols: number,
  container: HTMLDivElement
) {
  // add display grid, cols and rows to the container
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
  //add a div for each single row and column (hint loop)
  for (let row = 0; row <= numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      //create gridcell
      const cells = document.createElement("div");
      //add the class of "grid-square" to each div
      cells.classList.add("grid-square");

      //add a unique id to each single div Element (hint firstElement: "0-0" secondChild: "0-1")
      const Id = coordToId([row, col]);
      cells.id = Id;

      //append the divs to the container
      container.appendChild(cells);
    }
  }
}
createBoard(ROWS, COLS, divEl);
