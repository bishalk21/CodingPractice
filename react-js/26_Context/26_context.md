[<< Day 25](../25_Custom_Hooks/25_custom_hooks.md) | [Day 27>>](../27_Ref/27_ref.md)

# Context

Context allow as to pass data through the component tree without having to pass props down manually to every child component at every level.

In React, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

## When to Use Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

The above text has been taken from [react documentation](https://reactjs.org/docs/context.html) without any change.

## Creating Context

We can create context using `React.createContext()` method. This method takes an argument which is the default value of the context. The default value is used when a component does not have a matching Provider above it in the tree.

```js
import React from "react";

const ThemeContext = React.createContext("light");

export default ThemeContext;
```

## Using Context

We can use context in two ways:

1. Using `Context.Consumer`

2. Using `Context.Provider`

### Using Context.Consumer

We can use the `Context.Consumer` to consume the context value. The `Context.Consumer` is a React component that subscribes to context changes. This lets you subscribe to a context within a function component.

```js
import React from "react";
import ThemeContext from "./ThemeContext";

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => <button className={`btn btn-${theme}`}>Click Me</button>}
    </ThemeContext.Consumer>
  );
};

export default Button;
```

### Using Context.Provider

We can use the `Context.Provider` to provide the context value. The `Context.Provider` is a React component that allows consuming components to subscribe to context changes.

```js
import React from "react";
import ThemeContext from "./ThemeContext";

const Button = () => {
  return (
    <ThemeContext.Provider value="dark">
      <button className="btn btn-dark">Click Me</button>
    </ThemeContext.Provider>
  );
};

export default Button;
```

## Exercises

### Exercises: Level 1

1. Create a context with default value `light`.

```js
import React from "react";

const ThemeContext = React.createContext("light");

export default ThemeContext;
```

2. Create a component `Button` which will consume the context.

```js
import React from "react";
import ThemeContext from "./ThemeContext";

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => <button className={`btn btn-${theme}`}>Click Me</button>}
    </ThemeContext.Consumer>
  );
};

export default Button;
```

3. Create a component `App` which will provide the context value.

```js
import React from "react";
import ThemeContext from "./ThemeContext";
import Button from "./Button";

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
};

export default App;
```

4. Render the `Button` component inside the `App` component.

```js
import React from "react";
import ThemeContext from "./ThemeContext";

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
};

export default App;
```

It seems the react documentation has pretty good information about context, you can go through the [react documentation](https://reactjs.org/docs/context.html).

# Exercises

🎉 CONGRATULATIONS ! 🎉
[<< Day 25](../25_Custom_Hooks/25_custom_hooks.md) | [Day 27>>](../27_Ref/27_ref.md)
