import { Coordinate } from "./type";

export function coordToId([row, col]: Coordinate): `${number}-${number}` {
  return `${row}-${col}`;
}

export function idToCoord(id: string): Coordinate {
  const [row, col] = id.split("-");
  return [parseInt(row), parseInt(col)];
}
