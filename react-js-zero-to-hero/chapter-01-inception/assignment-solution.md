# Coding -

● Set up all the tools in your laptop
○ VS Code
○ Chrome
○ Extensions of Chrome
● Create a new Git repo
● Build your first Hello World program using,
○ Using just HTML
○ Using JS to manipulate the DOM
○ Using React
■ use CDN Links
■ Create an Element
■ Create nested React Elements
■ Use root.render
● Push code to Github (Theory as well as code)

References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

# Theory

1.  What is Emmet?

- Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It is available for free and is open source. It is a tool that helps you to write HTML and CSS faster and more efficiently. It is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It is available for free and is open source. It is a tool that helps you to write HTML and CSS faster and more efficiently.
- Emmet (https://emmet.io/) is a plugin for text editors that help developers in writing HTML, CSS boilerplate code. This plugin is enabled in VSCode by default and helps in the process of development.
- When CSS-like expressions are written, a corresponding snippet of code is added to the HTML file accordingly.
- It is greatly helpful in writing CSS code. (For eg: When p10 is typed in a CSS file in VSCode, padding: 10px is automatically added to the file, greatly reducing the time taken in the development)
- Custom Emmet abbreviations are possible too. Creating a snippets.json with the custom expansion of the tags will help to create custom boiletplate code.

2. Difference between Library and Framework.

| Library                                                            | Framework                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Set of Helper functions which the developer calls as per the needs | Provides a skeleton which the developer can fill as per the needs |
| Control is to the developer                                        | Control is to the framework                                       |

This is called Inversion of Control.

3. What is CDN and Why do we use it?

- CDN - Content Delivery Network
- A set of servers spread over geographically many locations
- Duplicates of data - generally static assets like stylesheets, images and JS
- Server the request based on the location of the request of the end user - it will help in reducing the latency of the response
- Ensures fast server
- Affected less by traffic

4. Why is React known as React?

- React is a library for building user interfaces
- React was primarily developed for the 'View' part of the MVC architecture
- It was developed for supporting Facebook - which changes the data what the users view based on their preferences or events - like a chemical reaction to a stimulus
- The logo of React is also like an atom - indicating a chemical reaction
- React is not for reactive programming; but to indicate that the view 'reacts' to user events accordingly.

5. What is crossorigin in script tag?

- crossorigin is an attribute of the script tag
- Cross origin request sharing (CORS) is a mechanism that allows a server from a given domain to request for resources from some other domain.
- It is like a permission given to the browser.
- Generally, when a page is loaded in a browser, it enforces the Same-Origin policy: only resources from the same domain can be loaded. But, in some cases, external resources may be needed. CORS gives permissions to do this.
- Without CORS, different subdomains, ports, protocols too are not allowed.
- Assume origin1 and origin2. Initially there is a preflight call to the origin2 asking for permission. origin2 sends appropriate response that will allow the browser to do the relevant operation.
- OPTIONS header from origin1 - access-control-request-method, access-control-request-header, origin
- Additional headers from origin2 - access-control-allow-origin, access-control-allow-methods
- CORS helps in making web secure.

6. What is the difference between React and React DOM?

- React is a library for building user interfaces. The react package holds the react source for components, state, props and all the code that is react. React package contains: React.createElement, React.createClass, React.Component, React.PropTypes, React.Children
- React DOM is a library for rendering the React components to the DOM. The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render(). React-dom package contains: ReactDOM.render, ReactDOM.unmountComponentAtNode, ReactDOM.findDOMNode, and react-dom/server that's including: ReactDOMServer.renderToString and ReactDOMServer.renderToStaticMarkup.

7. What is difference between react.development.js and react.production.js files via CDN?

- react.development.js is the development version of React. It includes extra warnings about common mistakes, whereas react.production.min.js is the production version of React. It's optimized to be smaller and faster.

8. What is async and defer?

- async - The async attribute is used to load the script asynchronously. The script will be executed as soon as it is available. The async attribute is only for external scripts.

- defer - The defer attribute is used to load the script when the page has finished parsing. The defer attribute is only for external scripts.

- async and defer are two ways to load external scripts into the HTML in an efficient manner
- Generally in the two phases of HTML page loading: HTML parsing and Loading of the script - Async and Defer ensures that HTML page parsing does not wait for the scripts
- Async : Loads the scripts in parallel -> HTML parsing waits for JS execution -> Parsing continues once JS executions complete
- Async does not ensure the order of the JS execution. Can cause errors.
- Defer : Loads the scripts in parallel -> Waits for the HTML parsing to complete -> Excecutes the JS code
- Defer ensures the order of the JS excecution
- Prefer defer!

## Interview Question

1. React Overriding whatever is in root with render and not only showing what is in render()
