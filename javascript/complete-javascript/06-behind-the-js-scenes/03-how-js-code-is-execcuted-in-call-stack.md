# How JS code is executed in Call Stack?

Call Stack is a data structure that stores all the function calls that are currently being executed.

Call Stack is a LIFO (Last In First Out) data structure.

Call Stack is a single thread data structure.

Call Stack is a synchronous data structure.

Call Stack is a place where execution context is stored or stacked on top of each other, to keep track of the function calls.

## What happens in Call Stack?

- When the code is run, Global Execution Context is created and pushed to the Call Stack.
- Every function call creates a new Execution Context and is pushed to the Call Stack.
- When the function call is finished, the Execution Context is popped from the Call Stack.
- When the Call Stack is empty, the program execution is finished.
-

When a function is called, it is pushed to the top of the Call Stack.

When a function returns, it is popped from the top of the Call Stack.

## Execution Context

Execution Context is an abstract concept that holds information about the environment within which the current code is being executed.

Execution Context is environment in which the code is executed. It stores all the variables and functions that are defined in the current scope.

Global Execution Context is created for every functions, scripts, and modules.

Execution Context is created in two phases:

- Creation Phase or Memory Creation Phase or Variable Environment Creation Phase or Hoisting Phase

In Creation Phase, the following things are created:

- Global Object
- this keyword
- Outer Environment or Lexical Environment
- scope chain
- Create Memory for Variables and Functions (Hoisting)

```js
var a = 10;
function b() {}
```

- Execution Phase or Code Execution Phase or Variable Assignment Phase or Variable Initialization Phase

In Execution Phase, the following things are executed:

- Assign values to variables
- Execute functions

```js
var a = 10;
function b() {}
```

There are 3 types of Execution Contexts:

- Global Execution Context
- Function Execution Context
- Eval Execution Context
