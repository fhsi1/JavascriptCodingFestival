const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let sentence = [];
rl.on("line", function(line) {
	sentence = line.split(' ');
}).on("close", function() {
	console.log(sentence.length);
})
