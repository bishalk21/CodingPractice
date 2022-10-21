# Nullish Coalescing Operator (??)

Nullish Coalescing Operator is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

It almost works as the OR operator, but it doesn't return the right-hand side operand if the left-hand side operand is `false`.

Nullish Coalescing Operator Table:

| A         | B     | A ?? B |
| --------- | ----- | ------ |
| null      | true  | true   |
| undefined | true  | true   |
| false     | true  | false  |
| 0         | true  | 0      |
| ""        | true  | ""     |
| null      | false | false  |
| undefined | false | false  |
| false     | false | false  |
| 0         | false | 0      |
| ""        | false | ""     |
| true      | false | true   |

```js
null ?? "default"; // "default"
undefined ?? "default"; // "default"
false ?? "default"; // false
0 ?? "default"; // 0
"" ?? "default"; // ""
```
