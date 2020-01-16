import PlayerGrid from './PlayerGrid';
import ComputerGrid from './ComputerGrid';
import { el, mount } from './utils';

const GameInterface = ({ game, context }) => {
  let winner = false;

  game.on('state', ({state, player}) => {
    if (state == true) {
      const node = document.getElementById('message').innerHTML = `${player === 'computer' ? 'Player' : 'Computer'} WON!!`
      winner = true;
      const { message: host } = context;
      mount(node, host);
    }
  });

  game.on('init', () => {
    const node = document.getElementById('message').innerHTML = '';
    
    const { message: host } = context;
    mount(node, host);
  });

  return (
    <div className={ `game ${ winner ? 'winner' : '' } ` }>
      <div className="grids">
        <div className="player">
          <h3>Player</h3>
          <PlayerGrid game={game} />
        </div>
        <div className="computer">
          <h3>Computer</h3>
          <ComputerGrid game={game} />
        </div>
      </div>
      <div ref="message" id="message" context={context}>

      </div>
      <div className="actions">
        <button id="redistribute" onClick={e => game.init()}>Redistribute</button>
        <button id="reset" onClick={e => game.init()}>Reset</button>
      </div>
    </div>
  )
}

export default GameInterface;