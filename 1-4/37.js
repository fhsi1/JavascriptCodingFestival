const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let def = [];
rl.on("line", function(line) {
	def = line.split(' ').map((el) => (el));
	vote(def);
	rl.close();
})

function vote(array) {
	let result = {};
	let winner = "";

	array.forEach((x) => {
		result[x] = (result[x] || 0) + 1;
	});

	winner = Object.keys(result).reduce(function(a, b) {
		return result[a] > result[b] ? a : b
	});
	console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}
