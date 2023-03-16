import { Direction } from "./type";
import { coordToId, idToCoord } from "./utils";

export function updateSnake(snakeBody: string[], direction: Direction) {
  //input [11-11, 12-11, 13-11]
  //find the head of the snake
  //write idToCoord function -- [11,12]
  const snakeHead = idToCoord(snakeBody[0]);
  //update new verticalPosition of snakeHead
  const snakeHeadV = snakeHead[0] + direction.v;
  //update new horizontalPosition of snakeHead
  const snakeHeadH = snakeHead[1] + direction.h;
  //convert the new snake into string with coordToId function
  const moveSnakeHead = coordToId([snakeHeadV, snakeHeadH]);
  //create new snake array with updated head and removed tail

  const slicedSnake = snakeBody.slice(0, snakeBody.length - 1);
  //splice mutattion - slice returns a copy
  return [moveSnakeHead, ...slicedSnake];
  //return updated snake array

  //output [10-11, 11-11, 12-11]
}

export function drawSnake(snake: string[]) {
  //2. removing color from old snake
  const allSnakeSquares = document.querySelectorAll(".snake-square");
  allSnakeSquares.forEach((snakeBlock) => {
    snakeBlock.classList.remove("snake-square");
  });
  //1. loop through snake array [11-11, 11-12, 11-13]
  snake.forEach((id) => {
    const snakeSquare = document.getElementById(id) as HTMLDivElement;
    snakeSquare.classList.add("snake-square");
  });
  //add styling to all snake squares -- loop through snake array and for item ->
  /* for (let i = 0; i < snake.length; i++) {
    console.log(snake[i]);
    let wholeGrit = document.getElementById(`${snake[i]}`);
    console.log(wholeGrit);
    wholeGrit?.classList.add("snake-square");
  } */
  //quereyselect each git item for snake, add class snake-square
}
