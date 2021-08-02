const Maze = require("../src/mazeRunner");

describe("results for a 2x2 maze", () => {
  const maze1 = new Maze([
    [1, 0],
    [2, 3],
  ]);
  const maze2 = new Maze([
    [1, 0],
    [3, 2],
  ]);
  const maze3 = new Maze([
    [1, 3],
    [1, 2],
  ]);

  it("Maze 1: moves one step East and returns 'Finish'", () => {
    expect(maze1.attemptWith(["E"])).toEqual("Finish");
  });

  it("Maze 1: moves one step North and returns 'Dead'", () => {
    expect(maze1.attemptWith(["N"])).toEqual("Dead");
  });
  it("Maze 1: moves one step W outside the border and returns 'Dead'", () => {
    expect(maze1.attemptWith(["W"])).toEqual("Dead");
  });
  it("Maze 2: moves one step North and returns 'Lost'", () => {
    expect(maze2.attemptWith(["N"])).toEqual("Lost");
  });
  it("Maze 3: moves one step West outside the border and returns 'Dead'", () => {
    expect(maze3.attemptWith(["W"])).toEqual("Dead");
  });
  it("Maze 3: moves one step East outside the border and returns 'Dead'", () => {
    expect(maze3.attemptWith(["E"])).toEqual("Dead");
  });
});

describe("results for a 3x3 maze", () => {
  const maze3x3 = new Maze([
    [1, 0, 0],
    [1, 0, 3],
    [0, 2, 0],
  ]);
  it("Maze 1: moves one step East and one step North and returns 'Finish'", () => {
    expect(maze3x3.attemptWith(["E", "N"])).toEqual("Finish");
  });

  it("Maze 1: finishes the directions before reached the finished so returns 'Lost'", () => {
    expect(maze3x3.attemptWith(["N", "N", "E"])).toEqual("Lost");
  });
});

describe("results for a 7x7 maze", () => {
  const maze7x7 = new Maze([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ]);
  it("Maze 1: finishes the directions before reached the finished so returns 'Lost'", () => {
    expect(maze7x7.attemptWith(["N", "E", "E", "E", "E"])).toEqual("Lost");
  });
  it("Maze 1: goes outside the confines of the maze so returns 'Dead'", () => {
    expect(
      maze7x7.attemptWith([
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
    expect(maze7x7.attemptWith(["N", "N", "S", "S"])).toEqual("Lost");
  });

  it("Raises an exception if the position is not a tuple", () => {
    expect(() => {
      maze7x7.newPosition("N", [1, 4, 5]);
    }).toThrowError("Position must be a tuple");
  });
});
