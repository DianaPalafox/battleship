import Game from './game';
import './style.css';

export default function UI() {
  const game = Game();
  let x = 0;
  let y = 0;


  const msg = document.querySelector('.game-turns');

  const sumbitButton = document.querySelector('.button');
  sumbitButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').style.display = 'none';
    startGame();
  });

  const boardOne = game.getBoardH();
  const boardTwo = game.getBoardC();
  const boardDivOne = document.querySelector('.board-div-one');
  const boardDivTwo = document.querySelector('.board-div-two');

  function startGame() {
    msg.style.display = 'block';
    renderBoards();
    game.placeShipsC();
    game.placeShipsH();
    game.gameLoop();
  }

  function renderBoards() {
    document.querySelector('.boardh').style.display = 'flex';
    document.querySelector('.boardc').style.display = 'flex';
    boardOne.forEach(renderBoardOne);
    boardTwo.forEach(renderBoardTwo);
  }

  function renderBoardOne() {
    const cellButton = document.createElement('button');
    cellButton.classList.add('cellH');
    cellButton.setAttribute('id', `A${x}${y}`);
    boardDivOne.appendChild(cellButton);
    setXYAttribute();
  }

  function renderBoardTwo() {
    const cellButton = document.createElement('button');
    cellButton.classList.add('cellC');
    cellButton.setAttribute('data-index', `${x}`);
    cellButton.setAttribute('id', `${y}`);
    boardDivTwo.appendChild(cellButton);
    setXYAttribute();
  }

  function setXYAttribute() {
    y++;
    if (y > 9) {
      x++;
      y = 0;
    }
    if(x > 9) {
      x = 0;
    }
  }
}
