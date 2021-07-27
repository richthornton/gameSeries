const mazeRunner = (maze, direction) => {
  const isStartPoint = (element) => element == 2;

  maze.forEach((element, index) => {
    startPoint = [];
    startPointX = element.findIndex(isStartPoint);

    if (startPointX > -1) {
      startPoint.push(startPointX);
      startPoint.push(index);
    }
  });

  console.log("position of 2", startPoint);

  // startPoint[0] = 'x' position of starting point;
  // startPoint[1] = 'y' position of starting point;

  if (direction[0] === "N") {
    // console.log(
    //   "moving 1 north coordinates",
    //   (newCoordinates = [newMoveY, startPointX])
    // );
    // console.log("maze index", maze[newMoveY][startPointX]);
    if (maze[startPoint[1] - 1][startPointX] === 0) {
      return "Lost";
    } else if (maze[startPoint[1] - 1][startPointX] === 1) {
      return "Dead";
    }
  }
  return "Finish";
};

module.exports = mazeRunner;
