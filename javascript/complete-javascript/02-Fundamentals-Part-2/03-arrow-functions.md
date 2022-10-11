# Arrow Functions

- Arrow functions are a new way to write functions in JavaScript.
- they are a shorter syntax for writing function expressions.

## Arrow Function Syntax

- Arrow functions are always anonymous.
- Arrow functions do not have their own `this` value.
- Arrow functions do not have their own `arguments` object.
- Arrow functions cannot be used as constructors and will throw an error when used with `new`.
- Arrow functions do not have a `prototype` property.

```js
// anonymous function expression
const square = function (number) {
  return number * number;
};
```
