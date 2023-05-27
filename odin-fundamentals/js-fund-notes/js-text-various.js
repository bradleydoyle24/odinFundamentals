let string = "Here is is is a string in javascript";

let replace = string.replace("is", "replace");
let replace2 = string.replace(/is/g, "replace");
let replace3 = string.replace(/IS/gi, "replace");
let replace4 = string.replaceAll(/is/g, "replace");

let upper = string.toUpperCase(string);
let lower = string.toLowerCase(string);

let concatenate = string.concat(string, " ADDITION");

let multi = string.slice(0, 8).toUpperCase(string);

let fatString = "       Fat string with WHITESPACE       ";
let smallStart = fatString.trimStart();

let pad = string.padStart(100, "$$$");

alert(replace);
alert(replace2);
alert(replace3);
alert(replace4);

alert(upper);
alert(lower);

alert(concatenate);

alert(multi);

alert(smallStart);

alert(pad);