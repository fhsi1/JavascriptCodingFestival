const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let tmp = [];
rl.on("line", function(line) {
	tmp.push(line);
}).on("close", function() {
	let name = [];
	let score = [];
	name = tmp[0].split(' ').map((el) => (el));
	score = tmp[1].split(' ').map((el) => parseInt(el));
	const scoreObj = new Object();
	for (let i = 0; i < name.length; i++) {
		scoreObj[name[i]] = score[i];
	}
	console.log(scoreObj);

	process.exit();
})
