const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const inputN = Number(input[0]);

const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// for (let i = 0; i < inputN; i++) {
//   console.log(arr[i]);
// }

console.log(arr.join("\n"));
