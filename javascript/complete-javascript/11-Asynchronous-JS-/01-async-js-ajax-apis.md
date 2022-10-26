# Asynchronous JavaScript and AJAX APIs

## Synchronous vs Asynchronous

### Synchronous

- executes line by line
- waits for the previous statement to get executed first
- long running code will block the code execution
- Path: CodingPractice/javascript/complete-javascript/11-Asynchronous-JS-/00-async-vs-sync.md:

```JavaScript
console.log('I');
console.log('eat');
console.log('ice-cream');
```

> It will print `I` first, then `eat`, after that `ice-cream`

### Asynchronous

- executes immediately without blocking the code, so called non-blocking
- code is executed after a task that runs in the background is completed
- execution doesn't wait for an asynchronous task to complete
- callback functions do not make the code asynchronous

```JavaScript
console.log('I');
setTimeout( () => {
    console.log('eat');
}, 2000);
console.log("Ice Cream");
```

It will print

```js output
"I"
"Ice Cream" (will execute immediately)
"eat" (will print after 2 seconds later)
```

## AJAX

- Asynchronous JavaScript and XML
- allows us to communicate with remote web servers in an asynchronous way.
- we can request data from a web server and load the data into our web page without reloading the page, dynamically.

### How AJAX works?

client(browser) --------request(data--GET/POST)--------> server (web APIs) ----response(data)----> client(browser)

### APIs

- Application Programming Interface
- piece of software that can be used by another piece of software, in order to allow applications to talk to each other

There are two types of APIs in web development:

- Browser APIs: APIs built into the browser (e.g. DOM, Geolocation, Local Storage, etc.)
- Third-party APIs: APIs provided by third-party developers (e.g. Google Maps, Twitter, etc.)

### Online APIs

- Application running on server, that receives requests from client and sends back responses

We can build our own APIs. (requires server-side programming with Node.js) or use third-party APIs.

Most APIs uses JSON format to send data.

### JSON

- JavaScript Object Notation
- lightweight data-interchange format
- easy for humans to read and write
- easy for machines to parse and generate
- JSON is a syntax for storing and exchanging data

JSON is built on two structures:

- A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
- An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
