# Performance of Objects and Arrays

## Objects

Objects are unordered data structures. They are used to store data in key-value pairs. The keys are strings and the values can be any data type. Objects are very useful for storing data in a structured way, but they are not good for iteration.

## When to use Objects

- When you don't need any order
- When you need fast access/insertion and removal

JavaScript objects are not ordered. When you loop through an object, the order of the keys is not guaranteed. This is because objects are not indexed.

JavaScript is able to provide fast access/insertion and removal because of the way objects are implemented. Objects are implemented using hash tables. Hash tables are data structures that store data in a large array, and work by hashing the keys. A good explanation of how hash tables work can be found [here](https://www.youtube.com/watch?v=shs0KM3wKv8).

We can insert and remove key-value pairs very quickly. Objects are also very flexible. We can add new properties whenever we want.

Given a key, that specific key value pair of the object can be accessed in constant time.

1. Searching **O(n)**: Search if a value exists in the object
2. Accessing **O(1)**: Return the value given a key
3. Deleting **O(1)**: Removal of key value pair given a key
4. Insertion **O(1)**: Insertion of a new key value pair

### Object Methods

| Method         | Big O | Description                                               |
| -------------- | ----- | --------------------------------------------------------- |
| Object.keys    | O(n)  | Returns an array of all the keys in the object            |
| Object.values  | O(n)  | Returns an array of all the values in the object          |
| Object.entries | O(n)  | Returns an array of all the key value pairs in the object |
| hasOwnProperty | O(1)  | Returns true if the object has the specified key          |

Consider a `banana` object:

```javascript
let banana = {
  color: "yellow",
  taste: "sweet",
  calories: 100,
  isFav: true,
};
```

1. Get an array of all the keys **O(n)**

```javascript
Object.keys(banana);
// ["color", "taste", "calories", "isFav"]
// O(n) as we need to access all the keys
```

2. Get an array of all the values **O(n)**

```javascript
Object.values(banana);
// ["yellow", "sweet", 100, true]
// O(n) as we need to access all the values
```

3. Get all the key-value pair **O(n)**

```javascript
Object.entries(banana);
// [["color", "yellow"], ["taste", "sweet"], ["calories", 100], ["isFav", true]]
// O(n) as we need to access all the key-value pairs
```

4. Check if a key exists **O(1)**

```javascript
banana.hasOwnProperty("color");
// true
banana.hasOwnProperty("yellow");
// false
```

## Arrays

## Why are Arrays slow?

Arrays are ordered lists. They are used to store data in a list. Arrays are very good for iteration, but they are not good for insertion and removal.

Arrays are slow because they are implemented using arrays. Arrays are not very efficient for adding or removing data. When you add or remove data from the beginning of an array, you need to re-index all the elements in the array. This is because arrays are not implemented using hash tables.

## When to use Arrays

- When you need order
- When you need fast access/insertion and removal(sort of...)

Given an index, the thing at that index can be accessed in constant time.

1. Searching **O(n)**: Search if a value exists in the array
2. Accessing **O(1)**: Return the value at given index
3. Deleting:

- Delete last element: **O(1)**
- Delete first of middle element: **O(n)** (as it involves reassigning the indices)

4. Insertion:

- Insert last element: **O(1)**
- Insert first of middle element: **O(n)** (as it involves reassigning the indices)

### Array Methods:

| Method      | Big O        | Description                                                                                         |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------- |
| push        | O(1)         | Add an element to the end of the array                                                              |
| unshift     | O(n)         | Add an element to the beginning of the array                                                        |
| pop         | O(1)         | Remove an element from the end of the array                                                         |
| shift       | O(n)         | Remove an element from the beginning of the array                                                   |
| concat      | O(n)         | Merge two arrays                                                                                    |
| slice       | O(n)         | Returns a copy of a portion of an array                                                             |
| splice      | O(n)         | Add/Remove elements from an array                                                                   |
| sort        | O(n\*log(n)) | Sort the elements of an array                                                                       |
| forEach/map | O(n)         | Loop through the array                                                                              |
| filter      | O(n)         | Create a new array with all elements that pass a test implemented by a given function               |
| find        | O(n)         | Return the value of the first element in the array that pass a test implemented by a given function |
| reduce      | O(n)         | Reduce the array to a single value (going left-to-right)                                            |
| every       | O(n)         | Check if every element in an array pass a test implemented by a given function                      |
| some        | O(n)         | Check if some element in an array pass a test implemented by a given function                       |

Consider the `groceries` array:

```javascript
let groceries = ["milk", "egg", "bread", "bananas"];
```

1. Insert and Delete at the last index **O(1)**:

```javascript
groceries.pop();
// ['milk', 'egg', 'bread']
groceries.push("apples");
//['milk', 'egg', 'bread', 'apples']
```

2. Insert and Delete at the first index **O(n)**:

```javascript
groceries.shift();
// [egg', 'bread', 'bananas']
groceries.unshift("beer");
//['beer', 'egg', 'bread', 'apples']
```

3. Insert and Delete at the middle of array **O(n)**:

```javascript
groceries.splice(1, 1, "pizza", "meat");
// ['milk', 'pizza', 'meat', 'bread', 'bananas']
```

4. Concatenation of two arrays **O(a + b)**:

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];
a.concat(b);
// [1, 2, 3, 4, 5, 6]
```

5. Slicing an array **O(n)**:

```javascript
let a = [1, 2, 3, 4, 5, 6];
a.slice(2, 4);
// [3, 4]
```

6. Sorting an array **O(nlong(n))**:

```javascript
let a = [4, 6, 1, 2, 5, 3];
a.sort();
// [1, 2, 3, 4, 5, 6]
```

7. Iteration over an array **O(n)**:

```javascript
let a = [1, 2, 3, 4, 5, 6];
a.forEach((value) => console.log(value));
// 1
// 2
// 3
// 4
// 5
// 6
a.map((value) => 2 * value);
// [2, 4, 6, 8, 10, 12]

a.filter((value) => value % 2 == 0);
// [2, 4, 6]

a.reduce((accumulator, value) => accumulator + value);
// 21
```
