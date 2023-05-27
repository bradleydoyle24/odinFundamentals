const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  console.log(text += "<li>" + value + "</li>");
}

let test = Array.isArray(fruits);
console.log(test);