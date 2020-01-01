import Cell from './Cell';
import Ship from './Ship';
import { el } from './utils';

const PlayerGrid = ({ gameboard, context }) => {
  let cells = [];
  let raw = [];
  cells = gameboard.board.map((c) => {
    let ship = c === undefined ? false : true;

    return <Cell ship={ship} type={c}/>
  });

  // new Array(10)
  //   .fill(undefined)=
  //   .map((a) => {
  //     return new Array(10).fill(undefined)
  //       .map((c) => <div className="cell"></div>)
  //   });

  // let board = gameboard.board;
  // let ships = gameboard.ships;

  // console.log("IN PLAYER GRID");
  // console.log(board);
  // let i=0;
  // while (i < board.length) {
  //   if (board[i] === undefined) {
  //     cells.push(<Cell />);
  //     raw.push(<Cell />);

  //     i++;
  //   } else {
  //     let j=i;
  //     let ship = [];
  //     while (j < board.length && board[j] !== undefined) {
  //       ship.push(board[j]);
  //       j++;

  //       raw.push(<Cell />);
  //     }

  //     cells.push(<Ship ship={ship} />);
  //     i = i + j - 1;
  //     console.log(i, ship.length, <Ship ship={ship} />);
  //     // i++;
  //   }
  // }

  // console.log(cells);
  // console.log(raw);
  
  return (
    <div className="board">{ cells }</div>
  );
}

export default PlayerGrid;