# Timers

Timer functions are used to execute a function after a specified delay.

## setTimeout

`setTimeout` is used to execute a function after a specified delay.

- `setTimeout` returns a timer ID.
- `setTimeout` can be used to execute a function only once.
- `setTimeout` can be used to execute a function after a specified delay.

```js
const timerId = setTimeout(() => {
  console.log("Hello");
}, 1000);

setTimeout(
  (img1, img2) => {
    console.log(img1, img2);
  },
  1000,
  "img1.jpg",
  "img2.jpg"
);

// rest operator
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2, ...otherIngredients) => {
    console.log(ing1, ing2, otherIngredients);
  },
  1000,
  ...ingredients,
  "mushrooms",
  "tomatoes"
);
```

### clearTimeout

`clearTimeout` is used to cancel a timer.

```js
const timerId = setTimeout(() => {
  console.log("Hello");
}, 1000);

clearTimeout(timerId);
```

- main advantage of `setTimeout` is that it is guaranteed to run after a specified delay.
- main advantage of `clearTimeout` is that it is guaranteed to cancel a timer.

## setInterval

`setInterval` is used to execute a function repeatedly, after a specified delay.

- `setInterval` returns a timer ID.
- `setInterval` can be used to execute a function repeatedly.
- `setInterval` can be used to execute a function after a specified delay.

```js
const timerId = setInterval(() => {
  console.log("Hello");
}, 1000);
```

### clearInterval

`clearInterval` is used to cancel a timer.

```js
const timerId = setInterval(() => {
  console.log("Hello");
}, 1000);

clearInterval(timerId);
```

- main advantage of `setInterval` is that it is guaranteed to run after a specified delay.
