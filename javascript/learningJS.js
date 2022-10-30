// How JavaScript Works:
// JavaScript allocates in memory all variables and functions using during execution time. It's mean that all data is allocated in RAM when the code is running, it's allow us to have faster access to the data.

// What is interpreted language?
// An interpreter is a program that reads a program written in a different programming language and executes it in the computer's memory directly without any intermediate steps like compilation.
// example:
var a = 10;
var b = 20;
var c = a + b;
console.log(c); // 30

// What is compiled language?
// A compiled language is a program that is written in a programming language and then compiled to machine code.
// A compiler is a program that reads a program written in a different programming language and compiles it to machine code.
// example:
var a = 10;
var b = 20;
var c = a + b;
console.log(c); // 30

// What is JavaScript?
// JavaScript is a programming language that is interpreted by a web browser.
console.log(firstName); // undefined
var firstName = "John";
console.log(firstName); // John

// 1. Comments
// comments are used to write notes in a program.
// Type of comments:
// 1. Single line comment - //
// 2. Multi line comment - /* */
// 3. HTML comment - <!-- -->
var a = 10; // a is 10

// 2. Variables
// variables are used to store data in memory.
// Type of variables:
// 1. Number - number
Number = 10;
console.log(Number); // 10
// 2. String - string
// 3. Boolean - boolean
// 4. Undefined - undefined
// 5. Null - null
// 6. Object - object

// 3. Data Types
// 4. Operators
// 5. Expressions
// 6. Statements

// 7. Functions
document.write("Hello World");

// 8. Arrays
// 9. Objects
// 10. DOM
// 11. Events
// 12. AJAX
// 13. JSON
// 14. Cookies
// 15. Sessions
// 16. Cookies and Sessions

// IIFE - Immediately Invoked Function Expression
(function (a, b) {
  // function expression
  return a + b; // return a + b
})(10, 20); // immediately invoked function expression - 10 + 20 = 30

x = 5;
var x;
(function fun() {
  {
    let x = 1;
    x++;
    console.log(x); // ?
  }
  console.log(x); // ?
})();

// String concatenation - means joining two or more strings together.

// String Concatenation
var firstName = "Bishal";
var lastName = "Karki";

var fullName = "My name is " + firstName + " " + lastName;
console.log(fullName); // Bishal Karki

// String Concatenation with Template Literals
var firstName = "Bishal";
var lastName = "Karki";

var fullName = `My name is ${firstName} ${lastName}`;
console.log(fullName); // My name is Bishal Karki

// String Concatenation with Numbers
var firstName = "Bishal";
var lastName = "Karki";
var age = 20;

var fullName = `My name is ${firstName} ${lastName} and I am ${age} years old`;
console.log(fullName); // My name is Bishal Karki and I am 21 years old

// You have written 182 characters, you have left with 18 characters.
var tweet = prompt("Enter your tweet");
var tweetLength = tweet.length;
var remainingCharacters = 140 - tweetLength;
console.log(
  firstName +
    " you have written " +
    tweetLength +
    " characters, you have left with " +
    remainingCharacters +
    " characters."
);

// Slice - used to extract a part of a string.
var tweet = "Hello World";
var slicedTweet = tweet.slice(0, 5); // Hello
console.log(slicedTweet); // Hello ]

var myInterest = ["coding", "girlfriend", "music", "programming"];
var myInterest = myInterest.slice(0, 2); // coding, girlfriend

// toUpperCase - used to convert a string to upper case.
var tweet = "Hello World";
var upperCaseTweet = tweet.toUpperCase(); // HELLO WORLD

// create a variable that stores your name that user inputs via prompt.
var name = prompt("Enter your name");

// capitalize the first letter of the name.
// isolate the first letter of the name.
var firstLetter = name.slice(0, 1); // isolate the first letter of the name.
// convert the first letter to upper case.
var upperCaseFirstLetter = firstLetter.toUpperCase(); // convert the first letter to upper case.
// isolate the rest of the name.
var restOfTheName = name.slice(1, name.length); // isolate the rest of the name.
restOfTheName = restOfTheName.toLowerCase(); // convert the rest of the name to lower case.
// concatenate the first letter with the rest of the name.
var capitalizedName = upperCaseFirstLetter + restOfTheName; // concatenate the first letter with the rest of the name.

alert("Hello " + capitalizedName); // Hello Bishal

// CONCAT ME AND YOU
var me = "Bishal";
var you = "Karki";
var concatMeAndYou = me + " " + you;

// users array
const users = [
  {
    name: "Bishal",
    age: 20,
  },
  {
    name: "Karki",
    age: 21,
  },
  {
    name: "Bishal",
    age: 20,
  },
  {
    name: "Karki",
    age: 21,
  },
];
// you want to add a unique id to each object of the array, you can use the array map method like this:
import { v4 as uuidv4 } from "uuid";
const updatedUsers = users.map((user) => {
  return {
    ...user,
    id: uuidv4(),
  };
});
// This is really useful in React where you need to assign a unique key while displaying content using the array map method like this:
{
  users.map((user) => {
    return (
      <li key={id}>
        <div className="user"> {user.name} </div>
        <div className="age"> {user.age} </div>
      </li>
    );
  });
}
// 𝗣𝗦: Don't use index as a key while using array map but always use unique id to avoid performance issue.

function someRecursive(arr, isOdd) {
  if (arr.length === 0) {
    return false;
  }
  if (isOdd(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), isOdd);
}
console.log(someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0)); // true
