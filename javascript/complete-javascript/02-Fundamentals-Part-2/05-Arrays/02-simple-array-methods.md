#[Array](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array)

Why Arrays need methods?

Arrays are objects. Objects have methods. So, arrays have methods too.

Methods are simply functions that are attached to objects. They are called using the dot notation.

## Basic Methods of Array

| Method     | Description                                                                | syntax                                                                |
| ---------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| concat()   | Joins two or more arrays, and returns a copy of the joined arrays          | `var newArray = oldArray.concat(value1[, value2[, ...[, valueN]]])`   |
| join()     | Joins all elements of an array into a string                               | `var newString = oldArray.join([separator])`                          |
| pop()      | Removes the last element of an array, and returns that element             | `var lastElement = oldArray.pop()`                                    |
| push()     | Adds new elements to the end of an array, and returns the new length       | `var newLength = oldArray.push(element1[, ...[, elementN]])`          |
| reverse()  | Reverses the order of the elements in an array                             | `oldArray.reverse()`                                                  |
| shift()    | Removes the first element of an array, and returns that element            | `var firstElement = oldArray.shift()`                                 |
| slice()    | Selects a part of an array, and returns the new array                      | `var newArray = oldArray.slice([begin[, end]])`                       |
| sort()     | Sorts the elements of an array                                             | `oldArray.sort([compareFunction])`                                    |
| splice()   | Adds/Removes elements from an array                                        | `var newArray = oldArray.splice(index, howmany, item1, ....., itemX)` |
| toString() | Converts an array to a string, and returns the result                      | `var newString = oldArray.toString()`                                 |
| unshift()  | Adds new elements to the beginning of an array, and returns the new length | `var newLength = oldArray.unshift(element1[, ...[, elementN]])`       |

###[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

`concat()` creates _another array_ from another that already exists adding to it the elements passed as parameters

- `concat()` creates a new array by joining the elements of the original array with the elements passed as parameters

syntax:

```js
var newArray = oldArray.concat(value1[, value2[, ...[, valueN]]])
```

```javascript
>>> var items = [1,2]
>>> items.concat(3,4,5)
[1, 2, 3, 4, 5]
>>> items.concat(3,4,5,'string',undefined)
[1, 2, 3, 4, 5, "string", undefined]
>>> items.concat([3,4,5],[6,7],[8,9])
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> items.concat([3,4,5],[6,7,[8,9,10]])
[1, 2, 3, 4, 5, 6, 7, [8,9,10]]
```

[concat w/ forEach example](https://jsbin.com/kicawe/1/edit?js,console)

###[join()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/join)

`join()` returns a string with the values of the elements in the array

```javascript
>>> var a = ['Wind', 'Rain', 'Fire'];
>>> a.join();
"Wind,Rain,Fire"
>>> a.join(" - ");
"Wind - Rain - Fire"
>>> typeof ( a.join(" - ") )
"string"
```

###[indexOf()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf)

`indexOf()` returns the first index where an element is found or returns -1 if is not found

```javascript
>>> var a = ['Wind', 'Rain', 'Fire'];
>>> a.indexOf('Rain');
1
>>> a.indexOf('Earth');
-1
>>> a.indexOf('rain');
-1
>>> a.indexOf('Rain',2);
1
```

###[push()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push)

`push()` insert elements at the end of the array  
`a.push('new')` is the same than `a[a.length] = 'new'`  
`push()` returns the size of the array updated

```javascript
>>> var sports = ['soccer', 'baseball'];
>>> sports
["soccer", "baseball"]
>>> sports.length
2
>>> sports.push('football', 'swimming');
4
>>> sports
["soccer", "baseball", "football", "swimming"]
```

###[unshift()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift)

`unshift()` insert elements at the beginning of the array
`unshift()` returns the size of the array updated

```javascript
>>> var sports = ['soccer', 'baseball'];
>>> sports
["soccer", "baseball"]
>>> sports.length
2
>>> sports.unshift('football', 'swimming');
4
>>> sports
["football", "swimming", "soccer", "baseball"]
```

###[pop()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/pop)

`pop()` removes the last element  
`a.pop()` is the same than `a.length--`;  
`pop()` returns the removed element

```javascript
>>> var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
>>> myFish
["angel", "clown", "mandarin", "sturgeon"]
>>> myFish.pop();
"sturgeon"
>>> myFish
["angel", "clown", "mandarin"]
```

###[shift()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/shift)

`shift()` removes the first element
`shift()` returns the removed element

```javascript
>>> var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
>>> myFish
["angel", "clown", "mandarin", "sturgeon"]
>>> myFish.shift();
"angel"
>>> myFish
["clown", "mandarin", "sturgeon"]
```

###[sort()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort)

sort the array and returns the modified array

- if a function is not passed as a parameter it will order the array based in the ASCII codes
- if a function is passed as a paramter
  - `compare(a, b)` → -1 → a,b
  - `compare(a, b)` → 1 → b,a (switch)
  - `compare(a, b)` → 0 → a,b (do nothing)

```javascript
>>> var fruit = ['apples', 'bananas', 'Cherries'];
>>> fruit
["apples", "bananas", "Cherries"]
>>> fruit.sort();
["Cherries", "apples", "bananas"]

>>> var scores = [1, 2, 10, 21];
>>> scores
[1, 2, 10, 21]
>>> scores.sort()
[1, 10, 2, 21]
```

```javascript
>>> var numbers = [4, 2, 42, 36, 5, 1, 12, 3];
>>> numbers
[4, 2, 42, 36, 5, 1, 12, 3]
>>> numbers.sort()
[1, 12, 2, 3, 36, 4, 42, 5]
>>> numbers.sort( function(a, b) { return a - b; } );
[1, 2, 3, 4, 5, 12, 36, 42]
```

```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1; // a comes first
  }
  if (a is greater than b by the ordering criterion) {
    return 1; // b comes first
  }
  // a must be equal to b
  return 0; // no changes
}
```

###[slice()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice)

`slice()` returns a piece of the array without modifying the original.

- `slice()` returns a new array with the elements from the original array
- `slice()` only returns the extracted elements from the original array from the start index to the end index
- can create shallow copies of arrays using `slice()` method

syntax:

```javascript
array.slice([begin[, end]])
```

```javascript
>>> var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
>>> var citrus = fruits.slice(1, 3);
>>> fruits
["Banana", "Orange", "Lemon", "Apple", "Mango"]
>>> citrus
["Orange", "Lemon"]
>>> fruits.slice(1)
["Orange", "Lemon", "Apple", "Mango"]
>>> fruits.slice(1).slice(1)
["Lemon", "Apple", "Mango"]
>>> fruits.slice(-1)
["Mango"]
>>> fruits.slice(-2)
["Apple", "Mango"]
>>> fruits.slice(1,-1)
["Orange", "Lemon", "Apple"]
```

###[splice()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice)

`splice()` removes a piece of the array, it returns it and optionally fill in the gap with new elements

- `splice()` modifies the original array and returns the removed elements

syntax:

```javascript
array.splice(start, deleteCount, item1, item2, ...)
```

```javascript
>>> var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

>>> myFish
["angel", "clown", "mandarin", "surgeon"]
>>> var removed = myFish.splice(2, 1);

>>> myFish
["angel", "clown", "surgeon"]
>>> removed
["mandarin"]

>>> var removed = myFish.splice(2, 0, 'drum');
>>> myFish
["angel", "clown", "drum", "surgeon"]
>>> removed
[]
```

### [reverse()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reverse)

`reverse()` reverses the order of the elements of the array

syntax:

```javascript
array.reverse();
```

```javascript
>>> var a = ['one', 'two', 'three'];
>>> a
["one", "two", "three"]
>>> a.reverse();
["three", "two", "one"]
```

### find() and findIndex()

`find()` returns the value of the first element in the array that satisfies the provided testing function. Otherwise `undefined` is returned.

- returns the value of the first element in the array that satisfies the provided testing function
- returns `undefined` if no element satisfies the testing function

```javascript
>>> var array1 = [5, 12, 8, 130, 44];
>>> array1.find(function(element) {
...   return element > 10;
... });
12
```

`findIndex()` returns the index of the first element in the array that satisfies the provided testing function. Otherwise `-1` is returned.

- returns the index of the first element in the array that satisfies the provided testing function
- returns `-1` if no element satisfies the testing function

```javascript
>>> var array1 = [5, 12, 8, 130, 44];
>>> array1.findIndex(function(element) {
...   return element > 10;
... });
1
```

## Array methods as Higher Order Functions

<sub>[Functional Programming in JavaScript | YouTube Videos](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)</sub>  
<sub>[Higher Order Function | Medium](https://medium.com/functional-javascript/higher-order-functions-78084829fff4#.ka4840l1e)</sub>  
<sub>[Functional Programming | Book](http://shop.oreilly.com/product/0636920028857.do)</sub>  
<sub>[Higher-Order Functions and Function Binding | Explained exercise](http://clarkfeusier.com/2015/01/11/interview-question-function-bind.html)</sub>

[Higher Order Functions](http://eloquentjavascript.net/05_higher_order.html) are those functions that accept other functions as parameters or those that return functions([or both](http://jtfmumm.com/blog/2013/08/31/nested-higher-order-functions-in-javascript/)). They are the functions that treat other functions as values (enter or exit)

#### [Functional Programming](https://www.safaribooksonline.com/library/view/functional-javascript/9781449360757/ch04.html)

There's a programming paradigm called [functional programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.iv40wrzzg) that is based in (among other things):

- The use/creation of [pure functions](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)
- The [function composition](http://nodegeek.net/2014/06/24/function-composition/)

<sub>[Compose Yourself: Fun with Functions | Talk Slides](http://scott.sauyet.com/Javascript/Talk/Compose/2013-05-22/)</sub>  
<sub>[Functional Programming | Talk Slides](http://scott.sauyet.com/Javascript/Talk/FunctionalProgramming/)</sub>

This programming style let a code that is cleaner, shorter and more easy to read and test

```javascript
function double(x) {
  return x * 2;
}

[1, 2, 3, 4, 5].map(double); // => [2,4,6,8,10]
```

```javascript
function sum(total, item) {
  return total + item;
}

[15, 30, 20].reduce(reducer, 0); // => 65
```

Applied to javascript, some basic and practical principles of this [functional programming](http://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/) could be:

- All your functions should accepts at least 1 argument
- All your functions should return a value or another function
- No for-loops

#### Higher Order Functions

Arrays have available [from their prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) some _higher order functions_ VERY used. They're among others:

###[forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

`forEach()` allow us to execute a function over every elmement of the array

    arr.forEach(callback[, thisArg])

```javascript
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

// Note elision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
[];
```

###[map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`map()` returns _a new array_ with the result of calling a function provided as an argument over every element of the array

    arr.map(callback[, thisArg])

```javascript
function double(element /*, index, array*/ ) {
  //console.log('a[' + index + '] = ' + element);
  return element * 2;
}

// Note elision, there is no member at 2 so it isn't visited
>>> [2, 5, 3, 9].map(double);
[4, 10, 6, 18]
```

###[filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

`filter()` returns a new array with those elements that pass the _test_ (return `true` when applying the function on them) in the function passed as a paramenter

    arr.filter(callback[, thisArg])

```javascript
function isMoreThan5(element /*, index, array */) {
  //console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> var groupMoreThan5 = [2, 5, 3, 9].filter(isMoreThan5);
>>> groupMoreThan5
[5, 9]
```

###[every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

`every()` return true if _ALL_ the elements of the array pass the test provided as a parameter (they all return `true` when we apply the function on them)

    arr.every(callback[, thisArg])

```javascript
function isMoreThan5(element /*, index, array */) {
  //console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> console.log ( [2, 5, 3, 9].every(isMoreThan5) )
false
>>> console.log ( [22, 5, 33, 9].every(isMoreThan5) )
true
```

###[some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

`some()` return true if _SOME_ element of the array pass the provided test as a parameter (one or more return `true` when we apply the function on them)

    arr.some(callback[, thisArg])

```javascript
function isMoreThan5(element /*, index, array */) {
  //console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> console.log ( [2, 5, 3, 9].some(isMoreThan5) )
true
>>> console.log ( [1, 2, 3, 4].some(isMoreThan5) )
false
```

###[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

`reducer()` method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

`reduce()` applies a function recursively over an _accumulator_ and over every item if the array (from left to right) until getting a _unique value_

    arr.reduce(callback[, initialValue])

Easy to understand: `reduce()` is like a `forEach()` that returns a value

- returns the sum of all the elements of the array

```javascript
function sumElements(acc, current /*, index, array */) {
  //console.log(acc + ' | ' + current + ' | ' + index + ' | ' + array);
  return acc + current;
};

// Note elision, there is no member at 2 so it isn't visited
>>> [2, 5, 3, 9].reduce(sumElements);
19
```

```javascript
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```

- returns the maximum value of the array

```javascript
const max = (a, b) => Math.max(a, b);
[1, 2, 3, 4, 5].reduce(max); // 5

const values = [1, 2, 3, 4, 5];
const max = values.reduce((a, b) => a + b);
```

### [flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

`flat()` returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    arr.flat([depth])

```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

// 2nd level depth
var arr3 = [1, 2, [3, 4, [5, 6]], 7, 8];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6, 7, 8]
```

### [flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

`flatMap()` returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a `map()` followed by a `flat()` of depth 1, but `flatMap()` is often quite useful, as merging both into one method is slightly more efficient.

    arr.flatMap(callback[, thisArg])

```javascript
var arr1 = [1, 2, 3, 4];
arr1.flatMap((x) => [x, x * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8]

var arr2 = [1, 2, 3, 4];
arr2.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

### fill()

`fill()` method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

    arr.fill(value[, start[, end]])

```javascript
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

### Array.from()

`Array.from()` method creates a new, shallow-copied `Array` instance from an array-like or iterable object.

    Array.from(arrayLike[, mapFn[, thisArg]])

```javascript
Array.from(length: number, mapFn: (v: number, k: number) => T, thisArg?: any): T[];
Array.from<T>(arrayLike: ArrayLike<T>): T[];
Array.from<T, U>(arrayLike: ArrayLike<T>, mapFn: (v: T, k: number) => U, thisArg?: any): U[];
Array.from<T>(iterable: Iterable<T>): T[];
Array.from<T, U>(iterable: Iterable<T>, mapFn: (v: T, k: number) => U, thisArg?: any): U[];
```

```javascript
// Array from a string
Array.from("foo");
// ["f", "o", "o"]

// Array from a Set
Array.from(new Set(["foo", window]));
// ["foo", window]

// Array from a Map
Array.from(
  new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ])
);
// [[1, 2], [2, 4], [4, 8]]

// Array from an array-like object (arguments)
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [1, 2, 3]

// Array from an iterable object
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Array from an iterable object (using a map function)
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

const y = Array.from({ length: 5 }, () => 1);
// [1, 1, 1, 1, 1]

const z = Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]

const a = Array.from({ length: 5 }, (v, k) => k + 1);
// [1, 2, 3, 4, 5]
```

### [pluck()](http://underscorejs.org/#pluck), [zip()](http://underscorejs.org/#zip), [reject()](http://underscorejs.org/#reject), [groupBy()](https://lodash.com/docs#groupBy), [sample()](https://lodash.com/docs#sample), [chunk()](https://lodash.com/docs#chunk), [flatten()](https://lodash.com/docs#flatten)...

By using external libraries (como [underscore](http://underscorejs.org/#collections), [lodash](https://lodash.com/docs) o [functional.js](http://functionaljs.com/)) we can have available at our code much more _higher order functions_ that will ease our work
