import App from './views/App';
import './assets/css/index.scss';
import Game from './controllers/Game';
import { el, mount } from './views/utils';

let game = new Game();

mount(<App game={game} />, document.getElementById("root"))
