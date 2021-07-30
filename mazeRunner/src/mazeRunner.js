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

const mazeRunner = (maze, directions) => {
  // takes a direction (string) and position (array) and returns an array
  const newPosition = (direction, position) => {
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
  };

  //console.log("original position of the 2", startingPosition(maze));

  const result = (maze, position) => {
    // console.log("position in result", position);
    // console.log("maze point", maze[position[0]][position[1]]);
    if (
      maze[position[0]][position[1]] === 0 ||
      maze[position[0]][position[1]] === 2
    ) {
      return "Lost";
    } else if (maze[position[0]][position[1]] === 1) {
      return "Dead";
    } else if (maze[position[0]][position[1]] === 3) {
      return "Finish";
    }
  };

  for (let i = 0; i < directions.length; i++) {
    if (i === 0) {
      position = startingPosition(maze);
    }

    position = newPosition(directions[i], position);
    //console.log("position in for loop", position);
    if (position.includes(maze.length) || position.includes(-1)) {
      return "Dead";
    }
    outcome = result(maze, position);
    //console.log("outcome at new position", outcome);
    // console.log("i", i + 1);
    // console.log("number of directions", directions.length);
    if (outcome === "Dead" || outcome === "Finish") {
      return outcome;
    }
    if (outcome === "Lost" && i + 1 === directions.length) {
      return "Lost";
    }
  }
};

module.exports = mazeRunner;
