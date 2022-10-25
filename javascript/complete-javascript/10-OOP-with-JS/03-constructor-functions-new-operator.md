# Constructor Functions and the new Operator

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

The `new` operator does the following things:

1. It creates an empty object `{}`. Function is called and `this` keyword is set to point to this empty object.
2. It adds the `__proto__` property to the empty object, which links the prototype property of the constructor function to the empty object.
3. It makes the function automatically return the empty object.

```js
console.log(bishal.__proto__); // Person {}
console.log(bishal.__proto__ === Person.prototype); // true
```

- The `__proto__` property is not part of the JavaScript language. It is implemented by most browsers and is used by the browser to link objects with their prototypes.
- The `__proto__` property actually points to the prototype property of the constructor function.

## instanceof Operator

- The `instanceof` operator allows us to check whether an object is an instance of a constructor function.

```js
console.log(bishal instanceof Person); // true
```
