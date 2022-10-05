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

// Assignment 1
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

// Assignment 2
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

// Assignment 3
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

// Assignment 4
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
