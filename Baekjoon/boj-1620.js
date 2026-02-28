const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const monster = input.slice(1, N + 1);
const problem = input.slice(N + 1, N + 1 + M);

// 포켓몬 이름과 번호를 매핑하는 Map 객체 생성
const map = new Map();
monster.forEach((name, index) => {
  map.set(name, index + 1);
});

problem.forEach((line) => {
  const value = line.trim();
  if (isNaN(value)) {
    console.log(map.get(value));
  } else {
    console.log(monster[Number(value) - 1]);
  }
});
