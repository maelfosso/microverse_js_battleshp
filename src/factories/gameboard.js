import Ship from './ship';
import { random } from "../views/utils";

const Gameboard = () => {
  const board = new Array(100).fill(undefined);
  const ships = [];
  // missedShot = [],

  // placeShipAt = (x, y, orientation, shipLength) => {
  const placeShipAt = (ship, x, y, orientation) => {
    let shipLength = ship.length;
    if (orientation == 'horizontal') {
      let values = [];
      for (let i=0; i<shipLength; i++) {
        values.push(board[10 * y + x + i]);
      }
      
      if (x - 1 >= 0 && board[10 * y + x - 1] !== undefined) return false;
      if (x + shipLength - 1 < board.length && board[10 * y + x + shipLength - 1] !== undefined) return false;


      if ((x + shipLength - 1 < 10) && (values.every(v => v === undefined)))  {
        for (let i=0; i<shipLength; i++) {
          if (board[10 * (y + 1) + x + i] !== undefined) return false;
          if (board[10 * (y - 1) + x + i] !== undefined) return false;
        }

        for (let i=0; i<shipLength; i++) {

          board[10 * y + x + i] = ships.length;
        }

        ships.push({
          'ship': ship,
          "start": [x,y],
          'end': [x + shipLength - 1, y],
          'orientation': orientation
        })
        return true;
      } else {
        return false;
      }
    } else if (orientation == 'vertical') {
      let values = [];
      for (let i=0; i<shipLength; i++) {
        values.push(board[10 * (y + i) + x]);
      }
      
      if (10 * (y - 1) + x >= 0 && board[10 * (y - 1) + x] !== undefined) return false;
      if (10 * (y + shipLength - 1) + x < board.length && board[10 * (y + shipLength - 1) + x] !== undefined) return false;

      
      if ((y + shipLength - 1 < 10) && (values.every(v => v === undefined))) {
        for (let i=0; i<shipLength; i++) {
          if (board[10 * (y + i) + x - 1] !== undefined) return false;
          if (board[10 * (y + i) + x + 1] !== undefined) return false;
        }

        for (let i=0; i<shipLength; i++) {
          board[10 * (y + i) + x] = ships.length; // shipLength; 
        }

        ships.push({
          'ship': ship,
          "start": [x,y],
          'end': [x, y + shipLength - 1],
          'orientation': orientation
        });
        return true;
      } else {
        return false;
      }
    }
  }

  const receiveAttack = (x, y) => {
    let ix = board[10 * y + x];
    console.log("receiveAttack", x, y, ix);
    if (ix === undefined) {
      board[10 * y + x] = -1;
      
      return false;
    } else { 
      
      if (isNaN(ix) || ix == -1) {
        return false; // Already attacked
      }

      console.log(ships[ix]);
      let {ship, start, end, orientation} = ships[ix]; // .onBaord();
      let hix = -1;

      if (orientation === "horizontal") {
        hix = x - start[0];
      } else  if (orientation === "vertical") {
        hix = y - start[1];
      }
      console.log('hix', hix);
      ships[ix].ship.hit(hix); 
      board[10 * y + x] = 'X';
      // ship.hit(hix); 
      return true;
    }
  }

  const state = () => {
    if (ships.every(s => s.ship.isSunk())) {
      return true;
    } else {
      return false;
    }
  }

  const init = () => {
    for (let i=0; i<board.length; i++) {
      board[i] = undefined;
    }
    while (ships.length > 0) ships.pop();

    let shipTypeNumber = {
      '4': 1,
      '3': 2,
      '2': 3,
      '1': 4
    }

    Object.keys(shipTypeNumber).forEach(type => {
      
      let ship = Ship(+type);

      let i=0;
      let step = 0;
      while (i < shipTypeNumber[type] && step < 50) {
        
        let x = random(10);
        let y = random(10);
        let orientation = random(10) % 2 == 0 ? "horizontal" : "vertical";

        let isPlaced = placeShipAt(ship, x, y, orientation);
        if (isPlaced) {
          i++;
        }
        step++;
      }
    });

    console.log(ships);
  }

  return {
    board,
    ships,

    placeShipAt,
    receiveAttack,
    state,

    init
  }
};

export default Gameboard;

