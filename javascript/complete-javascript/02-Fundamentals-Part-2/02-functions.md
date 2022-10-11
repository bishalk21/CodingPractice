# Intro to Functions

# Functions

- Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.
- A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
  - The name of the function.
  - A list of parameters to the function, enclosed in parentheses and separated by commas.
  - The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas:
  - Parameter names are used to **pass values** to the function.
  - Parameter names are listed inside the parentheses () in the function definition.
- The code to be executed, by the function, is placed inside curly brackets: {}.

## Syntax

```js
function name(params) {
  // code block
}
```

## Function Declaration

- A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
  - The name of the function.
  - A list of parameters to the function, enclosed in parentheses and separated by commas.
  - The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

## Function Expression

- function expressions are often stored in variables in order to refer to them.
- A function expression is very similar to and has almost the same syntax as a function declaration (see above). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. Function expressions are convenient when passing a function as an argument to another function.

```js
const square = function (number) {
  return number * number;
};
```

## Note

- Function expressions are not hoisted. A function expression is not accessible before it is defined. A function declaration can be called before it is defined.

```js
sayGreeting(); // sayGreetings is not a function
var sayGreeting = function () {
  console.log("hello");
};
```

## Parameter vs argument

- Parameter: a variable name that appears in the function declaration. It is used to hold the value of the argument that is passed to the function when it is invoked.
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
