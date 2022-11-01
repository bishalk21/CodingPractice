# Data Structures

Data structures are collection of values, the relationship between them and the functions or the operations that can be applied to the data.

## ES2015 Classes

A class is a blueprint for creating objects with predefined properties and methods known as instances. Classes are created using the `new` keyword.

The `construction` function is a special function that gets run when the class is instantiated.

Syntax

```js
// class keyword creates a constant, so we can not redefine it.
class Student {
  // the method to create the new objects must be called constructor.
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
// we use new keyword to create the new objects
let firstStudent = new Student("Bishal", "Karki");
```

## ES5 Constructor Function

```js
function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
```

## Instance Methods

Instance methods belong to class prototype, which is inherited by all instances of class. They provide functionality that pretends to single instance of class.

They can be added to classes similar to the methods in objects.

```javascript
class Student {
  static count = 0;
  // ES6 Does'nt support static properties :(.Only Chrome console does
  constructor(firstname, lastname, year) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.grade = year;
    this.scores = [];
    Student.count++;
  }
  // instance method
  fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
  addScore(score) {
    this.scores.push(score);
  }
  averageScore() {
    let sum = this.scores.reduce((acc, val) => acc + val);
    return sum / this.scores.length;
  }
  // static method
  static enrollStudents(...students) {
    // ...rest operator
    // do something with students
    return ".....enrolling student";
  }
}

let emily = new Student("Emily", "Wolowitz");
// grade remains undefined as we don't provide it

emily.fullName();
// Emily Wolowitz

emily.addScore(92);
emily.addScore(90);
emily.scores;
// [92, 91]

emily.averageScore();
// 91

Student.enrollStudents(emily);
// .....enrolling student
```

## Class Methods

Class methods are methods that are defined on the class itself, not on the prototype. They are not inherited by instances of the class. They are often used to create utility functions for an application.

They can be added using the `static` keyword.

## class points

- Classes are not hoisted
- Classes are first-class citizens
- Classes are executed in strict mode
- Classes cannot be duplicated
- Classes cannot be called without new

```js
class Points {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Points(5, 5);
const p2 = new Points(10, 10);
Points.distance(p1, p2); // 7.0710678118654755
```

## Static Methods

Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2); // 7.0710678118654755
```

## Difference between instance and static methods

| Difference                     | Instance                                                                                   | Static                                                                                                          | Class                                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Method call                    | can be accessed using the object/instance of class                                         | can be accessed using the class name and object of the class                                                    | same as static                                                                                                 |
| Modification                   | methods can modify the behaviour of the instance variables                                 | methods perform task in isolation and did not have any interaction with the instance or class methods           | methods can modify the behaviour of the class, that reflects to entire class so with the instance of the class |
| Attribute Access               | can access the instance variables and class variables                                      | cannot access the static variables and class variables so cannot change behavior of the class or instance state | can access the class variables                                                                                 |
| Usage                          | used to perform operations on instance variables                                           | used to perform operations on class variables                                                                   | used to perform operations on class variables                                                                  |
| Syntax                         | can be accessed using the object/instance of class                                         | can be accessed using the class name and object of the class                                                    | same as static                                                                                                 |
| Class Bound and Instance Bound | methods are bound with the object of the class so that we can access them using the object | methods are bound to the class                                                                                  | same as static                                                                                                 |
