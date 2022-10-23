# Numbers

Numbers are a data type in JavaScript that represent numeric data.

All numbers in JavaScript are stored as 64-bit floating point numbers. This means that numbers can be written with or without decimals. For example:

All numbers are represented internally in JavaScript as 64-bit base-2 format. This means that numbers are always stored in binary format and basically come down to 1s and 0s. This is why you can see some weird numbers when you try to convert a decimal number to binary.

In binary forms, it is very hard to represent fractions accurately. This is why you will see some weird numbers when you try to convert a decimal number to binary.

Base 10 - 0 to 9

Base 2 - 0 to 1

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

```js
let num = 10;
let num2 = 10.5;

console.log(num); // 10
console.log(num2); // 10.5
console.log(10 === 10.0); // true
```

## Converting Strings to Numbers

| Method         | Description                                          |
| -------------- | ---------------------------------------------------- |
| `Number()`     | Converts a value to a number.                        |
| `parseInt()`   | Parses a string and returns an integer.              |
| `parseFloat()` | Parses a string and returns a floating point number. |

### Number()

| Value        | Result |
| ------------ | ------ |
| `undefined`  | `NaN`  |
| `null`       | `0`    |
| `true`       | `1`    |
| `false`      | `0`    |
| `string`     |        |
| `empty str`  | `0`    |
| `whitespace` | `NaN`  |
| `object`     | `NaN`  |
| `array`      | `NaN`  |
| `function`   | `NaN`  |

The `Number()` function will convert a string to a number if the string contains a number. If the string does not contain a number, it will return `NaN`.

```js
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(Number(inputYear) + 18); // 2009
```

The `Number()` function will convert a boolean to a number. `true` will be converted to `1` and `false` will be converted to `0`.

```js
// Boolean to Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("true")); // NaN
```

```js
console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number
```

The `Number()` function will convert an empty string to `0`.

```js
console.log(Number("")); // 0
```

The `Number()` function will convert `null` to `0`.

```js
console.log(Number(null)); // 0
```

The `Number()` function will convert `undefined` to `NaN`.

```js
console.log(Number(undefined)); // NaN
```

The `Number()` function will convert an empty array to `0`.

```js
console.log(Number([])); // 0
```

The `Number()` function will convert an array with a number to a number.

```js
console.log(Number(["10", "20"])); // NaN

console.log(Number(["10"])); // 10
```

The `Number()` function will convert an object to `NaN`.

```js
console.log(Number({})); // NaN

console.log(Number({ name: "Jonas" })); // NaN
```

The `Number()` function will convert a function to `NaN`.

```js
console.log(Number(function () {})); // NaN
```

### parseInt()

| Value        | Result |
| ------------ | ------ |
| `undefined`  | `NaN`  |
| `null`       | `NaN`  |
| `true`       | `NaN`  |
| `false`      | `NaN`  |
| `string`     |        |
| `empty str`  | `NaN`  |
| `whitespace` | `NaN`  |
| `object`     | `NaN`  |
| `array`      | `NaN`  |
| `function`   | `NaN`  |

The `parseInt()` function will convert a string to a number if the string contains a number. If the string does not contain a number, it will return `NaN`.

```js
console.log(parseInt("30px", 10)); // 30
console.log(parseInt("30px")); // 30
console.log(parseInt("30px", 2)); // NaN
console.log(parseInt("e23", 10)); // NaN

console.log(parseInt("2.5rem")); // 2
```

`radix` is the base of the number in the string. The radix can be an integer between 2 and 36.

```js
console.log(parseInt("10011", 2)); // 19
console.log(parseInt("10011", 3)); // 111

console.log(parseInt("10011", 10)); // 10011
```

### parseFloat()

| Value        | Result |
| ------------ | ------ |
| `undefined`  | `NaN`  |
| `null`       | `NaN`  |
| `true`       | `NaN`  |
| `false`      | `NaN`  |
| `string`     |        |
| `empty str`  | `NaN`  |
| `whitespace` | `NaN`  |
| `object`     | `NaN`  |
| `array`      | `NaN`  |
| `function`   | `NaN`  |

The `parseFloat()` function will convert a string to a number if the string contains a number. If the string does not contain a number, it will return `NaN`.

parseFloat() will return a floating point number. This means that it will return a number with decimals.

```js
console.log(parseFloat("2.5rem")); // 2.5
console.log(parseFloat("e23")); // NaN
```

### isNaN()

The `isNaN()` function will return `true` if the value is `NaN`. Otherwise, it will return `false`.

`isNan()` is basically used to check if a value is `NaN`.

```js
console.log(isNaN("10")); // false
console.log(isNaN("10px")); // true
console.log(isNaN(10)); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN("")); // false
console.log(isNaN(" ")); // false
console.log(isNaN([])); // false
console.log(isNaN({})); // true
console.log(isNaN(function () {})); // true
console.log(isNaN("10", 10)); // false
console.log(isNaN(+10)); // false
console.log(isNaN(+"10x")); // true
console.log(isNaN(23 / 0)); // false
```

### isFinite()

The `isFinite()` function will return `true` if the value is a finite number. Otherwise, it will return `false`.

`isFinite()` is basically used to check if a value is a finite number. A finite number is a number that is not `Infinity` or `NaN`.

```js
console.log(isFinite("10")); // true
console.log(isFinite("10px")); // false
console.log(isFinite(10)); // true
console.log(isFinite(true)); // false
console.log(isFinite(false)); // false
console.log(isFinite(null)); // false
console.log(isFinite(undefined)); // false
console.log(isFinite("")); // false
console.log(isFinite(" ")); // false
console.log(isFinite([])); // false
console.log(isFinite({})); // false
console.log(isFinite(function () {})); // false
console.log(isFinite("10", 10)); // true
console.log(isFinite(+10)); // true
console.log(isFinite(+"10x")); // false
console.log(isFinite(23 / 0)); // false
```

### isInteger()

The `isInteger()` function will return `true` if the value is an integer. Otherwise, it will return `false`.

`isInteger()` is basically used to check if a value is an integer.

```js
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23.5)); // false
console.log(Number.isInteger("23")); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(false)); // false
```
