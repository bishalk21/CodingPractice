[Arrow Functions](##arrow-functions)

# Intro to Functions

Functions are the building blocks of JavaScript. They are reusable pieces of code that can be called from anywhere in the program.

## Syntax

```js
function name(params) {
  // code block
}
```

## Parameter vs argument

- Parameter: a variable name that appears in the function declaration.
- Argument: a value that appears in the code when the function is invoked.
- Parameters are always passed by value.

## Return value

- A function always returns some value back to the caller.
- When return value is not specified, the function will return `undefined`.
  - E.g. `console.log`

## Scope

- Global scope
  - Variables defined outside of an function
- Function scope

## Shadowing

- Global variable can be overriden inside a function.
- Preventable by redeclaring the same variable in the function.

```js
// shadowing
var a = "a";
var b = "b";
function shadow() {
  a = "c"; // shadowing
  var b = "c"; // no shadowing
}

console.log(a); // a
console.log(b); // b
shadow();
console.log(a); // c, shadowed
console.log(b); // b
```

## Hoisting

- Before any JavaScript is executed, all function declarations are "hoisted" to the top of their current scope.
- Functions can be called before they are defined in a scope.
- Only declaration is hoisted. Assignment is not. So hoisted variables can still be undefined.
- The best practice is to define functions at the top of the scripts, and variables at the top of the functions.

```js
// only declaration is hoisted
function sayGreeting() {
  console.log(greeting);
  var greeting = "hello";
}
sayGreeting(); // undefined

// equivalent function
function sayGreeting() {
  var greeting;
  console.log(greeting);
  greeting = "hello";
}

// hoisting prevents access of global variable
var greeting = "hello";
function sayGreeting() {
  console.log(greeting); // undefined
  var greeting = "hello2";
}
sayGreeting(); // undefined
```

## Function as parameters

- A function passed into another function is called a **callback**.

## Function expressions

- A function stored in a variable.
- Anonymous function.

```js
var variable = function (params) {
  // anonymous function body
};

variable();
```

- Use the variable name to call the function.
- Function expressions are not hoisted.

```js
sayGreeting(); // sayGreetings is not a function
var sayGreeting = function () {
  console.log("hello");
};

// equivalent code
var sayGreeting;
sayGreeting();
sayGreeting = function () {
  console.log("hello");
};
```

## Named function expressions

```js
var variable = function name(params) {
  // function body
};
variable();
// call name() gives an error
```

## Inline function expressions

- Using function expressions that pass a function into another function inline, is really common in JavaScript.

```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

- Anonymous inline function expressions are often used for function callbacks that are not going to be reused elsewhere.

```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function (movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

## Arrow functions

arrow functions have no concepts of `this` and treat it like a normal variable

**arrow functions only respect function scoping. not block scope.**

From Anushree Subramani to Everyone: (02:25 PM)There is a common misconception that arrow function have a “flat” scope. But truth is, the parent’s scope is referenced.

```js
const person = {
  firstName: "tyler",
  getName() {
    // this is the function scope - which
    window.setInterval(() => {
      console.log(`${this.firstName} is my first name`); // this goes up a level to the next function scope (at author time)
    }, 3000);
  },
};

person.getName(); // "tyler is my first name"
```

arrow functions in arrow functions makes me think how there’s nothing that is actually catching the scope

arrow functions: you really need to know how they are written to understand this. not run-time.

From Anushree Subramani to Everyone: (03:01 PM)Tyler, what happens to “this” in strict mode?

## Arguments in functions

- `arguments` is an array-like object that contains all the arguments passed to the function.

```js
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

In strict mode, `arguments` is not bound to the function. It is not available inside the function.

Arrow functions do not have `arguments`. They don't have `this` either.

Arrow functions don't have their own bindings to this or super,or arguments and should not be used as methods.

Arrow functions don't have access to the new.target keyword.

Arrow functions are'nt suitable for call, apply and bind methods, which generally rely on establishing a scope.

Arrow functions can not be used as constructors and will throw an error when used with new.

Arrow functions can not be used as generators.
