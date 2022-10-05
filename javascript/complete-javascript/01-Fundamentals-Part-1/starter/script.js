// =============== 01 - Values and Variables ===============
/* 

let js = "amazing";
// if ((js = "amazing")) alert("JavaScript is FUN!");

// to print in console
console.log(40 + 8 + 23 - 10); // 73

console.log("Bishal"); // string
console.log(23); // number

let firstName = "Bishal"; // string
console.log(firstName);
console.log(firstName);
console.log(firstName);

//naming convention

// without keyword: it is not a good practice and it is same as var and not allowed in strict mode

name = "Bishal";

let bishal_karki = "Bishal Karki"; // underscore
let $function = 27; // not recommended

let person = "Bishal";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Student";

let job1 = "Programmer";
let job2 = "Student";

// variable scope

// function scope
var age1 = calcAge(2001);
function calcAge(birthYear) {
  var age = 2021 - birthYear;
  console.log(firstName + " is " + age + " years old");
  return age;
}

// block scope
const birthYear = 2001;
if (birthYear >= 1981 && birthYear <= 2002) {
  var millenial = true;
  const firstName = "Bishal";
  const str = `Oh, and you're a millenial, ${firstName}`;
  console.log(str);
  function add(a, b) {
    return a + b;
  }
}

*/

// =============== Assignment 1 ===============
/*
// Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions) and log their values to the console.
let country = "Nepal";
let continent = "Asia";
let population = 30000000;

console.log(country, continent, population);
*/

// =============== 02 - Data Types ===============
/*

true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Bishal");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
// console.log(year); // 1991
console.log(typeof year); // number

console.log(typeof null); // object
*/

// =============== Assignment 2 ===============
/*
// Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.

let isIsland = false;
let country = "Nepal";
let population = 30000000;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

*/

// =============== 03 - let, const and var ===============
/*
// let
let age = 30;
age = 31;

// const
const birthYear = 1991;
// birthYear = 1990; // error because it is constant

// const job; // error: missing initializer in const declaration

// var
var job = "programmer";
job = "teacher";

*/

// =============== 04 - Basic Operators ===============
/*
// Math operators
const now = 2022;
const ageBishal = now - 2001;
const ageSujan = now - 2002;
console.log(ageBishal, ageSujan);

console.log(ageBishal * 2, ageBishal / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Bishal";
const lastName = "Karki";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
++x; // x = x + 1
--x; // x = x - 1

// Comparison operators
console.log(ageBishal > ageSujan); // >, <, >=, <=
console.log(ageSujan >= 18);
console.log(ageSujan <= 18);

const isFullAge = ageSujan >= 18;
console.log(isFullAge);
console.log(now - 2001 > now - 2002);

// Operator precedence
const now1 = 2022;
const ageBishal1 = now1 - 2001;
const ageSujan1 = now1 - 2002;

console.log(now1 - 2001 > now1 - 2002);

let x1, y1;
x1 = y1 = 25 - 10 - 5; // x1 = y1 = 10, x1 = 10
console.log(x1, y1);

const averageAge = (ageBishal1 + ageSujan1) / 2;
console.log(ageBishal1, ageSujan1, averageAge);
*/

// =============== Assignment 3 ===============
/*
// Calculate the BMI of Mark and John using the formula below. BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

*/

// =============== 05 - Strings and Template Literals ===============
/*
const firstName = "Bishal";
const job = "programmer";
const birthYear = 2001;

const bishal =
  "I'm " + firstName + ", a " + (2022 - birthYear) + " years old " + job + "!";

console.log(bishal, typeof bishal);

const bishalNew = `I'm ${firstName}, a ${2022 - birthYear} years old ${job}!`;

// Multi-line strings
console.log(`String with \n\
multiple \n\
lines`);

*/

// =============== 06 - Taking Decisions: if / else Statements ===============
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// =============== Assignment 4 ===============
/*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

*/

// =============== 07 - Type Conversion and Coercion ===============
/*
// Type conversion
const inputYear = "1991";
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18, inputYear); // 2009

console.log(Number("Bishal")); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // 23

// Type coercion
console.log("I am " + 23 + " years old"); // I am 23 years old

console.log("23" - "10" - 3); // 10

console.log("23" * "2"); // 46

console.log("23" > "18"); // true

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

*/

// =============== 08 - Truthy and Falsy Values ===============
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Bishal"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

*/

// =============== 09 - Equality Operators: == vs. === ===============
/*
// const age = 18; // ==will return true, === will return true
const age = "18"; // == will return true, === will return false
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 23 === 23
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");

*/

// =============== 10 - Boolean Logic ===============
// =============== 11 - Logical Operators ===============
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

*/

// =============== Assignment 5 ===============
/*
// 1. Calculate the average score for each team, using the test data below

const dolphinsScore1 = (96 + 108 + 89) / 3;
const koalasScore1 = (88 + 91 + 110) / 3;
console.log(dolphinsScore1, koalasScore1);

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

if (dolphinsScore1 > koalasScore1) {
  console.log("Dolphins win the trophy 🏆");
} else if (dolphinsScore1 < koalasScore1) {
  console.log("Koalas win the trophy 🏆");
} else if (dolphinsScore1 === koalasScore1) {
  console.log("Both win the trophy 🏆");
}

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (dolphinsScore1 < koalasScore1 && koalasScore1 >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  dolphinsScore1 === koalasScore1 &&
  dolphinsScore1 >= 100 &&
  koalasScore1 >= 100
) {
  console.log("Both win the trophy 🏆");
} else {
  console.log("No one wins the trophy 🏆");
}

*/

// =============== 12 - The switch Statement ===============
/*
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/

// =============== 13 - Statements and Expressions ===============
/*
3 + 4; // expression
1991; // expression
true && false && !false; // expression

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Bishal";
console.log(`I am ${me} and I am ${2022 - 2001} years old.`);

*/

// =============== 14 - Conditional or Ternary Operator ===============
/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

*/

// =============== Assignment 6 ===============

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
