# AJAX Calls

The AJAX call is a request to a server to get some data. The server will respond with the data. The data can be in any format, but the most common format is JSON.

## Making AJAX Calls

AJAX calls are made using the `XMLHttpRequest` object. The `XMLHttpRequest` object is built into the browser. It is used to make HTTP requests to a server.

```js
const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();

request.addEventListener("load", function () {
  const [todo] = JSON.parse(this.responseText);
  console.log(todo);
});
```

The `XMLHttpRequest` object has a number of methods and properties that we can use to make AJAX calls.

| Method   | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| `open()` | Specifies the type of request                                    |
| `send()` | Sends the request to the server                                  |
| `onload` | Specifies a function to be executed when the request is complete |

## Open()

The `open()` method takes 3 parameters:

- The type of request (GET, POST, PUT, DELETE, etc.)
- The URL of the resource which is end point of the API
- A boolean value specifying whether the request should be made asynchronously

```js
request.open("GET", "https://jsonplaceholder.typicode.com/users");

// boolean value specifying whether the request should be made asynchronously
request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
```

## Send()

The `send()` method sends the request to the server. It takes one parameter, which is the data to be sent to the server.

```js
request.send();
```

## onload()

The `onload` property specifies a function to be executed when the request is complete. The `onload` property is a function that takes one parameter, which is the response from the server.

```js
request.onload = function () {
  console.log(this.responseText);
};
```

The `responseText` property contains the response from the server.

```js
request.onload = function () {
  console.log(this.responseText);
};
```
