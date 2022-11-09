[<< Day 20](../20_projects/20_projects.md) | [Day 22>>](../22_Form_Using_Hooks/22_form_using_hooks.md)

- [Introducing React Hook](#introducing-react-hook)
  - [Basic Hooks](#basic-hooks)
    - [State Hook](#state-hook)
    - [Effect Hook](#effect-hook)
    - [Context Hook](#context-hook)
  - [Additional Hook](#additional-hook)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)

# Introducing React Hook

In the previous, section you have learned how to use React with hooks which is the older version. Currently, hooks has been introduced to React.

Hooks are a new addition in React 16.8. They allow you use state, life cycle methods and other React features without writing a class component. If we are using hooks we can have only a functional component in the entire application. For more detail explanation you check [React documentation](https://reactjs.org/docs/hooks-reference.html).

Different hooks have been introduced to React:Basic hooks and additional hooks

## Basic Hooks

The basic hooks are:

- useState
- useEffect
- useContext

### State Hook

Using hooks we can access state without writing a class based component. Let's use the same example we used for class based components on day 8.

To use hooks, first we should import the _useState_ hooks from react. The useState is a function which takes one argument and returns a current state and functions that lets you update it.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Add One</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

We use the setCount to update the state. The initial state value is 0.

In the above example, we used an increment method. Let's also a decrement method.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Add One</button> <button onClick={() => setCount(count - 1)}>Minus One</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

We can also write separate function instead of writing our function inside the curly brackets.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0);
  const addOne = () => {
    let value = count + 1;
    setCount(value);
  };
  const minusOne = () => {
    let value = count - 1;
    setCount(value);
  };
  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={addOne}>Add One</button> <button onClick={minusOne}>Minus One</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Let us do more example about state, in the following example we will develop small application which shows either a dog or cat.
We can start by setting the initial state with cat then when it is clicked it will show dog and alternatively. We need one method which changes the animal alternatively. See the code below.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
const App = () => {
  // declaring state
  const url =
    "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";

  const [image, setImage] = useState(url);

  const changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let result = image === catURL ? dogURL : catURL;
    setImage(result);
  };

  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <div className="animal">
        <img src={image} alt="animal" />
      </div>

      <button onClick={changeAnimal} class="btn btn-add">
        Change
      </button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Now, let's put all the codes we have so far and also let's implement state using the useState hooks when it is necessary.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import bishalImage from "./images/bishal.jpg";
import "./index.scss";

// Fuction to show month date year
const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

const Header = (props) => {
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = props.data;

  return (
    <header style={props.styles}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// TechList Component
const TechList = (props) => {
  const { techs } = props;
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = (props) => {
  const {
    techs,
    user,
    greetPeople,
    handleTime,
    changeBackground,
    count,
    addOne,
    minusOne,
  } = props;
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button
          text="Greet People"
          onClick={greetPeople}
          style={buttonStyles}
        />
        <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
        <Button
          text="Change Background"
          onClick={changeBackground}
          style={buttonStyles}
        />
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  );
};

// Footer Component
const Footer = (props) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright {props.date.getFullYear()}</p>
      </div>
    </footer>
  );
};

const App = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");

  const showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  const addOne = () => {
    setCount(count + 1);
  };

  // method which subtract one to the state
  const minusOne = () => {
    setCount(count - 1);
  };
  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  const changeBackground = () => {};

  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "bishal",
      lastName: "karki",
    },
    date: "Nov 10 2022",
  };
  const techs = ["HTML", "CSS", "JavaScript"];

  const user = { ...data.author, image: bishalImage };

  return (
    <div className="app">
      {backgroundColor}
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count}
      />
      <Footer date={new Date()} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Use cases of useState hook

- Form handling
- Fetching data from API
- Changing the state of the component
- Changing the state of the application

### Effect Hook

The Effect Hook lets you perform side effects in function components:

- Data fetching
- Setting up a subscription
- Manually changing the DOM in React components are all examples of side effects.

The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Use cases of useEffect Hook

- Fetching data from an API
- Subscribing to a friend’s online status
- Setting up a timer using setInterval
- Manually changing the DOM in React Components

### Context Hook

The Context Hook lets you create a context and use it in function components:

Q. What is context in useContext hooks?

A. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

```js
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <div style={{ padding: "10px", backgroundColor: theme }}>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={theme}>Themed Button</button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Use cases of useContext Hook

- Managing the theme of an application
- Managing the language of an application
- Managing the authentication of an application
- Managing the state of an application

### Reducer Hook

The Reducer Hook lets you create a reducer and use it in function components:

Q. What is reducer in useReducer hooks?

A. A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change.

```js
import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

function App() {
  return <Counter />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Use cases of useReducer Hook

- Managing the state of an application
- Managing the state of a form
- Managing the state of a modal
- Managing the state of a dropdown

### Memo Hook

The Memo Hook lets you create a memoized value and use it in function components:

Q. What is memoized value?

A. A memoized value is a value that is stored in memory. It is used to prevent the same value from being calculated multiple times.

Q. What is memo in useMemo hooks?

A. useMemo is a hook that is used to memorize the result of a function. It is useful when you have a function that is computationally expensive and you want to avoid recalculating the result unless one of its dependencies has changed.

```js
import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "darkred" : "black",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  return (
    <>
      <h1 style={styles}>Calculated property: {computed}</h1>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Sub
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Use cases of useMemo Hook

- Calculating a value that is computationally expensive
- Calculating a value that is expensive to render
- Calculating a value that is expensive to render

### Callback Hook

The Callback Hook lets you create a callback and use it in function components:

Q. What is callback in useCallback hooks?

A. useCallback is a hook that is used to memorize the result of a function. It is useful when you have a function that is computationally expensive and you want to avoid recalculating the result unless one of its dependencies has changed.

```js
import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <>
      <h1 style={styles}>Count of elements: {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Sub
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>

      <List getItems={generateItemsFromAPI} />
    </>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log("Items");
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Use cases of useCallback Hook

- Passing a function as a prop to a child component
- Passing a function as a prop to a child component
- Passing a function as a prop to a child component

### Ref Hook

The Ref Hook lets you create a reference and use it in function components:

Q. What is ref in useRef hooks?

A. useRef is a hook that is used to create a reference to a DOM element. It is useful when you want to access a DOM element without using a query selector.

```js
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Count of renders: {renderCount.current}</h1>
      <h2>Previous state: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Use cases of useRef Hook

- Accessing DOM elements

## Additional Hook

### useReducer Hook

The useReducer Hook lets you manage the state of your application using a reducer function:

Q. What does reducer function do in useReducer Hook?

A. The reducer function is a pure function that takes the previous state and an action, and returns the next state.

```js
import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

function App() {
  return <Counter />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### useLayoutEffect Hook

The useLayoutEffect Hook lets you use the layout effect in function components:

Q. What is the difference between useEffect and useLayoutEffect?

A. The useEffect Hook is used to perform side effects in function components. The useLayoutEffect Hook is used to perform layout effects in function components.

```js
import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### useDebugValue Hook

The useDebugValue Hook lets you use the debug value in function components:

Q. What is the use of useDebugValue Hook?

A. The useDebugValue Hook is used to display a label for custom hooks in React DevTools.

```js
import React, { useState, useDebugValue } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}

function App() {
  const isOnline = useFriendStatus(1);

  return (
    <div className="App">
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Conclusion

In this article, we have learned about the Hooks in React. We have also learned about the useState Hook, useEffect Hook, useContext Hook, useReducer Hook, useLayoutEffect Hook, and useDebugValue Hook.

# Exercises

## Exercises: Level 1

Convert everything you wrote to React hooks.

🎉 CONGRATULATIONS ! 🎉
[<< Day 20](../20_projects/20_projects.md) | [Day 22>>]()
