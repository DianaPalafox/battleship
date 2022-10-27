// import Gameboard from './gameboard';

export default function Player() {
  // const humanPlayer = Gameboard();
  // const computerPlayer = Gameboard();
  // const msg = document.querySelector('.game-turns');
  const msgContainer = document.querySelector('.msg-container');

  function msgPlayerTurn() {
    const msgContent = Message(document.querySelector('.name').value);
    msgContainer.textContent = msgContent.toSignalPlayersTurn();
  }

  function msgComputerTurn() {
    const msgContent = Message(document.querySelector('.name').value);
    msgContainer.textContent = msgContent.toSignalComputersTurn();
  }

  function msgPlaceShips() {
    const msgContent = Message(document.querySelector('.name').value);
    msgContainer.textContent = msgContent.toPlaceShips();
  }

  function deleteMsg() {
      msgContainer.style.display = 'none';
  }

  /* function attack() {
    const cells = document.querySelectorAll('.cellC');
    cells.forEach((cell) => {
      cell.addEventListener('click', (e) => {
        const a = e.target.dataset.index;
        const b = e.target.id;
        console.log(a, b);
        humanTurn(a, b);
      });
    });
  } */

  return {
    // humanTurn,
    // computerTurn,
    msgPlayerTurn,
    msgComputerTurn,
    msgPlaceShips,
    deleteMsg,
  };
}

const Message = (name) => {
  const toPlaceShips = () => 'Place your ships Captain ' + `${name}`;
  const toSignalPlayersTurn = () => 'Your turn Captain ' + `${name}`;
  const toSignalComputersTurn = () => 'Your enemies turn, Captain ' + `${name}`;
  return { toPlaceShips, toSignalPlayersTurn, toSignalComputersTurn };
};
