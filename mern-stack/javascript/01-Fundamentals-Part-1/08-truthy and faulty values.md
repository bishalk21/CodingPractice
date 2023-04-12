## Truthy values and falsy values

- Every value in JavaScript has an inherent boolean value.
- Falsy values
  - `false`
  - `""`
  - `null` type
  - `undefined` type
  - `0`
  - `NaN`
- Truthy values
  - Everything else
  - `0.0`
  - `"null"`

## Truthy Values

- truthy values are values that are considered true when encountered in a boolean context
- all values are truthy unless they are defined as falsy (i.e. except for false, 0, "", null, undefined, and NaN)

| Value        | Description |
| ------------ | ----------- |
| true         |             |
| 1            |             |
| "0"          |             |
| "false"      |             |
| []           |             |
| {}           |             |
| function(){} |             |

```js
if (true) {
  // true
}
```

```js
if ({}) {
  // true
}
```

```js
if ([]) {
  // true
}
```

```js
if (42) {
  // true
}
```

```js
if ("0") {
  // true
}
```

```js
if ("false") {
  // true
}
```

```js
if (new Date()) {
  // true
}
```

## Falsy Values

- falsy values are values that are considered false when encountered in a boolean context

| Value     | Description |
| --------- | ----------- |
| false     |             |
| 0         |             |
| ""        |             |
| null      |             |
| undefined |             |
| NaN       |             |

````js

```js
if (false) {
  // false
}
````

```js
if (0) {
  // false
}
```

```js

```
