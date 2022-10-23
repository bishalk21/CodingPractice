# Dates

Dates are objects that represent a single moment in time.

## Creating Dates

There are 4 ways to create a date object:

1. `new Date()`
2. `new Date(year, month, day, hours, minutes, seconds, milliseconds)`
3. `new Date(milliseconds)`
4. `new Date(date string)`

### `new Date()`

The `new Date()` constructor creates a new date object with the current date and time.

```js
const now = new Date();
console.log(now); // 2020-12-31T23:59:59.999Z
```

### `new Date(year, month, day, hours, minutes, seconds, milliseconds)`

The `new Date(year, month, day, hours, minutes, seconds, milliseconds)` constructor creates a new date object with the specified date and time.

```js
const christmas = new Date(2020, 11, 25, 0, 0, 0, 0);
console.log(christmas); // 2020-12-25T00:00:00.000Z
```

### `new Date(milliseconds)`

The `new Date(milliseconds)` constructor creates a new date object with the specified number of milliseconds since January 1, 1970, 00:00:00 UTC.

```js
const christmas = new Date(1608912000000);
console.log(christmas); // 2020-12-25T00:00:00.000Z
```

### `new Date(date string)`

The `new Date(date string)` constructor creates a new date object with the specified date string.

```js
const christmas = new Date("2020-12-25T00:00:00.000Z");
console.log(christmas); // 2020-12-25T00:00:00.000Z

console.log(new Date("December 25, 2020")); // 2020-12-25T00:00:00.000Z
```

## Working with Dates

### Getting the current date

```js
const now = new Date();
console.log(now); // 2020-12-31T23:59:59.999Z
```

### Future dates

```js
const now = new Date(2037, 10, 19, 15, 23, 5);
console.log(now); // 2037-11-19T15:23:05.000Z

console.log(now.getFullYear()); // 2037
console.log(now.getMonth()); // 10
console.log(now.getDate()); // 19
console.log(now.getDay()); // 4
console.log(now.getHours()); // 15
console.log(now.getMinutes()); // 23
console.log(now.getSeconds()); // 5
console.log(now.toISOString()); // 2037-11-19T15:23:05.000Z
console.log(now.getTime()); // 2142279385000
```

### TimeStamp

```js
console.log(Date.now()); // 1609372799999
```

### Setting dates

```js
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // 2037-11-19T15:23:00.000Z

future.setFullYear(2040);
console.log(future); // 2040-11-19T15:23:00.000Z
```
