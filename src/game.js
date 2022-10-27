import Player from './player';
import Gameboard from './gameboard';

export default function Game() {
  const boardHumanPlayer = Gameboard();
  const boardComputerPlayer = Gameboard();
  const player = Player();
  const computer = Player();

  const getBoardH = () => boardHumanPlayer.createBoard();
  const getBoardC = () => boardComputerPlayer.createBoard();

  function humanAttack(x, y) {
    boardComputerPlayer.receiveAttack(x, y);
  }

  function computerAttack() {
    const x = Math.floor((Math.random() * (9 - 0 + 1)));
    const y = Math.floor((Math.random() * (9 - 0 + 1)));
    const div = document.querySelector(`#A${x}${y}`);
    if (div.innerHTML === '') {
      boardHumanPlayer.receiveAttack(x, y);
      div.innerHTML = 'x';
    } else anotherComputerAtack();
  }

  function anotherComputerAtack() {
    const x = Math.floor((Math.random() * (9 - 0 + 1)));
    const y = Math.floor((Math.random() * (9 - 0 + 1)));
    boardHumanPlayer.receiveAttack(x, y);
    document.querySelector(`#A${x}${y}`).innerHTML = 'x';
  }

  const placeComputerShips = (length) => {
    let x = Math.floor((Math.random() * (9 - 0 + 1)));
    let y = Math.floor((Math.random() * (9 - 0 + 1)));
    for (let i = 0; i < length; i++) {
      boardComputerPlayer.placeShip(x, y);
      y++;
      if (y > 9) {
        x++;
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
        x++;
        y = 0;
      }
    }
  };

  function playerTurn(e) {
    const a = e.target.dataset.index;
    const b = e.target.id;
    humanAttack(a, b);
    e.target.innerHTML = 'X';
    computer.msgComputerTurn();
  }

  function computerTurn() {
    computerAttack();
    player.msgPlayerTurn();
  }

  function gameLoop() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('cellC') && e.target.innerHTML === '') {
        playerTurn(e);
        computerTurn();
      }
    });
  }

  function placeShipsC() {
    placeComputerShips(5);
    placeComputerShips(4);
    placeComputerShips(3);
    placeComputerShips(3);
    placeComputerShips(2);
  }

  function placeShipsH() {
    placeHumanShips(5);
    placeHumanShips(4);
    placeHumanShips(3);
    placeHumanShips(3);
    placeHumanShips(2);
  }

  return {
    getBoardC, getBoardH, placeComputerShips, placeHumanShips, placeShipsC, placeShipsH, gameLoop,
  };
}
