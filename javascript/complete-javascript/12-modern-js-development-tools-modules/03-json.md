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

# JSON

<sup>[http://json.org/json-es.html](http://json.org/json-es.html)</sup>

```javascript
    {
    "name": "Eric Clapton",
    "occupation": "Guitar Hero",
    "bands": ["Cream", "Blind Faith"]
    }
```

- **JSON (Javascript Object Notation)** is a format for data exchange based on the literal notation of Javascript for the representation of objects, arrays, strings, booleans and numbers  
  <sup>[http://tools.ietf.org/html/rfc4627](http://tools.ietf.org/html/rfc4627)</sup>

- Advantages of this format versus XML :

  - It's Lighter (its structure needs less elements that XML), that's why is ideal for AJAX requests
  - It's easier to transform to a Javascript object

  <sup>[http://ajaxian.com/archives/json-vs-xml-the-debate](http://ajaxian.com/archives/json-vs-xml-the-debate)</sup>  
   <sup>[Stop Comparing JSON and XML](http://www.yegor256.com/2015/11/16/json-vs-xml.html)</sup>

- Particularities of _JSON format_ vs literal notation of Javascript:

  - Pairs key-value always go with double quotes
  - JSON can represent 6 types of values: objects, arrays, numbers, strings,
    booleans and null
  - Dates are not recognised as data types
  - Numbers cannot be preceeded by 0 (but decimals)

  <sup>[http://www.jsonlint.com/](http://www.jsonlint.com/)</sup>

- JSON strings must be converted to Javascript objects so they can be used (and the opposite).
  To do this we can use:

  - [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval): Is note recommended using it directly
  - [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Converts a JSON string in an Javascript object - [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Converts a Javascript object into a JSON string - [`jQuery.parseJSON`](http://api.jquery.com/jQuery.parseJSON/): with jQuery we can also do the JSON parse

    JSON object (and its methods `JSON.parse` and `JSON.stringify`) are available natively in all [browsers compatible with ECMAScript 5](http://kangax.github.io/compat-table/es5/)

    <sup>[http://json.parser.online.fr/](http://json.parser.online.fr/)</sup>
    <sup>[https://developer.mozilla.org/En/Using_JSON_in_Firefox](https://developer.mozilla.org/En/Using_JSON_in_Firefox)</sup>

```javascript
>>> JSON.parse('{"bar":"new property","baz":3}')
Object { bar="new property", baz=3}
```

```javascript
>>> JSON.stringify({ breed: 'Turtle', occupation: 'Ninja' });
"{"breed":"Turtle","occupation":"Ninja"}"
```
