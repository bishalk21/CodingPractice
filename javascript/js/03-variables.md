# What is variables?

- variables are containers for storing data values

# How `var`, `let` and `const` keywords works in JavaScript

Earlier, pre-ES6 era, only **var** keyword was introduced for declaration of variable. <br>
With ES6, the **let** and **const** keyword introduced.

## How to declare variables in JavaScript

> without keywords, It is same as **var** and not allowed in **'strict'** mode.

```JavaScript
// without keyword
name = 'Jack';

// using var
var price = 100;

// using let
let isPermanent = false;

// using const
const publication = 'Article';

console.log(name, price, isPermanent, publication); // Jack 100 false Article
```

**We will discuss:**

- Scope
- Reassigning new value
- When you access a variable before declaring it

## Variable Scope in JavaScript

The variable may exist in a **block**, **inside function** or **outside function**. <br>

A `block` is section of code inside { } <br>

```JavaScript
// It has Block Scope
{
    let name = 'John Kabir';
}
```

A function is a bunch of code you want to place logically together. <br>
It is declared using **function** keyword.

```JavaScript
// It has Function Scope
function test() {
    let name = 'Tahsan';
}
```

Everything declared outside of block and function is **global Scope**.<br>

```JavaScript
// It has Global Scope
const skyColor = 'blue';

{
    console.log(skyColor); // blue
}

function printSkyColor() {
    console.log(skyColor); // blue
}
printSkyColor();
```

So, there are three types of Scope:

1. Block Scope
2. Function Scope
3. Global Scope

The three keyword **var**, **let** and **const** work around these scopes.

## How to use JavaScript Variable in Global Scope

We can use **var**, **let** and **const** to declare global variable. But it is recommended not to do it. By doing this, variable are accessible everywhere. <br>
So to restrict scope of variable using **var**, **let** and **const** keywords, here's order of accessibility in scope starting with lowest:

- `var`: The functional Scope level
- `let`: The Block Scope level
- `const`: The Block Scope level

<!-- ![Variable Scope](images/scope.jpg#gh-dark-mode-only) -->

<p align="center">
  <img src="images/scope.jpg" />
</p>

## How to Reassign a new value to variable in JavaScript

You can reassign **var** or **let** variables, but you can't reassign a new value to **const** variable. <br>
`(const = constant)` <br>

**One Tricky part** <br>

When object is declared and assigned value with const, you can still change value of its properties. <br>

But you can not reassign any object value to same variable.

## When you access a variable before declaring

With var in **non-strict mode**, the variable will have an undefined value. <br>
This means variable declared but not assigned. <br>

In **strict mode**, you will get ReferenceError that variable is not declared. <br>
With let and const, you will always get ReferenceError.

<p align="center">
  <img src="images/scope2.jpg" />
</p>

**Some Tips:**

- Don't use **var**
- Use **let** or **const**
- Use **const** more often
- Use **let**, when you need to reassign
