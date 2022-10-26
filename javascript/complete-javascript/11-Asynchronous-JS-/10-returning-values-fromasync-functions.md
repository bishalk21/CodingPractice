# Returning Values from Async Functions

## What is the return value of an async function?

- The return value of an async function is always a promise.

## How to return a value from an async function?

- We can return a value from an async function by using `return` keyword.

```js
const getOne = async () => {
  return 1;
};

const promise = getOne();
console.log(promise); // Promise { 1 }
```

- We can also return a promise from an async function.

```js
const getOne = async () => {
  return Promise.resolve(1);
};

const promise = getOne();
console.log(promise); // Promise { 1 }
```
