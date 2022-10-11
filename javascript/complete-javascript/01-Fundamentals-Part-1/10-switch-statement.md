# Switch Statement

- Switch statements are used to execute different code based on different conditions.
- Switch statements are often used together with a break or a default keyword (or both).
- The break keyword breaks out of the switch block.
- The default keyword specifies some code to run if there is no case match.

Syntax

```js
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- Each `case` statement is equivalent to `===`
