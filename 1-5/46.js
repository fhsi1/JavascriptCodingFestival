let tmp = [];

for (let i = 1; i <= 20; i++) {
  tmp[i - 1] = i;
}

let num = tmp
  .join("")
  .split("")
  .map((el) => parseInt(el));

function digit_sum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
}

digit_sum(num);

function digit_sum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}
