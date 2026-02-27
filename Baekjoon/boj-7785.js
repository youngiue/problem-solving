const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const str = new Set();

for (let i = 1; i <= N; i++) {
  const [name, status] = input[i].split(" ");

  if (status === "enter") {
    str.add(name);
  } else {
    str.delete(name);
  }
}
const result = [...str].sort().reverse();
console.log(result.join("\n"));
