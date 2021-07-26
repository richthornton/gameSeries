const mazeRunner = require("../src/mazeRunner");

describe("results for a 2x2 maze", () => {
  const maze = [
    [1, 0],
    [2, 3],
  ];
  it("moves one step East and returns 'Finish'", () => {
    expect(mazeRunner(maze, ["E"])).toEqual("Finish");
  });
  it("moves one step North and returns 'Dead'", () => {
    expect(mazeRunner(maze, ["N"])).toEqual("Dead");
  });
});
