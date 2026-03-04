const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const Num = input.slice(1).map(Number);

// 소수 판별
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < N; i++) {
  let num = Num[i];
  while (true) {
    if (isPrime(num)) {
      break;
    }
    num++;
  }
  console.log(num);
}
