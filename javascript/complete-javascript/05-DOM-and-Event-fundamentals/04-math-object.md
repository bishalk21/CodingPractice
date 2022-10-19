# Math Object

The Math object is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.

## Properties

| Property       | Description                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| `Math.E`       | Euler's constant and the base of natural logarithms, approximately 2.718.           |
| `Math.LN2`     | Natural logarithm of 2, approximately 0.693.                                        |
| `Math.LN10`    | Natural logarithm of 10, approximately 2.303.                                       |
| `Math.LOG2E`   | Base 2 logarithm of E, approximately 1.443.                                         |
| `Math.LOG10E`  | Base 10 logarithm of E, approximately 0.434.                                        |
| `Math.PI`      | Ratio of the circumference of a circle to its diameter, approximately 3.14159.      |
| `Math.SQRT1_2` | Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707. |
| `Math.SQRT2`   | Square root of 2, approximately 1.414.                                              |

## Methods

| Method                      | Description                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Math.abs(x)`               | Returns the absolute value of a number.                                                                |
| `Math.acos(x)`              | Returns the inverse cosine or arccosine of a number in radians.                                        |
| `Math.acosh(x)`             | Returns the inverse hyperbolic cosine of a number.                                                     |
| `Math.asin(x)`              | Returns the inverse sine or arcsine of a number in radians.                                            |
| `Math.asinh(x)`             | Returns the inverse hyperbolic sine of a number.                                                       |
| `Math.atan(x)`              | Returns the inverse tangent or arctangent of a number in radians.                                      |
| `Math.atanh(x)`             | Returns the inverse hyperbolic tangent of a number.                                                    |
| `Math.atan2(y, x)`          | Returns the angle in radians between the positive x-axis and the ray to the point (x, y) in the plane. |
| `Math.cbrt(x)`              | Returns the cube root of a number.                                                                     |
| `Math.ceil(x)`              | Returns the smallest integer greater than or equal to a number.                                        |
| `Math.clz32(x)`             | Returns the number of leading zero bits in the 32-bit binary representation of a number.               |
| `Math.cos(x)`               | Returns the cosine of a number in radians.                                                             |
| `Math.cosh(x)`              | Returns the hyperbolic cosine of a number.                                                             |
| `Math.exp(x)`               | Returns the value of Ex.                                                                               |
| `Math.expm1(x)`             | Returns Ex - 1.                                                                                        |
| `Math.floor(x)`             | Returns the largest integer less than or equal to a number.                                            |
| `Math.fround(x)`            | Returns the nearest single precision float representation of a number.                                 |
| `Math.hypot([x[, y[, …]]])` | Returns the square root of the sum of squares of its arguments.                                        |
| `Math.imul(x, y)`           | Returns the result of the 32-bit multiplication of two numbers.                                        |
| `Math.log(x)`               | Returns the natural logarithm of a number.                                                             |
| `Math.log1p(x)`             | Returns the natural logarithm of 1 + x.                                                                |
| `Math.log10(x)`             | Returns the base 10 logarithm of a number.                                                             |
| `Math.log2(x)`              | Returns the base 2 logarithm of a number.                                                              |
| `Math.max([x[, y[, …]]])`   | Returns the largest of zero or more numbers.                                                           |
| `Math.min([x[, y[, …]]])`   | Returns the smallest of zero or more numbers.                                                          |
| `Math.pow(x, y)`            | Returns the base to the exponent power, that is, baseexponent.                                         |
| `Math.random()`             | Returns a pseudo-random number between 0 and 1.                                                        |
| `Math.round(x)`             | Returns the value of a number rounded to the nearest integer.                                          |
| `Math.sign(x)`              | Returns the sign of the x, indicating whether x is positive, negative or zero.                         |
| `Math.sin(x)`               | Returns the sine of a number in radians.                                                               |
| `Math.sinh(x)`              | Returns the hyperbolic sine of a number.                                                               |
| `Math.sqrt(x)`              | Returns the square root of a number.                                                                   |
| `Math.tan(x)`               | Returns the tangent of a number in radians.                                                            |
| `Math.tanh(x)`              | Returns the hyperbolic tangent of a number.                                                            |
| `Math.trunc(x)`             | Returns the integer part of a number by removing any fractional digits.                                |

## Examples

```js
Math.abs(-5); // 5
Math.abs(5); // 5
Math.abs(5.5); // 5.5
Math.abs(-5.5); // 5.5

Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(-1); // 3.141592653589793
Math.acos(2); // NaN

Math.random(); // 0.1234567890123456
Math.random() * 10; // 1.2345678901234567
Math.floor(Math.random() * 10); // 1
Math.floor(Math.random() * 10) + 1; // 2

Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(20.51); // 21

Math.ceil(20.49); // 21
Math.ceil(20.5); // 21
Math.ceil(20.51); // 21

Math.floor(20.49); // 20
Math.floor(20.5); // 20
Math.floor(20.51); // 20

Math.max(1, 2, 3, 4, 5); // 5
Math.max(1, 2, 3, 4, 5, -1); // 5
Math.max(1, 2, 3, 4, 5, -1, -2); // 5

Math.min(1, 2, 3, 4, 5); // 1
Math.min(1, 2, 3, 4, 5, -1); // -1
Math.min(1, 2, 3, 4, 5, -1, -2); // -2

Math.pow(2, 3); // 8
Math.pow(2, 4); // 16
Math.pow(2, 5); // 32

Math.sqrt(4); // 2
Math.sqrt(9); // 3
Math.sqrt(16); // 4

Math.trunc(20.49); // 20
Math.trunc(20.5); // 20
Math.trunc(20.51); // 20

Math.trunc(-20.49); // -20
Math.trunc(-20.5); // -20
Math.trunc(-20.51); // -20

Math.trunc(-0.123); // -0
Math.trunc(0.123); // 0
```
