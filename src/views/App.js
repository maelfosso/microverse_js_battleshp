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