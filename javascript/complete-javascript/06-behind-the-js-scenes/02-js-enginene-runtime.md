# JavaScript Engine and Runtime

## JavaScript Engine

- A JavaScript engine is a computer program or an interpreter which executes JavaScript code.

- The engine is the part of the browser that takes your JavaScript code and runs it

Example: V8 Engine, SpiderMonkey, Chakra, JavaScriptCore, etc.

JS Engine consists of 2 parts:

- Memory Heap: where the memory allocation happens
- Call Stack: where the code is executed line by line

In JS engine,

- The code is first interpreted line by line.

SourceCode ---> Parser ---> AST ---> Interpreter ---> Execution (Memory + Thread of Execution)

or

SourceCode ---> Parser ---> AST ---> Compiler ---> ByteCode ---> Interpreter ---> Execution (Just in time compilation)

## Compilation vs Interpretation

| Compilation                                       | Interpretation                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------ |
| Compiles the code into machine code.              | Interprets the code line by line.                                        |
| Faster                                            | Slower                                                                   |
| Takes more memory                                 | Takes less memory                                                        |
| Compiled code can be executed directly.           | Interpreted code needs to be compiled first.                             |
| Compiled code can be executed on any machine.     | Interpreted code can only be executed on the machine it was compiled on. |
| Compiled code can be optimized.                   | Interpreted code cannot be optimized.                                    |
| Compiled code can be debugged.                    | Interpreted code cannot be debugged.                                     |
| Compiled code can be obfuscated.                  | Interpreted code cannot be obfuscated.                                   |
| Compiled code can be minified.                    | Interpreted code cannot be minified.                                     |
| Compiled code can be compiled into native code.   | Interpreted code cannot be compiled into native code.                    |
| Compiled code can be compiled into byte code.     | Interpreted code cannot be compiled into byte code.                      |
| Compiled code can be compiled into assembly code. | Interpreted code cannot be compiled into assembly code.                  |
| Compiled code can be compiled into machine code.  | Interpreted code cannot be compiled into machine code.                   |

## Just in Time (JIT) Compilation

- JIT compilation is a compilation technique that compiles code at runtime. It is a combination of compilation and interpretation.

JavaScript is JIT compiled. It is compiled at runtime.

## JavaScript Runtime

- A JavaScript runtime is a program that executes JavaScript code.

Example: Node.js, Chrome, Firefox, Safari, etc.

JS Runtime consists of:

- JS Engine
- Web APIs (DOM, AJAX, setTimeout, etc.) or Node APIs (fs, http, C++ bindings, thread pool, etc.)
- Callback Queue
- Event Loop
- Microtask Queue
