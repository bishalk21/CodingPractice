# Inheritance between classes and Object.create()

Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

```js
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const bishal = Object.create(StudentProto);
bishal.init("Bishal", 1991, "Computer Science");
console.log(bishal); // Student {firstName: "Bishal", birthYear: 1991, course: "Computer Science"}
bishal.introduce(); // My name is Bishal and I study Computer Science

const bishal = Object.create(PersonProto);

const steven = Object.create(PersonProto);

steven.name = "Steven"; // steven is an instance of PersonProto
steven.birthYear = 2002;
steven.calcAge(); // 35

console.log(steven.__proto__); // {calcAge: ƒ, init: ƒ}
console.log(steven.__proto__ === PersonProto); // true

console.log(PersonProto.isPrototypeOf(steven)); // true
console.log(PersonProto.isPrototypeOf(bishal)); // true

console.log(steven.hasOwnProperty("firstName")); // false

console.log(steven.hasOwnProperty("name")); // true
```

## Prototype Chain

## Person Class

Construction Function [Person()] ----------(.prototype)----------> Prototype Object (Person.prototype) ----------(.**proto**)----------> Object.prototype

## Student Class

Construction Function [Student()] ----------(.prototype)----------> Prototype Object (Student.prototype) ----------(.**proto**)----------> Object.prototype

Using Object.create() to link prototypes

```js
Student.prototype = Object.create(Person.prototype);
```

## Prototype Chain between Person and Student

Construction Function [Student()] ----------(.prototype)----------> Prototype Object (Student.prototype) ----------(.**proto**)----------> Person.prototype ----------(.**proto**)----------> Object.prototype
