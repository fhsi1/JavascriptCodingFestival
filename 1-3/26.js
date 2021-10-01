const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let name;

const planet = {
	'수성': 'Mercury',
	'금성': 'Venus',
	'지구': 'Earth',
	'화성': 'Mars',
	'목성': 'Jupiter',
	'토성': 'Saturn',
	'천왕성': 'Uranus',
	'해왕성': 'Neptune',
}

rl.on("line", function(line) {
	name = String(line);
	console.log(planet[name]);
	rl.close();
})
