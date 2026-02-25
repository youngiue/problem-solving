const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

// 1️⃣ 평균
const sum = input[0] + input[1] + input[2] + input[3] + input[4];
const average = sum / 5;

// 2️⃣ 중앙값
input.sort((a, b) => a - b);
const median = input[2];

console.log(average);
console.log(median);
