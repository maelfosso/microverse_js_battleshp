import PlayerGrid from './PlayerGrid';
import ComputerGrid from './ComputerGrid';
import { el } from './utils';

const GameInterface = ({}) => {

  return (
    <div className="game">
      <div className="grids">
        <div className="player">
          <h3>Player</h3>
          <PlayerGrid />
        </div>
        <div className="computer">
          <h3>Computer</h3>
          <ComputerGrid />
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