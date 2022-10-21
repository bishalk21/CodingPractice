# Short-Circuiting

Short circuiting can be achieved using and (`&&`) and or (`||`) operators.

It refers to using a shortcut and not always evaluating a second operand. If the first operand is sufficient to determine the value of the expression in JavaScript, results in execution of statements using short-circuiting!

Short-circuiting can only happen in explicit booleans in JavaScript; it cannot happen for compound expressions containing booleans.

Properties of logical operators:

- can use any data type, return any data type
- return the first falsy value or the last truthy value
- short-circuiting

## AND (&&)

And (`&&`) operator returns the values of its operands. If the first operand can be converted to false, returns the first operand. Othewise the second will be returned, irrespective of whether it evaluates to true or false.

And Operator returns the first falsy value or the last truthy value.

And Operator Table:

| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

```js
false && true; // false
true && false; // false
true && !"non-empty-string"; // false
false && "non-empty-string"; // false
undefined && true; // undefined
true && true; // true
false && false; // false
undefined && undefined; // undefined
number && "number"; //
```

## OR (||)

Or (`||`) operator returns the values of its operands. If the first operand can be converted to true, returns the first operand. Othewise the second will be returned, irrespective of whether it evaluates to true or false.

Or Operator returns the first truthy value or the last falsy value.

Or Operator Table:

| A     | B     | A \|\| B |
| ----- | ----- | -------- |
| true  | true  | true     |
| true  | false | true     |
| false | true  | true     |
| false | false | false    |

```js
false || true; // true
true || false; // true
true || !"non-empty-string"; // true
false || "non-empty-string"; // "non-empty-string"
undefined || true; // true
true || true; // true
false || false; // false
undefined || undefined; // undefined
number || "number"; //
```
