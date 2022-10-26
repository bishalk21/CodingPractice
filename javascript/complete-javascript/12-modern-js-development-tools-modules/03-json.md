# JSON

- JavaScript Object Notation
- lightweight data-interchange format

### Uses

- data is stored and transmitted in text format
  - easy to read
  - easy to parse and generate
  - can be used with any programming language

### Where is JSON used?

- APIs
- AJAX
- Web Storage
- Web Sockets
- Mobile Apps
- IoT

### JSON Syntax

- JSON syntax is derived from JavaScript object notation syntax
- JSON data is in name/value pairs
- JSON data is separated by commas
- JSON braces hold objects
- JSON brackets hold arrays

```json
{
  "name": "John",
  "age": 30,
  "cars": [
    { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
    { "name": "BMW", "models": ["320", "X3", "X5"] },
    { "name": "Fiat", "models": ["500", "Panda"] }
  ]
}
```

### JSON Data Types

- JSON supports the following data types:
  - string
  - number
  - object (JSON object)
  - array
  - boolean
  - null

## JSON Methods

### JSON.parse()

- parses a JSON string, constructing the JavaScript value or object described by the string

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count); // 42
console.log(obj.result); // true
```

### JSON.stringify()

- converts a JavaScript value to a JSON string

```js
const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);

console.log(myJSON); // {"name":"John","age":30,"city":"New York"}
```
