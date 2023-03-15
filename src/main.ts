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
import { updateSnake } from "./snakeMove";

console.log("hi");
console.log(ROWS);
console.log(COLS);

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
