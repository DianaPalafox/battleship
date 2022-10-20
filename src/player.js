import Gameboard from './gameboard';

export default function Player() {
  // const humanPlayer = () => Gameboard();
  //const computerPlayer = Gameboard();

  function randomPlays() {
    const x = Math.floor((Math.random() * (9 - 0 + 1)));
    const y = Math.floor((Math.random() * (9 - 0 + 1)));
    //computerPlayer.receiveAttack(x, y);
    
  }

  return { randomPlays };
}
