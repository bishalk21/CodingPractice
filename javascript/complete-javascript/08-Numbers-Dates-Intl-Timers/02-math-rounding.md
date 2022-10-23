# Math and Rounding

## Math Object

The Math object has properties and methods for mathematical constants and functions. Not a function object.

| Property                    | Value                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------- |
| `Math.PI`                   | 3.141592653589793                                                                       |
| `Math.E`                    | 2.718281828459045                                                                       |
| `Math.LN2`                  | 0.6931471805599453                                                                      |
| `Math.LN10`                 | 2.302585092994046                                                                       |
| `Math.LOG2E`                | 1.4426950408889634                                                                      |
| `Math.LOG10E`               | 0.4342944819032518                                                                      |
| `Math.SQRT1_2`              | 0.7071067811865476                                                                      |
| `Math.SQRT2`                | 1.4142135623730951                                                                      |
| `Math.abs(x)`               | Returns the absolute value of x                                                         |
| `Math.acos(x)`              | Returns the arccosine of x, in radians                                                  |
| `Math.acosh(x)`             | Returns the hyperbolic arccosine of x                                                   |
| `Math.asin(x)`              | Returns the arcsine of x, in radians                                                    |
| `Math.asinh(x)`             | Returns the hyperbolic arcsine of x                                                     |
| `Math.atan(x)`              | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians           |
| `Math.atan2(y, x)`          | Returns the arctangent of the quotient of its arguments                                 |
| `Math.atanh(x)`             | Returns the hyperbolic arctangent of x                                                  |
| `Math.cbrt(x)`              | Returns the cube root of x                                                              |
| `Math.ceil(x)`              | Returns x, rounded upwards to the nearest integer                                       |
| `Math.clz32(x)`             | Returns the number of leading zero bits in the 32-bit binary representation of a number |
| `Math.cos(x)`               | Returns the cosine of x (x is in radians)                                               |
| `Math.cosh(x)`              | Returns the hyperbolic cosine of x                                                      |
| `Math.exp(x)`               | Returns Ex                                                                              |
| `Math.expm1(x)`             | Returns ex - 1                                                                          |
| `Math.floor(x)`             | Returns x, rounded downwards to the nearest integer                                     |
| `Math.fround(x)`            | Returns the nearest single precision float representation of a number                   |
| `Math.hypot([x[, y[, …]]])` | Returns the square root of the sum of squares of its arguments                          |
| `Math.imul(x, y)`           | Returns the result of the 32-bit multiplication of two numbers                          |
| `Math.log(x)`               | Returns the natural logarithm (base E) of x                                             |
| `Math.log1p(x)`             | Returns the natural logarithm (base E) of 1 + x                                         |
| `Math.log10(x)`             | Returns the base 10 logarithm of x                                                      |
| `Math.log2(x)`              | Returns the base 2 logarithm of x                                                       |
| `Math.max([x[, y[, …]]])`   | Returns the number with the highest value                                               |
| `Math.min([x[, y[, …]]])`   | Returns the number with the lowest value                                                |
| `Math.pow(x, y)`            | Returns the value of x to the power of y                                                |
| `Math.random()`             | Returns a random number between 0 and 1                                                 |
| `Math.round(x)`             | Returns the value of x rounded to its nearest integer                                   |
| `Math.sign(x)`              | Returns the sign of the x, indicating whether x is positive, negative or zero           |
| `Math.sin(x)`               | Returns the sine of x (x is in radians)                                                 |
| `Math.sinh(x)`              | Returns the hyperbolic sine of a number                                                 |
| `Math.sqrt(x)`              | Returns the square root of x                                                            |
| `Math.tan(x)`               | Returns the tangent of an angle                                                         |
| `Math.tanh(x)`              | Returns the hyperbolic tangent of a number                                              |
| `Math.toSource()`           | Returns the string "Math"                                                               |
| `Math.trunc(x)`             | Returns the integer part of a number by removing any fractional digits                  |

```js
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(9)); // 3
console.log(Math.pow(2, 3)); // 8
console.log(Math.abs(-5, 5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.49)); // 4
console.log(Math.round(4.51)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // 0.123456789
console.log(Math.random(1, 10)); // 0.123456789

console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793

console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23
console.log(Math.trunc(-23.3)); // -23

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
console.log(Math.floor(-23.3)); // -24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
console.log(Math.ceil(-23.3)); // -23

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20)); // 15

console.log(Math.trunc(Math.random() * 6) + 1); // 1

console.log((2.345).toFixed(2)); // 2.35
console.log((2.345).toFixed(3)); // 2.345
console.log((2).toFixed(2)); // 2.00
console.log(+(2.345).toFixed(2)); // 2.35

console.log(+(2.345).toPrecision(2)); // 2.3
console.log(+(2.345).toPrecision(3)); // 2.35
```

### Which Math function to use?

| Function  | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| `ceil`    | Rounds up to the nearest integer ------------------------> `(2.6 --> 3)`                          |
| `floor`   | Rounds down to the nearest integer ----------------------> `(2.6 --> 2)`                          |
| `round`   | Rounds to the nearest integer ---------------------------> `(2.6 --> 3)` `(2.4 --> 2)`            |
| `trunc`   | Removes the decimal part --------------------------------> `(2.6 --> 2)` `(-2.6 --> -2)`          |
| `toFixed` | Returns a string with a fixed number of decimals --------> `(2.6(3) --> 2.600)` `(2(2) --> 2.00)` |
| `max`     | Returns the highest value -------------------------------> `(2, 3, 4, 5, 6 --> 6)`                |
| `min`     | Returns the lowest value --------------------------------> `(2, 3, 4, 5, 6 --> 2)`                |
| `random`  | Returns a random number between 0 and 1 -----------------> `(0.123456789)`                        |
| `abs`     | Returns the absolute value ------------------------------> `(-5 --> 5)`                           |
| `pow`     | Returns the value of x to the power of y ----------------> `(2, 3 --> 8)`                         |
| `sqrt`    | Returns the square root of x ----------------------------> `(9 --> 3)`                            |
| `PI`      | Returns the value of PI ---------------------------------> `(3.141592653589793)`                  |
