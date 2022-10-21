# First Class vs Higher Order Functions

## First Class Functions

- A programming language treats functions as **first-class** citizens.
- The language treats functions as simply **values**.
- Functions are just another "type" of object.

👉 Let's store a function in a variable or property:

```js
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
    console.log(this.value);
  },
};
```

👉 We can pass a function as an argument to another function:

```js
const greet = () => console.log("Hey there!");

btnClose.addEventListener("click", greet);
```

👉 We can return a function from a function:

```js
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
```

👉 We can call methods on functions:

```js
const counter = function () {
  let value = 0;
  return {
    inc: function () {
      value++;
      console.log(value);
    },
  };
};

counter.bind(SomeOtherObject);
```

## Higher Order Functions

- A programming language treats functions as **higher-order** citizens.

👉 A function that receives another function as an argument, that is called a **higher-order function**.

```js
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Bishal");
```

In the example above, the `greet` function is a **higher-order function** because it receives another function as an argument.

- we are invoking the `greet` function and passing it the `greeting` argument.
- the `greet` function then returns a new function, which we store in the `greeterHey` variable.
- we can then call the `greeterHey` function and pass it the `name` argument.

```js
const greet = () => console.log("Hey there!");

btnClose.addEventListener("click", greet);
```

👉 A function that returns a new function, that is called a **higher-order function**.

```js
function count() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}
```

In practice, there is no first class functions, there are only higher order functions. All functions in fact are values, and we can pass them around, return them from other functions, and call methods on them.
