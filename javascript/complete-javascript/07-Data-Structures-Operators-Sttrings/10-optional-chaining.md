# Optional Chaining (?.)

Optional Chaining is a new feature in JavaScript that allows us to access nested objects without having to check if the parent object exists.

- accesses an object's property only if the object exists or calls a function only if the object exists.
- if the object does not exist, it returns undefined, instead of throwing an error.

## Optional Chaining

In the following example, we have a nested object. We want to access the `name` property of the `user` object. But what if the `user` object is `null` or `undefined`? In that case, we will get an error.

```JavaScript
const user = null;
console.log(user.name); // TypeError: Cannot read property 'name' of null
```

To avoid this error, we can use the optional chaining operator `?.`:

```JavaScript
const user = null;
console.log(user?.name); // undefined
```

The optional chaining operator `?.` checks if the object before the `?.` is `null` or `undefined`. If it is not `null` or `undefined`, it returns the value of the property. If it is `null` or `undefined`, it returns `undefined`.

## Advantages of Optional Chaining

- It is a very useful feature when we are working with APIs.
- helps us to avoid errors.
- helps us to write cleaner code.
