import Ship from './ship';

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
        const newShip = Ship(`${x},${y}`);
        board[i] = newShip;
        return board;
      }
    }
    return board;
  }

  function receiveAttackObject(x, y) {
    if (board.some((e) => e.coordinates === (`${x},${y}`))) {
      const newShip = Ship();
      const i = `${x}${y}`;
      board[i] = newShip.hit();
      console.log(board);
      return board;
    }
    return board;
  }

  function receiveAttack(x, y) {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === (`${x},${y}`)) {
        board[i] = 'hit';
        console.log(board);
        return board;
      }
    }
    receiveAttackObject(x, y);
    return board;
  }

  function sunkShips() {
    return board.some((value) => (typeof value === 'object'));
  }

  return {
    createBoard, placeShip, receiveAttack, sunkShips, board,
  };
}
