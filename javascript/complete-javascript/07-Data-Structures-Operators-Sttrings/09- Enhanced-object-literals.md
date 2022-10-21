# Enhanced Object Literals

Object literals are a way to create objects in JavaScript. They are a very useful way to create objects, but they can be improved. In this section we will see how to improve object literals.

Object Literals Enhancement is used to group variables and functions from the global scope and form them into javascript objects.

## Enhanced Object Literals

In ES6, we can use the following syntax to create objects:

```JavaScript
// old way
const name = 'Bishal';
const age = 25;
const person = {
    name: name,
    age: age
};
console.log(person); // {name: 'Bishal', age: 25}

// new way or enhanced object literals
const name = 'Bishal';
const age = 25;
const person = {
    name,
    age
};
console.log(person); // {name: 'Bishal', age: 25}
```

- No longer need to write the property name and value separately.
- in case of function, we can write the function name and value separately.

```JavaScript
// old way
const person = {
    name: 'Bishal',
    age: 25,
    greet: function() {
        console.log('Hello');
    }
};
console.log(person); // {name: 'Bishal', age: 25, greet: ƒ}

// new way or enhanced object literals
const person = {
    name: 'Bishal',
    age: 25,
    greet() {
        console.log('Hello');
    }
};
console.log(person); // {name: 'Bishal', age: 25, greet: ƒ}
```
