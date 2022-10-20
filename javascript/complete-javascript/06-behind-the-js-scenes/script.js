'use strict';

const a = "Bishal";

first();

function first() {
    const b = "Hello";
    second();

    function second() {
        const c = "Hi";
        third();
    }
}

function third() {
    const d = "Bishal";
    console.log(a + d);
    // console.log(d + c + b + a);
}

// ========= Scoping in Practice =========
/*
// Global Scope (varOne)

// Local Scope (varTwo)
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    // Local Scope (varFour)
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        // firstName = "Bishal Karki";

        // console.log(age); // checked if age is accessible here


        // block Scope (varThree)
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            // Reassigning outer scope's variable
            // output = "NEW OUTPUT!";
            console.log(add(2, 3)); // checked if add is accessible here // accessible

        }
        console.log(millenial); // var is function scoped, so it is accessible here
        // console.log(add(2, 3)); // checked if add is accessible here // not accessible

        console.log(output)
    }

    printAge();

    console.log(firstName); // firstName is available here because of the scope chain
    return age;
}

const firstName = "Bishal";
// output is not available here because of the scope chain
// console.log(output); 

calcAge(1996);

// ============ Hoisting and TDZ in Practice ============

// Variables
console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = "Bishal";
let job = "Programmer";
const year = 1996;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted!");
}

// Example

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
*/

//====================== This Keyword in Practice ========================
/*
console.log(this); // Window object
// console.log(this === window); // true

// Function Invocation
const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
}
calcAge(1996);

// Method Invocation
const person = {
    name: "Bishal",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`); // here this refers to person object
    },
};
person.greet(); // Hello, my name is John

// Constructor Invocation
function Fruit(color) {
    this.color = color;
    console.log(this); // Fruit {color: "red"}
}

const apple = new Fruit("red");

// Arrow Function Invocation
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // Window object
}
calcAgeArrow(1996);

const bishal = {
    name: "Bishal",
    age: 30,
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // here this refers to window object
    }
};
bishal.greet(); // Hello, my name is undefined

// Event Listener Invocation

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    console.log(this); // <button class="btn">Click Me!</button>
    this.style.backgroundColor = "red";
});
*/

//====================== Regular Functions vs Arrow Functions ========================
/*
// Regular Function
// var firstName = "Bishal"; 

const bishal = {
    firstName: "Bishal",
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //     console.log(self); // bishal object
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // isMillenial(); // true

        // Solution 2
        const isMillenial = () => {
            console.log(this); // bishal object
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial(); // true
    },

    // regular function - this = bishal object
    greet: function () {
        console.log(`Hello, my name is ${this.firstName}`);
    },

    // Arrow Function - this = Window object
    // greet: () => {
    //     console.log(`Hello, my name is ${this.firstName}`);
    // }


};

bishal.calcAge(); // 41
bishal.greet(); // Hello, my name is undefined

// Arguments Keyword - regular function
const addExpr = function (a, b) { // parameters
    console.log(arguments); // Arguments(2) [2, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    return a + b;
}
addExpr(2, 5); // arguments 
addExpr(2, 5, 8, 12); // arguments


// Arguments Keyword - arrow function

const addArrow = (a, b) => { // parameters
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return a + b;
}
addArrow(2, 5, 8); // arguments
*/

//====================== Primitives vs Objects (Primitive vs Reference Types) ========================

// Primitive Types
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Reference Types
const me = {
    name: "Bishal",
    age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend); // Friend: {name: "Bishal", age: 27}
console.log("Me:", me); // Me: {name: "Bishal", age: 27}

// Primitive Types
let lastName = "Chhetri";
let oldLastName = lastName;
lastName = "Karki";
console.log(lastName, oldLastName); // Karki karki

// Reference Types
const bishal = {
    firstName: "Bishal",
    lastName: "Chhetri",
    age: 30,
};
const marriedBishal = bishal;
marriedBishal.lastName = "Karki";
console.log("Before Marriage:", bishal); // Before Marriage: {firstName: "Bishal", lastName: "Karki", age: 30}
console.log("After Marriage:", marriedBishal); // After Marriage: {firstName: "Bishal", lastName: "Karki", age: 30}

// marriedBishal = {}; // Uncaught TypeError: Assignment to constant variable.

// Copying Objects
const bishal2 = {
    firstName: "Bishal",
    lastName: "Chhetri",
    family: ["Bishal2", "Bishal3", "Bishal5"],
    age: 30,
};

const bishalCopy = Object.assign({}, bishal2);
bishalCopy.lastName = "Karki";
console.log("Before Marriage:", bishal2); // Before Marriage: {firstName: "Bishal", lastName: "Chhetri", age: 30}
console.log("After Marriage:", bishalCopy); // After Marriage: {firstName: "Bishal", lastName: "Karki", age: 30}

bishalCopy.family.push("Bishal4");
bishalCopy.family.push("Bishal6");

console.log("Before Marriage:", bishal2); // Before Marriage: {firstName: "Bishal", lastName: "Chhetri", age: 30, family: Array(5)}
console.log("After Marriage:", bishalCopy); // After Marriage: {firstName: "Bishal", lastName: "Karki", age: 30, family: Array(5)}