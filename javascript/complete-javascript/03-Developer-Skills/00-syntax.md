```js
const { type, carat } = gemstone;
// type: quartz
// carat: 21.29
```

## Object literal shorthand

- If the properties have the same name as the variables being assigned to them in an object literal, variable names can be removed.

```js
let type = "quartz";
let color = "rose";
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat,
  calculateWorth: function () {
    // ...
  },
};

// it is equivalent to
const gemstone = {
  type,
  color,
  carat,
  // shorthand method name
  calculateWorth() {
    // ...
  },
};
```

## Iteration

- Iterable protocol
  - Allow JavaScript objects to define or customize their iteration behavior.
- `for...of` loop
  - A loop that iterates over iterable objects.

### Family of `for` loops

- `for` loop
  - Need to keep track of the counter and exit condition.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```

- `for...in` loop
  - Iterate with index.
  - Loop over all enumerable properties, including any additional properties of the array's prototype.

```js
Array.prototype.decimalfy = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
// the decimalfy function will be printed out at the end
```

- `for...of` loop
  - Loop over any type of data that is iterable.
  - Only loop over the values in the object.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
// custom function won't be included
```

### The `iterable` protocol

- The `iterable` protocol is used for defining and customizing the iteration behavior of objects.
- Any object that is iterable can use the new `for...of` loop.
- For an object to be iterable, it must implement the `iterable` interface.
  - The iterator method is available via the constant `[Symbol.iterator]`.
  - The iterator method is a zero argument function that returns an iterator object.
  - An iterator object is an object that conforms to the iterator protocol.

### the `iterator` protocol

- The `iterator` protocol is used to define a standard way that an object produces a sequence of values.
- This is done through implementing the `next()` method, a zero argument function that returns an object with two properties.
  - `value`: the data representing the next value in the sequence of values within the object.
  - `done`: a boolean representing if the iterator is done going through the sequence of values.
    - If `done` is `true`, then the iterator has reached the end of its sequence of values.
    - If `done` is `false`, then the iterator is able to produce another value in its sequence of values.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
// Object {value: 0, done: false}
console.log(arrayIterator.next());
// Object {value: 1, done: false}
console.log(arrayIterator.next());
// Object {value: 2, done: false}
```
