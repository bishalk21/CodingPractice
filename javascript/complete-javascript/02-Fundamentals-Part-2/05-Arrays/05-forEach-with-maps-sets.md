# forEach with Maps and Sets

## forEach with Maps

The forEach method is also available on Maps. It works the same way as it does on arrays, but instead of the current element, it receives the value, then the key, and then the map itself.

```js
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
```

## forEach with Sets

The forEach method is also available on Sets. It works the same way as it does on arrays, but instead of the current element, it receives the value, then the value, and then the set itself.

```js
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
```

## forEach with Strings

The forEach method is also available on Strings. It works the same way as it does on arrays, but instead of the current element, it receives the value, then the index, and then the string itself.

```js
const airline = 'TAP Air Portugal';

const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(air
```
