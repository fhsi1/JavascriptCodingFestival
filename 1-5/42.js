const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tmp = [];
rl.on("line", function (line) {
  tmp.push(line);
}).on("close", function () {
  let month;
  let day;
  let date;
  month = Number(tmp[0]);
  day = Number(tmp[1]);
  date = `2020-${month}-${day}`;
  getDate(date);
});

function getDate(date) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dayOfWeek = week[new Date(date).getDay()];
  console.log(dayOfWeek);
}
