# Maps

Maps are a new data structure in ES6. They are similar to objects, but the main difference is that maps allow keys of any type.

Maps are basically collections of key-value pairs. You can add key-value pairs to a map, remove key-value pairs from a map, and check if a map contains a key. You can also iterate over a map's key-value pairs.

## Maps vs Objects

| Maps                               | Objects                                                              |
| ---------------------------------- | -------------------------------------------------------------------- |
| Keys can be any type               | Keys must be strings or symbols                                      |
| Keys are ordered                   | Keys are not ordered                                                 |
| Keys are iterable                  | Keys are not iterable                                                |
| You can get the size of a map      | You cannot get the size of an object                                 |
| You can easily add and remove data | You have to manually keep track of how many properties an object has |

## Creating a Map

To create a map, you can use the `Map` constructor. The constructor takes an iterable object as an argument. An iterable object is an object that has a `Symbol.iterator` method. Arrays and strings are iterable objects.

```js
const map1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
const map2 = new Map("Hello");
```

## Adding Key-Value Pairs to a Map

To add a key-value pair to a map, you can use the `set` method.

```js
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
// number type
map.set(1, "number");
// boolean type
map.set(true, "boolean");
// object type
map.set({}, "object");
// function type
map.set(() => {}, "function");

console.log(map); // Map { 'key1' => 'value1', 'key2' => 'value2' }
```

## Getting Values from a Map

To get a value from a map, you can use the `get` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
map.set(1, "number");
map.set(true, "boolean");
map.set({}, "object");

console.log(map.get("key1")); // value1
//function type
console.log(map.get(() => {})); // undefined
```

## Checking if a Map Contains a Key

To check if a map contains a key, you can use the `has` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(map.has("key1")); // true
```

## Removing Key-Value Pairs from a Map

To remove a key-value pair from a map, you can use the `delete` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

map.delete("key1");
```

## Clearing a Map

To clear a map, you can use the `clear` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

map.clear();
```

## Getting the Size of a Map

To get the size of a map, you can use the `size` property.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(map.size); // 2
```

## Converting a Map to an Array

To convert a map to an array, you can use the `entries` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(map.entries()); // MapIterator { [ 'key1', 'value1' ], [ 'key2', 'value2' ] }
```

## Convert Array to Map

To convert an array to a map, you can use the `fromEntries` method.

```js
const array = [
  ["key1", "value1"],
  ["key2", "value2"],
];

const map = new Map(array);

console.log(map); // Map { 'key1' => 'value1', 'key2' => 'value2' }

const map2 = new Map().fromEntries(array);
console.log(map2); // Map { 'key1' => 'value1', 'key2' => 'value2' }
```

## Converting Objects to Maps

To convert an object to a map, you can use the `Object.entries` method.

```js
const obj = {
  key1: "value1",
  key2: "value2",
};

const map = new Map(Object.entries(obj)); // Map { 'key1' => 'value1', 'key2' => 'value2' }
```

## Converting Maps to Objects

To convert a map to an object, you can use the `Object.fromEntries` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

const obj = Object.fromEntries(map); // { key1: 'value1', key2: 'value2' }
```

## Getting an element from a DOM

Use of Map in DOM is to get an element from the DOM. The `querySelectorAll` method returns a `NodeList`. A `NodeList` is an iterable object. You can convert a `NodeList` to an array using the `Array.from` method.

```js
const nodeList = document.querySelectorAll("li");
const array = Array.from(nodeList);
```

```js
const map = new Map();
const button = document.querySelector("button");
map.set(button, "Button Element");
console.log(map.get(button)); // Button Element
```

## Iterating Over a Map

To iterate over a map, you can use the `forEach` method.

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

- Using `for...of` loop

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of map) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of map.entries()) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring and spread operator

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of [...map]) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring and spread operator and `Array.from`

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of Array.from(map)) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring and spread operator and `Array.from` and `entries`

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of Array.from(map.entries())) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring and spread operator and `Array.from` and `entries` and `keys`

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of Array.from(map.entries()).keys()) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring and spread operator and `Array.from` and `entries` and `values`

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of Array.from(map.entries()).values()) {
  console.log(`${key} = ${value}`);
}
```

- Using `for...of` loop with destructuring and spread operator and `Array.from` and `entries` and `keys` and `values`

```js
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for (const [key, value] of Array.from(map.entries()).keys().values()) {
  console.log(`${key} = ${value}`);
}
```
