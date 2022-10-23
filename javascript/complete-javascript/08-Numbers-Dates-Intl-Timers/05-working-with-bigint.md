# BigInt

BigInt is a new built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.

Numbers are internally represented in JavaScript in 64-bit floating point format [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754). This format stores numbers in 64 bits, where the number (the significand) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.

Out of these 64 bits, 52 bits are used to store the number itself, 11 bits are used to store the exponent, and 1 bit is used to store the sign (0 for positive, 1 for negative). This format can represent numbers between -(2^53 - 1) and 2^53 - 1.

    ```js
    // the largest number that can be represented in JavaScript
    console.log(2**53 - 1); // 9007199254740991
    // Max safe integer is the largest number that can be represented accurately
    console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
    // Any number larger than max safe integer is not accurate and might lose precision ()
    console.log(2**53 + 1); // 9007199254740992
    ```

## Creating a BigInt

To create a BigInt, you simply add the `n` suffix to the end of an integer or a decimal.

```js
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
```

We can also use the `BigInt()` function to create a BigInt.

```js
const bigInt = BigInt(10);
console.log(bigInt); // 10n
```

## Operations

BigInts can be used in all the same operations as regular numbers.

```js
console.log(10000n + 10000n); // 20000n

console.log(3628800n * 3628800n); // 13168189440000000000n

console.log(
  1234567890123456789012345678901234567890n **
    1234567890123456789012345678901234567890n
); // 340282366920938463463374607431768211456n

const huge = 1234567890123456789012345678901234567890n;
const num = 23;
console.log(huge * BigInt(num)); // 282429536481n

const bigInt1 = 1234567890123456789012345678901234567890n;
const bigInt2 = 1234567890123456789012345678901234567890n;
console.log(bigInt1 + bigInt2); // 2469135780246913578024691357802469135780n

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == "20"); // true
console.log(20n === "20"); // false

console.log(huge + " is REALLY big!!!"); // 1234567890123456789012345678901234567890 is REALLY big!!!

// bigint will cut the decimal part
console.log(10n / 3n); // 3n
```
