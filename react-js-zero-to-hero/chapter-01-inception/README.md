# Chapter 01 - Inception

1. Is React a Library or Framework?

- React is a JavaScript library created by Facebook
- React is a User Interface (UI) library
- React is a tool for building UI components

2. Differences between library and framework.

| Library                                                                           | Framework                                                                                      |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| A library is a collection of functions and classes that can be used by other code | A framework is a collection of classes and functions that can be used to create an application |

3. What is a UI Component?

- A UI component is a small, reusable piece of code that renders a part of a user interface
- A UI component is a function or a class that accepts inputs (called props) and returns a React element describing what should appear on the screen

## REACT Element

- A React element is a plain object describing a component instance or DOM node and its desired properties

## RESOURCES:

1. Emmet:

https://blog.logrocket.com/type-html-faster-react-emmet-vs-code/

https://dev.to/raaynaldo/speed-up-code-your-html-using-emmet-in-vscode-nesting-operators-201o

2. Library VS Framework:

https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

3. CDN:

https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/

https://reactjs.org/docs/cdn-links.html

React VS React DOM:

https://www.geeksforgeeks.org/how-react-and-reactdom-works/

4. Cross-Origin:

https://www.dofactory.com/html/script/crossorigin

https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin

5. Development VS Production build:

https://react-cn.github.io/react/downloads.html

6. Async VS Defer
   https://www.youtube.com/watch?v=IrHmpdORLu8

## Building React App from scratch

1. Create a new folder

`react-app`

2. Create a new file

`index.html`

3. Add the following code to the file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

4. Add react and react-dom development script in index.html

   ```html
   <script
     src="https://unpkg.com/react/umd/react.development.js"
     crossorigin
   ></script>
   <script
     src="https://unpkg.com/react-dom/umd/react-dom.development.js"
     crossorigin
   ></script>
   ```

Now we have the super power of react in our app.

5. Create a new file

`index.js`

6. Add the following code to the file

```html
<script src="index.js"></script>
```

7. Add the following code to the file

```js
// creating element using react
const element = React.createElement("h1", null, "Hello World");

// create an root element using react
const rootElement = document.getElementById("root");

// tell the react dom the root element is root
const root = ReactDOM.createRoot(rootElement);

// render the element to the root
root.render(element);
```