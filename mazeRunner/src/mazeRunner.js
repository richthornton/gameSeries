const mazeRunner = (maze, direction) => {
  const isStartPoint = (element) => element == 2;

  maze.forEach((element, index) => {
    startPoint = [];
    startPointJ = element.findIndex(isStartPoint);

    if (startPointJ > -1) {
      startPoint.push(startPointJ);
      startPoint.push(index);
    }
  });

  //console.log("position of 2", startPoint);

  // startPoint[0] = 'x' position of starting point;
  // startPoint[1] = 'y' position of starting point;
  if (direction[0] === "W") {
    if (maze[startPoint[1]][startPointJ - 1] === 1) {
      return "Dead";
    }
  }

  if (direction[0] === "N") {
    if (maze[startPoint[1] - 1][startPointJ] === 0) {
      return "Lost";
    } else if (maze[startPoint[1] - 1][startPointJ] === 1) {
      return "Dead";
    }
  }
  return "Finish";
};

module.exports = mazeRunner;
