# Data Structures Overview

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

Data structures are a way to organize data so that we can use it efficiently. There are many different types of data structures, and some are specialized to particular tasks. For example, we might use one data structure to store a list of data and a different structure to organize that data for searching and sorting.

## Sources of Data

- Data can come from many different sources, including:
  - User input
  - Server requests
  - Database queries
  - Local storage
- From program itself: data written directly into the program or source code (e.g: status messages, error messages, etc.)
- From the UI: data from the user interface or data written in DOM (e.g: user clicks, mouse movements, tasks in a to-do list, etc.)
- From the network: data from the network (e.g: data from a server, data from a database, etc.)
- from external sources: data from external sources such as web APIs (e.g: data from a file, data from a library, recipe objects, etc.)

Data from web APIs can be in many different formats, including: JSON, XML, CSV, etc.

`data ---> collection ---> data structure ---> data structure algorithm ---> data structure implementation`

After we get the data, we need to store it in a data structure so that we can use it efficiently.

## Which Data Structure to Use?

| kind of data    | data structure |
| --------------- | -------------- |
| simple list     | array or set   |
| key-value pairs | object or map  |
| ordered list    | linked list    |
| queue           | queue          |
| stack           | stack          |
| set             | set            |
| tree            | tree           |
| graph           | graph          |

## Built in Data Structures

Built in data structures are data structures that are built into the language. They are usually optimized for performance and memory usage.

JavaScript has built in data structures:

- Array
- Object
- Map
- Set
- WeakMap
- WeakSet

## Non-Built in Data Structures

Non-built in data structures are data structures that are not built into the language. They are usually implemented using built in data structures.

- Linked List
- Queue
- Stack
- Tree
- Graph
- Hash Table

## Using Arrays and Sets Data Structures

| Array                                                          | Sets                                         |
| -------------------------------------------------------------- | -------------------------------------------- |
| Arrays are ordered lists of values.                            | Sets are unordered lists of unique values.   |
| Arrays are indexed.                                            | Sets are not indexed.                        |
| Arrays are iterable.                                           | Sets are iterable.                           |
| Arrays are mutable.                                            | Sets are mutable.                            |
| use when need ordered list of values(might contain duplicates) | use when you need to work with unique values |
| use when you need to manipulate data in place                  | use when you need to remove duplicates       |
|                                                                | use when high performance is important       |

## Using Objects and Maps Data Structures

| Objects                                                                  | Maps                                                                             |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Objects are unordered lists of key-value pairs.                          | Maps are ordered lists of key-value pairs.                                       |
| more traditional key/value store ("abused objects like json")            | keys can be any data type                                                        |
| easier to access and write with dot notation and square bracket notation | more performant than objects                                                     |
| use when you need to work with key-value pairs                           | use when you need to work with key-value pairs and high performance is important |
| objects are mutable                                                      | maps are mutable                                                                 |
| objects are iterable                                                     | maps are iterable                                                                |
|                                                                          | easy to compute size of map                                                      |
| use when you need to include functions (methods) in key-value pairs      | use when you need to map keys to values                                          |
| use when working with JSON(can convert to map)                           | use when you need keys that are not strings                                      |
