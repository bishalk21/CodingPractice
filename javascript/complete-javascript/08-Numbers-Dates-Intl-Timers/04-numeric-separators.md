# Numeric Separators

Numeric separators are a new feature in JavaScript that allows us to separate numbers with underscores to make them more readable.

```js
const num = 1_000_000;
console.log(num); // 1000000
```

## Numeric separators with decimals

```js
const num = 1_000_000.23_45;
console.log(num); // 1000000.2345
```

## Numeric separators with binary, octal, and hexadecimal numbers

```js
const num = 0b10_01_01;
console.log(num); // 37
```

```js
const num = 0o10_01_01;
console.log(num); // 513
```

```js
const num = 0x10_01_01;
console.log(num); // 1048833
```

## Numeric separators with BigInt

```js
const num = 1_000_000n;
console.log(num); // 1000000n
```

## Numeric separators with strings

```js
console.log(Number("1_000_000")); // 1000000

const num = 1_000_000;
console.log(num.toString()); // 1000000
```

## Numeric separators with functions

```js
const num = 1_000_000;
console.log(num.toExponential()); // 1e+6
```

```js
const num = 1_000_000;
console.log(num.toFixed()); // 1000000
```

```js
const num = 1_000_000;
console.log(num.toPrecision()); // 1000000
```

## Numeric separators with dates

```js
const date = new Date(2020, 0, 1, 0, 0, 0, 0);
console.log(date); // 2020-01-01T00:00:00.000Z
```

## Numeric separators with regular expressions

```js
const regex = /\d{4}_\d{2}_\d{2}/;
console.log(regex.test("2020_01_01")); // true
```

## Numeric separators with arrays

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
```

## Numeric separators with objects

```js
const obj = { num: 1_000_000 };
console.log(obj); // { num: 1000000 }
```

### Importance of numeric separators

- Numeric separators are not part of the number, they are just used to make the number more readable.
- Numeric separators are ignored by the JavaScript engine.
- Numeric separators are not supported in Internet Explorer.
- can place numeric separators anywhere in the number except at the beginning or end.
- Numeric separators are not supported in strict mode.
