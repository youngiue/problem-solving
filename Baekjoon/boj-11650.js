const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const points = input.slice(1).map((line) => {
  const [X, Y] = line.split(" ").map(Number);
  return [X, Y];
});

points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

for (let i = 0; i < N; i++) {
  console.log(points[i].join(" "));
}
