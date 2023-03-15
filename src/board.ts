import { coordToId } from "./utils";

//create a function to create board
export function createBoard(
  numRows: number,
  numCols: number,
  container: HTMLDivElement
) {
  const containerStyling = [
    "h-[420px]",
    "aspect-square",
    "grid",
    "grid-cols-21",
    "grid-rows-21",
    "border-4",
    "border-green-400",
  ];

  // add display grid, cols and rows to the container
  container.classList.add(...containerStyling);

  //add a div for each single row and column (hint loop)
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
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
