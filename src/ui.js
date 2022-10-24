// import Player from './player';
import Game from './game';
// import dragNDrop from './drag-n-drop';
import './style.css';

export default function UI() {
  // dragNDrop();
  const game = Game();

  /* const carrier = document.querySelector('.carrier');
  const battleship = document.querySelector('.battleship');
  const cruiser = document.querySelector('.cruiser');
  const submarine = document.querySelector('.submarine');
  const destroyer = document.querySelector('.destroyer'); */

  const msg = document.querySelector('.game-turns');
  const msgContainer = document.createElement('div');
  msgContainer.classList.add('msg-container');

  const sumbitButton = document.querySelector('.button');
  sumbitButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').style.display = 'none';
    msg.style.display = 'block';
    renderBoards();
    placeShipsC();
    placeShipsH();
  });

  const boardOne = game.getBoardH();
  const boardTwo = game.getBoardC();
  const boardDivOne = document.querySelector('.board-div-one');
  const boardDivTwo = document.querySelector('.board-div-two');

  function renderBoards() {
    document.querySelector('.boardh').style.display = 'flex';
    document.querySelector('.boardc').style.display = 'flex';
    boardOne.forEach(renderBoardOne);
    console.log(boardOne)
    boardTwo.forEach(renderBoardTwo);
  }

  function renderBoardOne() {
    const cellButton = document.createElement('button');
    cellButton.classList.add('cell');
    boardDivOne.appendChild(cellButton);
  }

  function renderBoardTwo() {
    const cellButton = document.createElement('button');
    cellButton.classList.add('cell');
    boardDivTwo.appendChild(cellButton);
  }

  function renderMessage(x) {
    const msgContent = Message(document.querySelector('.name').value);
    msgContainer.textContent = msgContent.to`${x}`();
    msg.appendChild(msgContainer);
  }

  function placeShipsC() {
    game.placeComputerShips(5);
    game.placeComputerShips(4);
    game.placeComputerShips(3);
    game.placeComputerShips(3);
    game.placeComputerShips(2);
  }

  function placeShipsH() {
    game.placeHumanShips(5);
    game.placeHumanShips(4);
    game.placeHumanShips(3);
    game.placeHumanShips(3);
    game.placeHumanShips(2);
  }

  /* function userPlaceShips() {
    document.querySelector('.boardh').style.display = 'flex';
    boardOne.forEach(renderBoardOne);
    renderShips();
    renderMessage();
  }

  function renderShips() {
    makeShips(5, carrier);
    makeShips(4, battleship);
    makeShips(3, cruiser);
    makeShips(3, submarine);
    makeShips(2, destroyer);
  } */

  /* function makeShips(x, container) {
    for (let i = 0; i < x; i++) {
      const content = document.createElement('div');
      content.classList.add('content');
      container.appendChild(content);
    }
  } */
}

const Message = (name) => {
  const PlaceShips = () => 'Place your ships Captain ' + `${name}`;
  const SignalPlayersTurn = () => 'Your turn Captain ' `${name}`;
  const SignalComputersTurn = () => 'Your enemie turn';
  return { PlaceShips, SignalPlayersTurn, SignalComputersTurn  };
};
