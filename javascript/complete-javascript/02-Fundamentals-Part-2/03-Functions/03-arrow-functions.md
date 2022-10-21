# Arrow Functions

- Arrow functions are a new way to write functions in JavaScript.
- they are a shorter syntax for writing function expressions.

- The full name is arrow function expressions, because arrow functions are always expressions.
- Valid cases
  - Stored in a variable,
  - Passed as an argument to a function,
  - Stored in an object's property.
- Parameters
  - When there is only one parameter, the parentheses can be omitted.
  - When there is zero or multiple parameters, the parentheses cannot be omitted.
- Function body
  - Concise body syntax: when there is only a single expression, curly braces, `return`, and semi-colons can all be omitted.
  - Block body syntax: when there is more than a single expression.

```js
const fn0 = () => result;
const fn1 = (_) => result;
const fn2 = (singleParam) => result;
const fn3 = (param1, param2) => result;
const fn4 = (param1, param2) => {
  return result;
};
```

- When not to use arrow functions
  - Arrow functions are only expressions. There is no arrow function declaration.
  - There is a gotcha with the `this` keyword in arrow functions.

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

### `this` and arrow functions

- `this` is based on the function's surrounding context.
- The value of `this` inside an arrow function is the same as the value of `this` outside the function.

## Default function parameters

```js
const fn1 = function (param1 = "defaultValue1", param2 = "defaultValue2") {};
```
