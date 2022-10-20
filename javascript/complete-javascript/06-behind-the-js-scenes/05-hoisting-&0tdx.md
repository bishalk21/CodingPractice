# Hoisting and The TDZ

## Hoisting

Hoisting is a JavaScript mechanism (default behavior) where (all declarations) variables and function declarations are moved to the top of their scope before code execution.

Before execution, code is scanned for variable and function declarations, and for each declaration, a memory space is created in the variable environment.

| properties                               | Hoisted | Initial value                     | Scope    |
| ---------------------------------------- | ------- | --------------------------------- | -------- |
| function declaration                     | Yes     | function definition               | block    |
| variable declaration                     | Yes     | undefined                         | function |
| let and const declaration                | No      | <uninitialized>, TDZ (temporal)   | block    |
| function expressions and arrow functions |         | Depends if using const/let or var |          |

```js
console.log(a); // undefined
var a = 10;
```

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

## why hoisting?

- no mattter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
- using functions before actual declaration of all other functions and variables is possible in JavaScript.
- var hoisting is just a byproduct of how the JavaScript engine works

## The TDZ

The Temporal Dead Zone (TDZ) is a JavaScript concept that restricts access to variables before they are declared.

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

## Why TDZ?

- To prevent accessing variables before they are declared.
- To prevent accessing variables before they are initialized.
- makes it easier to catch bugs or avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
- most const variables actually are not constant, they are just not reassigned.
