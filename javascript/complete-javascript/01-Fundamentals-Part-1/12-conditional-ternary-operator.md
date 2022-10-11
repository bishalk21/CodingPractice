# Conditional or Ternary Operator

- The conditional operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

```js
// condition ? exprIfTrue : exprIfFalse
```

- The following example uses the conditional operator to assign a value to a variable.

```js
var age = 20;
var canDrive = age > 16 ? "yes" : "no";
```
