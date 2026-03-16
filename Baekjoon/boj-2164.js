const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
let queue = [];
let front = 0;

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.length - front > 1) {
  front++;
  queue.push(queue[front++]);
}

console.log(queue[front]);
