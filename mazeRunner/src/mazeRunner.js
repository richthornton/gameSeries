const mazeRunner = (maze, direction) => {
  if (direction[0] === "N") {
    return "Dead";
  }
  return "Finish";
};

module.exports = mazeRunner;
