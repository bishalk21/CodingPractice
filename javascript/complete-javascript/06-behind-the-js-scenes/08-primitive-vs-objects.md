# Primitives vs Objects

## Primitive types

Primitive types are immutable. They are passed by value.

All primitive types are stored in the stack during execution context creation.

```js
let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10
```

There are 6 primitive types in JavaScript:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`

## How Call Stack stores primitive types

When we declare a variable, and assign a primitive value to it, the value is stored in the stack. What happens in JS engine and computer memory is as follows:

```js
let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10
```

- first javascript will create so called unique identifier for the variable or with the variable name.
- then a piece of memory will be allocated with certain address like 0x001 and finally the value will be stored in that memory location at the specified address.
- this all happens in the call stack memory.

| Identifier                                                             | Memory Address               | Value |
| ---------------------------------------------------------------------- | ---------------------------- | ----- |
| a                                                                      | 0x001                        | 10    |
| b (points to the same memory location address of a)                    | 0x001(holds same value as a) | 10    |
| a (in 3rd line new memory address is created that holds the new value) | 0x002                        | 20    |

### Identifier

Identifier is a unique name that is used to access the value stored in the memory location.

**Note:** Identifier actually points to the address of the memory location not the value itself.

So we say a is 10 but in fact a is equal to 0x001 which holds the value 10.

We need to know that the b variable in the above example is not a copy of the a variable. It is just another identifier that points to the same memory location (0x001) with the same value.

In 3rd line, we are allocating a new memory location with a new address (0x002) and storing the value 20 in it. And the variable b still points to the same memory location (0x001) with the same value 10.

## Objects or Reference types

Objects are mutable. They are passed by reference.

All Objects are stored in the heap. The variable that stores the reference to the object is stored in the stack.

```js
let a = { x: 10 };
let b = a;
a.x = 20;
console.log(a.x); // 20
console.log(b.x); // 20
```

## Objects or Reference types

There are 3 reference types in JavaScript:

- `object literal`
- `array`
- `function`

## How is reference types stored on the heap

When new object is created it is stored in the heap memory. The variable that stores the reference to the object is stored in the stack.

```js
const me = {
  name: "Bishal",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend); // Friend: {name: "Bishal", age: 27}
console.log("Me:", me); // Me: {name: "Bishal", age: 27}
```

In Call Stack:

| Identifier | Memory Address                                  | Value |
| ---------- | ----------------------------------------------- | ----- |
| me         | 0x001                                           | D30F  |
| friend     | 0x001(points to the same memory location of me) | D30F  |

In Heap memory(before change):

| Memory Address location | Value                     |
| ----------------------- | ------------------------- |
| D30F                    | {name: "Bishal", age: 30} |

In Heap memory(after change):

| Memory Address location | Value                     |
| ----------------------- | ------------------------- |
| D30F                    | {name: "Bishal", age: 27} |

- In case of me variable, the me identifier doesn't directly points to the memory location.
- Instead it points to new memory location (0x001) that is created in the stack.
- And this memory location (0x001) points or references to the memory address in the heap by using the memory address as its value (D30F).
- In 5th line we have created a new variable friend and assigned the me variable to it.
- So the friend variable also points to the same memory location (0x001) in the stack which then points to the same memory location in the heap (D30F). So both me and friend are the same object.
- In 6th line we have changed the age property of the object. So the object in the heap memory is changed. And since both me and friend points to the same object in the heap, the object in the heap is changed for both me and friend.
- Although friend is contant variable, we can still change the properties of the object that it points to.
- When we change the property of the friend, we are changing the value of the object in the heap memory, not the value of object in the stack memory. Hence the value of both variables me and friend is changed as they both points to the same object in the heap.

This is why we call the object as reference type.

Reasons why objects are stored in the heap:

- objects can be large in size which is like a huge data structure or unlimited memory pool.

**Note:** The const value in case of reference or object type is changeable or mutable. But it is not reassignable and the const value in case of primitive type is immutable and not reassignable.

Prototypal Inheritance - object-oriented programming
Events and Event Loop - asynchronous programming

## Recap

- Primitive types are immutable. They are passed by value. They are stored in the stack.
- Objects are mutable. They are passed by reference. They are stored in the heap. The variable that stores the reference to the object is stored in the stack.
