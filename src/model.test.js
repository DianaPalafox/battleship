import Ship from './model.js'

test('return the number of hits', () => {
    const newShip = Ship();
    expect(newShip.hit()).toBe(1);
});

