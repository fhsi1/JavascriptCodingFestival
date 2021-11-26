const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str;
rl.on("line", function (line) {
  str = String(line);
  swap(str);
  rl.close();
});

function swap(str) {
  let tmp = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      tmp.push(str[i].toUpperCase());
    } else {
      tmp.push(str[i].toLowerCase());
    }
  }
  result = tmp.join("");
  console.log(result);
}
