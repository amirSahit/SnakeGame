import { Direction } from "./type";
import { coordToId, idToCoord } from "./utils";

export function updateSnake(snakeBody: string[], direction: Direction) {
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
