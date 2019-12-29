import GameInterface from './GameInterface';
import { Fragment } from './utils';

const App = () => {

  return (
    <Fragment>
      <header>
        <nav>
          <div>Battleship</div>
        </nav>
      </header>
      <div>
        <GameInterface />
      </div>
      <footer>
        <div>Mael FOSSO</div>
        <div>Microverse</div>
      </footer>
    </Fragment>
  )
}

export default App;