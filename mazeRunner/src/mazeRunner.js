const mazeRunner = (maze, direction) => {
  const isStartPoint = (element) => element == 2;
  // returns an array of original starting position
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
  // called by newPosition
  const edgeOfMaze = (direction, position, maze) => {
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

  // takes a direction (string) and position (array) and returns an array
  const newPosition = (direction, position) => {
    if (direction === "E") {
      if (edgeOfMaze(direction, position, maze)) {
        newJPosition = 0;
      } else {
        newJPosition = position[1] + 1;
      }
      return [position[0], newJPosition];
    }

    // WEST: moving one column left
    if (direction === "W") {
      if (edgeOfMaze(direction, position, maze)) {
        newJPosition = maze.length - 1;
      } else {
        newJPosition = position[1] - 1;
      }
      return [position[0], newJPosition];
    }

    // NORTH: moving one row up
    if (direction === "N") {
      if (edgeOfMaze(direction, position, maze)) {
        newIPosition = maze.length - 1;
      } else {
        newIPosition = position[0] - 1;
      }
      return [newIPosition, position[1]];
    }

    // SOUTH: moving one row down
    if (direction === "S") {
      if (edgeOfMaze(direction, position, maze)) {
        newIPosition = 0;
      } else {
        newIPosition = position[0] + 1;
      }
      return [newIPosition, position[1]];
    }
  };

  console.log("original position of the 2", startingPosition(maze));

  const result = (maze, position) => {
    console.log("position in result", position);
    console.log("maze point", maze[position[0]][position[1]]);

    if (maze[position[0]][position[1]] === 0) {
      return "Lost";
    } else if (maze[position[0]][position[1]] === 1) {
      return "Dead";
    } else if (maze[position[0]][position[1]] === 3) {
      return "Finish";
    }
  };

  for (let i = 0; i < direction.length; i++) {
    if (i === 0) {
      position = startingPosition(maze);
    }
    position = newPosition(direction[i], position);
    console.log("position in for loop", position);
    outcome = result(maze, position);
    console.log("outcome at new position", outcome);

    if (outcome === "Dead" || outcome === "Finish") {
      return outcome;
    }
    if (outcome === "Lost" && direction.length === i + 1) {
      return "Lost";
    }
  }
};

module.exports = mazeRunner;
