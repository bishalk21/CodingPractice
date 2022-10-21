# Immediately Invoked Function Expressions (IIFE)

Immediately invoked function expressions are functions that are called as soon as they are defined.

```js
(function () {
  console.log("This will never run again");
})();
```

## Why IIFE are useful

– they create a **private scope**, which is not accessible from outside the IIFE.

```js
(function () {
  const isPrivate = 23;
})();
```

– they are a **design pattern**, which is used very often in JavaScript frameworks.

```js
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
})();
```

– they are used to **group related functionality** into a single object or module.

- Data privacy
- Encapsulation

Data Encapsulation is the process of combining data and functions into a single unit (object). This helps in reducing the complexity and increases reusability.

    ```js
    (() => {
        console.log("This will never run again");
    })();
    ```

- Reusable code
