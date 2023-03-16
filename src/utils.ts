import { Coordinate } from "./type";

export function coordToId([row, col]: Coordinate): `${number}-${number}` {
  return `${row}-${col}`;
}

export function idToCoord(id: string): Coordinate {
  const [row, col] = id.split("-");
  return [parseInt(row), parseInt(col)];
}

//return id.split("-")

export function randomNumber(range: number) {
  return Math.floor(Math.random() * range);
}

export function randomCoordinate(xRange: number, yRange: number) {
  return [randomNumber(xRange), randomNumber(yRange)];
}
