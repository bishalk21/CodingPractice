# Data Transformations: map, filter, reduce

| Map                                                                             | Filter                                                          | Reduce                                               |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------- |
| Transforms an array                                                             | Filters an array                                                | Reduces an array to a single value                   |
| Returns a new array                                                             | Returns a new array                                             | Returns a single value                               |
| contains results of applying a callback function to all original array elements | contains results of array elements that passed an specific test | contains a single value by adding all array elements |

## map

The map method transforms an array by applying a function to all of its elements and building a new array from the results. The new array will have the same length as the original one, but its content will have been "mapped" to a new form by the function.

```js
const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
```

The map method receives a callback function that will be called for each element of the array. The callback function receives three arguments: the current element, the index, and the array itself. The callback function must return a value, which will be added to the new array.

```js
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
```

The map method is a very useful and common method. It is used to transform the elements of an array into a new form. For example, we can use it to convert all the movements from euros to dollars.

```js
const movementsUSD = movements.map((mov) => mov * euroToUsd);
```

The map method is also used to transform the elements of an array into a different type. For example, we can use it to convert all the movements from numbers to strings.

```js
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
```

## filter

The filter method creates a new array with all elements that pass the test implemented by the provided function. It works by looping over the original array and calling the callback function for each element. The callback function receives three arguments: the current element, the index, and the array itself. The callback function must return a boolean value. If the value is true, the element will be added to the new array. If the value is false, the element will be skipped and will not be added to the new array.

```js
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
```

```js
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
```

```js
const deposits = movements.filter((mov) => mov > 0);

const withdrawals = movements.filter((mov) => mov < 0);
```

## reduce

The reduce method reduces the array to a single value. It does so by looping over the array and calling the callback function for each element. The callback function receives four arguments: an accumulator (acc), the current element (cur), the current index (i), and the array itself (arr). The callback function must return a new value to be used as the accumulator in the next iteration, or a final value to be returned by the reduce method.

```js
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
```

```js
let balance2 = 0;
for (const mov of movements) balance2 += mov;
```
