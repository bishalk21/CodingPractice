# Logical Assignment Operators

The logical assignment operators are a new addition to the JavaScript language. They are a combination of the logical operators and the assignment operators. They are used to assign a value to a variable based on some condition.

## Logical AND assignment (&&=)

The logical AND assignment operator (`&&=`) assigns a value to a variable only if the variable contains a falsy value.

```js
let x = 0;
x &&= 10;
console.log(x); // 0
```

The AND Logical Operator Table:

| A         | B         | A && B    |
| --------- | --------- | --------- |
| 0         | 10        | 0         |
| 1         | 10        | 10        |
| true      | false     | false     |
| true      | true      | true      |
| false     | true      | false     |
| false     | false     | false     |
| ""        | "hi"      | ""        |
| "hi"      | ""        | ""        |
| "hi"      | "hi"      | "hi"      |
| null      | 10        | null      |
| 10        | null      | null      |
| undefined | 10        | undefined |
| 10        | undefined | undefined |
| null      | null      | null      |
| undefined | undefined | undefined |
| null      | undefined | undefined |
| undefined | null      | undefined |
| 0         | 0         | 0         |
| 1         | 0         | 0         |
| 0         | 1         | 0         |
| 1         | 1         | 1         |
| 0         | ""        | 0         |
| 1         | ""        | 1         |
| ""        | 0         | 0         |
| ""        | 1         | 1         |
| ""        | ""        | ""        |
| 0         | false     | 0         |
| 1         | false     | 0         |
| false     | 0         | 0         |
| false     | 1         | false     |
| false     | false     | false     |
| 0         | null      | 0         |
| 1         | null      | 1         |
| null      | 0         | 0         |
| null      | 1         | 1         |
| null      | null      | null      |
| 0         | undefined | 0         |
| 1         | undefined | 1         |
| undefined | 0         | 0         |
| undefined | 1         | 1         |
| 0         | "0"       | 0         |
| 1         | "0"       | 1         |
| "0"       | 0         | "0"       |
| "0"       | 1         | "0"       |
| 0         | "1"       | 0         |
| 1         | "1"       | 1         |

## Logical OR assignment (||=)

The logical OR assignment operator (`||=`) assigns a value to a variable only if the variable contains a truthy value.

```js
let x = 0;
x ||= 10;
console.log(x); // 10
```

The OR Logical Operator Table:

| A     | B     | A \|\| B |
| ----- | ----- | -------- |
| 0     | 10    | 10       |
| 1     | 10    | 1        |
| true  | false | true     |
| true  | true  | true     |
| false | true  | true     |
| false | false | false    |
| ""    | "hi"  | "hi"     |
| "hi"  | ""    | "hi"     |
| "hi"  | "hi"  | "hi"     |

## Logical Nullish assignment (??=)

Logical Nullish assignment operator (`??=`) assigns a value to a variable only if the variable contains a `null` or `undefined` value.

```js
let x = 0;
x ??= 10;
console.log(x); // 0
```

The Nullish Logical Operator Table:

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
