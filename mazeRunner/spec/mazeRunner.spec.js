const Game = require("../src/mazeRunner");

describe("results for a 2x2 maze", () => {
  const maze = [
    [1, 0],
    [2, 3],
  ];
  const maze2 = [
    [1, 0],
    [3, 2],
  ];
  const maze3 = [
    [1, 3],
    [1, 2],
  ];
  const maze4 = [
    [1, 2],
    [1, 3],
  ];
  it("Maze 1: moves one step East and returns 'Finish'", () => {
    expect(Game.mazeRunner(maze, ["E"])).toEqual("Finish");
  });
  it("Maze 1: moves one step North and returns 'Dead'", () => {
    expect(Game.mazeRunner(maze, ["N"])).toEqual("Dead");
  });
  it("Maze 1: moves one step W outside the border and returns 'Dead'", () => {
    expect(Game.mazeRunner(maze, ["W"])).toEqual("Dead");
  });
  it("Maze 2: moves one step North and returns 'Lost'", () => {
    expect(Game.mazeRunner(maze2, ["N"])).toEqual("Lost");
  });
  it("Maze 3: moves one step West and returns 'Dead'", () => {
    expect(Game.mazeRunner(maze3, ["W"])).toEqual("Dead");
  });
  it("Maze 3: moves one step East outside the border and returns 'Dead'", () => {
    expect(Game.mazeRunner(maze3, ["E"])).toEqual("Dead");
  });
});

describe("results for a 3x3 maze", () => {
  const maze3x3 = [
    [1, 0, 0],
    [1, 0, 3],
    [0, 2, 0],
  ];
  it("Maze 1: moves one step East and one step North and returns 'Finish'", () => {
    expect(Game.mazeRunner(maze3x3, ["E", "N"])).toEqual("Finish");
  });

  it("Maze 1: finishes the directions before reached the finished so returns 'Lost'", () => {
    expect(Game.mazeRunner(maze3x3, ["N", "N", "E"])).toEqual("Lost");
  });
});

describe("results for a 7x7 maze", () => {
  const maze7x7 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ];
  it("Maze 1: finishes the directions before reached the finished so returns 'Lost'", () => {
    expect(Game.mazeRunner(maze7x7, ["N", "E", "E", "E", "E"])).toEqual("Lost");
  });
  it("Maze 1: goes outside the confines of the maze so returns 'Dead'", () => {
    expect(
      Game.mazeRunner(maze7x7, [
        "N",
        "N",
        "N",
        "N",
        "N",
        "E",
        "E",
        "S",
        "S",
        "S",
        "S",
        "S",
        "S",
      ])
    ).toEqual("Dead");
  });
  it("Returns to starting point at end of directions therefore returns Lost ", () => {
    expect(Game.mazeRunner(maze7x7, ["N", "N", "S", "S"])).toEqual("Lost");
  });

  it("Raises an exception if the position is not a tuple", () => {
    expect(() => {
      Game.newPosition("N", [1, 4, 5]);
    }).toThrowError("Position must be a tuple");
  });
});
