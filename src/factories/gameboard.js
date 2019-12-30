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
        values.push(board[10 * x + y + i]);
      }

      if ((x + ship.length - 1 < 10) && (values.every(v => v === undefined)))  {
        for (let i=0; i<shipLength; i++) {
          board[10 * x + y + i] = ships.length;
        }

        // ships.push(Ship(shipLength, [x,y], [x+shipLength, y], orientation));
        ships.push({
          'ship': ship,
          "start": [x,y],
          'end': [x+shipLength, y],
          'orientation': orientation
        })
        return true;
      } else {
        return false;
      }
    } else if (orientation == 'vertical') {
      let values = [];
      for (let i=0; i<shipLength; i++) {
        values.push(board[10 * (x + i) + y]);
      }

      if ((y + shipLength - 1 < 10) && (values.every(v => v === undefined))) {
        for (let i=0; i<shipLength; i++) {
          board[10 * (x + i) + y] = ships.length;
        }

        // ships.push(Ship(shipLength, [x,y], [x, y+shipLength], orientation));
        ships.push({
          'ship': ship,
          "start": [x,y],
          'end': [x, y+shipLength],
          'orientation': orientation
        });
        return true;
      } else {
        return false;
      }
    }
  }

  const receiveAttack = (x, y) => {
    let ix = board[10 * x + y];
    
    if (ix === undefined) {
      board[10 * x + y] = -1;
      
      return false;
    } else { 
      
      if (isNaN(ix)) {
        return false; // Already attacked
      }

      let {ship, start, end, orientation} = ships[ix]; // .onBaord();
      let hix = -1;

      if (o == 'horizontal') {
        hix = x - start[0];
      } else  if (o == 'horizontal') {
        hix = y - start[1];
      }
      
      ships[ix].ship.hit(hix); 
      board[10 * x + y] = 'X';
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
    let shipTypeNumber = {
      '4': 1,
      '3': 2,
      '2': 3,
      '1': 4
    }

    Object.keys(shipTypeNumber).forEach(type => {
      
      let ship = Ship(+type);

      let i=0;
      while (i < shipTypeNumber[type]) {
        
        let x = random(10);
        let y = random(10);
        let orientation = random(10) % 2 == 0 ? "horizontal" : "vertical";

        let isPlaced = placeShipAt(ship, x, y, orientation);

        if (isPlaced) {
          i++;
        }
      }
    });
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

