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
import { drawSnake, updateSnake } from "./snakeMove";

console.log("hi");
console.log(ROWS);
console.log(COLS);

const startButton = document.getElementById(
  "start-button"
) as HTMLButtonElement;

//implement Board Controls - activates when arrow keys are pressed

function boardControls(e: KeyboardEvent, snakeDirection: Direction) {
  console.log(e);
  //snake direction --
  //0 is no moving in that direction
  //+1 for rows is downwards, -1 is upwards
  //+1 for cols is rightwards, -1 is leftwards
  /*if (e.key === "ArrowLeft") {
    snakeDirection.v = 0;
    snakeDirection.h = -1;
  }*/
  switch (e.key) {
    case "ArrowLeft":
      if (snakeDirection.v === 0 && snakeDirection.h === 1) {
        break;
      }
      snakeDirection.v = 0;
      snakeDirection.h = -1;
      break;
    case "ArrowUp":
      if (snakeDirection.v === 1 && snakeDirection.h === 0) {
        break;
      }
      snakeDirection.v = -1;
      snakeDirection.h = 0;
      break;
    case "ArrowRight":
      if (snakeDirection.v === 0 && snakeDirection.h === -1) {
        break;
      }
      snakeDirection.v = 0;
      snakeDirection.h = 1;
      break;
    case "ArrowDown":
      if (snakeDirection.v === -1 && snakeDirection.h === 0) {
        break;
      }
      snakeDirection.v = 1;
      snakeDirection.h = 0;
      break;
  }
}

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

  //vreate Controls
  document.addEventListener("keydown", (event) => {
    boardControls(event, snakeDirection);
  });

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
