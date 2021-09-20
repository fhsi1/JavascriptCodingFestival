// const n = prompt('Input your number.')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
rl.on("line", function(line){
    n = Number(line);
	christmas(n);
    rl.close();
})

function christmas(n) {
	let tree = '';

	for (let i = 1; i <= n; i++) {
		let star = '';
		for (let j = 1; j <= n - i; j++) {
			star += ' ';
		}
		for (let k = 1; k <= 2 * i - 1; k++) {
			star += '*';
		}
		tree += star + '\n'
	}

	console.log(tree);
}

