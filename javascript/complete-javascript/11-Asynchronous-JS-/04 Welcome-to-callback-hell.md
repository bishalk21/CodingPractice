# Welcome to callback hell

## What is callback hell?

- Callback hell is a code smell that occurs when you have a deeply nested callback function
- It is a problem that occurs when you have a lot of asynchronous code that depends on each other

```JavaScript
const getRecipe = () => {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher);

        }, 1000, recipeID[2]);

    }, 1500);
};

getRecipe();
```

```js
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("4 seconds passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

## How to avoid callback hell?

- Use promises
- Use async/await
