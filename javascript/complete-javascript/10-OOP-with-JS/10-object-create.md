# Object.create

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

const bishal = Object.create(PersonProto);
console.log(bishal); // {}

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
