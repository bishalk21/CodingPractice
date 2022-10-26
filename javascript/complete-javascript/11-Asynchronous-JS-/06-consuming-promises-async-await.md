# Consuming Promises with Async/Await

Here we will learn how to consume promises with async/await.

So far we have learned how to consume promises with `.then()` and `.catch()` methods. But there is another way to consume promises and that is with async/await.

## What is async/await?

- `async/await` is a new way to consume promises.

Syntax:

```js
async function name(arg) {}
```

```js
const name = async (arg) => {};
```

## How to use async/await?

- We can use `async/await` only when we have `async` keyword.
- We can use `await` only when we have `async` keyword.
- We can use `await` only when we have a promise.

```js
const whereAmI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

whereAmI();
```
