# This Keyword in JS

- The `this` keyword is a special keyword in JavaScript which is used to refer to the current object.
- is not static. It depends on how a function is called, and its value is only assigned when a function is actually called.

# The JavaScript `this` keyword

In JavaScript, **this** keyword allows us to

- **Reuse functions** in different execution contexts. It means, a function once defined can be invoked for different objects using this keyword.
- **Identifying the object** in the current execution context when we invoke a method.

The **this** keyword is very closely associated with JavaScript functions. <br>
When it comes to this, the fundamental thing to understand where a function is invoked.
Because we don't know this keyword until the function is invoked.<br>

## Method Invocation

When a function is invoked as a method of an object, **this** is bound to that object.

this = object that is invoking the function

```js
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`); // here this refers to person object
  },
};

person.greet(); // Hello, my name is John
```

## Function Invocation

When a function is invoked as a function, **this** is bound to the global object.

this = global object (window in browser) or undefined (strict mode)

```js
function greet() {
  console.log(`Hello, my name is ${this.name}`); // here this refers to global object
}

greet(); // Hello, my name is undefined
```

## Constructor Invocation

When a function is invoked as a constructor, **this** is bound to the newly created object.

this = newly created object

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`); // here this refers to newly created object
  };
}

const person = new Person("John", 30);
person.greet(); // Hello, my name is John
```

## Arrow Function Invocation

When a function is invoked as an arrow function, **this** is bound to the current context.

this = current context or this of surrounding function (lexical this)

```js
const person = {
  name: "John",
  age: 30,
  greet: () => {
    console.log(`Hello, my name is ${this.name}`); // here this refers to global object
  },
};

person.greet(); // Hello, my name is undefined
```

## Event Listener Invocation

When a function is invoked as an event listener, **this** is bound to the element that received the event.

this = element that received the event or DOM element that handler is attached to

```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // here this refers to button element
});
```

## new, call, apply, bind Invocation

When a function is invoked using new, call, apply, bind, **this** is bound to the object passed as the first argument.

this = object passed as the first argument

```js
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`); // here this refers to person object
  },
};

const person2 = {
  name: "Jane",
  age: 25,
};

person.greet.call(person2); // Hello, my name is Jane
```

## Types of Binding in JavaScript

- Default Binding
- Implicit Binding
- Explicit Binding
- Constructor Call Binding

## Default Binding in JavaScript

One of the first rule to remember is that if the function housing a this reference is **standalone function**, then that function is bound to the **global object**. <br>
For Example:<br>

```JavaScript
// Standalone Function
function alert() {
    console.log(this.name + 'is calling');
}
const name = 'deepa';
alert(); // is calling
```

As you can see, name() is a **standalone**, unattached function, so it is bound to the global scope. <br>
As a result **this.name** reference resolves to the global variable `const name = 'deepa'`. <br>
This rule doesn't hold if name() were to be defined in strict mode. <br>
It will output `// TypeError: 'this' is undifined` <br>

## Implicit Binding in JavaScript

According to **binding rule** in JavaScript, a function can use an object as its context only if that object is bound to it at call site. <br>
For Example: <br>

```JavaScript
function alert() {
    console.log(this.age + ' years');
}
const myObj = {
    age: 24,
    alert: alert
}
myObj.alert() // 24 years
```

When you call a function using **dot notation**, this is implicitly bound to the object the function is being called from.
In this example Since **alert** is being called from myObj, the this keyword is bound to myObj. <br>
So when alert is called with **myObj.alert()**, then **this.age** is set 22, which is age property of myObj. <br>
Another Example:<br>

```JavaScript
function alert() {
    console.log(this.age + ' years');
}
const myObj = {
    age: 24,
    alert: alert,
    nestedObj: {
        age: 26,
        alert: alert
    }
}
myObj.alert(); // 24 years
myObj.nestedObj.alert(); // 26 years
```

# Explicit binding in JavaScript

If we want to force a function to use an object as its context without putting a property function reference to object. <br>
We have **2 utility methods**:

- **call()**
- **apply()**

Along with other set of utility functions, these 2 utilities are available to all functions in JavaScript via **[[Prototype]]** mechanism. <br>
To explicitly bind a function call to context, you simply invoke a **call()** on that function and pass in context object as parameter. <br>
For Example:<br>

```JavaScript
function alert() {
    console.log(this.age + ' years');
}
const myObj = {
    age: 24
}
alert.call(myObj); // 24 years
```

Even if you were to pass around the function multiple times to new variables, every invocation will use same context because it has been locked (explicitly bound) to that object. <br>
&nbsp;&ensp;&emsp;This is called **hard binding** <br>
For Example:<br>

```JavaScript
function alert() {
    console.log(this.age);
}
const myObj = {
    age: 24
}
const bar = function() {
    alert.call(myObj);
}
bar(); // 24
setTimeout(bar, 100); 24
// a hard bound 'bar' can no longes have it's 'this' context overridden
bar.call(window); // 24
```

**Hard binding** is perfect way to lock a context into a function call and truly make that function into a method. <br>

# Constructor Call Binding in JavaScript

When a function is invoked with **new keyword** in front of it, known as **constructor call**, following things occur.

- A brand new object is created
- The newly constructed object is **[[Prototype]]** - linked to the function that constructed it.
- The newly constructed object is set as the this binding for that function call.

For Example: <br>

```JavaScript
function giveAge(age) {
    this.age = age;
}
const bar = new giveAge(24);
console.log(bar.age); // 24
```

By calling **giveAge(...)** with **new** in front of, we've constructed a new object and set the new objects as the this for call. <br>
So **new** is final way that you can bind a function call's this. <br>

## JavaScript **this** keyword - Explained

Where it's Used:
[`Image_1`](https://www.freecodecamp.org/news/content/images/2021/06/12.png "What does 'this' mean in JavaScript?") | [`Image_2`](https://www.freecodecamp.org/news/content/images/2021/06/13.png "The 'this' keyword explained with examples")

This references the execution context of a function's call

depending on how a function is being called - `this` will change

You can see how the function is called during run-time.

In what ways can you execute functions?

with `()` on the function. can use `call` that lives on the prototype. the `new` keyword will invoke a function

Alot of people say "look to the left of the dot" when trying to understand what this is

invoking a function with `this` without a context will make `window` the context

**var puts variables on the window object**

    window.setInterval(person.getName, 3000) // will break because the context is setInterval

You _can_ explicitlty invoke `this`

**The way I remember the diff between call and apply is c is comma separated and a is for array**

---

new keyword only invokes constructors right ? It can’t invoke anyother function2 separate questions ^
From Lucas Minter to Everyone: (02:08 PM)Why use `this` at all then? Seems like it is just confusing things. Why not just use `person`?

It's a really powerful tool, it's dynamic. once you understand it, that power is yours.

It gives us flexibility of using the context that the
From Anushree Subramani to Everyone: (02:08 PM)You should have that flexibility to invoke the functions in different contexts. Thats why

From Blake Johnson to Everyone: (02:09 PM)this.value.firstname would work for that nested example
From KD Singh to Everyone: (02:10 PM)Is window the top most level context in Js?
From Blake Johnson to Everyone: (02:10 PM)Yes, in the browser
From Blake Johnson to Everyone: (02:10 PM)Js on the server like node it is global
