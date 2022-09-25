1. [JavaScript Basics](#day-01---javascript-basics)
   - [Data Types](##data-types)
   - [Variables](##variables)
   - [String Literals](##string-literals)

# Day 01 - JavaScript Basics

1. Comment Your JavaScript Code

- Comments are lines of code that JavaScript will intentionally ignore.
- Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

<code> 
// This is an in-line comment.
/* This is a
multi-line comment */
</code>

2. Declare JavaScript Variables

- In computer science, data is anything that is meaningful to the computer.

## Data Types

- Data Types in JavaScript:

  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
  - Object
  - BigInt
  - Array

## Variables

- Variables are named containers for storing data values.
- allow computers to store and manipulate data in a dynamic fashion.
- Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to.

* To create a variable in JavaScript, we use keywords: - var - let - const

<code>
var myName = "Bishal";
let ourName = "TeamBishal";
const pi = 3.14;
</code>

3. Storing Values with the Assignment Operator

- In JavaScript, you can store a value in a variable with the assignment operator (=).
- If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

<code>
var a;
var b = 2;
a = 7;
b = a;
</code>

4. Initializing Variables with the Assignment Operator

- It is common to initialize a variable to an initial value in the same line as it is declared.

<code>
var a = 9;
</code>

5. Assigning the Value of One Variable to Another

- If you have already declared a variable, you can assign it to another variable using the assignment operator.

<code>
var a;
a = 7;
var b;
b = a;
</code>

6. Declare String Variables

- String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote.

<code>
var myFirstName = "Bishal";
var myLastName = "Karki";
</code>

## String Literals

- String in JavaScript are used for storing and manipulating text, wrapped in single or double quotes.
- String literals are string values that are written directly in your code.
- A string literal is a sequence of zero or more characters enclosed in single or double quotes.

<code>
var myFirstName = "Bishal";
var myLastName = "Karki";
</code>

7. Understanding Uninitialized Variables

- When JavaScript variables are declared, they have an initial value of undefined.
- If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
- If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

<code>
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
</code>
