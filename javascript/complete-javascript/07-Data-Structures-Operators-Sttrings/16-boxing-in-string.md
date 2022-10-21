## Boxing

Boxing is the process of converting a primitive value to an object.

We know that strings are primitive values, but they have methods. This is because JavaScript automatically converts the string primitive value to string object when we try to access a method with the same content.

- and the method are called on that object. This process is called boxing.

```js
const message = "Hello World";

console.log(new String("Bishal")); // String {"Bishal"}
console.log(typeof new String("Bishal")); // object

console.log(message.length); // 11
console.log(message["length"]); // 11
```
