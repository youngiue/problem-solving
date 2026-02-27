const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const str = new Set(input.slice(1, N + 1));
let count = 0;

for (let i = N + 1; i < N + 1 + M; i++) {
  if (str.has(input[i])) {
    count++;
  }
}

console.log(count);
