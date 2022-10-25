# Prototypes

First, each and every functions in JS has a property called `prototype` which is an object. This object is used to store all the methods that we want to be available to all the objects that are created using this function as a constructor.

Every objects created by a constructor function has a property called `__proto__` which is a reference to the prototype property of the constructor function.

Prototypes are the mechanism by which JavaScript objects inherit features from one another. In JavaScript, objects are created from prototypes.

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
```

## isPrototypeOf

The `isPrototypeOf` method allows us to check whether an object is a prototype of another object.

```js
console.log(Person.prototype.isPrototypeOf(bishal)); // true
```

## hasOwnProperty

The `hasOwnProperty` method allows us to check whether an object has a property as its own property or it is inherited from its prototype.

```js
console.log(bishal.hasOwnProperty("firstName")); // true
console.log(bishal.hasOwnProperty("calcAge")); // false
```
