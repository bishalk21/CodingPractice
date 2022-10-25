# Prototypal Inheritance on Built-in Objects

## Prototypal Inheritance on Built-in Objects

- All built-in objects in JavaScript are instances of Object constructor function. So, they have access to all the methods and properties of Object.prototype.

- For example, the `map()` method is available on all the arrays. This is because the `map()` method is defined on the Array.prototype.

- The `map()` method is not defined on the Array constructor function. It is defined on the Array.prototype.

- The `map()` method is available on all the arrays because the Array.prototype is the prototype of all the arrays.

- The `map()` method is not available on the Array constructor function because the Array constructor function is not the prototype of the Array constructor function.

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bishal = new Person("Bishal", 1991);
console.log(bishal); // Person {firstName: "Bishal", birthYear: 1991}

// Prototypes
console.log(Person.prototype); // Person {}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(bishal.__proto__); // Person {}
console.log(bishal.__proto__.__proto__); // {}
console.log(bishal.__proto__.__proto__.__proto__); // null
console.log(bishal.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(bishal)); // true

console.log(bishal.hasOwnProperty("firstName")); // true
console.log(bishal.hasOwnProperty("calcAge")); // false
console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)
```

## Prototypal Inheritance on Arrays

```js
const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []

console.log(arr.__proto__); // (7) [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // {}

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // (5) [3, 6, 4, 5, 9]

const h1 = document.querySelector("h1");
console.dir(h1); // HTMLHeadingElement {constructor: ƒ, Symbol(Symbol.toStringTag): "HTMLHeadingElement", accessKey: "", …}
console.dir((x) => x + 1); // ƒ (anonymous)
```
