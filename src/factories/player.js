import Gameboard from "./gameboard"

const Player = () => {
  let gameboard = Gameboard();

  return {
    get gameboard() {
      return gameboard
    }
  }
}

export default Player;
