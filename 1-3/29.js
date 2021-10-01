const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	stdout: process.stdout
});

let alpha;

rl.on("line", function(line) {
	alpha = String(line);
	if (alpha === alpha.toUpperCase()) {
		console.log('YES');
	} else {
		console.log('NO');
	}
	rl.close();
})
