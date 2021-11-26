const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
rl.on("line", function (line) {
  num = line.split("").map((el) => parseInt(el));
  digit_sum(num);
  rl.close();
});

function digit_sum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}
