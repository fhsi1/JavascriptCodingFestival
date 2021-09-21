const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.output
});

let num = [];
rl.on("line", function(line) {
	num = line.split(' ').map((el) => parseInt(el));
	divide(num);
	rl.close();
});

function divide(num) {

	const share = num[0] / num[1];
	const remain = num[0] % num[1];
	console.log(share, remain);
}
