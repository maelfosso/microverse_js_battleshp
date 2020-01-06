import PlayerGrid from './PlayerGrid';
import ComputerGrid from './ComputerGrid';
import { el, mount } from './utils';

const GameInterface = ({ game, context }) => {

  game.on('state', ({state, player}) => {
    if (state == true) {
      let node = document.getElementById('message').innerHTML = `${player == 'computer' ? 'Player' : 'Computer'} WON!!`

      let {message: host} = context;
      mount(node, host);
    }
  });

  game.on('init', () => {
    let node = document.getElementById('message').innerHTML = "";
    
    let {message: host} = context;
    mount(node, host);
  });

  return (
    <div className="game">
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