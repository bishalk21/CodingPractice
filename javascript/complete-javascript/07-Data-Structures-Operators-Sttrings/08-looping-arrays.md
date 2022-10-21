# Loops

- A _loop_ is a structure that allow as to repeat the execution of a code block a lot of times

  - The number of repetitions will depend on the result of evaluating some condition, before (or after) of every iteration

- There are 4 types of loops in Javascript:

  - `while` loops
  - `do-while` loops
  - `for` loops
  - `for-in` loops

## `while` loop

<sub>[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)</sub>

```javascript
var i = 0;
while (i < 10) {
  i++;
}
```

<img src="img/bucle_while.png" alt="Bucle While JS" title="Bucle While JS" />

- `while` sentence is followed by a condition between parenthesis and a code block between braces.
  _While_ the condition evaluates to `true`, the code will be executed over and over.
  We need to assure the code inside the while forces the condition to be `false` at some point, to avoid infinite loops

## `do-while` loop

<sub>[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)</sub>

```javascript
var i = 0;
do {
  i++;
} while (i < 10);
```

- `do-while` loop is a little variation of `while` loop  
   `do` sentence is followd by a code block and a condition (w/ `while`) after that block.
  This implies the code block is executed at least once before evaluation the condition.

## `for` loop

<sub>[https://developer.mozilla.org/es/Referencia_de_JavaScript_1.5/Sentencias/for](https://developer.mozilla.org/es/Referencia_de_JavaScript_1.5/Sentencias/for) </sub>  
<sub>[http://blogs.sun.com/greimer/entry/best_way_to_code_a](http://blogs.sun.com/greimer/entry/best_way_to_code_a) </sub>  
<sub>[http://blogs.sun.com/greimer/resource/loop-test.html](http://blogs.sun.com/greimer/resource/loop-test.html) </sub>

```javascript
var punishment = "";
for (var i = 0; i < 100; i++) {
  punishment += "I will never do this again, ";
}
```

<img src="img/bucle_for.png" alt="Bucle For JS" title="Bucle For JS" />

- The structure of the `for` loop has 3 different parts (separated by `;`)

  - **Initialization** _(var i=0)_: Code that is executed before entering into the loop [O]
  - **Evaluation** _(i<100)_: While is evaluated to `true` we continue with the loop [C]
  - **Incremento** _(i++)_: Code that is executed after every iteration [++]

- `for` loops can be nested

Example:

```javascript
var res = "\n";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    res += "* ";
  }
  res += "\n";
}
```

## `for-in` loop

For-in loops are used to iterate over the properties of an object (or array).

<sub>[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) </sub>

```javascript
var a = ["a", "b", "c", "x", "y", "z"];
var result = "\n";
for (var i in a) {
  result += "index: " + i + ", value: " + a[i] + "\n";
}
```

- `for-in` loop is used to do actions over the elements of an array (or an object)
-

Although based on ES5 we can also use [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) and [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) and doing

```javascript
var obj = { first: "John", last: "Doe" };

// Visit non-inherited enumerable keys
Object.keys(obj).forEach(function (key) {
  console.log(key);
});
```

## for...of loop

For of loops are used to iterate over the elements of an iterable object (like an array or a string).

```javascript
var a = ["a", "b", "c", "x", "y", "z"];
var result = "\n";
for (var i of a) {
  result += "value: " + i + "\n";
}

const friends = ["Mike", "Stacy", "Andy", "Rick"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]); // Mike, Stacy, Andy, Rick
}

for (let friend of friends) {
  console.log(friend); // Mike, Stacy, Andy, Rick
}
```

- `for-of` loop is used to do actions over the elements of an array (or an object)
