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

          board[10 * y + x + i] = shipLength; // ships.length;
        }

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
          board[10 * (y + i) + x] = shipLength; 
        }

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
      console.log(ship);

      let i=0;
      let step = 0;
      while (i < shipTypeNumber[type] && step < 50) {
        
        let x = random(10);
        let y = random(10);
        let orientation = random(10) % 2 == 0 ? "horizontal" : "vertical";

        let isPlaced = placeShipAt(ship, x, y, orientation);
        console.log(i, isPlaced, x, y);
        if (isPlaced) {
          i++;
          console.log(board);
        }
        step++;
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

