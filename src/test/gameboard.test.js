import GameBoard from '../factories/gameboard';
import Ship from '../factories/ship';

describe('GameBoard', () => {
  let ships;
  let gameboard;

  beforeEach(() => {
    gameboard = GameBoard();
  });

  test('board is empty at beginning', () => {
    const result = gameboard.board.every((c) => c === undefined);
    expect(result).toBeTruthy();
  });

  test('place a ship at a position', () => {
    expect(gameboard.board[0]).toBeUndefined();
    expect(gameboard.board[1]).toBeUndefined();

    const ship = Ship(2);
    gameboard.placeShipAt(ship, 0, 0, 'horizontal');

    expect(gameboard.board[0]).not.toBeUndefined();
    expect(gameboard.board[1]).not.toBeUndefined();
  });

  test('no attack could count at the initialization', () => {
    for(let i=0; i<100; i++) {
      const y = Math.floor(i/10);
      const x = i % 10;

      expect(gameboard.receiveAttack(x, y)).toBeFalsy();
    }
  });

  test('received an attack at position', () => {
    const s1 = Ship(2);
    const s2 = Ship(4);
    gameboard.placeShipAt(s1, 0, 0, 'horizontal');
    gameboard.placeShipAt(s2, 4, 2, 'vertical');

    expect(gameboard.receiveAttack(4, 2)).toBeTruthy();
    expect(gameboard.receiveAttack(4, 3)).toBeTruthy();
    expect(gameboard.receiveAttack(4, 6)).toBeFalsy();

    expect(gameboard.receiveAttack(1, 0)).toBeTruthy();
    expect(gameboard.receiveAttack(1, 0)).toBeFalsy();
  });

  test('init the gameboard', () => {
    gameboard.init();

    const result = gameboard.board.some((c) => c !== undefined);
    expect(result).toBeTruthy();
  });

  test('get the state of the game board', () => {
    const s1 = Ship(2);
    const s2 = Ship(4);
    gameboard.placeShipAt(s1, 0, 0, 'horizontal');
    gameboard.placeShipAt(s2, 4, 2, 'vertical');


    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);

    expect(gameboard.state()).toBeFalsy();

    gameboard.receiveAttack(4, 2);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(4, 4);
    gameboard.receiveAttack(4, 5);

    expect(gameboard.state()).toBeTruthy();
  });
});