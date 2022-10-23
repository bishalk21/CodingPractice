# Remainder operator

Remainder operator is used to get the remainder of a division operation. It is represented by the `%` symbol.

| Operator | Description |
| -------- | ----------- |
| `%`      | Remainder   |

```js
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(6 % 3); //
```

### Remainder operator with negative numbers

```js
console.log(5 % 2); // 1
```

### Remainder operator with floating point numbers

```js
console.log(5.5 % 2); // 1.5
```

### Remainder operator with zero

```js
console.log(5 % 0); // NaN
```

### Remainder operator with infinity

```js
console.log(5 % Infinity); // NaN
```

### Remainder operator with NaN

```js
console.log(5 % NaN); // NaN
```

### Remainder operator with strings

```js
console.log(5 % "2"); // 1
console.log(5 % "Hello"); // NaN
```

## Check if a number is even or odd

```js
const isEven = (num) => num % 2 === 0;
console.log(isEven(2)); // true
console.log(isEven(3)); // false

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(2)); // false
console.log(isOdd(3)); // true
```
