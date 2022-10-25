# Prototypal Inheritance Chain

## Constructor Functions

- A constructor function is a regular function that is used to construct objects. The `new` operator is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const bishal = new Person("Bishal", 1991);
console.log(bishal); // Person {firstName: "Bishal", birthYear: 1991}
```

```js
console.log(bishal.__proto__); // Person {}
console.log(bishal.__proto__ === Person.prototype); // true
```

How Prototype Chain or Inheritance or Delegation works in JavaScript?

Construction function ----------(.prototype)----------> Prototype Object (Person.prototype) ----------(.**proto**)----------> Object.prototype

- Person.prototype is the prototype of all the objects created by the Person constructor function.

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
```

Prototype(Person.prototype) ----------(.constructor)----------> Constructor Function (Person)

```js
const bishal = new Person("Bishal", 1991);

bishal.calcAge();
```

New Object --------(.**proto**)--------> Prototype Object (Person.prototype) --------(.**proto**)--------> Object.prototype

The `new` operator does the following things:

1. It creates an empty object `{}`. Function is called and `this` keyword is set to point to this empty object.
2. It adds the `__proto__` property to the empty object, which links the prototype property of the constructor function to the empty object.
3. It makes the function automatically return the empty object.

- The `__proto__` property always points to the prototype property of the constructor function or Object.prototype.

In above code, bishal inherited the calcAge() method from the Person.prototype.

All the other objects created by the Person constructor function will also inherit the calcAge() method from the Person.prototype.

## Prototype Chain

- a series of objects linked together through their prototype properties.

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bishal = new Person("Bishal", 1991);
console.log(bishal); // Person {firstName: "Bishal", birthYear: 1991}
```

```js
console.log(bishal.__proto__); // Person {}
console.log(bishal.__proto__ === Person.prototype); // true
bishal.hasOwnProperty("firstName"); // true
```

```js
console.log(Person.prototype.isPrototypeOf(bishal)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
```

- The prototype chain is the chain of prototypes that an object inherits from.

Construction Function [Persom()] ----------(.prototype)----------> Prototype Object [Person.prototype] ----------(.**proto**)----------> Object.prototype [Object.prototype] ----------(.**proto**)----------> null

Construction Function [Object()] ----------(.prototype)----------> Prototype Object [Object.prototype] ----------(.**proto**)----------> nul

New Object [bishal] --------(.**proto**)--------> Prototype Object [Person.prototype] --------(.**proto**)--------> Object.prototype [Object.prototype]
