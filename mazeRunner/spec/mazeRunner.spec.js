const mazeRunner = require("../src/mazeRunner");

describe("results for a 2x2 maze", () => {
  const maze = [
    [1, 0],
    [2, 3],
  ];
  const maze2 = [
    [1, 0],
    [3, 2],
  ];
  it("moves one step East and returns 'Finish'", () => {
    expect(mazeRunner(maze, ["E"])).toEqual("Finish");
  });
  it("moves one step North and returns 'Dead'", () => {
    expect(mazeRunner(maze, ["N"])).toEqual("Dead");
  });
  it("changed start position - it moves one step North and returns 'Lost'", () => {
    expect(mazeRunner(maze2, ["N"])).toEqual("Lost");
  });
});

// describe("results for a 3x3 maze", () => {
//   const maze = [
//     [0, 0, 3],
//     [0, 1, 0],
//     [2, 1, 0],
//   ];
//   it("moves one step East and returns 'Finish'", () => {
//     expect(mazeRunner(maze, ["E"])).toEqual("Finish");
//   });
// });
