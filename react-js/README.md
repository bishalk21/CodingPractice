# React JS Library

## What is React JS?

React JS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

## Why React JS?

React JS is used to build single page applications. It is used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook's newsfeed in 2011 and on Instagram.com in 2012.

## What is JSX?

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called 'React elements'. To get a basic introduction to JSX [click here](https://reactjs.org/docs/introducing-jsx.html).

## What is Babel?

Babel is a JavaScript compiler. It is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It allows us to use JSX in React. To get a basic introduction to Babel [click here](https://babeljs.io/docs/en/).

## What is Webpack?

Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. To get a basic introduction to Webpack [click here](https://webpack.js.org/concepts/).

## What is NPM?

NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. To get a basic introduction to NPM [click here](https://docs.npmjs.com/about-npm/).

## What is Node JS?

Node JS is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. To get a basic introduction to Node JS [click here](https://nodejs.org/en/about/).

## What is ES6?

ECMAScript 6 is the latest version of the ECMAScript standard. It is a significant update to the language, and the first update to the language since ES5 was standardized in 2009. To get a basic introduction to ES6 [click here](https://www.w3schools.com/js/js_es6.asp).

## Functional vs Classes Components

### Functional Components

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. Functional components are pretty much standard JavaScript functions except that they accept props as an argument and return a React element.

### Class Components

A class component requires you to extend from React.Component and create a render function which returns a React element. Class components have some additional features such as local state and lifecycle hooks. You should use class components only when you need to use local state or lifecycle hooks.

## What is Virtual DOM?

The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation. To get a basic introduction to Virtual DOM [click here](https://reactjs.org/docs/faq-internals.html).

## What is Props?

Props are arguments passed into React components. Props are passed to components via HTML attributes. To get a basic introduction to Props [click here](https://reactjs.org/docs/components-and-props.html).

## What is State?

State is a reserved word in React, and it is used to create components. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders. To get a basic introduction to State [click here](https://reactjs.org/docs/state-and-lifecycle.html).

## What is a Component Lifecycle?

Components have lifecycle events that you can hook into during its three main phases. The three phases are: Mounting, Updating, and Unmounting. To get a basic introduction to Component Lifecycle [click here](https://reactjs.org/docs/state-and-lifecycle.html).

## What is a Higher Order Component?

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component. To get a basic introduction to Higher Order Component [click here](https://reactjs.org/docs/higher-order-components.html).

## What is a Pure Component?

A React component class that extends React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn't implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison. To get a basic introduction to Pure Component [click here](https://reactjs.org/docs/react-api.html#reactpurecomponent).

## What is a Fragment?

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. To get a basic introduction to Fragment [click here](https://reactjs.org/docs/fragments.html).

## What is a Ref?

Refs provide a way to access DOM nodes or React elements created in the render method. To get a basic introduction to Ref [click here](https://reactjs.org/docs/refs-and-the-dom.html).

## What is a Context?

Context provides a way to pass data through the component tree without having to pass props down manually at every level. To get a basic introduction to Context [click here](https://reactjs.org/docs/context.html).

## What is a Portal?

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. To get a basic introduction to Portal [click here](https://reactjs.org/docs/portals.html).

## What is a Render Props?

A render prop is a technique for sharing code between React components using a prop whose value is a function. To get a basic introduction to Render Props [click here](https://reactjs.org/docs/render-props.html).

## Pure Functions

A pure function is a function which:

- Given the same input, will always return the same output.
- Produces no side effects.

## What is a Side Effect?

A side effect is any application state change that is observable outside the called function other than its return value. To get a basic introduction to Side Effect [click here](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>).

## Impure Functions

An impure function is a function which:

- Given the same input, may return a different output.
- Produces side effects.

```javascript
// Pure function
function square(x) {
  return x * x;
}

// Impure function
function square(x) {
  updateXInDatabase(x);
  return x * x;
}
```

## What is Hook?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. To get a basic introduction to Hook [click here](https://reactjs.org/docs/hooks-intro.html).

## What is a Hook?

Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. To get a basic introduction to Hook [click here](https://reactjs.org/docs/hooks-intro.html).

## Advantages of hook:

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- Hooks don’t work inside classes. But you can use them instead of writing classes.
- Hooks are 100% opt-in. You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
- Hooks are backwards-compatible. Hooks don’t contain any breaking changes.
- Hooks are completely opt-in, there’s no rush to migrate existing code.
- Hooks are composable. Hooks are a way to reuse stateful logic between components.

## Disadvantages of hook:

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- Hooks don’t work inside classes. But you can use them instead of writing classes.

## React and ReactDOM

React is the core library. ReactDOM is the package that provides DOM-specific methods. If you want to render a React component to the DOM, you need ReactDOM.

## DOM and Virtual DOM

DOM stands for Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.

## Real DOM

The real DOM is the browser's representation of the page. It is a tree of objects that represents the HTML elements on the page. When you change the DOM, you change the real DOM, and the page is updated.

Q.
