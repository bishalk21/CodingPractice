# Intro to Functions

# Functions

- Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.
- A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
  - The name of the function.
  - A list of parameters to the function, enclosed in parentheses and separated by commas.
  - The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas:
  - Parameter names are used to **pass values** to the function.
  - Parameter names are listed inside the parentheses () in the function definition.
- The code to be executed, by the function, is placed inside curly brackets: {}.

## Syntax

```js
function name(params) {
  // code block
}
```

## Function Declaration

- A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
  - The name of the function.
  - A list of parameters to the function, enclosed in parentheses and separated by commas.
  - The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

## Function Expression

- function expressions are often stored in variables in order to refer to them.
- A function expression is very similar to and has almost the same syntax as a function declaration (see above). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. Function expressions are convenient when passing a function as an argument to another function.

```js
const square = function (number) {
  return number * number;
};
```

## Note

- Function expressions are not hoisted. A function expression is not accessible before it is defined. A function declaration can be called before it is defined.

```js
sayGreeting(); // sayGreetings is not a function
var sayGreeting = function () {
  console.log("hello");
};
```

## Parameter vs argument

- Parameter: a variable name that appears in the function declaration. It is used to hold the value of the argument that is passed to the function when it is invoked.
- Argument: a value that appears in the code when the function is invoked.
- Parameters are always passed by value.

## Return value

- A function always returns some value back to the caller.
- When return value is not specified, the function will return `undefined`.
  - E.g. `console.log`

## Scope

- Global scope
  - Variables defined outside of an function
- Function scope

## Shadowing

- Global variable can be overriden inside a function.
- Preventable by redeclaring the same variable in the function.

```js
// shadowing
var a = "a";
var b = "b";
function shadow() {
  a = "c"; // shadowing
  var b = "c"; // no shadowing
}

console.log(a); // a
console.log(b); // b
shadow();
console.log(a); // c, shadowed
console.log(b); // b
```

## Hoisting

- Before any JavaScript is executed, all function declarations are "hoisted" to the top of their current scope.
- Functions can be called before they are defined in a scope.
- Only declaration is hoisted. Assignment is not. So hoisted variables can still be undefined.
- The best practice is to define functions at the top of the scripts, and variables at the top of the functions.

```js
// only declaration is hoisted
function sayGreeting() {
  console.log(greeting);
  var greeting = "hello";
}
sayGreeting(); // undefined

// equivalent function
function sayGreeting() {
  var greeting;
  console.log(greeting);
  greeting = "hello";
}

// hoisting prevents access of global variable
var greeting = "hello";
function sayGreeting() {
  console.log(greeting); // undefined
  var greeting = "hello2";
}
sayGreeting(); // undefined
```

## Function as parameters

- A function passed into another function is called a **callback**.

## Function expressions

- A function stored in a variable.
- Anonymous function.

```js
var variable = function (params) {
  // anonymous function body
};

variable();
```

- Use the variable name to call the function.
- Function expressions are not hoisted.

```js
sayGreeting(); // sayGreetings is not a function
var sayGreeting = function () {
  console.log("hello");
};

// equivalent code
var sayGreeting;
sayGreeting();
sayGreeting = function () {
  console.log("hello");
};
```

## Named function expressions

```js
var variable = function name(params) {
  // function body
};
variable();
// call name() gives an error
```

## Inline function expressions

- Using function expressions that pass a function into another function inline, is really common in JavaScript.

```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

- Anonymous inline function expressions are often used for function callbacks that are not going to be reused elsewhere.

```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function (movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

# Callback Functions

A `Callback functions` is function that is performed after another function has completed its execution. <br>

- It is typically supplied as an input to other function.
- **Callbacks** are critical to understand, as they are used in array methods (such as **map()**, **filter()**, and so on), **setTimeout**, **eventlisteners** (such as **click**, **scroll**). <br>

E.g.

```JavaScript
function orderPizza(type, name, callback) {
    console.log('Pizza ordered');
    console.log('Pizza is on preparation');

    setTimeout(function() {
        let msg = `Your ${type} ${name} Pizza is ready`;
        callback(msg);
    }, 3000);
}
```

Now Invocation of orderPizza:

```JavaScript
orderPizza('veg', 'cheese', function (message) {
    console.log(message);
});
```

**Important points to Note:**

- JavaScript function can accept other function as arguement.
- passing function as arguement is powerful programming concept that can be used to notify caller that something happened. <br> It is also known as **callback function**.
- Nesting too many callback function is not a great idea and it creates callback hell.

## JavaScript Map

The **Array.map()** allows you to iterate over array using loop.

- This method allows you to **iterate** and **modify** its elements using a callback function.
- The callback function will then be executed on **each of array's element.** <br>

**For example:** <br>
Now Imagine you have to multiply each element of array by 3.<br>
You can use **for loop** also like this,

```JavaScript
let arr = [2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3;
}
console.log(arr); // [ 6, 9, 12, 15, 18 ]
```

By using **map** it will look like this,

```JavaScript
let arr = [2, 3, 4, 5, 6];
let modifiedArr = arr.map(function(el){
    return el * 3;
});
console.log(modifiedArr); // [ 6, 9, 12, 15, 18 ]
```

## How to use Map over Array of Object

```JavaScript
let users = [
    { firstName: 'Deepa', lastName: 'Chaurasia' },
    { firstName: 'Devesh', lastName: 'Chaurasia' },
    { firstName: 'Crescent', lastName: 'Partha' }
];

// you can iterate as follow
let userFullNames = users.map(function(el){
    return `${el.firstName} ${el.lastName}`;
});

console.log(userFullNames);
// ['Deepa Chaurasia', 'Devesh Chaurasia', 'Crescent Partha']
```

## The complete map() method syntax

The syntax of **map()** as follows: <br>
`arr.map(function(element, index, array{}, this);` <br>

- The **Callback function()** is called on each array element, and the map() method always passes the current element, the index of current element and whole array object to it.
- The **this** arguement will be used inside **Callback function**.
- By default it's value is **undefined**. <br>

E.g.

```JavaScript
let arr = [2, 3, 5, 7];
arr.map(function(element, index, array){
    console.log(this) // 80
}, 80);
```

Here, you can see this value is **80** which is **default** value.

## Reduce Method in JavaScript

**Use it When:** You have array of numbers, you want to add them all. <br>
E.g.

```JavaScript
const num = [23, 29, 40, 30];
const sum = num.reduce((total, amount) => total + amount);
console.log(sum) // 122
```

## filter() and find() in JavaScript

`filter()` provides new array depending on certain criteria. <br>

Unlike **map()**, it can alter size of new array, whereas **find()** return just a single instance. <br>

E.g.

```JavaScript
let users = [
    { firstName: 'Ram', age: 15 },
    { firstName: 'Shyam', age: 17 },
    { firstName: 'Jodu', age: 25 }
];
```

You could choose to **sort** these data by age groups, such as young (1-15) adult (15-50). <br>

Like this,

```JavaScript
const youngPeople = users.filter((person) => {
    return person.age <= 15;
});
const adult = users.filter((person) => {
    return person.age >= 50;
});

console.log(youngPeople); // [{firstName: 'Ram', age: 15}]
console.log(adult); // []
```

And the example of **find** goes like this,

```JavaScript
const ram = users.find((person) => person.firstName === 'ram');
console.log(ram); // undefined
```

## Unique Value - set() in JavaScript

```JavaScript
let animals = [
    { name: 'Lion', category: 'wild' },
    { name: 'Dog', category: 'pet' },
    { name: 'Cat', category: 'pet' }
];
```

If we loop through **map**, we will get repeated value. <br>
But we don't want repeated value here, So we will use Unique value - **set()** <br>
E.g.

```JavaScript
let category = [...new Set(animals.map((animal) => animal.category))];
console.log(category); // [wild, pet]
```
