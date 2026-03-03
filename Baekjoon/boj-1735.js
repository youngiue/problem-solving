const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const fraction = input.slice(0).map((line) => {
  const [num, den] = line.split(" ").map(Number);
  return [num, den];
});

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const denominator = lcm(fraction[0][1], fraction[1][1]);
const numerator =
  fraction[0][0] * (denominator / fraction[0][1]) +
  fraction[1][0] * (denominator / fraction[1][1]);

const g = gcd(numerator, denominator);
console.log(numerator / g, denominator / g);
