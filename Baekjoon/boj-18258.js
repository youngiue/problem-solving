const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
let queue = [];
let head = 0;

let result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, num] = input[i].split(" ");

  switch (cmd) {
    case "push":
      queue.push(Number(num));
      break;

    case "pop":
      if (head === queue.length) result.push(-1);
      else result.push(queue[head++]);
      // shift() 쓰면 시간초과
      break;

    case "size":
      result.push(queue.length - head);
      break;

    case "empty":
      result.push(head === queue.length ? 1 : 0);
      break;

    case "front":
      result.push(head === queue.length ? -1 : queue[head]);
      break;

    case "back":
      result.push(head === queue.length ? -1 : queue[queue.length - 1]);
      break;
  }
}

console.log(result.join("\n"));
