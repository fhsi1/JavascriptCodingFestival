const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tmp = [];
rl.on("line", function (line) {
  tmp.push(line);
}).on("close", function () {
  let total_weight;
  let total_count;
  let weight_list = [];
  total_weight = Number(tmp[0]);
  total_count = Number(tmp[1]);
  weight_list = Array.from(tmp)
    .slice(2)
    .map((el) => parseInt(el));

  let sum = 0;
  let count = 0;

  for (let i = 0; i < weight_list.length; i++) {
    sum += weight_list[i];
    if (sum < total_weight) {
      count += 1;
    }
  }
  console.log(count);
});
