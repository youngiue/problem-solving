const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const stack = [];
  let ch;
  let valid = true;
  for (let j = 0; j < input[i].length; j++) {
    switch (input[i][j]) {
      case "(":
      case "{":
      case "[": {
        stack.push(input[i][j]);
        break;
      }
      case ")":
      case "}":
      case "]": {
        if (stack.length === 0) {
          valid = false;
          break;
        } else {
          ch = stack.pop();
          if (
            (ch === "(" && input[i][j] !== ")") ||
            (ch === "{" && input[i][j] !== "}") ||
            (ch === "[" && input[i][j] !== "]")
          ) {
            valid = false;
            break;
          }
        }
        break;
      }
    }
    if (!valid) break;
  }
  if (valid && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

// GPT 코드
// const fs = require("fs");
// const input = fs.readFileSync(0).toString().split("\n");

// for (let line of input) {
//   if (line === ".") break;

//   const stack = [];
//   let valid = true;

//   for (let ch of line) {
//     if (ch === "(" || ch === "[") stack.push(ch);

//     else if (ch === ")") {
//       if (stack.pop() !== "(") {
//         valid = false;
//         break;
//       }
//     }

//     else if (ch === "]") {
//       if (stack.pop() !== "[") {
//         valid = false;
//         break;
//       }
//     }
//   }

//   console.log(valid && stack.length === 0 ? "yes" : "no");
// }
