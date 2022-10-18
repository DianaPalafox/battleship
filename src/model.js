export default function Ship() {
  const length = 0; 
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
  return { hit, isSunk };
}
