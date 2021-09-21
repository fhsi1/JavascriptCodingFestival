const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let s;
rl.on("line", function(line) {
	s = String(line);
	rev(s);
	rl.close();
});

function rev(s) {
	s = s.split('').reverse().join('');

	console.log(s);
}
