export default function Ship(coord) {
  const coordinates = coord;
  const length = 1;
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
  return {
    coordinates, length, numOfHits, sunk, hit, isSunk,
  };
}
