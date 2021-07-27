const mazeRunner = (maze, direction) => {
  const isStartPoint = (element) => element == 2;

  maze.forEach((element, index) => {
    startPoint = [];
    startPointJ = element.findIndex(isStartPoint);

    if (startPointJ > -1) {
      startPoint.push(index);
      startPoint.push(startPointJ);
    }
  });
  // startPoint[0] = 'i' position of starting point;
  // startPoint[1] = 'j' position of starting point;

  console.log(startPoint);

  // EAST: moving one column right
  if (direction[0] === "E") {
    if (maze[startPoint[0]][startPointJ + 1] === 0) {
      return "Lost";
    } else if (maze[startPoint[0]][startPointJ + 1] === 1) {
      return "Dead";
    } else if (maze[startPoint[0]][startPointJ + 1] === 3) {
      return "Finish";
    }
  }

  // WEST: moving one column left
  if (direction[0] === "W") {
    if (maze[startPoint[0]][startPointJ - 1] === 0) {
      return "Lost";
    } else if (maze[startPoint[0]][startPointJ - 1] === 1) {
      return "Dead";
    } else if (maze[startPoint[0]][startPointJ - 1] === 3) {
      return "Finish";
    }
  }
  // NORTH: moving one row up
  if (direction[0] === "N") {
    if (maze[startPoint[0] - 1][startPointJ] === 0) {
      return "Lost";
    } else if (maze[startPoint[0] - 1][startPointJ] === 1) {
      return "Dead";
    } else if (maze[startPoint[0] - 1][startPointJ] === 3) {
      return "Finish";
    }
  }

  // SOUTH: moving one row down
  if (direction[0] === "S") {
    if (maze[startPoint[0] + 1][startPointJ] === 0) {
      return "Lost";
    } else if (maze[startPoint[0] + 1][startPointJ] === 1) {
      return "Dead";
    } else if (maze[startPoint[0] + 1][startPointJ] === 3) {
      return "Finish";
    }
  }
};

module.exports = mazeRunner;
