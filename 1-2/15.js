const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let name;
rl.on("line", function(line) {
	name = String(line);
	greeting(name);
	rl.close();
});

function greeting(name) {
	// console.log('안녕하세요. 저는 ' + name + '입니다.');
	console.log(`안녕하세요. 저는 ${name}입니다.`);
}
