const Ship = (length) => {
  const hits = new Array(length).fill(false),
  
  hit = (index) => {
    if (index < 0 || index >= length) {
      throw new Error('error. index is out of range...');
    }
    hits[index] = true;
  },
  isSunk = () => {
    return hits.every(h => h == true);
  }

  return {
    length,
    hits,

    hit,
    isSunk
  }
};

export default Ship;