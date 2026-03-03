// 두 수의 최소공배수 구하기

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = Number(input[0]);

const num = input.slice(1).map((line) => {
  const [a, b] = line.split(" ").map(Number);
  return [a, b];
});

for (let i = 0; i < T; i++) {
  if (num[i][0] > num[i][1]) {
    const temp = num[i][0];
    num[i][0] = num[i][1];
    num[i][1] = temp;
  }
  let B = num[i][1];
  while (B % num[i][0] !== 0) {
    B += num[i][1];
  }
  console.log(B);
}
