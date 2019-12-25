import GameBoard from '../factories/gameboard';
import Ship from '../factories/ship';

describe('GameBoard', () => {
  let ships;
  let gameboard;

  beforeEach(() => {
    ships = {
      // carrier: Object.assign({}, {
      //   length: carrierFromFactory.length,
      //   hits: carrierFromFactory.hits,
      //   hit: carrierFromFactory.hit,
      //   isSunk: carrierFromFactory.isSunk,
      // }),
      frigate: Ship(3),
      submarine: Ship(2),
      attacker: Ship(1),
    };

    gameboard = GameBoard();
  });

  test('board is empty at beginning', () => {
    for(let i=0; i<100; i++) {
      expect(gameboard.board[i]).toBeUndefined();
    }
  })
});