# Intro to Data Types

- Data types are the classifications we give to the different kinds of data that we use in programming.
- JavaScript stores data type of values in variables.

- Primitive types

What is a type?

ways of organizing data that has similar values.

you know what you need to do when you have an array

**primitive types: not an object, has no methods, cannot be mutated**

- `undefined`: a variable that has not been assigned a value is of type undefined or has not been declared
- `null`: no value (empty value)
- String : a sequence of characters used to represent text
- Boolean
- BigInt
- Symbol
- Number
- `null`
  - Data type
  - Value of nothing
- `undefined`
  - Data type
  - Absence of value, meaning nothing is assigned to a variable.
- `NaN`
  - Number type
  - Not a number
  - 'Hello' % 10 => `NaN`
    - Type coercion converts `Hello` to number, `NaN`
- Implicit type coercion

  - `"3"` can be converted by `3` implicitly

- Strict equality
  - `===` and `!==`
  - Check both type and value without type conversion

Data Types :point_up: everything above but inverted.. an object

**`Everything in JS is NOT an object`**

Objects aren't primitive

Primitives: string, number, bigint, boolean, null, undefined, and symbol

null returning an object is a bug waaaay back when. Now it's typeof is an object even when it's not

```js
let obj = { a: **1 **}

function *addTwo*(obj) {

*obj.*a = 2

}

*addTwo*(obj)

// *obj is now {a: 2}*

let num = 1

function addTwo(num) {
  num = num + 2
  console.log(num)
}

addTwo(num)

// console.log(num)
```

num won't be mutated where obj will because the former is a primitive. The reference is passed to the function

There is an idea of a 'Wrapper Object' that is a container for a primitive type.

A string gets wrapped into an object when it's referenced

Auto-boxing is where the misconception that everything is an object

Use literals where you can. JavaScript is smart with performance and gives you what you need

---
