## Type Coercion

- Type coercion is the process of converting a value from one data type to another (such as string to number, object to boolean, and so on) while comparing values.
- Type coercion is a common source of bugs in JavaScript.

## Type Coercion - Implicit

- Implicit type coercion is the automatic or implicit conversion of values from one data type to another (such as string to number, object to boolean, and so on) while comparing values.

```javascript
3 == "3"; // true
```

- The `==` operator performs type coercion.

## Type Coercion - Explicit

- Explicit type coercion is the explicit conversion of values from one data type to another (such as string to number, object to boolean, and so on) while comparing values.

```javascript
3 === "3"; // false
```

- The `===` operator does not perform type coercion.

coercion is like conversion, think of it like a type converstion of primitive to primitive or object to primitive

theres implicit and explicit conversion

there are gotchas

```js
const arr = [];

if (arr.length) {
  // this arr.length check is coercing the number into a boolean
}
```

---

From KD Singh to Everyone: (01:34 PM) Many ways to skin the coercion cat here, so again, when we are using coercion deliberatly, what is the best practice?

From Anushree Subramani to Everyone: (01:42 PM)My problem with javascript has been that its hard to remember all these “quirks”. I have learnt these things sooo many times but I forget them because its more of a memory thing rather than logic most often. Any tips for remembering these long term?

If you are trying to explicitly coerced, try to memorize the edgecases. When you are using implicit coercion, you should be fine.

# Type Conversions

- Type conversions are the process of converting a value from one type to another (such as string to number, object to boolean, and so on).

- There are two types of type conversions in JavaScript:

  - Implicit type conversion

  - Explicit type conversion

## Implicit Type Conversion

- Implicit type conversion is the automatic or implicit conversion of values from one data type to another (such as string to number, object to boolean, and so on).

```javascript
let num = 6;
let numStr = num + "";
console.log(numStr); // "6"
```

- In the above example, the number 6 is converted to a string.

## Explicit Type Conversion

- Explicit type conversion is the conversion of values from one data type to another (such as string to number, object to boolean, and so on) that is done by the programmer.

```javascript
let numStr = "6";

let num = Number(numStr);
```

- In the above example, the string "6" is converted to a number.
