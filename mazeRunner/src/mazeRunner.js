const mazeRunner = (maze, direction) => {
  const isStartPoint = (element) => element == 2;

  // cannot use a forEach loop in this situation as have to break as soon as find 2
  for (let i = 0; i < maze.length; i++) {
    startPointJ = maze[i].findIndex(isStartPoint);
    if (startPointJ > -1) {
      startPointI = i;
      break;
    }
  }
  // console.log("start i", startPointI);
  // console.log("start j", startPointJ);

  // EAST: moving one column right
  if (direction[0] === "E") {
    // check if end of array
    if (startPointJ === maze.length - 1) {
      newJPosition = 0;
    } else {
      newJPosition = startPointJ + 1;
    }

    if (maze[startPointI][newJPosition] === 0) {
      return "Lost";
    } else if (maze[startPointI][newJPosition] === 1) {
      return "Dead";
    } else if (maze[startPointI][newJPosition] === 3) {
      return "Finish";
    }
  }

  // WEST: moving one column left
  if (direction[0] === "W") {
    // check if end of array
    if (startPointJ === 0) {
      newJPosition = maze.length - 1;
    } else {
      newJPosition = startPointJ - 1;
    }

    // console.log("new J", newJPosition);

    if (maze[startPointI][newJPosition] === 0) {
      return "Lost";
    } else if (maze[startPointI][newJPosition] === 1) {
      return "Dead";
    } else if (maze[startPointI][newJPosition] === 3) {
      return "Finish";
    }
  }
  // NORTH: moving one row up
  if (direction[0] === "N") {
    // check if end of array
    if (startPointI === 0) {
      newIPosition = maze.length - 1;
    } else {
      newIPosition = startPointI - 1;
    }

    //console.log("new I", newIPosition);

    if (maze[newIPosition][startPointJ] === 0) {
      return "Lost";
    } else if (maze[newIPosition][startPointJ] === 1) {
      return "Dead";
    } else if (maze[newIPosition][startPointJ] === 3) {
      return "Finish";
    }
  }

  // SOUTH: moving one row down
  if (direction[0] === "S") {
    // check if end of array
    if (startPointI === maze.length - 1) {
      newIPosition = 0;
    } else {
      newIPosition = startPointI + 1;
    }

    if (maze[newIPosition][startPointJ] === 0) {
      return "Lost";
    } else if (maze[newIPosition][startPointJ] === 1) {
      return "Dead";
    } else if (maze[newIPosition][startPointJ] === 3) {
      return "Finish";
    }
  }
};

module.exports = mazeRunner;
