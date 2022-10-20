# Hoisting and The TDZ

## Hoisting

Hoisting is a JavaScript mechanism (default behavior) where (all declarations) variables and function declarations are moved to the top of their scope before code execution.

Before execution, code is scanned for variable and function declarations, and for each declaration, a memory space is created in the variable environment.

| properties                               | Hoisted | Initial value                     | Scope    |
| ---------------------------------------- | ------- | --------------------------------- | -------- |
| function declaration                     | Yes     | function definition               | block    |
| variable declaration                     | Yes     | undefined                         | function |
| let and const declaration                | No      | <uninitialized>, TDZ (temporal)   | block    |
| function expressions and arrow functions |         | Depends if using const/let or var |          |

```js
console.log(a); // undefined
var a = 10;
```

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

## why hoisting?

- no mattter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
- using functions before actual declaration of all other functions and variables is possible in JavaScript.
- var hoisting is just a byproduct of how the JavaScript engine works

## The TDZ

The Temporal Dead Zone (TDZ) is a JavaScript concept that restricts access to variables before they are declared.

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

## Why TDZ?

- To prevent accessing variables before they are declared.
- To prevent accessing variables before they are initialized.
- makes it easier to catch bugs or avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
- most const variables actually are not constant, they are just not reassigned.

## Key points

let doesn't create properties onto the window object

let respects block scope

const follows same rules as let

const only makes top level variable immutable - if you make an array or object the insides can be changed

Temporal dead zone

you can't use that variable in that scope until its defined later on in the page

# more

# Hoisting in JavaScript

`Hoisting` simple gives higher specificity to javascript declarations. Thus, it makes the computer read and process declarations first before analyzing other code in program.

`Note:` Hosting does not mean JavaScript rearranges or move code above one anothers. <br>

E.g.

```JavaScript
console.log(name); // Uncaught ReferenceError: name is not defined
let name = 'Deepa';
```

> variables declared with let and const are hoisted but not initialized with a default value.

> Accessing let or const before it's declared will give: Uncaught ReferenceError: can't access before initialization <br>

> Remember the error message tells variable is initialized somewhere.

## Variable hoisting with var

When interpreter hoists a variable declared with var, it initialized its value to undefined, unlike let or const. <br>
E.g.

```JavaScript
console.log(name); // undefined
var name = 'deepa';
console.log(name); // deepa
```

Now let's analyze this behaviour:

```JavaScript
var name;
console.log(name); // undefined
name = 'partha';
console.log(name); // partha
```

> Remember, the first **console.log(name)** outputs **undefined** because name is **hoisted**, and given a default value (not because variable is never declared). <br>

> Using **undefined** variable will throw **ReferenceError**

```JavaScript
console.log(name); // Uncaught ReferenceError: name is not defined
```

Now let's see if we don't declare var what happens.

```JavaScript
console.log(name); // partha
name = 'partha';
```

**name** = assigning a variable that's not declared is valid. <br>

> JavaScript let us access variable before they're declared. This behaviour is an unusual part of javascript and can lead to errors. <br>

> Using variable before it's declaration is not desirable.

## The temporal Dead Zone

The reason why we get reference error when we try to access let or const before its declaration is `Temperal Dead Zome` <br>

- The **TDZ** starts at beginning of the variables enclosing scope and ends when it is declared. <br>
- Accessing variable in **TDZ** gives ReferenceError <br>

E.g.

```JavaScript
{
    // start of foo's TDZ
    let bar = 'bar';
    console.log(bar); // bar
    console.log(foo); // ReferenceError: // Because we're in TDZ
    let foo = 'foo';
    // end of foo's TDZ
}
```

- type of **TDZ** for let or const: `ReferenceError`
- type of **TDZ** for var: `undefined`

## Functional Hoisting

Function declarations are hoisted too. Function hoisting allows us to call function before it is declared or defined.

```JavaScript
foo();
function foo() {
    console.log('foo'); // foo
}
```

`Note:` only function declaration are hoisted not function expressions. <br>
E.g.

```JavaScript
foo(); // Uncaught TypeError: foo is not a function
var foo = function() {

}

bar(); // Uncaught ReferenceError
let bar = function() {

}
```

**Uncaught ReferenceError:** can't access 'bar' before initialization similarly for `const`.

## For function that is never declared:

```JavaScript
foo(); // Uncaught ReferenceError: foo is not defined
```
