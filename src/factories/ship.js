const Ship = (length) => {
  length,
  hits = new Array(length).fill(false),

  hit = (index) => {
    if (index < 0 && index > length) {
      throw new Error('error ...');
    }
    this.hits[index] = true;
  },

  isSunk = () => {
    return this.hits.every(true);
  }

};

export default Ship;