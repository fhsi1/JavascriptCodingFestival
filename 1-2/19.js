const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.output
});

let num = [];
rl.on("line", function(line) {
	num = line.split(' ').map((el) => parseInt(el));
	sqr(num);
	rl.close();
});

function sqr(num) {
	// num = num[0] ** num[1];
	num = Math.pow(num[0], num[1]);
	console.log(num);
}
