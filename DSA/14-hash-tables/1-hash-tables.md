# Hash Tables

## Introduction

A hash table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

Objects and Maps in JavaScript, Dictionaries in Python, Maps in Dart, java, go & scala are all Hash Table implementation.

## Working

Suppose we want to store a key value pair. Arrays are already key value pair implementation where keys are the indices. But suppose we want the key to be strings, in such case we need to use a hash table.
Consider the following object: `{"pink" : "#ff6932", "cyan" : "#00fff"}`.
To store this data we need to use a hash function and an array. Suppose `hash("pink")` is 25. Thus we will store `"#ff6932"` at the 25 index of our array. Thus next time whenever we want to access the value of key `"pink"`, we simply have to pass the key thru the hash function and the output index will be used to access the value from array.

## Hash Function

A hash function is a function that takes in data of arbitrary size and outputs data of a fixed size. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes.

To implement a hash table, we will be using an array. In order to look up values by key, we need a way to convert keys into valid array indices. A function that performs this task is called a hash function.

Hash function is a function that takes any data and converts it into a number.

**Properties of a good hash function:**

1. Fast (Constant Time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (Returns the same index for the same value everytime)

## Hash Function Syntax

```javascript
hash(key, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    // map "a" to 1
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}

hash("pink", 10); // 0
hash("cyan", 10); // 3
hash("orange", 10); // 7
hash("blue", 10); // 4
```

Here's a hash function

```javascript
// size is the size of array to be used
function hash(string, size) {
  let total = 0;
  for (char of string) {
    total += char.charCodeAt(0);
  }
  return total % size;
}
```

The problem with above function is a bad hash function as its O(n) and not that random.

```javascript
// removing O(n)
function hash(string, size) {
  let total = 0;
  for (let i = 0; i < Math.min(string.length, 100); i++) {
    total += string[i].charCodeAt(0);
  }
  return total % size;
}
```

```javascript
// Increasing randomness
function hash(string, size) {
  let total = 0;
  const PRIME = 1327;
  for (let i = 0; i < Math.min(string.length, 100); i++) {
    total = (total * PRIME + string[i].charCodeAt(0)) % size;
  }
  return total;
}
```

> Pro Tip: Use Prime Number length for storing hash tables. https://qr.ae/TWtE8y

### Prime Numbers in Hash Function

Prime numbers are important in hash tables because it helps spread out the keys more uniformly. It's also helpful if the array that you're putting values into has a prime length.

Advantages of prime numbers in Hash Table:

1. Prime numbers are not evenly divisible. Only 1 and the prime itself can divide evenly into a prime number.
2. If you are trying to loop through the values in an array, it's helpful if the array length is not evenly divisible by any numbers because that way you don't accidentally skip values.

## Handling Collisions

Collisions are when more than one key gets hashed to the same index.

What if two strings lead to a same hash?, We solve it by the following methods.

1. Separate Chaining:
   - With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
     Suppose `hash("pink")` and `hash("orange")` gives us a hash of 4. This method stores the key and hash in an array which are stored in an array at the specific index.

For Example: at index 4, we will have the following array after the above hashing: `[["pink", "#ff6932"], ["orange", "#aa6666"]]`. Thus we will need to search the above array to get our value.

2. Linear Probing:
   - With linear probing, when we find a collision, we search through the array to find the next empty slot.
   - Linear probing is better than separate chaining in terms of performance. But it has a problem of clustering. If there are a lot of collisions, then there are a lot of values in the same bucket. This can cause performance issues.
     In this method, if an index is occupied, we look at the next unoccupied index and store our data there. So for the above example, if at index 4 we have `[["pink", "#ff6932"]`, we will go to index 5 and if it is empty, we will store `["orange", "#aa6666"]`. This method exhausts the hash array quickly.

## Implementation

## Hash Table Class

```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // map "a" to 1
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // set pseudocode
  // 1. accepts a key and value
  // 2. hashes the key
  // 3. stores the key-value pair in the hash table array via separate chaining

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // get pseudocode
  // 1. accepts a key
  // 2. hashes the key
  // 3. retrieves the key-value pair in the hash table
  // 4. if the key isn't found, returns undefined

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // keys pseudocode
  // 1. Loops through the hash table array and returns an array of keys in the table

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  // values pseudocode
  // 1. Loops through the hash table array and returns an array of values in the table

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");

ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
```

```javascript
class HashTable {
  constructor() {
    this.keyMap = new Array(79);
  }
  _hash(string) {
    let total = 0;
    const PRIME = 1327;
    for (let i = 0; i < Math.min(string.length, 100); i++) {
      total = (total * PRIME + string[i].charCodeAt(0)) % 79;
    }
    return total;
  }

  set(key, value) {
    let hash = this._hash(key);
    if (this.keyMap[hash] == undefined) this.keyMap[hash] = [[key, value]];
    else this.keyMap.push([key, value]);
  }

  get(key) {
    let hash = this._hash(key);
    let chain = this.keyMap[hash];
    for (pair of chain) if (pair[0] === key) return pair[1];
    return undefined;
  }
  pairs() {
    let pairs = [];
    for (let i = 0; i < 79; i++)
      if (banana.keyMap[i] != undefined)
        for (let pair of banana.keyMap[i]) pairs.push(pair);
    return pairs;
  }
}
```

## Complexity

- Insertion: O(1)
- Deletion: O(1)
- Access: O(1)

## Hash Table vs Array

| Hash Table        | Array             |
| :---------------- | :---------------- |
| Insertion: O\(1\) | Insertion: O\(n\) |
| Deletion: O\(1\)  | Deletion: O\(n\)  |
| Access: O\(1\)    | Access: O\(1\)    |

## Recap

- Hash tables are used to store key-value pairs
- They are like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!
- Hash tables are not built-in to JavaScript, but are relatively simple to implement
- There are many different ways to write hash tables, but they all have the same functionality
- Big O of hash tables
  - Insertion: O\(1\)
  - Deletion: O\(1\)
  - Access: O\(1\)
- Hash tables store data in a large array, and work by hashing the keys.
- A good hash should be fast, distribute keys uniformly, and be deterministic.
  - Deterministic means that the same input yields the same output.
  - Fast means that the hash algorithm scales well as the table grows.
  - Uniform means that the hash function distributes the keys uniformly across the table.
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index.
