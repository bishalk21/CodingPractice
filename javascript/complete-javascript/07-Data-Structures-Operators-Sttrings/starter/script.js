// "use sloppy mode";
// Sloppy mode means that we can use undeclared variables without getting an error

"use strict";
// use of strict mode will help us to avoid some common mistakes
// and will make our code more secure
// Implementation of strict mode is a good practice
// for example, if we forget to declare a variable, strict mode will throw an error or warning
// but if we don't use strict mode, it will create a global variable
// var undefined = 5;
// console.log(undefined); // 5

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

// ========================== Destructuring Arrays ==========================
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// using temp variable
const a = arr[0];
const b = arr[1];
console.log(a, b); // 1 2

// using destructuring
const [x, y] = arr;
console.log(x, y); // 1 2

// eleminating elements or skipping elements
let [first, , second] = restaurant.categories; // second element is skipped
console.log(first, second); // Italian Vegetarian

// switching variables
// using temp variable
let temp = first;
first = second;
second = temp;
console.log(first, second); // Vegetarian Italian

// using destructuring
[first, second] = [second, first];
console.log(first, second); // Italian Vegetarian

// returning multiple values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Focaccia Pizza

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
*/

// ========================== Destructuring Objects ==========================
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (3) ["Italian", "Pizzeria", "Vegetarian"]

// renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (3) ["Italian", "Pizzeria", "Vegetarian"]

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
console.log(a, b); // 23 7

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
*/

// ========================== The Spread Operator ==========================
/*
const arr = [7, 8, 9];
// using values of an array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // [1, 2, 7, 8, 9]
console.log(badNewArr); // [1, 2, 7, 8, 9]

// using spread operator
const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9]

// using spread operator with strings
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // (4) ["Pizza", "Pasta", "Risotto", "Gnocci"]

// copying arrays
const mainMenuCopy = [...restaurant.mainMenu];

// joining arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // (7) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

// using spread operator with iterables
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters); // (7) ["J", "o", "n", "a", "s", " ", "S."] 
*/

// ========================== Rest Pattern and Parameters ==========================
/*
// Destructuring
// spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// rest, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto (6) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pasta", "Risotto"]

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// functions
const add = function (...numbers) {
  // rest operator is taking all the arguments to this function and puts them into an array

  // console.log(numbers); // (5) [2, 3, 4, 5, 6]

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum); // 20
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // 35

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms"); // mushrooms, []
*/

// ========================== Short Circuiting (&& and ||) ==========================
/*
console.log("-------------------- OR --------------------");
console.log(3 || "Bishal"); // 3
console.log("" || "Bishal"); // Bishal
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

console.log(restaurant.numGuests || 10); // 10

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 23

console.log("-------------------- AND --------------------");
console.log(0 && "Bishal"); // 0
console.log(7 && "Bishal"); // Bishal

console.log("Hello" && 23 && null && "Bishal"); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

// ========================== The Nullish Coalescing Operator (??) ==========================
/*
restaurant.numGuests = 10;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
const guestsCorrect2 = 0 ?? restaurant.numGuests;
console.log(guestsCorrect, guestsCorrect2); // 0 0
*/

// ========================== Logical Assignment Operators ==========================
/*
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Bishal",
};

// rest1.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

// OR operator
// rest1.numGuests ||= 10; // 0 is falsy, so 10 is assigned
// rest2.numGuests ||= 10; //. undefined is falsy, so 10 is assigned

// Nullish operator (??) (null and undefined)
// rest1.numGuests ??= 10; // 0 is assigned
// rest2.numGuests ??= 10; // undefined is falsy, so 10 is assigned

// AND operator
// rest1.owner = rest2.owner && "Bishal";
// rest2.owner = rest1.owner && "Bishal";

rest1.owner &&= "Bishal";
rest2.owner &&= "Bishal";

console.log(rest1);
console.log(rest2);
*/

// ============================ Looping Arrays: The for-of Loop ============================
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

// menu.entries() returns an iterator object with key/value pairs
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log([...menu.entries()], "==========================");

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// ============================ Enhanced Object Literals ============================
/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// no need to write weekdays: weekdays as key and value are same
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    //
    open: 0, // Open 24 hours
    close: 24,
  },
};

const rest3 = {
  // No need to write openingHours: openingHours if the key and value are the same because of the enhanced object literals
  openingHours,

  // No need to write orderPizza: function() {} if the key and value are the same because of the enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
*/

// ============================ Optional Chaining (?.) ============================
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open); // undefined
}

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// console.log(days);

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "dsafd@dsf" }];
console.log(users[0]?.name ?? "User array empty");
console.log(users[1]?.name ?? "User array empty");

// without optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");

if (users.length > 0)
  console.log(users[1].name); // Cannot read property 'name' of undefined
else console.log("User array empty");
*/

// ============================ Looping Objects: Object Keys, Values, and Entries ============================
/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    //
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// loop over the entries
for (const x of entries) {
  console.log(x);
}

// destructuring the entries - [key, value] - for each entry
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

// ============================ Coding Challenge #4 ============================

// We are building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with that data.
// Your tasks:

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller"); // 2 goals were scored
printGoals(...game.scored); // 4 goals were scored

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// =============================== Coding Challenge #3 ===============================

// Let's continue with our football betting app! Keep using the 'game' variable from before.

// Your tasks:

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Beckenbauer: 1
// }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// OR

const scorers2 = {};
for (const [i, player] of game.scored.entries()) {
  scorers2[player] ? scorers2[player]++ : (scorers2[player] = 1);
}
console.log(scorers);

// =============================== Coding Challenge #2 ===============================
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "� GOAL"],
  [80, "� GOAL"],
  [92, "� Yellow card"],
]);

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// =============================== Sets ===============================
/*
console.log("=========== Sets ============");
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

console.log(new Set("Jonas")); // Set(5) {"J", "o", "n", "a", "s"}

console.log(ordersSet.size); // 3
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false
ordersSet.add("Garlic Bread");
console.log(ordersSet); // Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
ordersSet.delete("Risotto");
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Garlic Bread"}
// ordersSet.clear();
// console.log(ordersSet); // Set(0) {}

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ["Waiter", "Chef", "Manager"]

console.log(new Set("jonasschmedtmann").size); // 10
*/

// =============================== Maps ===============================
/*
const rest = new Map(); // new Map() is the same as new Map([])

// set to add new elements to the map (key, value)
rest.set("name", "Classico Italiano"); // add key-value pair
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

// get to read elements from the map
console.log(rest.get("name")); // Classico Italiano
console.log(rest.get(true)); // We are open :)

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // We are closed :(

// has to check if a key exists in the map
console.log(rest.has("categories")); // true

// delete to remove elements from the map
rest.delete(2);
console.log(rest); // Map(7) {"name" => "Classico Italiano", 1 => "Firenze, Italy", "categories" => Array(4), "open" => 11, "close" => 23, true => "We are open :)", false => "We are closed :("}

// size to get the size of the map
console.log(rest.size); // 7

// clear to remove all elements from the map
// rest.clear();

// array of arrays to create a map
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); // Test

// getting DOM elements
console.log(rest.get(document.querySelector("h1"))); // Heading
*/

// =============================== Maps: Iteration ===============================
/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// no need to write weekdays: weekdays as key and value are same
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    //
    open: 0, // Open 24 hours
    close: 24,
  },
};

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours)); // (3) [Array(2), Array(2), Array(2)]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // Map(3) {"mon" => {…}, "tue" => {…}, "wed" => {…}}

// Iteration
// Question
console.log(question.get("question")); // What is the best programming language in the world?
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(answer); // 3

console.log(question.get(question.get("correct") === answer)); // Correct 🎉

// Convert map to array
console.log([...question]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]); // (7) ["question", 1, 2, 3, "correct", true, false]
console.log([...question.values()]); // (7) ["What is the best programming language in the world?", "C", "Java", "JavaScript", 3, "Correct 🎉", "Try again!"]

*/

const email = "hello@bishal.io";
const loginEmail = " Hello@Bishal.io \n";

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail); //

const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //

console.log(email === normalizedEmail); // true

// ============== Coding Challenge #3 ==============

// write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// TEST DATA 2: Use underscores instead of camelCase
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// TEST DATA 3: Use PascalCase instead of camelCase
// Underscore_Case
// First_Name
// Some_Variable
// Calculate_AGE
// Delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// ==================== String Methods Practice ====================
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Delayed_Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// Delayed_Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)

// console.log(flights.split("+"));

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(36);
  console.log(output);
}
