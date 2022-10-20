import Ship from './ship.js';

export default function Gameboard() {
  const board = [];
  const missHits = [];

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
        const newShip = Ship();
        board[i] = newShip;
        return board;
      }
    }
    return board; // shipCoord.push(`${x},${y}`);
  }

  function receiveAttack(x, y) {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === (`${x},${y - 1}`)) {
        i += 1;
        const obj = board[i];
        if (typeof obj === 'object') {
          const newShip = Ship();
          board[i] = newShip.hit();
          return board;
        }
        return missHits.push(`${x},${y}`);
      }
    }
    return board;
  }

  function sunkShips() {
    return board.some((value) => (typeof value === 'object'));
  }

  return { createBoard, placeShip, receiveAttack, sunkShips };
}
