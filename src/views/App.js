import GameInterface from './GameInterface';
import { el, Fragment } from './utils';

const App = ({ game, context }) => {

  return (
    <Fragment>
      <header>
        <nav>
          <h1 className="logo">Battleship</h1>
        </nav>
      </header>
      <div>
        <div className="legend">
          <h4>LEGEND:</h4>
        
          <div className="blue">Ship</div>
          <div className="yellow">Missed</div>
          <div className="red">Hit</div>
        </div>
        <GameInterface game={game} />
      </div>
      <footer>
        <div>Mael FOSSO</div>
        <div>Microverse</div>
      </footer>
    </Fragment>
  )
}

export default App;