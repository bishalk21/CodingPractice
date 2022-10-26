# Top Level Await

- Top level await is a new feature in ES2020.

- It allows us to use `await` keyword outside of an `async` function.

- We can use `await` keyword outside of an `async` function only when we have `top level await`.

- We can use `top level await` only when we have `type="module"` in our script tag.

- `type="module"` is used to tell the browser that we are using ES6 modules.

```html
<script type="module">
  const whereAmI = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json(); // json parses the response into a JavaScript object
    console.log(data);
  };

  whereAmI();
```
