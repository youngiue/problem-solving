const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);

const stack = [];
let target = 1;

for (let i = 0; i < N; i++) {
  if (num[i] === target) {
    target++;
    // stack top 검사
    while (stack.length && stack[stack.length - 1] === target) {
      stack.pop();
      target++;
    }
  } else {
    stack.push(num[i]);
  }
}
while (stack.length && stack[stack.length - 1] === target) {
  stack.pop();
  target++;
}

console.log(stack.length === 0 ? "Nice" : "Sad");
