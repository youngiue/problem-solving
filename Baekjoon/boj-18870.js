// 좌표 압축이란 값의 실제 크기를 버리고 정렬했을 때의 순위로 바꾸는 것

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const x = input[1].split(" ").map(Number);

const X = [...new Set(x)].sort((a, b) => a - b);

// 값 -> 압축값을 저장할 공간 생성
const map = new Map();
// map은 값: 인덱스로 구성
X.forEach((i, j) => map.set(i, j)); // i: 값, j: 인덱스

// 값 꺼내서 map에서 압축값 찾고 다시 새 배열로 만들기
const result = x.map((i) => map.get(i));
console.log(result.join(" "));
