// VPS

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const stack = [];
  let valid = true;
  const bracket = input[i].split("");
  for (let j = 0; j < bracket.length; j++) {
    if (bracket[j] === "(") {
      stack.push(1);
    } else {
      if (stack.length === 0) {
        valid = false;
        break;
      }
      stack.pop();
    }
  }
  if (valid && stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 또 다른 알고리즘
// 1. 문자열을 차례대로 읽기
// 2. ( 를 만나면 count +1
// 3. ) 을 만나면 count -1
// 4. 순회 중 카운터가 음수면 닫는 괄호가 먼저 나온 것이므로 NO 반환
// 5. 모든 문자를 처리한 후 카운터가 0이면 YES, 그렇지 않으면 NO
