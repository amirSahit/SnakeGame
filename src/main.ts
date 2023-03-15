import "./style.css";
import "./gameConfig";
import {
  COLS,
  DEFAULT_SNAKE,
  DEFAULT_SNAKE_DIRECTION,
  INITIAL_SPEED,
  ROWS,
} from "./gameConfig";
import { createBoard } from "./board";
import { Direction } from "./type";
import { coordToId, idToCoord } from "./utils";

console.log("hi");
console.log(ROWS);
console.log(COLS);

function updateSnake(snakeBody: string[], direction: Direction) {
  //input [11-11, 12-11, 13-11]
  //find the head of the snake
  //write idToCoord function -- [11,12]
  const snakeHead = idToCoord(snakeBody[0]);
  //update new verticalPosition of snakeHead
  const snakeHeadX = snakeHead[0] + direction.v;
  //update new horizontalPosition of snakeHead
  const snakeHeadY = snakeHead[1] + direction.h;
  //convert the new snake into string with coordToId function
  const moveSnakeHead = coordToId([snakeHeadX, snakeHeadY]);
  //create new snake array with updated head and removed tail
  snakeBody.unshift(moveSnakeHead);
  snakeBody.pop();
  //return updated snake array
  console.log(snakeBody);
  //output [10-11, 11-11, 12-11]
}

function drawSnake() {
  console.log("yaaa I am drawn");
}

const startButton = document.getElementById(
  "start-button"
) as HTMLButtonElement;

function init() {
  //setup of the grid
  const divEl = document.getElementById("grid-container") as HTMLDivElement;

  //setup snake
  let snake = DEFAULT_SNAKE;
  const snakeDirection = DEFAULT_SNAKE_DIRECTION as Direction;
  //snake speed
  let speed = INITIAL_SPEED;

  //create Board
  createBoard(ROWS, COLS, divEl);
  startButton.removeEventListener("click", init);
  startButton.classList.add("bg-slate-200");
  startButton.classList.add("text-slate-400");

  //setup game Lopp - doing stuff again and again

  function gameLoop() {
    setTimeout(() => {
      //updateSnake & updateApple
      updateSnake(snake, snakeDirection);
      //drawSnake & drawApple
      drawSnake();

      window.requestAnimationFrame(gameLoop);
    }, speed);
  } //it is called recursivness in the function we call the function
  window.requestAnimationFrame(gameLoop);
}

startButton.addEventListener("click", init);
