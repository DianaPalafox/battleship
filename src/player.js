import Gameboard from './gameboard';

export default function Player() {
  function humanTurn(x, y) {
    const humanPlayer = Gameboard();
    humanPlayer.receiveAttack(x, y);
  }

  function computerTurn() {
    const computerPlayer = Gameboard();
    const x = Math.floor((Math.random() * (9 - 0 + 1)));
    const y = Math.floor((Math.random() * (9 - 0 + 1)));
    computerPlayer.receiveAttack(x, y);
  }

  return { humanTurn, computerTurn };
}
