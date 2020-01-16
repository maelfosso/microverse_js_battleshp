import Ship from '../factories/ship';

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(3);
  });

  describe('hit()', () => {
    test('The ship is hit nowhere', () => {
      for(let i=0; i<3; i++) {
        expect(ship.hits[i]).toBeFalsy();
      }
    });

    test('hit(0) set the ship part as hit', () => {
      ship.hit(0);
      expect(ship.hits[0]).toBeTruthy();
    });

    test('hit(5) should raise an error', () => {
      expect(ship.length).toBe(3);
      expect(() => ship.hit(5)).toThrow();
    });
  });

  describe('isSunk()', () => {
    test('The ship is not sunk at the beginning', () => {
      expect(ship.isSunk()).toBeFalsy();
    });

    test('The ship is not sunk after one hit', () => {
      ship.hit(0);
      expect(ship.isSunk()).toBeFalsy();
    });

    test('The ship is sunk after all hit', () => {
      ship.hit(0);
      ship.hit(1);
      ship.hit(2);
      expect(ship.isSunk()).toBeTruthy();
    });
  });
});