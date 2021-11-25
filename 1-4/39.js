const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sentence = [];
rl.on("line", function (line) {
  sentence = String(line);
  typo(sentence);
  rl.close();
});

function typo(sentence) {
  let output = [];
  for (let i = 0; i < sentence.length; i++) {
    output[i] = sentence[i];
    if (sentence[i] == "q") {
      output[i] = "e";
    }
  }
  output = output.join("");
  console.log(output);
}
