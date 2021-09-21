const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let n;
rl.on("line", function(line) {
	n = Number(line);
	isItThree(n);
	rl.close();
})

function isItThree(n) {
	if (n % 3 == 0) {
		console.log('짝');
	} else {
		console.log(n);
	}
}
