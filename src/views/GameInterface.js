import PlayerGrid from './PlayerGrid';
import ComputerGrid from './ComputerGrid';

const GameInterface = ({}) => {

  return (
    <div className="game">
      <div className="grids">
        <div className="player">
          <PlayerGrid />
        </div>
        <div className="computer">
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