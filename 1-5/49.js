const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
rl.on("line", function (line) {
  num = line.split(" ").map((el) => parseInt(el));
  max(num);
  rl.close();
});

function max(num) {
  let max = Math.max(...num);
  console.log(max);
}
