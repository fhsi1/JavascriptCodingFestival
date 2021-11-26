const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
rl.on("line", function (line) {
  num = Number(line);
  console.log(num.toString(2));
  rl.close();
});
