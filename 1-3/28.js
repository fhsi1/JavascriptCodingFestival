const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let words;
rl.on("line", function(line) {
	words = String(line);
	for (let i = 0; i < words.length - 1; i++) {
		console.log(words[i]+ ' ' + words[i + 1]);
	}
	rl.close();
})
