import { COLS, ROWS } from "./gameConfig";
import { coordToId, randomCoordinate } from "./utils";

//Create Random Apple
export function getRandomApple() {
  const [appleRow, applColum] = randomCoordinate(ROWS, COLS);
  return coordToId([appleRow, applColum]);
}

//Draw Random Apple

export function drawRandomApple(appleDraw: string) {
  //get div with AppleCoords id
  const myAppleBlock = document.getElementById(appleDraw) as HTMLDivElement;
  myAppleBlock.classList.add("apple-square");

  // add .apple-square class to the div;
}

export function updateApple(snake: string[], apple: string) {
  //check if snakehead is equal to apple
  if (snake[0] == apple) {
    //remove the apple and  generate a new one
    const myAppleBlock = document.getElementById(apple) as HTMLDivElement;
    myAppleBlock.classList.remove("apple-square");

    const newApple = getRandomApple();
    return newApple;
  } //else return the apple
  return apple;
}
