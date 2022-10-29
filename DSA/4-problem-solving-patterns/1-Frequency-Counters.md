# Frequency Counters

Frequency Counters are used to solve problems with a time complexity of O(n) or O(n^2). They are used to solve problems where we need to compare two arrays or strings. They are also used to solve problems where we need to count the number of occurrences of a value in an array or string.

If there is a loop in loop resulting in a time complexity of _O(n<sup>2</sup>)_, break down into two seperate for loops by making frequency object structures and then use these structures to do the furthur manipulations as accessing objects is faster than accessing arrays and strings

Used when there are linear datstructures such as arrays, linked lists and structs and the position of elements is of no use in the problem.

## Example

Write a function same that accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency values must be same.

### Naive Approach

1.  Iterate over first loop
2.  For every value in first loop, iterate over the second loop
3.  if the value in second loop is square of value in the first loop, delete that value in the second loop(to account for frequency as well)

### Frequency Counter + General Approach from previous chapter

#### Understand the problem

1.  Restate the question in own words

    > There are two arrays. Return true if for every value the first array, there exists a unique square value in the second array.

2.  What are the Inputs?

    > Two arrays of numbers

3.  What are the outputs?

    > Boolean

4.  Are Inputs and Outputs related?

    > Yes

5.  What labels should be given for important data
    > Let's call the first array as initialArray and the second array as finalArray. Let's call the two tables as initialTable and finalTable.

#### Explore Concrete Examples

1. Simple case

   > [1, 2, 3], [1, 4, 9] => true] <br>
   > Oreder does'nt matter

2. Boundary case

   > [1, 1, 2], [1, 4, 1] => true <br>
   > frequency does matter

3. Zero case

   > [], [] => true

4. Invalid case
   > always valid ie arrays

#### Break Down the Problem

```javascript
// Use Frequency counter approach to get two arrays first
function same(initialArray, finalArray) {
  // make empty tables
  // copy array into tables
  // compare tables
  // return
}
```

#### Solve/Simplify

```javascript
// Use Frequency counter approach to get two arrays first
function same(initialArray, finalArray) {
  // make empty tables
  // copy array into tables
  let initialTable = arrayToTable(initialArray);
  let finalTable = arrayToTable(finalArray);
  for (key in initialTable) {
    if (initialTable[key] != finalTable[key ** 2]) {
      return false;
    }
  }
  // compare tables
  return true;
}

function arrayToTable(array) {
  let table = {};
  //[1, 1, 2, 3] => {1 : 2, 2: 1, 3 : 1}
  for (number of array) {
    table[number] = ++table[number] || 1;
  }
  return table;
}
```

#### Look Back and Refactor

1. Does it run:
   > Yes
2. Ways to approach the problem
   > Naive : two for loops
3. Ways to apporach the parts
   > NOt using the second function
4. Is the code understandable at first glance
   > Mostly
5. Clean

```javascript
//Final Code
function same(initialArray, finalArray) {
  // convert array to frequency tables
  let initialTable = arrayToTable(initialArray);
  let finalTable = arrayToTable(finalArray);
  // compare tables
  for (key in initialTable) {
    if (initialTable[key] != finalTable[key ** 2]) {
      return false;
    }
  }
  return true;
}

function arrayToTable(array) {
  let table = {};
  //[1, 1, 2, 3] => {1 : 2, 2: 1, 3 : 1}
  array.forEach((value) => (table[value] = ++table[value] || 1));
  return table;
}
```

```js
function validAnagram(first, second) {
  if (first.length != second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
validAnagram("anagram", "nagaram"); // true
```

Usecases of Frequency Counters

1.  When there is a loop in loop resulting in a time complexity of _O(n<sup>2</sup>)_, break down into two seperate for loops by making frequency object structures and then use these structures to do the furthur manipulations as accessing objects is faster than accessing arrays and strings

- used when there are linear datstructures such as arrays, linked lists and structs and the position of elements is of no use in the problem.

```js
// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution must have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let digit = str1[i];
    lookup[digit] ? (lookup[digit] += 1) : (lookup[digit] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let digit = str2[i];
    if (!lookup[digit]) {
      return false;
    } else {
      lookup[digit] -= 1;
    }
  }
  return true;
}
sameFrequency(182, 281); // true
```

```js
// write a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern. Time: O(N)

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}
areThereDuplicates(1, 2, 3); // false
```

```js
function areThereDuplicates(arg1, arg2, arg3) {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}

areThereDuplicates(1, 2, 3); // false
```
