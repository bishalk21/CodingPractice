[OOP IN JS](#oop-in-js)

# Object Oriented Programming with JavaScript

Paradigm is a way of styling code, how we write and organize our code. There are many different paradigms, but the most popular ones are:

- Procedural
- Object Oriented
- Functional

| Procedural                         | Object Oriented                  | Functional                         |
| ---------------------------------- | -------------------------------- | ---------------------------------- |
| Code is organized around functions | Code is organized around objects | Code is organized around functions |

## What is OOP?

Object Oriented Programming is a programming paradigm that uses objects and their interactions to design and program applications. It is a way of thinking about programming, based on real world entities like objects, which have some data or state and some functionality or behavior.

- A programming paradigm based on the concept of "objects", which can contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.
- we use objects to model real-world or abstract features. e.g. html component, data structure, etc.
- Objects can contain both data and code: data in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.
- using objects, we can pack data and functionality into one single unit, and then create many instances of that unit, which all share the same functionality, but have their own individual data.
- In OOP, Objects are self-contained entities(pieces or block of code).
- objects are building blocks of applications, and interact with one another.
- Interactions happen through a public interface (API): methods that code outside the object can call or access and use to interact with the object.
- OOP was developed with the goal of organizing code, to make it more flexible and maintainable.(avoid spaghetti code)

## What is a Class?

- A class is a blueprint or template or factory for creating objects with pre-defined properties and methods.
- A class encapsulates data for the object.
- A class is a collection of methods and properties, variables and functions.
- We can build as many as instances of a class (objects) as we want from one blueprint.

Class = Object + Properties + Methods

```js
User = {
  name: "John",
  age: 30,
  email: "
  password: "12345",

  login(password) {
    console.log("login");
  },

  sendMessage(message) {
    console.log("send message");
  },
};
```

## What is an instance?

- An instance is an object that is constructed from a class.
- An instance is a specific occurrence of any object.
- An instance is a concrete implementation of a class.
- An instance is a copy of a class.

## What is an Object?

- An object is an instance of a class.
- An object is a real-world entity, like a user, a car, a book, etc.
- An object is a collection of properties and methods.
- An object is a self-contained entity(pieces or block of code).
- An object is a building block of applications, and interact with one another.

Object = Properties + Methods

```js
Class User {
    Constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }

  login(password) {
    console.log("login");
  },

  sendMessage(message) {
    console.log("send message");
  },
};
```

## What is a Property?

- A property is a variable or characteristic that belongs to an object or describes an object.
- A property is a value associated with a key.

## What are methods?

- A method is a function that belongs to an object or piece of code that can be called on an object.
- A method is a function that is a property of an object.

## What is a constructor?

- A constructor is a special method for creating and initializing an object created within a class.
- A constructor is a method that is called when an object (instance of a class) is created or instantiated.

```js
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  login(password) {
    console.log("login");
  }

  sendMessage(message) {
    console.log("send message");
  }
}

const user1 = new User("John", 30, "sjhdbfhb@hd. com", "12345");
const user2 = new User("Jane", 25, "sjhdbfhb@hd. com", "12345");
```

## Principles of OOP

Principles of OOP are the fundamental concepts of OOP. They are the basic building blocks of OOP. They are the foundation of OOP. They are the rules that we follow when we write OOP code.

How do we design or write OOP code? We follow the principles of OOP.

There are 4 principles of OOP:

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

### Abstraction

Abstraction is the process of hiding the implementation details from the user, only the functionality will be provided to the user.

Abstraction basically means ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're modeling or implementing, instead of messing with the details that don't matter to our implementation.

```js
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  login(password) {
    console.log("login");
  }

  sendMessage(message) {
    console.log("send message");
  }
}

const user1 = new User("John", 30, "sjhdbfhb@hd. com", "12345");
const user2 = new User("Jane", 25, "sjhdbfhb@hd. com", "12345");
```

In the above example, we have a class User. We have a constructor method that takes in 4 parameters. We have 2 methods, login and sendMessage. We have 4 properties, name, age, email, and password.

Why Abstraction?

- Abstraction allows us to focus on what the object does instead of how it does it.
- Abstraction allows us to hide the implementation details from the user, only the functionality will be provided to the user.
- Abstraction reduces the complexity and increases reusability.
- Abstraction helps to increase security of an application or program as only important details are provided to the user.

### Encapsulation

Encapsulation is the process of wrapping up the data and the methods that work on the data within one unit. It is the bundling of data with the methods that operate on that data.

Encapsulation means keeping properties and methods private inside the class, so they are not accessible from outside the class. Some properties and methods can be exposed as a public interface.

```js
// Encapsulation
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  login(password) {
    console.log("login");
  }

  sendMessage(message) {
    console.log("send message");
  }
}

const user1 = new User("John", 30, "sjhdbfhb@hd. com", "12345");
const user2 = new User("Jane", 25, "sjhdbfhb@hd. com", "12345");
```

In above example, we can see that the properties and methods are private inside the class, so they are not accessible from outside the class. Some properties and methods can be exposed as a public interface.

Why Encapsulation?

- prevents external code from modifying the properties and methods of an object.
- allows to change internal implementation without risk of breaking code using the object or exposing its properties and methods.
- Encapsulation is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.
- Encapsulation can be achieved by: Declaring all the variables in the class as private and writing public methods in the class to set and get the values of variables.
- Encapsulation increases reusability.
- Encapsulation increases security of an application or program as only important details are provided to the user.

### Inheritance

Inheritance is the process by which objects of one class acquire the properties of objects of another class. It is the ability to create new classes from existing classes.

Inheritance means making all properties and methods of a certain class available to another class that inherits from that class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

```js
// Inheritance
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  login(password) {
    console.log("login");
  }

  sendMessage(message) {
    console.log("send message");
  }
}

class Admin extends User {

this.role = role;

  login(password) {
    console.log("login");
  }

  sendMessage(message) {
    console.log("send message");
  }

  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

const user1 = new User("John", 30, "sjhdbfhb@hd. com", "12345");
const user2 = new User("Jane", 25, "sjhdbfhb@hd. com", "12345");
const admin = new Admin("Sally", 35, "sally@hd. com", "12345");
```

In above example, we can see that we have a class User. We have a constructor method that takes in 4 parameters. We have 2 methods, login and sendMessage. We have 4 properties, name, age, email, and password.

We have a class Admin that extends the class User. We have a constructor method that takes in 5 parameters. We have 3 methods, login, sendMessage, and deleteUser. We have 5 properties, name, age, email, password, and role.

Why Inheritance?

- Inheritance supports the concept of hierarchical classification.
- Inheritance represents the IS-A relationship which is also known as a parent-child relationship.
- Inheritance provides reusability of a code. We don't have to write the same code again and again. We can reuse the fields and methods of existing class when we create a new class.
- Inheritance is used to achieve runtime polymorphism.

### Polymorphism

Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

Polymorphism means a child class can override the methods it inherits from the parent class. Polymorphism allows us to define one interface and have multiple implementations.

```js
// Polymorphism
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  login(password) {
// login logic
}

  sendMessage(message) {
// send message logic
}
}

class Admin extends User {

this.role = role;

  login(password) {
// different login logic
}

  sendMessage(message) {
// different send message logic
}

  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

const Aithor = {
  login(password) {
   // different implementation
  },

  sendMessage(message) {
    // different implementation
  },
};


const user1 = new User("John", 30, "sjhdbfhb@hd. com", "12345");
const user2 = new User("Jane", 25, "sjhdbfhb@hd. com", "12345");
const admin = new Admin("Sally", 35, "sally@hd. com", "12345");
```

In above example, we can see that we have a class User. We have a constructor method that takes in 4 parameters. We have 2 methods, login and sendMessage. We have 4 properties, name, age, email, and password.

We have a class Admin that extends the class User. We have a constructor method that takes in 5 parameters. We have 3 methods, login, sendMessage, and deleteUser. We have 5 properties, name, age, email, password, and role.

We have an object Author that has 2 methods, login and sendMessage.

Why Polymorphism?

- Polymorphism allows us to define one interface and have multiple implementations.
- Polymorphism allows us to perform a single action in different ways.
- Polymorphism is used to achieve runtime polymorphism.
- Polymorphism increases the flexibility of the program.

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
