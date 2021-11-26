const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
rl.on("line", function (line) {
  num = Number(line);
  is_prime(num);
  rl.close();
});

function is_prime(num) {
  for (let i = 2; i < num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log("NO");
      return false;
    }
  }
  if (num === 1) {
    console.log("NO");
    return false;
  }
  console.log("YES");
}
