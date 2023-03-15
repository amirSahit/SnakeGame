import { Coordinate } from "./type";

export function coordToId([row, col]: Coordinate): `${number}-${number}` {
  return `${row}-${col}`;
}
