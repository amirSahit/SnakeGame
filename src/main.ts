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

function drawSnake(snake: string[]) {
  console.log("yaaa I am drawn");
  //loop through snake array [11-11, 11-12, 11-13]
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
      const updatedSnake = updateSnake(snake, snakeDirection);
      //drawSnake & drawApple
      drawSnake(snake);
      snake = updatedSnake;
      window.requestAnimationFrame(gameLoop);
    }, speed);
  } //it is called recursivness in the function we call the function
  window.requestAnimationFrame(gameLoop);
}

startButton.addEventListener("click", init);
