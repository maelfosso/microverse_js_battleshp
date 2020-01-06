import Cell from './Cell';
import Ship from './Ship';
import { el } from './utils';

const PlayerGrid = ({ game, context }) => {
  let cells = [];
  let raw = [];
  let disable = false;

  cells = game.player.gameboard.board.map((c, ix) => {
    let ship = c === undefined ? false : true;

    return <Cell index={ix} ship={ship} type={c}/>
  });

  game.on('togglePlayerAttacks', (result) => {
    console.log('togglePlayerAttack ', result);
    disable = result;
  });

  game.on('computerAttack', result => {
    console.log("PlayerGrid - ComputerAttack ", result);
    let [index, r] = result;
    console.log(cells[index]);
    if (r === true) {
      cells[index].classList.add('hit');

      // Computer play again
      game.computerAttack();
    } else {
      cells[index].classList.add('missed');
    }
  });
  
  return (
    <div className={`board ${disable ? 'disable': ''}`}>{ cells }</div>
  );
}

export default PlayerGrid;
