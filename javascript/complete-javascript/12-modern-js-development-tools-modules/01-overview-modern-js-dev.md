# Overview of Modern JavaScript Development Tools and Modules

## Introduction

In this section, we will learn about the modern JavaScript development tools and modules. We will learn about the following topics:

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)
- [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

Node package manager (npm, nodejs) -----> Development (Modules, 3rd party packages, webpack, parcel) -------> Build Process [ Bundling (join all modules or files into one) -----> Transpiling/Polyfiling using Babel (modern JS back to ES5) ] -------> Production (Minification, Uglification, Tree shaking, Dead code elimination = JavaScript Bundler)

## Modules

- Modules are reusable pieces of code that can be exported from one program and imported for use in another program or encapsulates implementation details of a specific functionality.
- usually a standalone file, but can be multiple files.

### Why Modules?

- compose software out of small blocks: Modules are the basic building blocks of any software application.
- Isolate components: Modules allow us to isolate different components of our application and keep them separate.
- Abstract Code: Modules allow us to abstract code into smaller pieces, which makes our code easier to understand and maintain.
- Reuse Code: Modules allow us to reuse code in multiple places.
- organize code: Modules allow us to organize our code into logical pieces.

### Native JavaScript ES6 Modules

- ES6 modules are the native JavaScript modules.
- Modules stored in files, exactly one module per file.

### ES6 Modules vs Script Tags

|                     | ES6 Modules          | Script Tags                    |
| ------------------- | -------------------- | ------------------------------ |
| top level variables | scoped to the module | global scope                   |
| default mode        | strict mode          | non-strict mode or sloppy mode |
| top level this      | undefined            | window object                  |
| imports/exports     | yes                  | no                             |

### How ES6 modules are imported and exported?

- First we need to create a module file, for example `shoppingCart.js`:

```js
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
export const totalPrice = 237;
export const totalQuantity = 23;
```

- Then `shoppingCart.js` is parsed and executed, and the variables are stored in the module scope.
- importing happens synchronously, so the code is executed in the order it is written.
- After the parsing process, which modules need to be imported are known by downloading the module files and download happens asynchronously.
- The module is executed only when it is imported.
- The module is executed only once, even if it is imported multiple times.

- Then we can import the variables from the module file:

```js
import { cart } from "./shoppingCart.js";
import { addToCart } from "./shoppingCart.js";
import { totalPrice } from "./shoppingCart.js";
import { totalQuantity } from "./shoppingCart.js";
```

- We can also import all the variables from the module file:

```js
import * as ShoppingCart from "./shoppingCart.js";
```

- We can also import the variables with different names:

```js
import { cart as cart2 } from "./shoppingCart.js";
```

- We can also import the default export:

```js
import add from "./shoppingCart.js";
```

- Then we can import the module in another file, for example `script.js`:

```js
import { cart } from "./shoppingCart.js";
import { addToCart } from "./shoppingCart.js";
import { totalPrice } from "./shoppingCart.js";
import { totalQuantity } from "./shoppingCart.js";

addToCart("bread", 5);
console.log(cart);
```

Why Importing before execution?

- The import statement is hoisted, but the imported module is not executed until the import statement is reached.
- makes bundling and dead code elimination easier.
