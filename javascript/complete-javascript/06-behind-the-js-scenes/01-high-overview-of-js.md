# High overview of JS

### What is JS?

JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more — you can bet that JavaScript is probably involved. It is the third layer of the cake of standard web technologies.

- A programming language that adds interactivity to your website.

| JavaScript                           | Definition                                                                                                                                                                                                                              |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript                           | A programming language that allows you to implement complex things on web pages.                                                                                                                                                        |
| High Level Language                  | A programming language that is easy to read and write. No need to worry about the low level details, like memory management, control of hardware, etc. because they have abstraction layers. But it is slower than low level languages. |
| Garbage Collected                    | A programming language that automatically frees up memory when it is no longer needed.                                                                                                                                                  |
| Interpreted or Just-in-time compiled | A programming language that is processed at runtime by a program called an interpreter. It is slower than compiled languages.                                                                                                           |
| Multi-paradigm                       | A programming language that supports multiple programming styles like functional, object-oriented, (procedural) imperative, etc.                                                                                                        |
| Prototype-based object-oriented      | A programming language that uses prototypes as the basis for inheritance.                                                                                                                                                               |
| First class functions                | A programming language that treats functions as first-class citizens. Functions are treated like any other variable, can pass them into another function, return them from another function, assign them to a variable, etc.            |
| Dynamic                              | A programming language that is not statically typed. It is not necessary to declare the type of a variable before using it.                                                                                                             |
| Single-threaded                      | A programming language that can only do one thing at a time.                                                                                                                                                                            |
| Non-blocking event loop              | A programming language that has a single-threaded event loop, which works by making callbacks to handle asynchronous events.                                                                                                            |

## Concurency model

Concurrency Model: how javascript handles concurrency or multiple things happening at the same time.

- JS is a single threaded language, which means it can only do one thing at a time.
- JS is synchronous, which means it can only do one thing at a time in a specific order.
- JS is non-blocking, which means it can handle async events.
- By using callbacks, promises, async/await, we can handle async events with JS.
