# Inheritance between classes and ES6 Classes

In ES6, we can implement inheritance between classes using the `extends` keyword.

- `extends` keyword is used to create a class as a child of another class
- the child class will inherit all the methods and properties of the parent class
- the child class can also add its own methods and properties
- the child class can also overwrite methods of the parent class
- super keyword is used to access the parent

Syntax:

```js
class ChildClass extends ParentClass {
  constructor() {
    super();
  }
}
```

## Prototype Chain

```js
// static method
static hey() {
  console.log("Hey there 👋");
  console.log(this);
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const bishal = new StudentCl("Bishal Karki", 1991, "Computer Science");
console.log(bishal); // StudentCl {fullName: "Bishal Karki", birthYear: 1991, course: "Computer Science"}
bishal.introduce(); // My name is Bishal Karki and I study Computer Science
bishal.calcAge(); // I'm 46 years old, but as a student I feel more like 56
```
