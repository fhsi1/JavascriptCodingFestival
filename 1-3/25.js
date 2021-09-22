const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let radius;
rl.on("line", function(line) {
	radius = Number(line);
	circle(radius);
	rl.close();
});

function circle(radius) {
	const area = radius * radius * 3.14

	console.log(area);
}
