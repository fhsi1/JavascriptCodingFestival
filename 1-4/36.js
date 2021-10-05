const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let num;
rl.on("line", function(line) {
	num = Number(line);
	multiple_table(num);
	rl.close();
})

function multiple_table(n) {
	let table = '';
	for (let i = 1; i <= 9; i++) {
		table += n * i + ' ';
	}
	console.log(table);
}
