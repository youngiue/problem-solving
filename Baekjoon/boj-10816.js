const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);
const M = Number(input[2]);
const find = input[3].split(" ").map(Number);

// const result = [];

// for (let i = 0; i < M; i++) {
//   var count = 0;
//   num.forEach((n) => {
//     if (n === find[i]) {
//       count++;
//     }
//   });
//   result.push(count);
// }

// console.log(result.join(" "));

const map = new Map();
num.forEach((n) => {
  map.set(n, (map.get(n) || 0) + 1); // n이 이미 있으면 기존 값에 1 더하기, 없으면 0 + 1
});

const result = [];

for (let i = 0; i < M; i++) {
  result.push(map.get(find[i]) || 0); // find[i]가 map에 있으면 그 값, 없으면 0
}

console.log(result.join(" "));
