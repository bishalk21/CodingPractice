# Rest Patterns and Parameters

## Rest Patterns

Rest Patterns exactly look like the spread operator, but they are used in the opposite way.

It is used to pack multiple elements into an array.

- The rest parameter (`...`) can represent an indefinite number of elements as an array.

```js
const order = [20.17, 18.67, "cheese", "eggs"];
const [total, subtotal, ...items] = order;
// total: 20.17
// subtotal: 18.67
// items: ["cheese", "eggs"]
```

- Useful for defining variadic functions
  - Variadic functions are functions that take an indefinite number of arguments.

```js
// define variadic function with arguments object
function sum() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
}

// define variadic function with rest parameter
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
```

```js
// spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]

// rest, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}
```

## Destructuring in Arrays

`Rest Operator = ...rest`<br>
E.g.

```JavaScript
const [var1, var2, ...var3] = ['Deepa', 'Jyoti', 'Crescent', 'Partha'];

console.log(var1); // Deepa
console.log(var2); // Jyoti
console.log(var3); // ['Crescent', 'Partha']
```

JavaScript allows you to use `rest operator` with a `destructuring array` to assign the rest of regular array to variable. <br>
As you have noticed **['Crescent', 'Partha']** remaining both get stored in var3. <br>
E.g.

```JavaScript
const [ , , website ] = [ 'google', 'yahoo', 'firefox' ];
console.log(website); // firefox
```

Here we use `','` to skip variables at destructuring array's first and second index positions.

## How Default value work in an Array Destructing Assignment

E.g.

```JavaScript
const [ firstName = 'Deepa', lastName = 'Chaurasia' ] = [ 'Deepa Chaurasia' ];

console.log(firstName); // Deepa Chaurasia
console.log(lastName); // Chaurasia
```

Here **Deepa** and **Chaurasia** are default value of **firstName** and **lastName** variables. <br>

> In our attempt to extract first index value from right side of array, the computes defaulted to **Chaurasia** - because only 0th index value exists in **['Deepa Chaurasia']**

## Object Destructuring in JavaScript

**Object Destructing** is unique technique that allows you to neatly extract an object's value to new variables.

```JavaScript
const profile = {
    firstName: 'Deepa'
};
const { firstName: firstName } = profile;
```

Here, <br>

- `firstName` = This key references the profile object's firstName key
- **firstName** = This value represents yours new variable

> Destructuring object's key references its profile objects property name.

> Destructuring object's value represents your new variable.

E.g.

```JavaScript
const profile = {
    firstName: 'Deepa',
    lastName: 'Chaurasia'
};
const { firstName, lastName } = profile;

console.log(firstName); // Deepa
console.log(lastName); // Chaurasia
```

## How to Use object Destructuring to Swap Value

```JavaScript
let firstName = 'Crescent';
let lastName = 'Partha';

[{ firstName, lastName } = { firstName: lastName, lastName: firstName }];

console.log(firstName); // Partha
console.log(lastName); // Crescent
```
