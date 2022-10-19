// ========= 01 Activating Strict Mode =========
/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/

// ========= 02 Functions =========
/*
function logger() {
  console.log("My name is Bishal");
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // parameters
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // 5, 0 are arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// ========= 03 Function Declarations vs. Expressions =========
/*
// Function Declaration

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

// ========= 04 Arrow Functions =========
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  //
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Bishal"));

const TimeToMakeApp = (hours, minutes) => {
  const time = hours + minutes;
  return time;
};

console.log(TimeToMakeApp(2, 30));
*/

// ========= 05 Functions Calling Other Functions =========
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// ========= 06 Reviewing Functions =========
/*
function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, "Bishal"));
*/

// ========= Assignment 1 =========
/*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));

// Test Data 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test Data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);
console.log(scoreDolphins2, scoreKoalas2);

checkWinner(scoreDolphins2, scoreKoalas2);
*/

// ========= 07 Introduction to Arrays =========
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]; // Array literal
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years); 

console.log(friends[0]);
console.log(friends[2]);

// find the length of the array
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Bishal";
// const bishal = ["Bishal", "karki", 2037 - 1991, "student", friends];
const bishal = [firstName, "karki", 2037 - 1991, "student", friends];
console.log(bishal);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));
// console.log(years[0]);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// ========= 08 Basic Array Operations (Methods) =========
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// =========== Add elements ==========
// push() method adds element at the end of the array
const newLength = friends.push("Jay");
console.log(newLength, friends);

// unshift() method adds element at the beginning of the array
friends.unshift("John");
console.log(friends);

// =========== Remove elements ==========
// pop() method removes element at the end of the array
friends.pop(); // Last
const popped = friends.pop();
console.log(popped, friends);

// shift() method removes element at the beginning of the array
friends.shift(); // First
console.log(friends);

// =========== indexOf() method ==========
// indexOf() method returns the index of the element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(21);


// =========== includes() method ==========
// includes() method returns true if the element is present in the array
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
// console.log(friends.includes("21")); // false
console.log(friends.includes(21)); // true

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

// ========= Assignment 2 =========
/*
// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and total arrays 😉
// Bonus: Be careful: ‘calcTip ‘returns a value, not an array. So you actually need to call ‘calcTip ‘in a loop and use the push method to add values to the tips and total arrays 😉

// GOOD LUCK 😀

const calcTip = function (bill) {
  // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

// ========= 09 Introduction to Objects =========
/*
const bishalArray = [
  "Bishal",
  "Karki",
  2037 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
];

const bishal = {
  firstName: "Bishal",
  lastName: "Karki",
  age: 2037 - 1991,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
*/

// ========= 10 Dot vs. Bracket Notation =========
/*
const bishal = {
  firstName: "Bishal",
  lastName: "Karki",
  age: 2037 - 1991,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(bishal);

// Dot notation
console.log(bishal.lastName);

// Bracket notation
console.log(bishal["lastName"]);

const nameKey = "Name";
console.log(bishal["first" + nameKey]);
console.log(bishal["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Bishal? Choose between firstName, lastName, age, job, and friends");
console.log(bishal[interestedIn]);

if (bishal[interestedIn]) {
  console.log(bishal[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

bishal.location = "Nepal";
bishal["twitter"] = "@bishalkarki";
console.log(bishal);

// Challenge
// "Bishal has 3 friends, and his best friend is called Michael"
console.log(`${bishal.firstName} has ${bishal.friends.length} friends, and his best friend is called ${bishal.friends[0]}`);
*/

// ========= 11 Object Methods =========
/*
const bishal = {
  firstName: "Bishal",
  lastName: "Karki",
  birthYear: 1991,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  calcAge: function () {
    console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
  }
};

// console.log(bishal.calcAge(1991));
// console.log(bishal["calcAge"](1991));

console.log(bishal.calcAge());
console.log(bishal.age);

// Challenge
// "Bishal is a 46-year old student, and he has a driver's license"

console.log(`${bishal.firstName} is a${bishal.age} year old ${bishal.job}, and he has ${bishal.hasDriversLicense ? "a" : "no" } driver's license`);

console.log(bishal.getSummary());
*/

// ========= Coding Challenge #3 =========
/*
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.  

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John's BMI (28.3) is higher than Mark's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/

// ========= 12 Iteration: The for Loop =========
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

// ========= 13 Looping Arrays, Breaking and Continuing =========
/*
const bishal = [
  "Bishal",
  "Karki",
  2037 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
  true
];

const types = [];

for (let i = 0; i < bishal.length; i++) {
  console.log(bishal[i], typeof bishal[i]);

  // Filling types array
  // types[i] = typeof bishal[i];
  types.push(typeof bishal[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
*/

// ===================== continue and break =====================
/*
const bishal = [
  "Bishal",
  "Karki",
  2037 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
  true
];

console.log("--- ONLY STRINGS ---");

for (let i = 0; i < bishal.length; i++) {
  if (typeof bishal[i] !== "string") continue;

  console.log(bishal[i], typeof bishal[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < bishal.length; i++) {
  if (typeof bishal[i] === "number") break;

  console.log(bishal[i], typeof bishal[i]);
}
*/

// ========= 14 Looping Backwards and Loops in Loops =========
/*
// Looping backwards
const bishal = [
  "Bishal",
  "Karki",
  2037 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
  true
];

// 0, 1, ..., 4

for (let i = 0; i < bishal.length; i++) {
  console.log(i, bishal[i]);
}

// 4, 3, ..., 0

for (let i = bishal.length - 1; i >= 0; i--) {
  console.log(i, bishal[i]);
}

// Looping in loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Ecercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

// ========= 15 The while Loop =========
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

// ========= Coding Challenge #4 =========
/*
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

//1 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2
const tips = [];
const totals = [];

//3
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// loop
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  // console.log(tip);
  totals.push(tip + bills[i]);
  // console.log(totals);
}

// console.log(bills, tips, totals);

// Bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;

}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/