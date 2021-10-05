const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let tmp = [];
rl.on("line", function(line) {
	tmp = line.split(' ').map((el) => parseInt(el));
	for (let i = tmp.length - 1; i >= 0; i--) {
		console.log(tmp[i]);
	}
	rl.close();
})
