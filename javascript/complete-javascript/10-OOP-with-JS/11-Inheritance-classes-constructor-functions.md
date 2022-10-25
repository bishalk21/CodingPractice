# Inheritance between classes and Constructor Functions

Inheritance between classes and constructor functions is very similar to inheritance between classes and ES6 classes.

- we can use call method to set the `this` keyword to the parent class
- we can use the `prototype` property of the constructor function to add methods and properties to the child class

Syntax:

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const bishal = new Student("Bishal", 1991, "Computer Science");
console.log(bishal); // Student {firstName: "Bishal", birthYear: 1991, course: "Computer Science"}
bishal.introduce(); // My name is Bishal and I study Computer Science
```

## Prototype Chain

## Student Class

Construction Function [Student()] ----------(.prototype)----------> Prototype Object (Student.prototype) ----------(.**proto**)----------> Object.prototype

New Object [mike] --------(.**proto**)--------> Prototype Object (Student.prototype) --------(.**proto**)--------> Object.prototype

## Person Class

Construction Function [Person()] ----------(.prototype)----------> Prototype Object (Person.prototype) ----------(.**proto**)----------> Object.prototype

Student.prototype --------(.**proto**)--------> Person.prototype --------(.**proto**)--------> Object.prototype --------(.**proto**)--------> null

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike); // Student {firstName: "Mike", birthYear: 2020, course: "Computer Science"}
mike.introduce(); // My name is Mike and I study Computer Science

console.log(mike.__proto__); // Student {}
console.log(mike.__proto__ === Student.prototype); // true

console.log(mike.__proto__.__proto__); // Person {}
console.log(mike.__proto__.__proto__ === Person.prototype); // true

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)
```
