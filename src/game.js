import Player from './player';
import Gameboard from './gameboard';

export default function Game() {
  const humanPlayer = Player();
  const computerPlayer = Player();

  const boardHumanPlayer = Gameboard();
  const boardComputerPlayer = Gameboard();

  const getBoardH = () => boardHumanPlayer.createBoard();
  const getBoardC = () => boardComputerPlayer.createBoard(); 

  return { getBoardC, getBoardH }
}
