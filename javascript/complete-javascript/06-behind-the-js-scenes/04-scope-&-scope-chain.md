# Scope and Scope Chain

## Scoping

Scoping tells us how our program's variables are organized and accessed.

Scoping is the process of determining the accessibility of variables. In JavaScript, we have two types of scope:

- Global Scope
- Local Scope

## Lexical Scoping

Lexical Scoping is controlled by placement of functions and blocks in the code.

The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

Lexical Scoping is a static scoping technique in which the scope is determined by author-time decisions of where functions, blocks, and variables are declared.

Lexical scoping is a way of determining how we access the variable in nested functions. The lexical scope is defined at the time of writing the code and is based on where functions are declared.

```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

| Scoping                                                                           | Lexical Scoping                                                                                                                                                                                    |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scoping is the process of determining the accessibility of variables.             | Lexical Scoping is a static scoping technique in which the scope is determined by author-time decisions of where functions, blocks, and variables are declared.                                    |
| In JavaScript, we have two types of scope: the global scope, and the local scope. | Lexical scoping is a way of determining how we access the variable in nested functions. The lexical scope is defined at the time of writing the code and is based on where functions are declared. |

## Scope

Scope is the set of variables, objects, and functions you have access to.

Scope is a space or environment in which a certain entity such as variable, object, function exists and can be accessed.

```js
var a = 10;
function b() {
  var c = 20;
  console.log(a); // 10
  console.log(c); // 20
}
b(); // 10 20
console.log(a); // 10
console.log(c); // ReferenceError: c is not defined
```

JavaScript has function scope: Each function creates a new scope. Scope determines the accessibility (visibility) of these variables.

```js

```

## Scope of a Variable

Scope of a variable is the region of your program in which you can access a particular variable with its identifier.

## Types of Scope

There are three types of scope:

- Global Scope
- Local Scope or Function Scope
- Block Scope

## Global Scope

Global Scope is the default scope in JavaScript.

Global Scope is the scope which is available throughout the program. They are accessible from any part of the program.

```js
var a = 10;
function b() {
  console.log(a); // 10
}
b(); // 10
console.log(a); // 10
```

## Local Scope or Function Scope

Local Scope is the scope which is available only within the function.

Local Scope is the scope which is available only within the function. They are not accessible from outside the function.

```js
var a = 10;
function b() {
  var c = 20;
  console.log(a); // 10
  console.log(c); // 20
}
b(); // 10 20
console.log(a); // 10
console.log(c); // ReferenceError: c is not defined
```

## Block Scope

Block Scope is the scope which is available only within the block.

Block Scope is the scope which is available only within the block. They are not accessible from outside the block.

Functions are also block-scoped.

let and const are block-scoped.

```js
if (year >= 2000) {
  var millenium = true;
  console.log(millenium); // true
}
console.log(millenium); // ReferenceError: millenium is not defined
```

## Scope Chain

Scope Chain is the chain of all the available scopes in the current execution context.

In Scope Chain, the inner scope has access to the outer scope, but the outer scope does not have access to the inner scope.

```js
const myName = "Bishal";

function first() {
  const age = 20;

  if (age >= 18) {
    const isAdult = true;
    console.log(myName); // Bishal
  }

  function second() {
    const job = "Developer";
    console.log(myName); // Bishal
    console.log(age); // 20
    console.log(isAdult); // true
    console.log(`My name is ${myName} and I am ${age} years old.`); // My name is Bishal and I am 20 years old.
  }
  second();
}
first();
```
