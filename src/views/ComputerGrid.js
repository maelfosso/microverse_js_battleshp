import { el } from './utils';
import Cell from './Cell';

const ComputerGrid = ({ game, context }) => {

  const handleClick = coord => e => {
    const cell = e.target;
    let res = game.playerAttack(coord);
    if (res === false) {
      cell.classList.add('missed');
      game.computerAttack();
    } else {
      cell.classList.add('hit');
    }
  };

  const cells = new Array(100)
    .fill(undefined)
    .map((a, ix) => <Cell index={ix} click={handleClick(ix)}/>);

  return (
    <div 
      className="board"
    >
      { cells.flat() }
    </div>
  );
}

export default ComputerGrid;