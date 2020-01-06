import Player from "../factories/player";
import { random, Observable } from "../views/utils";


export default class Game extends Observable {

  // attacksByComputer = [];

  constructor() {
    super(); 

    this.computer = Player();
    this.player = Player();
    this.attacksByComputer = [];
    this.isPlayerAttacking = true;

    this.computer.gameboard.init();
    this.player.gameboard.init();
    console.log(this.player.gameboard.board);
    console.log(this.computer.gameboard.board);
  }

  init() {
    this.computer.gameboard.init();
    this.player.gameboard.init();
  }

  togglePlayerAttack() {
    this.isPlayerAttacking = !this.isPlayerAttacking;

    return this.isPlayerAttacking;
  }

  playerAttack(index) {
    console.log("PlayerAttack - ", index);
    let y = Math.floor(index/10);
    let x = index % 10;
    let r = this.computer.gameboard.receiveAttack(x, y);
    console.log(x, y, r);

    return r;
  }

  computerAttack() {
    // 1. Disable computer board
    this.togglePlayerAttack();

    // 2. Radomly select an attack an index board where the computer will attack (with memory)
    let index = random(100);
    while (this.attacksByComputer.indexOf(index) !== -1) index = random(100);

    // 3. Call this.player.gameboard.receiveAttack
    console.log("ComputerAttack - ", index);
    let y = Math.floor(index/10);
    let x = index % 10;
    let r = this.player.gameboard.receiveAttack(x, y);
    console.log(x, y, r);
    if (r == true) {
      this.attacksByComputer.push(index);
    }

    // 4. According the result (T/F) we color the cell attacked

    return [index, r];
  }

}
