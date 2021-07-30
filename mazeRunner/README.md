## Task

You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost

```
maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
```

KEY:

```
      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point

direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
```

## Rules

1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.

For the Maze (let it be maze) at the top with those starting points:

| Input | Output |
| ----- | ------ |

| [[1,0],
   [2,3]], ["N"] | "Dead" |
| [[1,0],
   [2,3]], ["E"] | "Finish" |
| [[0,0,3],
   [0,1,0],
   [2,1,0]], ["W"] | "Lost" |  
| [[0,0,3],
   [0,1,0],
   [2,1,0]], ["N","N"] | "Lost" |  
| [[0,0,3],
   [0,1,0],
   [2,1,0]], ["W"] | "Lost" |  
| maze, ["N"] | "Lost" |
| maze, ["E"] | "Dead" |
| maze, ["N","N","N","N","N","E","E","E","E","E"] | "Finish" |
| maze, ["N","E","E","E","E","N","N","N","N","E"] | "Finish" |
| maze, ["N","N","N","W","W"] | "Dead" |

Notes: if there is a zero in position 0 of one of the arrays then you can walk through it into the END of that array eg going West in [0,0,1,0,0,0,1] would take you in a "1" and therefore die.

Since the start and end positions move, you need to check if you actually 'land' on 3 from 2.

Steps

- maze and directions are given as arguments
- Return the array position of the start - find by index '2'

return the position mover

- Go through the direction array
- If the instruction = N, add one to the Y position of the starting point
- Check what this element is:
  if it's 0, you can keep going / return lost
  if it's 1, return "dead"
  if it's 3, return "finish"
- PICK UP PONT \_ just found where the start point is CHANGE IR

South at end of maze go to 0
East at end of maze go to 0

North at 0 maze go to END
West at 0 maze of maze go to END

1. calculate original starting position (called startPosition)
2. calculate new position using direction (include edge case of edge of maze)
3. see if new position lands you on Dead, Finish, Lost
4. if dead or finish - end and return "Dead" / "Finish"
5. if Lost check if at end of directions, if yes return "Lost"
6. if not at end, repeat steps 3 - 6

### Review comments

- remove console.logs

Let's try moving these functions out from inside the mazeRunner function to just being standalone functions. Having functions nested like this can potentially lead to some issues where there's a variable in the outer scope that's shadowed in the inner scope. More concretely, in this case you have maze as a parameter to the startingPosition function, but also as a parameter to the mazeRunner function. You could get in issues with knowing which maze is being referred to in this function

const isOutOfBounds = (maze, position) => {
if (position.includes(maze.length) || position.includes(-1)) {
return "Dead";
}
};
