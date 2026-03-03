// 유클리드 호제법 사용해서 최소공배수 구하기
// 최소공배수 = (A * B) / 최대공약수

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);

// 유클리드 호제법 사용해서 최대공약수 구하기
// (함수 사용)
// function gcd(a, b) {
//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// (반복문 사용)
let i = 1;
while (i <= A && i <= B) {
  if (A % i === 0 && B % i === 0) {
    var gcd = i;
  }
  i++;
}

const lcm = (A * B) / gcd;

console.log(lcm);
