# Welcome to Namaste Javascript Notes 🚀

## ❓ what it is

> This repo maintains my version of javascript notes which I learned from the famous [Namaste Javascript Youtube Series](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=1&ab_channel=AkshaySaini) by Akshay Saini.

<br>

## 🚀 [PDF Version of Complete Notes](./dist/namaste-javascript-notes.pdf)

<br>

## 📝 Content List

### [Episode 1 : Execution Context](./notes/lecture-1.md)

### [Episode 2 : How JS is executed & Call Stack](./notes/lecture-2.md)

### [Episode 3 : Hoisting in JavaScript (variables & functions)](./notes/lecture-3.md)

### [Episode 4 : Functions and Variable Environments](./notes/lecture-4.md)

### [Episode 5 : Shortest JS Program, window & this keyword](./notes/lecture-5.md)

### [Episode 6 : undefined vs not defined in JS](./notes/lecture-6.md)

### [Episode 7 : The Scope Chain, Scope & Lexical Environment](./notes/lecture-7.md)

### [Episode 8 : let & const in JS, Temporal Dead Zone](./notes/lecture-8.md)

### [Episode 9 : Block Scope & Shadowing in JS](./notes/lecture-9.md)

### [Episode 10 : Closure in JS](./notes/lecture-10.md)

### [Episode 11 : setTimeout + Closures Interview Question](./notes/lecture-11.md)

### [Episode 12 : Famous Interview Questions ft. Closures](./notes/lecture-12.md)

### [Episode 13 : First Class Functions ft. Anonymous Functions](./notes/lecture-13.md)

### [Episode 14 : Callback Functions in JS ft. Event Listeners](./notes/lecture-14.md)

### [Episode 15 : Asynchronous JavaScript & EVENT LOOP from scratch](./notes/lecture-15.md)

### [Episode 16 : JS Engine Exposed, Google's V8 Architecture](./notes/lecture-16.md)

### [Episode 17 : Trust issues with setTimeout()](./notes/lecture-17.md)

### [Episode 18 : Higher-Order Functions ft. Functional Programming](./notes/lecture-18.md)

### [Episode 19 : map, filter & reduce](./notes/lecture-19.md)

<br>

### Scope and Scope Chain

- Scoping asks the question, where can we access a variable? or where can we access a function? or where can we access a block of code?
- There are three types of scopes in JavaScript: the global scope, the function scope, and the block scope.
- Only let and const are block scoped. var is function scoped.
- In JavaScript, we have lexical scoping (static scoping), so the rules of where we can access a variable are set in stone by the time that we write our code, and they are based on where functions are declared.
- Every scope has access to the variables of the scope that is outside of it. This is called scope chain.
- When a variable is not found in the current scope, the engine looks for it in the outer scope, and if it is not found there, it looks in the next outer scope, and so on, until it finds the variable or reaches the global scope. If the variable is not found in the global scope, then the engine throws a ReferenceError or null.
- The scope chain is a one way street. It goes from the inner scope to the outer scope, but not the other way around.
- The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes.

## 🤝 Contribution Guidelines

- Fork the repository to your own Github account
- Clone the project to your machine, checkout to new branch & install dependencies using _yarn_
- Commit changes to your branch only using **npm run commit** script
- Don't use _git commit -m "commit message"_ to commit your changes
- Push changes to your fork
- Open a PR in my repository by providing all info and context of your PR.

## 🙏 Special Thanks

- https://github.com/HariAcidReign/JavaScript-A-Z-Notes
- https://sakshambhatt.hashnode.dev/notes-or-namaste-javascript-by-akshay-saini

## ✨ Show your support

Give a ⭐️ if this project helped you!
