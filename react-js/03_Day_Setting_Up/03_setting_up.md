[<< Day 2](../02_Day_Introduction_to_React/02_introduction_to_react.md) | [Day 4 >>](../04_Day_Components/04_components.md)

- [Setting Up](#setting-up)
  - [Node](#node)
  - [Module](#module)
  - [Package](#package)
  - [Node Package Manager(NPM)](#node-package-managernpm)
  - [Visual Studio Code](#visual-studio-code)
  - [Browser](#browser)
  - [Visual Studio Extensions](#visual-studio-extensions)
  - [Create React App](#create-react-app)
- [Your first React App](#your-first-react-app)
  - [React Boilerplate](#react-boilerplate)
  - [Styles in JSX](#styles-in-jsx)
  - [Injecting data to JSX elements](#injecting-data-to-jsx-elements)
  - [Importing Media Objects in React](#importing-media-objects-in-react)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Setting Up

In the previous section, we learned about JSX and we accessed the React and ReactDOM package using CDN. However, in real projects instead of CDN you will use the create-react-app package to generate a React project starter(boilerplate). The initial _create-react-app_ was released on Jul 22, 2016. Before this time, developers used to configure webpack with a JavaScript module bundler, babel and all the necessary packages manually and this used to take half an hour or maybe more. Now, create-react-app will take care of everything and you will be in charge of only developing the product, instead of spending too much time configuring and setting up projects. Before we start using different tools, let's have a brief introduction to all the tools we are going to use in this challenge. You do not have to understand everything, but I will try to give a very short introduction to some of the tools and technologies that we use when we work with React.

## Node

Node is a JavaScript runtime environment that allows JavaScript to run on the server. Node was created in 2009. Node has played a great role for the growth of JavaScript. The React application starts by default at localhost 3000. The create-react-app has configured a node server for the React Application. That is why we need node and node modules. We will see create-react-app soon.

If you do not have node, install it. Install [node.js](https://nodejs.org/en/).

After downloading double click and install

We can check if node is installed on our local machine, by opening our device terminal or command prompt, and writing the following command:

```sh
bishal $ node -v
v12.18.0
```

## Module

A module is a file that contains a set of functions that you want to include in your application. Modules are used to break down large applications into small manageable parts. Modules are reusable. Modules are independent. Modules are self-contained. Modules are written in JavaScript. Modules are imported and exported using the module system.

A single or multiple functions, that can be exported and imported when needed, can be included in a project.
In React we do not use link to access modules or packages, instead we import the module. Let's see how to import and export a module or modules:

```js
// math.js
export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  };
})();
```

Now let's import the _math.js_ modules to a different file:

```js
// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from "./math.js";

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from "./math.js";

import * as everything from "./math.js"; // to import everything remaining
console.log(addTwo(5, 5));
console.log(doSomeMath.addTwo(5, 5));
console.log(everything);
```

After this, when you see _import React from 'react'_ or _import ReactDOM from 'react-dom'_ you will not be surprised.

## Package

A Package is a module or a collection of modules. For instance, React, ReactDOM are packages.

## Node Package Manager(NPM)

NPM was created in 2010. You do not need to install NPM separately - when you install node you will have also NPM. NPM is a default package manager for Node.js. It allows users to consume and distribute JavaScript modules that are available in the registry. NPM allows to create packages, use packages and distribute packages. NMP also played quite a big role in the growth of JavaScript. Currently, there is more than 350,000 packages in the NPM registry. Let's see the create-react-app on NPM registry. The number of downloads show the popularity of the package.

## Visual Studio Code

We will use Visual Studio Code as a code editor. [Download](https://code.visualstudio.com) and install it if you do not have one yet.

## Browser

We will use Google Chrome

## Visual Studio Extensions

You may need to install these extensions from Visual Studio Code

- Prettier
- ESLint
- Bracket Pair Colorizer
- ES7 React/Redux/GraphQL/React-Native snippets

## Create React App

To create a react project you can use one of the following ways. Let's assume you installed node. Open the command line interface (CLI), git bash or terminal on Mac or Linux. Then run the following command. I am using git bash.

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ npx create-react-app name-of-your-project
```

If you do not like to write npx every time you create a project you may install create-react-app package globally in your computer using the following command.

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ npm install -g create-react-app
```

After you installed create-react-app, you create a React application as follows:

```
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ create-react-app name-of-project
```

# Your first React App

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~
\$ cd Desktop/
```

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop
\$ npx create-react-app 30-days-of-react
```

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop
\$ cd 30-days-of-react/
```

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react (master)
\$ npm start
```

Now your React app should run at localhost 3000. Go to the App.js and modify the content by writing some text, you will see the latest changes on the browser.
To stop the server, press Ctr + C in the CLI.

## React Boilerplate

Let's see the React boilerplate, which has been created by create-react-app. Whenever you create a new project, you run create-react-app and name of the project.

In the following React boilerplate, there are three folders: node_modules, public and src. In addition, there are .gitignore, README.md, package.json and yarn.lock. Some of you, instead of yarn.lock, you may have package-lock.json.

It is good to know these folders and files.

- node_modules - stores all the necessary node packages of the React applications.

- Public

  - index.html - the only HTML file we have in the entire application

  - favicon.ico - an icon file
  - manifest.json - is used to make the application a progressive web app
  - other images - open graph images(open graph images are images which are visible when a link share on social media)
  - robots.txt - information, if the website allows web scraping

- src

  - App.css, index.css - are different CSS files
  - index.js - a file which allows to connect all the components with index.html
  - App.js - A file where we usually import most of the presentational components
  - serviceWorker.js: is used to add progressive web app features
  - setupTests.js - to write testing cases

- package.json- List of packages the applications uses
- .gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub
- README.md - Markdown file to write documentation
- yarn.lock or package-lock.json - a means to lock the version of the package

Now lets remove all the files, which we do not need at the moment, and leave only the files we need right now.

After removing most of the files, the structure of the boilerplate looks like this:

```sh
30-days-of-react
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

Now lets write code on index.js. First of, we should import React and ReactDOM. React allows us to write JSX and ReactDOM to render the JSX on the DOM. ReactDOM has a render method. Let's use all the JSX elements we created on Day 2. The ReactDOM render method takes two parameters, a JSX or a component and the root.

```js
//index.js
// importing the react and react-dom package

import React from "react";
import ReactDOM from "react-dom";

const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById("root");

ReactDOM.render(jsxElement, rootElement);
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />

    <title>30 Days Of React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

If your application is not running, go to your project folder and run the following command

```sh
bishal@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react (master)
\$ npm start
```

If you do not have any bugs, your React app will be launched on the browser.
Let's write more JSX elements and render them on the browser. This expression is a JSX element which is made of h2 HTML element.

```js
const title = <h2>Getting Started React</h2>;
```

Let's add more content to the previous JSX and change the name to header.

```js
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);
```

Let's render this to the browser, in order to do so, we need ReactDOM.

```js
//index.js
// importing the react and react-dom package

import React from "react";
import ReactDOM from "react-dom";

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Bishal Karki</p>
    <small>11 Nov 2022</small>
  </header>
);
const rootElement = document.getElementById("root");

ReactDOM.render(header, rootElement);
```

```js
//index.js
// importing the react and react-dom package
import React from "react";
import ReactDOM from "react-dom";

// JSX element, header
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Bishal Karki</p>
    <small>11 Nov 2022</small>
  </header>
);

// JSX element, main
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2022</p>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)
```

## Styles in JSX

Let's apply style to the JSX elements. We can style JSX either using inline, internal or external CSS styles. Now, let's apply inline styles to each JSX element.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </div>
  </header>
);

// JSX element, main
const mainStyles = {
  backgroundColor: "#F3F0F5",
};
const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

const footerStyles = {
  backgroundColor: "#61DBFB",
};
// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2022</p>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
```

Now, lets apply an internal style, we put all the CSS in the header of the index.html.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Bishal Karki</p>
      <small>11 Nov 2022</small>
    </div>
  </header>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li> JavaScript</li>
      </ul>
    </div>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2022</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
```

## Injecting data to JSX elements

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document

// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Bishal",
  lastName: "Karki",
};
const date = "11 Nov 2022";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
);

const copyRight = "Copyright 2022";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
```

## Importing Media Objects in React

How do we import images, video and audio in React? Let's see how we import images first.
Create images folder in the src folder and save an image inside. For instance let's save bishal.jpg image and let's import this image to index.js. After importing we will inject it to a JSX expression, user. See the code below.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import bishalImage from "./images/bishal.jpg";

const user = (
  <div>
    <img src={bishalImage} alt="bishal image" />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(user, rootElement);
```

Let's inject the user inside the main JSX element and see the result:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import bishalImage from "./images/bishal.jpg";
// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Bishal",
  lastName: "Karki",
};
const date = "11 Nov 2022";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const user = (
  <div>
    <img src={bishalImage} alt="bishal image" />
  </div>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
);

const copyRight = "Copyright 2022";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
```

# Exercises

## Exercises: Level 1

1. What is a module?

> A module is a file that contains a set of functions that you want to include in your application.

2. What is package?

> A package is a directory that contains a set of modules.

3. What is the difference between a module and a package.

> A module is a file that contains a set of functions that you want to include in your application. A package is a directory that contains a set of modules.

4. What is NPM?

> NPM is a package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently.

5. What is Webpack?

> Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

6. How do you create a new React project?

> To create a new React project, we use the create-react-app package. We can install it using the following command:

```bash
npx create-react-app app-name
```

7. What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?

> The files and folders inside a project folder are:

- package.json: This file contains the dependencies of the project.
- package-lock.json or yarn.lock: This file contains the exact version of the dependencies of the project.
- .gitignore: This file contains the files and folders that we don't want to push to the remote repository.
- node_modules: This folder contains the dependencies of the project.
- public: This folder contains the static files of the project.
- src: This folder contains the source code of the project.

8. What is your favorite code editor (I believe that it is Visual Studio Code)?

> My favorite code editor is Visual Studio Code.

9. Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).

> I have added the following extensions to improve my productivity:

- Prettier
- ESLint
- Live Server
- Bracket Pair Colorizer
- Auto Rename Tag
- Color Highlight
- GitLens
- Git History

10. Try to make a different custom module in a different file and import it to index.js.

> I have created a module in a different file and imported it to index.js. See the code below:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./math";

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {add(numOne, numTwo)}
  </p>
);

const rootElement = document.getElementById("root");
ReactDOM.render(result, rootElement);
```

```js
// math.js
export const add = (numOne, numTwo) => numOne + numTwo;
export const subtract = (numOne, numTwo) => numOne - numTwo;
export const multiply = (numOne, numTwo) => numOne * numTwo;
export const divide = (numOne, numTwo) => numOne / numTwo;
```

## Exercises: Level 2

1. Import and render the following images

> I have imported and rendered the following images:

```js
import React from "react";
import ReactDOM from "react-dom";
import htmlImage from "./images/html.png";

const html = (
  <div>
    <img src={htmlImage} alt="html image" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(html, rootElement);
```

2. Use h1, p, input and button HTML elements to create the following design using JSX

> I have used h1, p, input and button HTML elements to create the following design using JSX:

```js
import React from "react";
import ReactDOM from "react-dom";

const form = (
  <div>
    <h1>Sign Up</h1>
    <p>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" />
    </p>
    <p>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" />
    </p>
    <p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
    </p>
    <p>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
    </p>
    <p>
      <button>Sign Up</button>
    </p>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(form, rootElement);
```

## Exercises: Level 3

1. Design the following user card.

> I have designed the following user card:

```js
import React from "react";
import ReactDOM from "react-dom";

const userCard = (
  <div className="user-card">
    <div className="user-card__image">
      <img src="https://randomuser.me/api/portraits/75.jpg" />

      <div className="user-card__info">
        <h2>John Doe</h2>
        <p>
          <span>Age:</span> 30
        </p>

        <p>
          <span>Location:</span> New York
        </p>
  </div>
  </div>

  <div className="user-card__actions">
    <button>Follow</button>
    <button>Message</button>
  </div>
</div>

);

const rootElement = document.getElementById("root");
ReactDOM.render(userCard, rootElement);
```

```css
.user-card {
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.user-card__image {
  width: 100%;
  height: 70%;
  background-color: #ccc;
  position: relative;
}

.user-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-card__info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.user-card__info h2 {
  margin: 0;
  font-size: 1.2rem;
}

.user-card__info p {
  margin: 5px 0;
}

.user-card__info p span {
  font-weight: bold;
}

.user-card__actions {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.user-card__actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}
```

2. Design the following calculator.

> I have designed the following calculator:

```js
import React from "react";
import ReactDOM from "react-dom";

const calculator = (
  <div className="calculator">
    <div className="calculator__display">0</div>
    <div className="calculator__keys">
      <button className="calculator__key calculator__key--operator">+</button>
      <button className="calculator__key calculator__key--operator">-</button>
      <button className="calculator__key calculator__key--operator">x</button>
      <button className="calculator__key calculator__key--operator">/</button>
      <button className="calculator__key">7</button>
      <button className="calculator__key">8</button>
      <button className="calculator__key">9</button>
      <button className="calculator__key">4</button>
      <button className="calculator__key">5</button>
      <button className="calculator__key">6</button>
      <button className="calculator__key">1</button>
      <button className="calculator__key">2</button>
      <button className="calculator__key">3</button>
      <button className="calculator__key calculator__key--zero">0</button>
      <button className="calculator__key calculator__key--decimal">.</button>
      <button className="calculator__key calculator__key--equal">=</button>
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(calculator, rootElement);
```

```css
.calculator {
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.calculator__display {
  width: 100%;
  height: 100px;
  background-color: #ccc;
  font-size: 2rem;
  text-align: right;
  padding: 10px;
}

.calculator__keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 10px;
}

.calculator__key {
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.calculator__key--operator {
  background-color: #fca311;
}

.calculator__key--zero {
  grid-column: span 2;
}

.calculator__key--decimal {
  background-color: #fca311;
}

.calculator__key--equal {
  background-color: #fca311;
}
```

3. Design the following form.

🎉 CONGRATULATIONS ! 🎉

[<< Day 2](../02_Day_Introduction_to_React/02_introduction_to_react.md) | [Day 4 >>](../04_Day_Components/04_components.md)
