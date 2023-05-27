const games = ["Elden Ring", "Dark Souls", "Sekiro", "Bloodborne"];

let gamesLength = games.length;
console.log("Games length is: " + gamesLength);

let gamesString = games.toString();
console.log("Games as a string is: \n" + gamesString);

let gamesStringStar = games.join(" * ");
console.log("Games as a 'joined' string is:\n" + gamesStringStar);

games.push("Dark Souls II");
console.log("New 'pushed' array is:\n" + games);

games.shift();
console.log("'Shift' array is:\n" + games);

games.unshift("Dark Souls");
console.log("'Unshifted' array is:\n" + games);

const food = ["Tacos", "Burritos", "Pizza", "Eggs"];

const concatArray = games.concat(food);
console.log(concatArray);

games.splice(2, 1, "splice 1", "splice 2");
console.log(games);

for (const game of games) {
  console.log(game);
}

