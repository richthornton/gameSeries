const mazeRunner = (maze, direction) => {
  const isStartPoint = (element) => element == 2;

  // cannot use a forEach loop in this situation as have to break as soon as find 2

  const startingPosition = (maze) => {
    startPoint = [];
    for (let i = 0; i < maze.length; i++) {
      startPointJ = maze[i].findIndex(isStartPoint);
      if (startPointJ > -1) {
        startPoint.push(i);
        startPoint.push(startPointJ);
        break;
      }
    }
    return startPoint;
  };

  //console.log(startingPosition(maze));
  startPointI = startingPosition(maze)[0];
  startPointJ = startingPosition(maze)[1];

  position = [startingPosition(maze)[0], startingPosition(maze)[1]];
  // console.log("start i", startPointI);
  // console.log("start j", startPointJ);

  const directions = {
    N: 1,
    S: -1,
    E: 1,
    W: -1,
  };

  const result = (i, j) => {
    if (maze[i][j] === 0) {
      return "Lost";
    } else if (maze[i][j] === 1) {
      return "Dead";
    } else if (maze[i][j] === 3) {
      return "Finish";
    }
  };

  //just want this to return true
  const edgeOfMaze = (direction, position) => {
    if (direction === "S" && position[0] === maze.length - 1) {
      return true;
    } else if (direction === "E" && position[1] === maze.length - 1) {
      return true;
    } else if (direction === "N" && position[0] === 0) {
      return true;
    } else if (direction === "W" && position[1] === 0) {
      return true;
    }
  };

  // EAST: moving one column right
  if (direction[0] === "E") {
    // check if end of array
    if (edgeOfMaze(direction[0], position)) {
      newJPosition = 0;
    } else {
      newJPosition = startPointJ + 1;
    }

    return result(startPointI, newJPosition);
  }

  // WEST: moving one column left
  if (direction[0] === "W") {
    // check if end of array
    if (edgeOfMaze(direction[0], position)) {
      newJPosition = maze.length - 1;
    } else {
      newJPosition = startPointJ - 1;
    }

    return result(startPointI, newJPosition);
  }

  // NORTH: moving one row up
  if (direction[0] === "N") {
    // check if end of array
    if (edgeOfMaze(direction[0], position)) {
      newIPosition = maze.length - 1;
    } else {
      newIPosition = startPointI - 1;
    }
    return result(newIPosition, startPointJ);
  }

  // SOUTH: moving one row down
  if (edgeOfMaze(direction[0], position)) {
    // check if end of array
    if (startPointI === maze.length - 1) {
      newIPosition = 0;
    } else {
      newIPosition = startPointI + 1;
    }

    return result(newIPosition, startPointJ);
  }
};

module.exports = mazeRunner;
