import Cell from './Cell';
import { el } from './utils';

const PlayerGrid = ({ gameboard, context }) => {
  const cells = gameboard.board.map((c) => {
    let ship = c === undefined ? false : true;

    return <Cell ship={ship} />
  });
  
  // new Array(10)
  //   .fill(undefined)
  //   .map((a) => {
  //     return new Array(10).fill(undefined)
  //       .map((c) => <div className="cell"></div>)
  //   });

  
  return (
    <div className="board">{ cells }</div>
  );
}

export default PlayerGrid;