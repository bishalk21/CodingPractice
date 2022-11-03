# Stacks

## Introduction

A stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

- data collection or abstract data structure and a LIFO data structure
- follows a specific order in which the operations are performed where last element added to the stack will be the first element removed from the stack.

Last in First Out. Used in browser history, call stacks etc.

```js
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}

factorial(5);

// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1

// stack flow
// 5
// 4
// 3
// 2
// 1
```

## How are stacks used?

- Managing function invocations:
- Undo / Redo: like in photoshop like removing wrinkles
- Routing (the history object) is treated like a stack
- used in trees

## Complexity

1. `push` and `pop` are constant time. (Array implementation is not)

## Implementation

1. **Using Arrays**

```javascript
let a = [1, 2, 3];
a.push(4);
a.pop();
// 4

// Arrays Implementation
// push - O(1)
// pop - O(1)
```

2. **Using Classes**

```javascript
class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push pseudocode
  // The function should accept a value
  // Create a new node with that value
  // If there are no nodes in the stack, set the first and last property to be the newly created node
  // If there is at least one node, create a variable that stores the current first property on the stack
  // Reset the first property to be the newly created node
  // Set the next property on the node to be the previously created variable
  // Increment the size of the stack by 1

  push(data) {
    let newNode = new Node(data);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    // return ++this.size;
    this.size++;
    return this.size;
  }

  // pop pseudocode
  // If there are no nodes in the stack, return null
  // Create a temporary variable to store the first property on the stack
  // If there is only 1 node, set the first and last property to be null
  // If there is more than one node, set the first property to be the next property on the current first
  // Decrement the size by 1
  // Return the value of the node removed

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.data;
  }

  //   pop() {
  //     if (this.size === 0) return null;
  //     let temp = this.first;
  //     if (this.first === this.last) {
  //       this.last = null;
  //     }
  //     this.first = this.first.next;
  //     this.size--;
  //     return temp.data;
  //   }
}

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(data) {
//     let newNode = new Node(data);
//     if (this.size === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       newNode.next = this.last;
//       this.last = newNode;
//     }
//     this.size++;
//     return this.size;
//   }
//   pop() {
//     if (this.size == 0) return undefined;
//     let temp = this.last;
//     this.last = this.last.next;
//     this.size--;
//     return temp;
//   }
// }
```

## Why we are not using arrays push and pop but used linked lists instead?

1. Arrays are not good for stacks because you have to reindex the entire array when you add or remove an element from the beginning. Linked lists are better because you can just change the pointer to the first element.
1. `push` and `pop` are constant time. (Array implementation is not)
1. `shift` and `unshift` are O(n) time. (Array implementation is not)

## Big O of Stacks

1. Insertion - O(1)
1. Removal - O(1)
1. Searching - O(n)
1. Access - O(n)

## Recap

1. Stacks are a LIFO data structure where the last value in is always the first one out.
1. Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
1. They are not a built in data structure in JavaScript, but are relatively simple to implement
1. Insertion and Removal can be done in O(1) time
1. Searching and Access are O(n)

## Exercises

1. [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
1. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
1. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)
1. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
1. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)
1. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
1. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
1. [Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)
1. [Decode String](https://leetcode.com/problems/decode-string/)
1. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
1. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
1. [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
