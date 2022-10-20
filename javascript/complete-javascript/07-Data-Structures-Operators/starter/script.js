"use strict";
// use of strict mode will help us to avoid some common mistakes
// and will make our code more secure
// Implementation of strict mode is a good practice
// for example, if we forget to declare a variable, strict mode will throw an error or warning
// but if we don't use strict mode, it will create a global variable

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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

// ============================ Looping Arrays: The for-of Loop ============================
