# ES6 Classes

ES6 classes are a new feature in JavaScript introduced in ES6. They are a modern alternative to constructor functions and prototype-based inheritance.

- modern alternative to constructor functions syntax
- syntactic sugar over constructor functions: behind the scenes, it still uses constructor functions
- ES6 classes do not behave like classes in other programming languages like Java or C++ ot classical OOP languages

## Class Expression

Expression produces a value. It is a unit of code that results in a value.

```js
// Class expression
const PersonCl = class {};
```

## Class Declarations

Declaration basically means "a statement that declares something". It is a unit of code that does not produce a value.

```js
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // methods will be added to .prototype property of the constructor function "Person"
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const bishal = new Person("Bishal", 1991);
console.log(bishal); // Person {firstName: "Bishal", birthYear: 1991}

console.log(bishal instanceof Person); // true

bishal.calcAge(); // 46

console.log(bishal.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(bishal)); // true

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

bishal.greet(); // Hey Bishal
```

### Important Points

- Classes are NOT hoisted
- Classes are first-class citizens
- Classes are executed in strict mode
