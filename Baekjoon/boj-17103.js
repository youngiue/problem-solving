// 골드바흐 파티션

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = Number(input[0]);
const N = input.slice(1).map(Number);

// const isPrime = (n) => {
//   if (n < 2) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i * i <= n; i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

const max = Math.max(...N);
// 에라토스테네스의 체 -> 시간 초과 해결
// 2부터 n까지의 모든 소수를 한 번에 구함
// 매번 소수 검사가 아니라, 소수가 아닌 수를 지워가면서 구하는 방식
const isPrime = new Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let t = 0; t < T; t++) {
  const n = N[t];
  let count = 0;

  for (let i = 2; i <= n / 2; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      // i + (n-i) = n
      count++;
    }
  }

  console.log(count);
}
