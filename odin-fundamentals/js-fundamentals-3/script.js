function add7 (num) {
  let sum = num + 7;
  return sum;
};

console.log(add7(1));

function multiply (a, b) {
  let sum = a * b;
  return sum;
}

console.log(multiply(4, 3));

function capatilize(string) {
  let firstLetter = string.charAt(0);
  let upper = firstLetter.toUpperCase(firstLetter);
  let string2 = string.slice(1);
  let lower = string2.toLowerCase(string2);
  return upper + lower;
}

console.log(capatilize("capatiLize tHis StrIng."))

function lastLetter(string) {
  let last = string.slice(-1);
  return last;
}

console.log(lastLetter("return this letter : p"));