const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let score = [];
rl.on("line", function (line) {
  score = line.split(" ").map((el) => parseInt(el));
  candy(score);
  rl.close();
});

function candy(score) {
  const score_list = score.sort(function (a, b) {
    return b - a;
  });

  const score_set = new Set(score_list);
  const rank = Array.from(score_set).slice(0, 3); // to top3

  let count = 0;

  for (let i = 0; i < score_list.length; i++) {
    if (score_list[i] >= rank[2]) {
      count += 1;
    }
  }
  console.log(count);
}
