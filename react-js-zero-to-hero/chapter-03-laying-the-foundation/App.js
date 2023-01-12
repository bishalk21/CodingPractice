// import React from "react";
import { createElement } from "react";
import ReactDOM from "react-dom/client";

// ============= using React.createElement by import React
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading1",
//     key: "h1",
//   },
//   "This is heading 1"
// );

// ============ using createElement by import {createElement}
const heading = createElement("h1", { id: "heading1" }, "This is heading 1");
console.log(heading);

// ============ using JSX
const heading1 = (
  <h1 id="heading1" key="h1">
    This is heading 1
  </h1>
);

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "heading2",
//     key: "h2",
//   },
//   "This is heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);
