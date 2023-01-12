# [Table-of-contents]

# Chapter 3: Laying the Foundation

1. [npm](#npm)
2. [npm-init](#npm-init)
3. [package.json](#package.json)
4. [package-lock.json](#package-lock.json)
5. [devDependencies and dependencies](#devDependencies)
6. [browserlists](#browserlists)
7. [polyfill](#polyfill)
8. [babel](#babel)
9. [.gitignore](#gitignore)
10. [parcel](#parcel)
11. [npx](#npx)
12. [keys](#keys)
13. [React Developer Tools](#React-Developer-Tools)
14. [React Setup](#react-setup)
15. [React.createElement](#createElement)
16. [JSX](#JSX)

    - [Role od Babel and parcer](##role-of-babel-and-parcel-in-jsx)

17. [React Component](#react-component)
18. [Role of type attribute in script tag](#role-of-type-attribute-in-script-tag)
    [Resources](#resources)
    [Interview Question](#Interview-question)

# npm

### What is npm?

NPM is a package manager for all the modules and packages that are used in a projects. NPM is used for installing packages and publishing our own packages as well.

    - package installation,
    - version management, and
    - dependency management.

https://github.com/npm/npm-expansions/blob/master/expansions.txt

### How to install npm?

npm is installed with Node.js. So, if you have already installed Node.js, you have npm installed on your machine as well.

### How to check if npm is installed?

`npm -v`

### How to install a package?

`npm install <package-name>`

### How to install a package globally?

`npm install -g <package-name>`

### How to install a package as a development dependency?

`npm install --save-dev <package-name>` or `npm install -D <package-name>`

### How to install a package as a production dependency?

`npm install --save <package-name>` or `npm install <package-name>`

# [⬆ Back to Top](#table-of-contents)

# npm-init

### What is npm-init?

npm-init is a command that is used to create a package.json file. This file is used to store metadata related to the project. This file is also used to specify the project dependencies.

# package.json

### What is package.json?

package.json is a file that is used to store metadata related to the project. This file is also used to specify the project dependencies.

# package-lock.json

### What is package-lock.json?

package-lock.json is an automatically generated file for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

- has integrity: maintains the hash of the package-lock file which insures what version of package was running on my system and is exactly the same on production.
- important file, lock the version packages , `never have to keep in .gitignore`

There are two different versions:

- inside node_modules: keeps track of versions of all the packages, modules.

# [⬆ Back to Top](#table-of-contents)

# devDependencies

### What is devDependencies?

devDependencies are the packages that are used in the development environment. These packages are not used in the production environment. These packages are used for testing, building, and linting the code.

`npm i -D <package-name>`

### What is dependencies?

dependencies are the packages that are used in the production environment. These packages are used for running the application.

`npm i <package-name>`

### What are transitive dependencies?

Transitive dependencies are dependencies of your dependencies. They are dependencies that are not explicitly listed in your package.json file, but are installed as a result of installing other dependencies.

# [⬆ Back to Top](#table-of-contents)

# browserlists

### What is browserlists?

browserlists is a tool that is used to specify the browsers that are supported by the project. This tool is used by the babel to transpile the code to the supported browsers.
<br>
It is a package which defines the list of browsers on which the application will work. The developer
can define the list of browsers manualy on which the devleoper wants the application to be working.

### How to install browserlists?

`npm install browserlists`

## [For More](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

# [⬆ Back to Top](#table-of-contents)

# polyfill

### What is polyfill?

polyfill is a piece of code that is used to add support for a feature that is not supported by the browser.

- a code that is replacement for newer version of code.

For example,

`Array.from()` or `Array.map()` is not supported by IE11. So, we need to use polyfill to add support for this feature. `function map ()` function is created that behaves exactly as the `Array.map()`.

`ES6` feature is not supported by some browsers.

### Who converts our newer code to older code?

Babel is used to convert the newer code to older code.

### How to install polyfill?

`npm install @babel/polyfill`

### How to use polyfill?

`import '@babel/polyfill'`

# [⬆ Back to Top](#table-of-contents)

# babel

### What is babel?

- is chetaah
- a javascript compiler
- babel comes along with parcel

Babel is a tool that is used to convert the newer code to older code. Babel is used to convert the ES6 code to ES5 code.

    - just a node js package/library

### How to install babel?

`npm install @babel/core @babel/cli @babel/preset-env`

### How to use babel?

`npx babel src/index.js --out-file dist/bundle.js`

### How to use babel with webpack?

`npm install babel-loader @babel/core @babel/preset-env`

# [⬆ Back to Top](#table-of-contents)

# gitignore

### What is .gitignore?

.gitignore is a file that is used to specify the files that are not to be tracked by git.

### How to create .gitignore?

`touch .gitignore`

### How to add files to .gitignore?

`echo "node_modules/" >> .gitignore`

# [⬆ Back to Top](#table-of-contents)

# parcel

### What is parcel?

- the beast

Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multi-core processing, and requires zero configuration.
<br>

`Parcel/Webpack` is a bundler that means all the javascript code written in different files and folders
including all the dependencies and packages are bundled and minified in a single file which is then given
to the browser.

### How to install parcel?

`npm install -D parcel`

### How to use parcel?

`npx parcel index.html`

### Superpower of parcel

- HMR: Hot Module Replacement (Hot Module Reloading is a feature that allows you to update the code of your app without reloading the entire page. It is a feature that is available in webpack and parcel. When the developer saves the project then parcel automatically updates the modules in runtime without letting the developer to reload the page.)
- Minification of code
- File watching algorithms: (Parcel keeps analyzing the files and automatically updates the changes which are being made ny the developer in the project.)
- caching while development: Caching improves the performance of the application. Once cache has
- code splitting,
- compression
- optimization - image, css, js
- tree shaking (Tree Shaking is also called Dead Code Elimination. Parcel analyzes all the modules for imports and exports and eliminates all the things which are unused. Works for both dynamic and static imports.)
- source maps
- bundling
- transpiling
- polyfilling
- zero-config
- super fast build algorithms
- https on dev
- port number
- consistent hashing algorithm to cache things up
- compatible with older versions of browsers
- dev and production build

In tree shaking, if we have 8 functions but we need only 2 functions then all other 6 functions are ignored.

### what is .parcel-cache?

It is a cache folder which is created by parcel to store the files which are being used by parcel to bundle the code.

    - .cache: all minified files after bundling
    - tmp: temporary files
    - HMR
    - file watcher algorithms
    - random binary files

### What is dist folder?

dist folder is a folder which is created by parcel to store the bundled code.

    - minified production ready files by bundler: css, js

On every build of the app, delete the dist folder because it contains the old versions files which are not required.

# [⬆ Back to Top](#table-of-contents)

# npx

### What is npx?

npx is a tool that is used to run the packages that are installed in the project.

- means execute package using npm

### How to use npx?

`npx <package-name>`

# [⬆ Back to Top](#table-of-contents)

# keys

### What is keys in children?

Keys are used to identify the elements in the list. If the list is not having keys then the react will not be able to identify the elements in the list. So, the react will re-render the whole list.

    - used to identify elements in the list.
    - passed as a props
    - used by react to re-render the list

### How to use keys in children?

`<li key={index}>{item}</li>`

### Why should we use key?

If we are not using key then the react will not be able to identify the elements in the list. So, the react will re-render the whole list.

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

Now adding one more item list in the beginning

```html
<ul>
  <li>item 0</li>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

In this case,

- the react will re-render the whole list

But if we pass key to the each item list, then

- the react will re-render only the new item list

[React Reconciliation key](https://reactjs.org/docs/reconciliation.html)

**render:?** render means to show the elements on the screen or updating something on the DOM.

**re-render:?** re-render means to show the elements on the screen again or updating something on the DOM again. re-render is triggered when the state or props of the component is changed.

**reconciliation:?** reconciliation means to compare the previous state of the component with the current state of the component. If there is any change in the state of the component then the react will re-render the component.

**diffing algorithm:?** diffing algorithm is used to compare the previous state of the component with the current state of the component. If there is any change in the state of the component then the react will re-render the component.

**key:?** key is used to identify the elements in the list. If the list is not having keys then the react will not be able to identify the elements in the list. So, the react will re-render the whole list.

# [⬆ Back to Top](#table-of-contents)

# React Developer TOOLS

### What is React Developer tools?

React Developer Tools is a browser extension for Chrome and Firefox that allows you to inspect a React component tree with your browser's developer tools.

### How to install React Developer tools?

- Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

- Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

# [⬆ Back to Top](#table-of-contents)

# React Setup

Main reason to build react was to write a lot of html using javascript in better way.

### How to setup react by install in project?

`npm install react`
`npm install react-dom`

### Adding React in Script `App.js` file

React will be available in node_modules after installation. We need to import.

```js
import React from "react";
import ReactDOM from "react-dom";
```

# [⬆ Back to Top](#table-of-contents)

# createElement

### What is createElement?

createElement is a function that is used to create the elements in the react.

React.createElement outputs object and object is put into DOM, converted into html.

### How to use createElement?

`React.createElement("h1", null, "Hello World")`

### What is JSX?

JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

## Super Power of jsx:

JSX makes it easier to write or add HTML in React. JSX can easily convert HTML tags to react elements. It is faster than regular JavaScript. JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.

### Is JSX html inside JavaScript?

```js
// react element
const heading = (
  <h1 id="heading1" key="h1">
    This is Heading 1
  </h1>
);
```

JSX is html like syntax but it is not html inside javascript.

## Role of babel and parcel in JSX?

### How JSX is executed?

```bash
`JSX` ------- BABEL ----> `React.createElement()` -------------> Object ----------> HTML (dom)
```

[Check](https://babeljs.io/)

- JSX is converted into React.createElement by babel (babel understands jsx and converts into react element), which is basically an object and finally this object is rendered as html in DOM.

- Virtual DOM manipulation is much faster than Real DOM manipulation.

**Steps:**

- render a jsx element, every single virtual dom objects will be updated
- once virtual dom gets updated, react will compare the virtual dom with previous dom before the update, and
- once react knows which of the virtual dom objects have been manipulated, react will update those objects and only those objects in real dom.

### What are the advantages of JSX?

- Readibility
- less code
- maintainability
- no repetition

# [⬆ Back to Top](#table-of-contents)

# React Component

Everything in React is component.

## Functional Component

- nothing but normal JavaScript function which returns react element
- components name starts with capital letter (normal convention/good practice)
- if element has child element, we need to wrap the children elements with one main element inside parenthesis or all the element should go between opening and closing of empty anchor tags `<>content</>`
- can write any piece of javascript of code inside `{}`

```js
// Normal Functional Component
const HeaderComponent = () => {
  return <h1>This is Heading1</h1>;
};

// if with children elements
const NavbarComponent = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <h2>This is heading 2</h2>
    </div>
  );
};

// without return
const NavbarComponent = () => (
  <div>
    <h1>This is Navbar</h1>
    <h2>This is heading 2</h2>
  </div>
);
```

## Rendering functional component

- pass the function as inside the anchor tags with closing slash `<NavbarComponent />` and render.

```js
import ReactDOM from "react-dom/client";

const NavbarComponent = () => (
  <div>
    <h1>This is Navbar</h1>
    <h2>This is heading 2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NavbarComponent />);
```

## Implementing React element and react component inside another React Component

- we can pass the react element into the component using curly braces `{}`.

```js
import ReactDOM from "react-dom/client";

// react element
const heading1 = (
  <h1 id="heading1" key="h1">
    This is heading 1
  </h1>
);

// react component
const HeaderComponent = () => (
  <h1 id="heading1" key="h1">
    This is heading 1
  </h1>
);

const data = api.getData();
// suppose api sent malicious code or api got hacked and hacker wants to inject sth -- XSS Attack (Cross side scripting attack)

// react component
const NavbarComponent = () => (
  <div>
    {/* called infected data api */}
    {data}
    {/* 
    If hacker can run js code in my browser then can access ip, port, and location, cookies , passwords =====>  jsx is very secure and makes sure that app is very safe ---- sanitization method
    */}

    {/* react element into component */}
    {heading1}
    {/* react component into component */}
    <HeaderComponent />
    {/* function into component */}
    {HeaderComponent()}
    <h2>This is Navbar</h2>
    <h3>This is heading 2</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NavbarComponent />);
```

# [⬆ Back to Top](#table-of-contents)

## Component Composition

- component being used inside another component or passing component into component.

```js
import ReactDOM from "react-dom/client";

// react component
const HeaderComponent = () => (
  <h1 id="heading1" key="h1">
    This is heading 1
  </h1>
);

const NavbarComponent = () => (
  <div>
    <HeaderComponent />
    <h1>This is Navbar</h1>
    <h2>This is heading 2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NavbarComponent />);
```

# [⬆ Back to Top](#table-of-contents)

# Role of `type` attribute in script tag

**script:** used to embed executable code or data

## Attributes

- async
- crossorigin
- defer
- fetchpriority
- integrity
- nomodule
- nonce
- referrerpolicy: Indicates which referrer to send when fetching the script, or resources fetched by the script:

  - no-referrer: The Referer header will not be sent.
  - no-referrer-when-downgrade:he Referer header will not be sent to origins without TLS (HTTPS).
  - origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
  - origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
  - same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
  - strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
  - strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
  - unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.

- src: specifies the URI of an external script
- type: indicates the type of script represented:
  - Attribute is not set (default), an empty string, or a JavaScript MIME type: Indicates that the script is a "classic script", containing JavaScript code.
  - module: This value causes the code to be treated as a [JavaScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
  - importmap; This value indicates that the body of the element contains an import map.

## Class-Based Component

# Interview Question

1. How can you build performance web scalable app?

- Use `webpack` or `parcel` to bundle the code.
- Use `babel` to convert the ES6 code to ES5 code.
- Use `browserlists` to specify the browsers that are supported by the project.
- Use `polyfill` to add support for the features that are not supported by the browsers.
- tree shaking

2. What is the difference between `webpack` and `parcel`?

- `webpack` is a module bundler and `parcel` is a web application bundler.
- `webpack` is a tool that is used to bundle the code and `parcel` is a tool that is used to bundle the code.

3. What is the difference between `babel` and `webpack`?

- `babel` is a tool that is used to convert the ES6 code to ES5 code and `webpack` is a tool that is used to bundle the code.

4. What is the difference between `babel` and `parcel`?

- `babel` is a tool that is used to convert the ES6 code to ES5 code and `parcel` is a tool that is used to bundle the code.

5. What is the difference between key and id?

Key is used by react to identify the elements in the list. Id is used by the developer to identify the elements in the list.
