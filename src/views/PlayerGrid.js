import Cell from './Cell';
import Ship from './Ship';
import { el, mount, Fragment } from './utils';

const PlayerGrid = ({ game, context }) => {
  let cells = [];
  let raw = [];

  cells = game.player.gameboard.board.map((c, ix) => {
    let ship = c === undefined ? false : true;

    return <Cell index={ix} ship={ship} type={c}/>
  });

  game.on('computerAttack', result => {
    let [index, r] = result;
    if (r === true) {
      cells[index].classList.add('hit');

      // Computer play again
      game.computerAttack();
    } else {
      cells[index].classList.add('missed');
    }
  });
  
  game.on('init', () => {
    cells = game.player.gameboard.board.map((c, ix) => {
      let ship = c === undefined ? false : true;
  
      return <Cell index={ix} ship={ship} type={c}/>
    });

    const { player: host } = context;
    mount(
      <Fragment>
        { cells }
      </Fragment>,
      host
    );
  });

  game.on('state', ({state, player}) => {
    if (state == true) {}
  });

  return (
    <div className="board disable" ref="player" context={context}>{ cells }</div>
  );
}

export default PlayerGrid;
