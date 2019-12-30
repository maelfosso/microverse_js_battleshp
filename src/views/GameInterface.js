import PlayerGrid from './PlayerGrid';
import ComputerGrid from './ComputerGrid';
import { el } from './utils';

const GameInterface = ({ game, context }) => {

  return (
    <div className="game">
      <div className="grids">
        <div className="player">
          <h3>Player</h3>
          <PlayerGrid gameboard={game.player.gameboard} />
        </div>
        <div className="computer">
          <h3>Computer</h3>
          <ComputerGrid gameboard={game.computer.gameboard} />
        </div>
      </div>
      <div className="actions">
        <button id="redistribute">Redistribute</button>
        <button id="reset">Reset</button>
        <button id="start">Start</button>
      </div>
    </div>
  )
}

export default GameInterface;