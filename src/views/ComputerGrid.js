import { el, mount, Fragment } from './utils';
import Cell from './Cell';

const ComputerGrid = ({ game, context }) => {

  let disable = false;


  game.on('togglePlayerAttacks', (result) => {
    disable = result;
  });

  game.on('init', () => {
    const cells = new Array(100)
      .fill(undefined)
      .map((a, ix) => <Cell index={ix} click={handleClick(ix)}/>);


    const { computer: host } = context;
    mount(
      <Fragment>
        { cells }
      </Fragment>,
      host
    );
  });

  game.on('state', ({ state }) => {
    if (state === true) {
      const { computer: host } = context;
      host.classList.add('winner');
    }
  });

  const handleClick = coord => e => {
    e.preventDefault();
    e.stopPropagation();

    const cell = e.target;
    let res = game.playerAttack(coord);

    if (res === false) {
      cell.classList.add('missed');
      game.computerAttack();
    } else {
      cell.classList.add('hit');

      let {state, player} = game.state('computer');
      if (state === true) {
        disable = true;
      }
    }
  };

  const cells = new Array(100)
    .fill(undefined)
    .map((a, ix) => <Cell index={ix} click={handleClick(ix)}/>);

  return (
    <div 
      className={`board ${disable ? 'disable': ''}`}
      ref="computer" context={context}
    >
      { cells.flat() }
    </div>
  );
}

export default ComputerGrid;