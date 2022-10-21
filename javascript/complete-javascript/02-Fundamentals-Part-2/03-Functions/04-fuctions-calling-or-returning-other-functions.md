# Functions calling other functions

- Functions can call other functions.
- Functions can call themselves.
- Functions can call themselves recursively.

```js
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
```

## Functions returning other functions

```js
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Bishal");
greeterHey("Jonas");

greet("Hello")("Bishal");
```

Using arrow functions

```js
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Bishal");
greeterHey("Jonas");

greet("Hello")("Bishal");
```

## Why functions returning other functions are useful

- Functions returning other functions are useful because they allow us to create **abstractions**.
- Abstractions hide details and give us the ability to think about problems at a higher or more abstract level.
- Abstractions allow us to write more **reusable** code.
- Abstractions allow us to write code that is easier to understand.

# Reviewing functions

- Functions are a way to group code together.

```

```
