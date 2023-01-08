// strict mode
"use strict";
//   <!-- LETS WRITE HELLO PROGRAM -->
// FIRST CREATE ELEMENT
// createElement takes three args - tag, object as attribute and what you want to put inside tag
// const element = createElement(type, props, ...children)
// const h1 = React.createElement("h1", {}, "REACT - zero to hero");
const h1 = React.createElement(
  "h1",
  {
    id: "h1",
    title: "This is title",
    className: "heading 1",
  },
  "REACT - zero to hero"
);

console.log(h1);

// creating two element and putting them in container element
const h2 = React.createElement(
  "h2",
  {
    id: "h2",
    title: "This is title2",
    className: "heading 2",
  },
  "Namaste JAVASCRIPT"
);
console.log(h2);

// const element = createElement(type, props, ...children)
const container = React.createElement(
  "div",
  {
    id: "container",
    title: "This is title2",
    className: "container",
  },
  h1,
  h2
);

// telling react root is the root element AND all the dom modification happens here
const root = ReactDOM.createRoot(document.getElementById("root"));

// then render the element or passing element inside root
// root.render(h1);
root.render(container);

// const a = "b";
// const b = "a";
// const c = {
//   b: 7,
// };
// console.log(c[a]);
