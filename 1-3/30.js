const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let tmp = [];
rl.on("line", function(line) {
	tmp.push(line);
}).on("close", function() {
	let sentence = [];
	let search = [];
	sentence = tmp[0];
	search = tmp[1];
	console.log(sentence.indexOf(search));
})
