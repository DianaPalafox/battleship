import Player from './player';
import Gameboard from './gameboard';

export default function Game() {
  const humanPlayer = Player();
  const computerPlayer = Player();

  const boardHumanPlayer = Gameboard();
  const boardComputerPlayer = Gameboard();

  const getBoardH = () => boardHumanPlayer.createBoard();
  const getBoardC = () => boardComputerPlayer.createBoard();

  const placeComputerShips = (length) => {
    let x = Math.floor((Math.random() * (9 - 0 + 1)));
    let y = Math.floor((Math.random() * (9 - 0 + 1)));
    for (let i = 0; i < length; i++) {
      boardComputerPlayer.placeShip(x, y);
      y++;
      if (y > 9) {
        x++
        y = 0;
      }
    }
  };

  const placeHumanShips = (length) => {
    let x = Math.floor((Math.random() * (9 - 0 + 1)));
    let y = Math.floor((Math.random() * (9 - 0 + 1)));
    for (let i = 0; i < length; i++) {
      boardHumanPlayer.placeShip(x, y);
      y++;
      if (y > 9) {
        x++
        y = 0;
      }
    }
  };

  return {
    getBoardC, getBoardH, placeComputerShips, placeHumanShips,
  };
}
