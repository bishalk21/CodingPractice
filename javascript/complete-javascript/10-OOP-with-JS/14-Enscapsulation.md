# Encapsulation

Encapsulation is the process of hiding the implementation details of a class from the outside world. It is one of the fundamental concepts of object-oriented programming.

## Protected Properties and Methods

- Protected properties and methods are those properties and methods that should not be accessible outside of the class but should be accessible by child classes.

- In JS, there is no way to create protected properties and methods. However, there is a convention to create protected properties and methods by prefixing them with an underscore `_`.

- This is just a convention and not a feature of the language. It is up to the developer to follow this convention.

- This convention is followed by many popular JS libraries like jQuery, Lodash, etc.

- This convention is also followed by many popular JS frameworks like Angular, React, Vue, etc.

- This convention is also followed by many popular JS libraries like Three.js, etc.

Syntax:

```js
class Account {
  // Public field (instance)
  locale = navigator.language;

  // Protected field (instance)
  _movements = [];

  // Private field (instance)
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public method (instance)
  getMovements() {
    return this._movements;
  }

  // Protected method (instance)
  _deposit(val) {
    this._movements.push(val);
  }

  // Private method (instance)
  #approveLoan(val) {
    return true;
  }
}
```

## Private Class Fields and Methods

- Private class fields and methods are those properties and methods that should not be accessible outside of the class.

- In JS, there is no way to create private class fields and methods. However, there is a proposal to create private class fields and methods by prefixing them with a hash `#`.

- This is just a proposal and not a feature of the language. It is up to the browser vendors to implement this proposal.

- This proposal is implemented in Chrome 80 and above.

- This proposal is implemented in Firefox 79 and above.

Syntax:

```js
class Account {
  // Public field (instance)
  locale = navigator.language;

  // Protected field (instance)
  _movements = [];

  // Private field (instance)
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public method (instance)
  getMovements() {
    return this._movements;
  }

  // Protected method (instance)
  _deposit(val) {
    this._movements.push(val);
  }

  // Private method (instance)
  #approveLoan(val) {
    return true;
  }
}
```

## Encapsulation in Practice

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

// Prototypes
console.log(Person.prototype); // Person {}

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
```
