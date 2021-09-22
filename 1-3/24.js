const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.output
});

let alpha;
rl.on("line", function(line) {
	alpha = String(line);
	console.log(alpha.toUpperCase());
	rl.close();
});
