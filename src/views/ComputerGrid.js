import { el, mount, Fragment } from './utils';
import Cell from './Cell';

const ComputerGrid = ({ game, context }) => {

  let disable = false;


  game.on('togglePlayerAttacks', (result) => {
    console.log('togglePlayerAttack ', result);
    disable = result;
  });

  game.on('init', () => {
    console.log('ComputerGrid - on init');

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

  const handleClick = coord => e => {
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