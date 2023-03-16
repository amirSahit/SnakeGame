import "./style.css";
import "./gameConfig";
import {
  COLS,
  DEFAULT_SNAKE,
  DEFAULT_SNAKE_DIRECTION,
  INITIAL_SPEED,
  ROWS,
} from "./gameConfig";
import { boardControls, createBoard } from "./board";
import { Coordinate, Direction } from "./type";
import { drawSnake, updateSnake } from "./snakeMove";
import { coordToId, idToCoord, randomCoordinate } from "./utils";
import { drawRandomApple, getRandomApple, updateApple } from "./apple";

console.log("hi");
console.log(ROWS);
console.log(COLS);

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

  let apple: string = getRandomApple();
  drawRandomApple(apple);
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
      const updatedApple = updateApple(snake, apple);
      if (updatedSnake[0] === apple) {
        console.log("Snake at apple");
      }
      apple = updatedApple;
      drawRandomApple(updatedApple);
      //check if snake ate the apple
    }, speed);
  } //it is called recursivness in the function we call the function
  window.requestAnimationFrame(gameLoop);
}

startButton.addEventListener("click", init);
