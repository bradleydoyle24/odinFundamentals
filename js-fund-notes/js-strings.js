const string = "The revolution will not be televised."
console.log(string);

const badString = string;
console.log(badString);

const sgl = 'Single quotes';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

const bigMouth = 'I\'ve got no right to take my place...';
console.log(bigMouth);

const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = 'hello';
const two = 'how are you?';
const joined = `${one} ${two}`;
console.log(joined);

const button = document.querySelector("button");

function greet() {
  const newName = prompt("What is your name?");
  alert(`Hello, ${newName}, nice to see you!`);
}

button.addEventListener("click", greet);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);