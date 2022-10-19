export default function Ship(shipLength) {
  const length = shipLength;
  let numOfHits = 0;
  let sunk = false;

  function hit() {
    numOfHits += 1;
    return numOfHits;
  }

  function isSunk() {
    if (numOfHits === length) {
      sunk = true;
      return sunk;
    }
    sunk = false;
    return sunk;
  }
  return { length, numOfHits, sunk, hit, isSunk };
}
