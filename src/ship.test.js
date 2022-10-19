import Ship from './ship.js'

test('return the number of hits', () => {
    const newShip = Ship(3);
    expect(newShip.hit()).toBe(1);
});

test('return if the ship has sunked', () => {
    const newShip = Ship(3);
    expect(newShip.isSunk()).toBe(false);
});