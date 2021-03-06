import Player from "../factories/player";
import { random, Observable } from "../views/utils";


export default class Game extends Observable {

  constructor() {
    super(); 

    this.computer = Player();
    this.player = Player();
    this.attacksByComputer = [];
    this.isPlayerAttacking = true;

    this.computer.gameboard.init();
    this.player.gameboard.init();
  }

  init() {
    this.computer.gameboard.init();
    this.player.gameboard.init();
    return true;
  }

  togglePlayerAttack() {
    this.isPlayerAttacking = !this.isPlayerAttacking;

    return this.isPlayerAttacking;
  }

  playerAttack(index) {
    let y = Math.floor(index/10);
    let x = index % 10;
    let r = this.computer.gameboard.receiveAttack(x, y);

    return r;
  }

  computerAttack() {
    // 1. Disable computer board
    this.togglePlayerAttack();

    // 2. Radomly select an attack an index board where the computer will attack (with memory)
    let index = random(100);
    while (this.attacksByComputer.indexOf(index) !== -1) index = random(100);

    // 3. Call this.player.gameboard.receiveAttack
    let y = Math.floor(index/10);
    let x = index % 10;
    let r = this.player.gameboard.receiveAttack(x, y);
    if (r == true) {
      this.attacksByComputer.push(index);
    }

    // 4. According the result (T/F) we color the cell attacked

    return [index, r];
  }

  state(player) {
    let state;

    if (player == 'computer') {
      state = this.computer.gameboard.state();
    } else if (player == 'player') {
      state = this.player.gameboard.state();
    } else {
      state = null;
    }

    return { state, player }
  }

}
