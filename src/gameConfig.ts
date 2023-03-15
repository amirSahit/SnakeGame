import "./style.css";

//number of board cols and rows
export const ROWS = 21;
export const COLS = 21;

//speed
export const INITIAL_SPEED = 1000; //speed in ms

//array of coordinates specifying snake
//first element is always the head of the snake
//last element is always the tail of the snake
export const DEFAULT_SNAKE = ["11-11", "12-11", "13-11"];

//snake direction --
//0 is no moving in that direction
//+1 for rows is downwards, -1 is upwards
//+1 for cols is rightwards, -1 is leftwards
export const DEFAULT_SNAKE_DIRECTION = {
  v: -1, //==>["10-11", "12-11", "13-11"] snake head goes up
  h: 0,
};
