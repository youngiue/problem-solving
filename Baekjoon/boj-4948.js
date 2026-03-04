const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

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

// 베르트랑 공준
for (let i = 0; i < input.length; i++) {
  let n = Number(input[i]);
  if (n === 0) break;

  let count = 0;

  for (let j = n + 1; j <= 2 * n; j++) {
    if (isPrime(j)) {
      count++;
    }
  }

  console.log(count);
}
