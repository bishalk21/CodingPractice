# Express JS

Q. What is Express js?

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Q. How is Express js used in MERN stack?

Express is used as the backend framework for MERN stack.

Q. What is the difference between Express and Node js?

Express is a web application framework that sits on top of Node.js. Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a browser.

Q. What are the features of Express js?

- Allows to set up middlewares to respond to HTTP Requests.
- Defines a routing table which is used to perform different actions based on HTTP Method and URL.
- Allows to dynamically render HTML Pages based on passing arguments to templates.

## req.body, req.params and req.query

- req.body: Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
- req.params: Contains key-value pairs of URL parameters.
- req.query: Contains key-value pairs of query string parameters.

## Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

## Routing

Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing.

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

```js
app.METHOD(PATH, HANDLER);
```

Where:

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

## Route handlers

Route handlers define the logic to execute when a route is matched. Route handlers can be provided in the following ways:

- As a function.
- As an array of functions.
- As a combination of both.

## Route paths

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

The characters ?, +, \*, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.

## Route methods

A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.

```js
app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});
```

## Response methods

The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

## HTTP Methods in Express Server

- GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
- POST: The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
- PUT: The PUT method replaces all current representations of the target resource with the request payload.
- DELETE: The DELETE method deletes the specified resource.

## req.body

req.body is an object. It contains key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).

```js
app.use(express.urlencoded({ extended: true }));
```

## req.params

req.params is an object. It contains properties mapped to the named route “parameters”.

```js
app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});
```

## req.query

req.query is an object. It contains a property for each query string parameter in the route.

```js
app.get("/search", function (req, res) {
  res.send(req.query);
});
```

## Express Router

The Express router is a class which helps you create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

```js
const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/", function (req, res) {
  res.send("Birds home page");
});

// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

module.exports = router;
```

## Express Static

The express.static built-in middleware function in Express serves static files and is based on serve-static.

```js
app.use(express.static("public"));
```

## Express Error Handling

Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

## Express Generator

Express Generator is a command-line tool that creates a new Express application. It creates a new directory, installs the Express application, and creates boilerplate files.

```js
npm install express-generator -g

express --view=pug myapp

cd myapp

npm install

npm start
```
