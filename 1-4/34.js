const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let def = [];
let sorted = [];
rl.on("line", function(line) {
	def = line.split(' ').map((el) => parseInt(el));
	sorted = Object.values(def).sort();
	console.log(is_sorted(def, sorted));
	rl.close();
})

function is_sorted(arr1, arr2) {
	if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
		return ("YES");
	} else {
		return ("NO");
	}
}
