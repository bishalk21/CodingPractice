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

// Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Solution:

var shuffle = function (nums, n) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
    arr.push(nums[i + n]);
  }
  return arr;
};

// Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Solution:

var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// Or

var searchInsert = function (nums, target) {
  var start = 0;
  var end = nums.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};
