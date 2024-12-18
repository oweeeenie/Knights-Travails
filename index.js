// all logic
function knightMoves(start, end) {
  let starting = start;
  let queue = [];
  let moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  if (start === end) {
    return;
  }

  for (let i = 0; i < moves.length; i++) {
    let newX = starting[0] + moves[i][0];
    let newY = starting[1] + moves[i][1];

    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      queue.push([newX, newY]);
    }
  }
}
