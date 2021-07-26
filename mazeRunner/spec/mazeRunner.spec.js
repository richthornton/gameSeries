const mazeRunner = require("../src/mazeRunner");

describe("it finishes a 2x2 maze successfully", () => {
  const maze = [
    [1, 0],
    [2, 3],
  ];
  it("moves one step East and returns 'Finish'", () => {
    expect(mazeRunner(maze, ["E"])).toEqual("Finish");
  });
});
