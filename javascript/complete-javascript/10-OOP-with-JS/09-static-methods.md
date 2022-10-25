# Static Methods

## Static Methods

Static methods are methods that are attached to the constructor function itself, rather than to the prototype. They are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.

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

// Static method
Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};

Person.hey(); // Hey there 👋
// Person {hey: ƒ}
```
