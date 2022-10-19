import Ship from './ship.js';

export default function Gameboard() {
  const board = [];

  function createBoard() {
    const rows = 10;
    const columns = 10;

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        board.push(`${x},${y}`);
      }
    }
    return board;
  }

  function placeShip(x, y) {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === (`${x},${y}`)) {
        const newShip = Ship(3);
        board[i] = newShip;
        return board;
      }
    }
  }

  return { createBoard, placeShip };
}
