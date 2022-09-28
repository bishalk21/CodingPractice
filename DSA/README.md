# Table of Contents

1. [JavaScript Basics](#day-01---javascript-basics)
   - [Data Types](#data-types)
   - [Variables](#variables)
   - [String Literals](#string-literals)

- [DSA - Problem Solving](#dsa---problem-solving)
  - [Running Sum of 1d Array](#running-sum-of-1d-array)
  - [Fibonacci Number](#fibonacci-number)
  - [Shuffle the Array](#shuffle-the-array)
  - [Search Insert Position](#search-insert-position)
- [Interview Questions](#interview-questions)
  - [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript)
  - [What is a higher order function](#what-is-a-higher-order-function)
  - [Is JavaScript a compiled or interpreted language](#is-javascript-a-compiled-or-interpreted-language)
  - [Is JavaScript a case-sensitive language](#is-javascript-a-case-sensitive-language)
  - [What is the currying function](#what-is-the-currying-function)
  - [What is Hoisting](#what-is-hoisting)

# Day 01 - JavaScript Basics

1. Comment Your JavaScript Code

- Comments are lines of code that JavaScript will intentionally ignore.
- Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

```JavaScript
// This is an in-line comment.
/* This is a
multi-line comment */
```

2. Declare JavaScript Variables

- In computer science, data is anything that is meaningful to the computer.

# Data Types

- Data Types in JavaScript:

```JavaScript
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
  - Object
  - BigInt
  - Array
```

# Variables

- Variables are named containers for storing data values.
- allow computers to store and manipulate data in a dynamic fashion.
- Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to.

* To create a variable in JavaScript, we use keywords: - var - let - const

```JavaScript
var myName = "Bishal";
let ourName = "TeamBishal";
const pi = 3.14;
```

3. Storing Values with the Assignment Operator

- In JavaScript, you can store a value in a variable with the assignment operator (=).
- If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

```JavaScript
var a;
var b = 2;
a = 7;
b = a;
```

4. Initializing Variables with the Assignment Operator

- It is common to initialize a variable to an initial value in the same line as it is declared.

```JavaScript
var a = 9;
```

5. Assigning the Value of One Variable to Another

- If you have already declared a variable, you can assign it to another variable using the assignment operator.

```JavaScript
var a;
a = 7;
var b;
b = a;
```

6. Declare String Variables

- String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote.

```JavaScript
var myFirstName = "Bishal";
var myLastName = "Karki";
```

# String Literals

- String in JavaScript are used for storing and manipulating text, wrapped in single or double quotes.
- String literals are string values that are written directly in your code.
- A string literal is a sequence of zero or more characters enclosed in single or double quotes.

```JavaScript
var myFirstName = "Bishal";
var myLastName = "Karki";
```

7. Understanding Uninitialized Variables

- When JavaScript variables are declared, they have an initial value of undefined.
- If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
- If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

```JavaScript
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```

# DSA - Problem Solving

# Running Sum of 1d Array

Q. Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

```JavaScript

const runningSum = function(nums){
    let sum = 0;
        let result = [];
    for (let i=0, i< nums.length, i++){
    sum = sum + nums[i];
    result.push(sum);
    }
    return result;
}

```

or

```JavaScript
const runningSum = function(nums){
  let sum = 0;
  return nums.map((num) => {
      sum += num;
      return sum;
  });
}
```

**[⬆ back to top](#table-of-contents)**

# Fibonacci Number

Q. The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
such that each number is the sum of the two preceding ones, starting from 0 and 1.

```JavaScript
const fib = function(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fib(n-1) + fib(n-2);
}
```

or

```JavaScript
const fib = function(n){
  let a = 0, b = 1, c;
  if(n === 0) return a;
  for(let i = 2; i <= n; i++){
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
```

**[⬆ back to top](#table-of-contents)**

# Shuffle the Array

Q. Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].

```JavaScript
const shuffle = function(nums, n) {
  let result = [];
  for(let i = 0; i < n; i++){
      result.push(nums[i]);
      result.push(nums[i+n]);
  }
  return result;
```

**[⬆ back to top](#table-of-contents)**

# Search Insert Position

Q. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.

Steps:

1. Find the middle element of the array.
2. If the middle element is equal to the target, return the middle index.
3. If the middle element is greater than the target, then the target can only lie in the left half of the array. So, we search in the left half of the array.
4. If the middle element is less than the target, then the target can only lie in the right half of the array. So, we search in the right half of the array.
5. Repeat the steps 1 to 4 until we find the target or the left index is greater than the right index.

- Algorithms to solve this problem: - Binary Search - Linear Search

```JavaScript
const searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right){
      let mid = Math.floor((left + right) / 2);
      if(nums[mid] === target){
          return mid;
      } else if(nums[mid] > target){
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return left;
};
```

OR

```JavaScript
var searchInsert = function (nums, target) {
for (var i = 0; i < nums.length; i++) {
  if (nums[i] >= target) {
    return i;
  }
}
return nums.length;
};
```

**[⬆ back to top](#table-of-contents)**

# Interview Questions

# What are the possible ways to create objects in JavaScript

- Object constructor:

  ```JavaScript
  var obj = new Object();
  ```

- Object literal -

  ```JavaScript
      var obj = {};
  ```

- Object.create(): The create method of Object creates a new object by passing the prototype object as a parameter

  ```JavaScript
   var obj = Object.create(null);
  ```

- ES6 class:

  ```JavaScript
   class Person {
    constructor(name) {
        this.name = name;
        }
    }

    var obj = new Person('Bishal');
  ```

- Function constructor: Create any function and apply the new operator to create object instances,

  ```JavaScript
  function Person(name) {
    this.name = name;
  }

  var obj = new Person('Bishal');
  ```

- Function constructor with prototype: This is similar to function constructor but it uses prototype for their properties and methods,

  ```JavaScript
  function Person(name) {
    this.name = name;
    }
    Person.prototype.getName = function() {
        return this.name;
    }

    var obj = new Person('Bishal');
  ```

- Singleton pattern: A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
  ```JavaScript
  var object = new (function () {
  this.name = "Bishal";
  })();
  ```
  **[⬆ back to top](#table-of-contents)**

# What is a higher order function

- Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

```JavaScript
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

```

**[⬆ back to top](#table-of-contents)**

# Is JavaScript a compiled or interpreted language

- JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

**[⬆ back to top](#table-of-contents)**

# Is JavaScript a case-sensitive language

- Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

**[⬆ back to top](#table-of-contents)**

# What is the currying function

- Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.

```JavaScript
const add = (a) => (b) => a + b;
add(1)(2); // 3
```

or

```JavaScript
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6
```

# What is Hoisting

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
- Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.

```JavaScript
console.log(x); // undefined
var x = 3;

console.log(y); // ReferenceError: y is not defined
let y = 3;

```

This hoisting makes functions to be safely used in code before they are declared.

**[⬆ back to top](#table-of-contents)**

```

```
