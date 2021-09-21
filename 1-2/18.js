const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let score = [];
rl.on("line", function(line) {
	score = line.split(' ').map((el) => parseInt(el));
	arg(score);
	rl.close();
});

function arg(score) {
	score = (score[0] + score[1] + score[2]) / 3;
	// console.log(arg[0]);
	console.log(Math.floor(score));
}
