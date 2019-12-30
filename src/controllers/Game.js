import Player from "../factories/player";


export default class Game {

  constructor() {
    this.computer = Player();
    this.player = Player();

    this.computer.gameboard.init()
    this.player.gameboard.init()
  }

  init() {
    this.computer.gameboard.init();
    this.player.gameboard.init();
  }

}
