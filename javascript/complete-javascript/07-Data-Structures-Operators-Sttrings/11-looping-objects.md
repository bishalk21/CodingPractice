# Looping Objects (Objects)

Objects are collections of properties. We can loop over the properties of an object using a for...in loop.

## Object methods

- The `Object()` function includes a few methods of its own.
- `Object.keys(<object>)`: returns an array of the provided objects' property names.
- `Object.values(<object>)`: returns an array of the provided objects' property values.
- These two methods will return the items in the same order as when using a `for` loop on the object.

## Object.keys()

- `Object.keys()` returns an array of the provided objects' property names.

```JavaScript
const person = {
    name: 'Bishal',
    age: 25
};
console.log(Object.keys(person)); // ['name', 'age']
```

## Object.values()

- `Object.values()` returns an array of the provided objects' property values.

```JavaScript
const person = {
    name: 'Bishal',
    age: 25
};
console.log(Object.values(person)); // ['Bishal', 25]
```

## Object.entries()

- `Object.entries()` returns an array of the provided objects' property names and values.

```JavaScript
const person = {
    name: 'Bishal',
    age: 25
};
console.log(Object.entries(person)); // [['name', 'Bishal'], ['age', 25]]

// Using for...of loop
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
// name: Bishal
// age: 25
```
