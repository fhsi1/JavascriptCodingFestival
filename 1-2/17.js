const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let height;
rl.on("line", function(line) {
	height = Number(line);
	isLimit(height);
	rl.close();
});

function isLimit(height) {
	if (height >= 150) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
