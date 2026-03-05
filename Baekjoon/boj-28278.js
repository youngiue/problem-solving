const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const stack = [];
let output = "";

for (let i = 1; i <= N; i++) {
  const command = input[i].split(" ");

  switch (command[0]) {
    case "1":
      stack.push(Number(command[1]));
      break;

    case "2":
      output += (stack.length ? stack.pop() : -1) + "\n";
      break;

    case "3":
      output += stack.length + "\n";
      break;

    case "4":
      output += (stack.length === 0 ? 1 : 0) + "\n";
      break;

    case "5":
      output += (stack.length ? stack[stack.length - 1] : -1) + "\n";
      break;
  }
}

console.log(output);
