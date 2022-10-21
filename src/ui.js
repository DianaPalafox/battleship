import Player from './player';
import Game from './game';
import './style.css';

export default function UI() {
  const game = Game();

  const sumbitButton = document.querySelector('.button');
  sumbitButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').style.display = 'none';
    renderBoards();
  });

  const boardOne = game.getBoardH();
  const boardTwo = game.getBoardC();
  const boardDivOne = document.querySelector('.board-div-one');
  const boardDivTwo = document.querySelector('.board-div-two');

  function renderBoards() {
    boardOne.forEach(renderBoardOne);
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
}
