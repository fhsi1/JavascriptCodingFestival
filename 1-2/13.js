const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const arr = [
	'수성',
	'금성',
	'지구',
	'화성',
	'목성',
	'토성',
	'천왕성',
	'해왕성'
];

let n;
rl.on("line", function(line) {
	n = Number(line);
	planet(n);
	rl.close();
});

function planet(n) {
	let name = '';

	name = arr[n - 1];
	console.log(name);
}


