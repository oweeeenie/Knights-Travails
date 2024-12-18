// all logic
function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let queue = [[start, [start]]];
  let visited = new Set();
  visited.add(positionToString(start));

  function positionToString([x, y]) {
    return `${x},${y}`;
  }

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();
    const [x, y] = currentPosition;

    // if we reached the destination return the path immediately
    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      console.log('Destination reached!');
      return path;
    }

    for (let [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      const newPosition = [newX, newY];

      // check if the move is within the 8x8 grid
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        const positionKey = positionToString(newPosition);

        if (!visited.has(positionKey)) {
          visited.add(positionKey);
          queue.push([newPosition, [...path, newPosition]]);
        }
      }
    }
  }

  console.log('No path found');
  return []; // no path = empty array
}

// example/test code
const start = [0, 0];
const end = [7, 7];
const result = knightMoves(start, end);
console.log('Result:', result);
