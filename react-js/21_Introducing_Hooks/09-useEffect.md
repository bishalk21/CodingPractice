# useEffect 

### What is useEffect Hook

- The useEffect hook is used to run a function when the component is mounted or when a state variable changes. 

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

## Dependencies in useEffect

### What are dependencies in useEffect

- The dependency array in useEffect is used to specify when the function should be run. If the array is empty, the function will be run only when the component is mounted. If the array contains a state variable, the function will be run when the component is mounted and when the state variable changes. If dependency not passed then it will run on every render meaning application will load or render forever.

### Dependency array in useEffect

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

### Use cases of dependency array in useEffect

- If the dependency array is empty, the function will be run only when the component is mounted.
- If the dependency array contains a state variable, the function will be run when the component is mounted and when the state variable changes.
- If dependency not passed then it will run on every render meaning application will load or render forever.

## Cleanup in useEffect

### What is cleanup in useEffect


- The cleanup function is used to perform some actions before the component is unmounted. It is used to perform some cleanup actions like unsubscribing from a friend’s online status or clearing an interval using clearInterval.

### Cleanup function in useEffect

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
    return () => {
      console.log("return function");
    };
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

### Use cases of cleanup function in useEffect

- The cleanup function is used to perform some actions before the component is unmounted.
- It is used to perform some cleanup actions like unsubscribing from a friend’s online status or clearing an interval using clearInterval.



