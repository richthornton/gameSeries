const isStartPoint = (element) => element == 2;

// returns the position in the maze in the form of a tuple
const startingPosition = (maze) => {
  for (let i = 0; i < maze.length; i++) {
    startPointJ = maze[i].findIndex(isStartPoint);
    if (startPointJ > -1) {
      return [i, startPointJ];
    }
  }
};

// takes a direction (string) and position (tuple) and returns new position (tuple)
const newPosition = (direction, position) => {
  if (Array.isArray(position) && position.length === 2) {
    switch (direction) {
      case "E":
        return [position[0], position[1] + 1];
      case "W":
        return [position[0], position[1] - 1];
      case "N":
        return [position[0] - 1, position[1]];
      case "S":
        return [position[0] + 1, position[1]];
    }
  } else {
    throw new Error("Position must be a tuple");
  }
};

// calculates the outcome of the maze position
const result = (maze, position) => {
  const mazePoint = maze[position[0]][position[1]];

  if (mazePoint === 0 || mazePoint === 2) {
    return "Lost";
  } else if (mazePoint === 1) {
    return "Dead";
  } else if (mazePoint === 3) {
    return "Finish";
  }
};

const completeMaze = (maze, directions) => {
  let position = startingPosition(maze);
  let moveNumber = 0;

  for (const direction of directions) {
    position = newPosition(direction, position);
    moveNumber++;

    // checks to see if out of bounds
    if (position.includes(maze.length) || position.includes(-1)) {
      return "Dead";
    }

    let outcome = result(maze, position);

    if (outcome === "Dead" || outcome === "Finish") {
      return outcome;
    }
    if (outcome === "Lost" && moveNumber === directions.length) {
      return "Lost";
    }
  }
};

module.exports = {
  completeMaze: completeMaze,
  newPosition: newPosition,
};
