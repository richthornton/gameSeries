const mazeRunner = (maze, directions) => {
  const isStartPoint = (element) => element == 2;
  // returns an array of original starting position
  const startingPosition = (maze) => {
    for (let i = 0; i < maze.length; i++) {
      //console.log(Array.isArray(maze[i]));
      startPointJ = maze[i].findIndex(isStartPoint);
      if (startPointJ > -1) {
        return [i, startPointJ];
      }
    }
  };

  // takes a direction (string) and position (array) and returns an array
  const newPosition = (direction, position) => {
    switch (direction) {
      case "E":
        if (position[1] === maze.length - 1) {
          newJPosition = 0;
        } else {
          newJPosition = position[1] + 1;
        }
        return [position[0], newJPosition];
      case "W":
        if (position[1] === 0) {
          newJPosition = maze.length - 1;
        } else {
          newJPosition = position[1] - 1;
        }
        return [position[0], newJPosition];
      case "N":
        if (position[0] === 0) {
          newIPosition = maze.length - 1;
        } else {
          newIPosition = position[0] - 1;
        }
        return [newIPosition, position[1]];
      case "S":
        if (position[0] === maze.length - 1) {
          newIPosition = 0;
        } else {
          newIPosition = position[0] + 1;
        }
        return [newIPosition, position[1]];
    }
  };

  //console.log("original position of the 2", startingPosition(maze));

  const result = (maze, position) => {
    // console.log("position in result", position);
    // console.log("maze point", maze[position[0]][position[1]]);

    if (maze[position[0]][position[1]] === 0) {
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
    outcome = result(maze, position);
    //console.log("outcome at new position", outcome);
    console.log("i", i + 1);
    console.log("number of directions", directions.length);
    if (outcome === "Dead" || outcome === "Finish") {
      return outcome;
    }
    if (outcome === "Lost" && i + 1 === directions.length) {
      return "Lost";
    }
  }
};

module.exports = mazeRunner;
