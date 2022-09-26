// This is a single line comment
/* This is 
a multi-line comment */

// JavaScript Variables and Data Types
// keywords: var, let, const
// data types: string, number, boolean, null, undefined, symbol, object, array, bigint, function

var name = "Bishal Karki"; // String
var age = 20; // Number
var isMale = true; // Boolean
var marks = null; // Null
var address; // Undefined
var symbol = Symbol("Bishal"); // Symbol
var person = { name: "Bishal", age: 20 }; // Object
var arr = [1, 2, 3, 4, 5]; // Array
var bigInt = 1234567890123456789012345678901234567890n; // BigInt
var func = function () {}; // Function

// JavaScript Operators
// Arithmetic Operators: +, -, *, /, %, **, ++, --
// Assignment Operators: =, +=, -=, *=, /=, %=, **=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !
// Bitwise Operators: &, |, ^, ~, <<, >>

// Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Solution:

var runningSum = function (nums) {
  var sum = 0;
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }
  return arr;
};

// Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

// Given n, calculate F(n).
// Solution:

var fib = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
