[Classes and objects](#classes-and-objects)

# Functions at Runtime

## Functions are first-class functions

- Functions can:
  - be stored in variables
  - be returned from a function
  - be passed as arguments into another function
- A function that takes other functions as arguments (and/or returns a function) is known as a _higher-order function_.
- A function that is passed as an argument into another function is called a _callback function_.

## Scope

- Functions have access to:
  - The function's arguments
  - Local variables declared within the function
  - Variables from its parent function's scope
  - Global variables
- JavaScript is **function-scoped**
  - Variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block.
  - Any variables defined inside that function are not available outside of that function, since entering a function will change scope.
  - Any variables defined inside a block (e.g. within an `if` statement) are available outside of that block.
- ES6 syntax allows for **block-scoped** variables with `let` and `const`.
  - These keywords are used to declare block-scoped variables in JavaScript.
  - They largely replace the need for `var`.
- Scope chain: JavaScript interpreter will search the value of a variable in the following order:
  - Local variables
  - Parent function's variables
  - Parent function's parent function's variables
  - Global variables

## Variable shadowing

- When a variable has the same name as another variable somewhere in the scope chain, the variable with local scope will temporarily "shawow" the variable in the outer scope.

## Closure

- Closure
  - The function itself
  - The scope chain of the code where the function is declared
- It is the process of a function retaining access to its scope.
- Formal definition: the combaination of a function and the lexical environment within which that function.
  - Lexical environment
    - The association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code.
    - I.e. the code as it is written in the JavaScript file

## Creating a closure

- Every time a function is defined, closure is created for that function.
- Every function has closure.
- Functions close over at least one other context along the scope chain: the global scope.
- Recall that a nested function has access to variables outside of it. These nested functions close over (i.e. capture) variables that aren't passed in as arguments nor defined locally.

```js
function remember(number) {
  // the returned function retains the
  // scope chain of its parent function
  return function () {
    return number;
  };
}
const returnedFunction = remember(5);
console.log(returnedFunction());
// 5
```

## Garbage collection

- JavaScript manages memory with automatic garbage collection.
- If the nested function captures and uses its parent's variables (or variables along the scope chain), those variables will stay in memory as long as the functions that utilize them can still be referenced.

## Function declarations vs. expressions

- Function declaration
  - Defines a function
  - Does _not_ require a variable to be assigned to it
  - Does _not_ return a value

```js
function returnHello() {
  return "Hello!";
}
```

- Function expression
  - Does return a value
  - Can be anonymous or named
  - Part of another expression's syntax
  - Commonly assigned to variables

```js
// anonymous
const myFunction = function () {
  return "Hello!";
};

// named
const myFunction = function returnHello() {
  return "Hello!";
};
```

## Immediately-invoked function expressions (IIFE)

- A function that is called immediately after it is defined.

```js
(function [name](parameters){
  // function body
})(arguments);

(function [name](parameters){
  // function body
}(arguments));

// anonymous
(function() {
  alert('Hi!');
})();

// named
(function sayHi() {
  alert('Hi!');
})();
```

## Private scope

- One of the primary uses for IIFE is to create private scope (i.e., private state).

```js
// immediately-invoked function expression
const myFunction = (function () {
  // variable available for the returned function
  const hi = "Hi!";
  return function () {
    console.log(hi);
  };
})();
```

- The returned anonymous function closes over (i.e. captures) the `hi` variable. This allows `myFunction` to maintain a private, mutable state that cannot be accessed outside the function.
- Because the function expressed is called immediately, the IIFE wraps up the code nicely so that it won't pollute the global scope.
- IIFE is best for one-time task without polluting the global environment with extra variables.

## IIFE example

- Create a button that alerts the user on every other click.
- One way is to keep track of the number of clicks of the button with a global variable.
- The better way is to enclose the data in the event handler itself.

```html
<!-- button.html -->
<html>
  <body>
    <button id="button">Click me!</button>
    <script src="button.js"></script>
  </body>
</html>
```

```js
// button.js
const button = document.getElementById("button");

// the function creates a closure to protect the count
// variable from being accesses externally
button.addEventListener(
  "click",
  (function () {
    let count = 0;
    // the returned function closes on the count variable
    return function () {
      count += 1;
      if (count === 2) {
        alert("This alert appears every other press!");
        count = 0;
      }
    };
  })()
);
```

- The first function creates a closure to
  - Define the `count` variable
  - Protect the variable from being accesses externally
- The second returned anonymous function creates a closure to
  - Access and modify the `count` variable

# Classes and objects

## Constructor function

- Persist data with the `this` keyword.
- No explicit return value.
- Can have parameters.

```js
function SoftwareDeveloper(name) {
  this.favoriteLanguage = "JavaScript";
  this.name = name;
}
```

## Creating a new object

- Use the `new` operator.

```js
let developer = new SoftwareDeveloper("David");
```

- When the `new` operator is not used, no object is created.
  - The function is invoked like a regular function.
  - Since there is no return value, the variable will be assigned to `undefined`.

## The `instanceof` operator

- This operator confirms whether an object is created by a specific constructor function.
- This operator actually tests whether the constructor appears in the prototype chain of an object.

```js
object instanceof ClassName;
// return a boolean

typeof object;
// "object"
```

## `this` in objects

- A value for `this` is set when a method is invoked on an object, and that value refers to that object.
- Four ways to call functions
  - Calling a constructor function with the `new` keyword sets `this` to a newly-created object.
  - Calling a method sets `this` to the object that owns the method.
  - Calling a function on its own (i.e. invoking a regular function) sets `this` to `window`.
  - Calling a function with `call` or `apply` allow customization of `this`.

## `call()`

- Set `this` to custom objects.

```js
// this variable is set to thisObject in the invocation
function.call(thisObject, arguments)
```

- Invoke functions attached to objects (i.e. methods).

```js
const mockingbird = {
  title: "To Kill a Mockingbird",
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  },
};

const pride = {
  title: "Pride and Prejudice",
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'
```

## `apply()`

- Pass in arguments in an array.
- Useful when the number of arguments is unknown.

```js
function.apply(thisObject, [arguments])
```

## `bind()`

- When methods are passed in as a callback, `this` reference may be lost.

```js
function invokeTwice(cb) {
  cb();
  cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  },
};

// growOneYear is passed in as a function, so
// this inside growOneYear is set to windows,
// and the age is not updated
invokeTwice(dog.growOneYear);

dog.age;
// 5
```

- Use anonymous closure to close over the `dog` object.

```js
invokeTwice(function () {
  // growOneYear is directly call onto the dog object
  dog.growOneYear();
});

dog.age;
// 7
```

- `bind()` method provides an less verbose alternative approach.
- It is called onto a function and returns a copy of that function with a specified this value.

```js
const growOneYearMethod = dog.growOneYear.bind(dog);
invokeTwice(growOneYearMethod);
dog.age;
// 7
```

## `prototype`

- Each function has a `prototype` property. `prototype` is an object.
- An object created by the `new` operator of a constructor function is linked to its constructor's `prototype`.
- This link allows the object to access the `prototype`'s properties and methods as if it were its own.
- Whether accessing a property or invoking a method, the JavaScript interpreter looks for them along the prototype chain in this order:
  - The object's own properties.
  - The object's constructor's `prototype`.
  - At the very end of the chain is the `Object()` object, or the top-level parent.
  - If the property still cannot be found, the property is `undefined`.
- By adding methods to the `prototype`, memory is saved as more objects are instantiated.

```js
function Dalmatian(name) {
  this.name = name;
}

// register a method on the prototype
Dalmatian.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};
```

- When new methods are added to `prototype`, existing objects can access the new methods as well.
- When `proprotype` is replaced, objects created before the replacement are still linked to the old `prototype`. Objects created after the replacement are linked to the new `prototype`.

```js
function Cat() {
  this.color = "white";
}

let cat1 = new Cat();
cat1.color;
// white
cat1.meow();
// exception

Cat.prototype = {
  isHungry: false,
  meow: function () {
    return "Meow!";
  },
};
// new properties and methods are not available
// for existing objects
cat1.isHungry;
// undefined
cat1.meow();
// exception

let cat2 = new Cat();
cat2.color;
// white
cat2.meow();
// Meow!
cat2.isHungry;
// false
```

## Relevant Methods

- `hasOwnProperty()`
  - `hasOwnProperty()` allows user to find the origin of a particular property.
  - This method takes in a string of the property name, and returns a boolean indicating whether or not the property belongs to the object itself (i.e. that property was not inherited).
- `isPrototypeOf()`
- This method checks whether or not an object exists in another object's `prototype` chain.
- It can be used to confirm if a particular object serves as the prototype of another object.
- `Object.getPrototypeOf()`
- This method retrieves the prototype of a given object.
- `constructor`
  - A property that returns a reference to the constructor function that creates the object.
  - Objects created with literal notation are constructed with the `Object()` constructor function.

## `__proto__`

- An object is secretly linked to its constructor function's `prototype` object through that instance's `__proto__` property.

```js
object.__proto__ === object.constructor.prototype;
// true
```

- It is highly discouraged to reassign the `__proto__` property, or even use it in any written code.
  - There are compatibility issues across browsers.
  - Since the JavaScript engine searches and accesses properties along the prototype chain, mutating an object's prototype can lead to performance issues.

## Inheritance

- Inheritance in JavaScript is all about setting up the `prototype` chain.
  - Users should not use `__proto__` to manage inheritance.
  - Users should not inherit only the prototype, because this doesn't set up the prototype chain, and any changes made to a child object will also be reflected in a parent object.

```js
// inappropriate
Child.prototype = Parent.prototype;
```

- Use `Object.create()` to manage inheritance without altering the prototype.
- This method takes in a single object as an argument, and returns a new object with its `__proto__` property set to the argument passed into it.
- Objects created with this method extend from the passed in argument.

```js
const mammal = {
  vertebrate: true,
  earBones: 3,
};
// rabbit extends mammal
const rabbit = Object.create(mammal);
console.log(rabbit.__proto__ === mammal);
// true
```

- Create inheritance

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(`${this.name} walks!`);
};

function Cat(name) {
  // call super constructor; use call
  // instead of new operator so that
  // no Animal object is created
  Animal.call(this, name);
  this.lives = 9;
}

Cat.prototype.constructor === Cat;
// true

// link Cat.prototype.__proto__ to Animal.prototype
Cat.prototype = Object.create(Animal.prototype);

// now Cat prototype's constructor is set to Animal
// https://stackoverflow.com/a/20830553
Cat.prototype.constructor;
// Animal

// so its constructor needs to be changed back
Cat.prototype.constructor = Cat;

// add a method only shared by Cat objects
Cat.prototype.meow = function () {
  console.log("Meow!");
};

const bambi = new Cat("Bambi");
bambi.meow();
bambi.walk();
bambi.name;
```
