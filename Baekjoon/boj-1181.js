const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);

// 중복 제거
const arr = [...new Set(input.slice(1))];

arr.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  if (a === b) {
  }
  return a.length - b.length;
});

console.log(arr.join("\n"));
