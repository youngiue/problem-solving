// 공식
// 인접 거리들 구함
// 그 거리들의 GCD 구함
// (마지막 - 처음) / gcd + 1 → 총 필요한 나무 개수
// 총 개수 - 현재 개수

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const trees = input.slice(1).map((line) => line.split("\n").map(Number));

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

let g = trees[1] - trees[0];
for (let i = 2; i < N; i++) {
  g = gcd(g, trees[i] - trees[i - 1]);
}

const totalTrees = (trees[N - 1] - trees[0]) / g + 1;
console.log(totalTrees - N);
