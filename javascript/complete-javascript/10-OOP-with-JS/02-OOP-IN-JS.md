# OOP IN JS

## Classical OOP

Classical OOP is a programming paradigm that is based on the concept of classes and objects. It is a way of structuring a program by bundling related properties and behaviors into individual objects.

class -------------------> object (instances)

Objects are instantiated from classes. Classes are like blueprints for objects. They are templates that define the properties and behaviors of objects.

## Prototypal OOP

Prototypal OOP is a programming paradigm that is based on the concept of prototypes. It is a way of structuring a program by creating objects that inherit directly from other objects.

Object -------------------> Prototype (contains properties and methods)

Prototypes are the mechanism by which JavaScript objects inherit features from one another. In JavaScript, objects are created from prototypes.

Object are linked to a prototype object, from which they can inherit properties. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

Prototypal inheritance is a powerful feature of JavaScript. It allows us to create objects that inherit directly from other objects. This provides a very efficient mechanism for implementing inheritance in JavaScript.

In Prototypal Inheritance, also known as Delegation, the prototype contains methods (behaviors) that are accessible to all instances of the object. When an object needs a method, it delegates the search for the method to its prototype.

Behavior is delegated to the linked prototype object.

## Array.prototype

Array.prototype is an object that is available to all arrays. It contains methods that are accessible to all arrays.

## Ways to implement Prototypal Inheritance in JS

There are 3 ways to implement Prototypal Inheritance in JS:

1. Constructor Functions

- technique to create objects in JS from a function
- this is how built-in objects are created in JS like Arrays, Maps, Sets, etc.

2. ES6 Classes

- modern alternative to constructor functions syntax
- syntactic sugar over constructor functions: behind the scenes, it still uses constructor functions
- ES6 classes donot behave like classes in other programming languages like Java or C++ ot classical OOP languages

3. Object.create()

- the easiest and most straightforward way to implement prototypal inheritance
