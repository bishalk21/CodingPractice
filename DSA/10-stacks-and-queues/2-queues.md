# Queues

## What is a Queue?

A queue is a FIFO (First In First Out) data structure. The first element added to the queue will be the first one to be removed. Queues are very similar to stacks, but unlike stacks, a queue doesn't have a `pop` method, instead it has a `shift` method.

## Why do we need to learn this?

Queues are used all the time and are an important part of any developer's tool belt. They are used behind the scenes all the time, for example, in background tasks, uploading resources, printing / task processing.

## Big O of Queues

1. Insertion - `O(1)`
1. Removal - `O(1)`
1. Searching - `O(n)`
1. Access - `O(n)`

FIFO. Used in download managers, printing several documents etc.

## Complexity

1. `queue` and `dequeue` are constant time. (Array implementation is not)
1. `shift` and `unshift` are O(n) time. (Array implementation is not)

## Implementation

1. **Using Arrays**

```javascript
let a = [1, 2, 3];
a.push(4);
a.shift();
// 1
```

2. **Using Classes**

```javascript
// using linked lists
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // enqueue pseudocode
  // this function accepts some value
  // create a new node using that value passed to the function
  // if there are no nodes in the queue, set this node to be the first and last property of the queue
  // otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  // increment the size of the queue by 1

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  // dequeue pseudocode
  // if there is no first property, just return null
  // store the first property in a variable
  // see if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
  // if there is more than 1 node, set the first property to be the next property of first
  // decrement the size by 1
  // return the value of the node dequeued

  dequeue() {
    if (this.size === 0) return undefined;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

// class Node {
//   constructor(data) {
//     this.previous = null;
//     this.data = data;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   queue(data) {
//     let newNode = new Node(data);
//     if (this.size === 0) {
//       this.first = newNode;
//     } else this.last.previous = newNode;
//     this.size++;
//     this.last = newNode;
//     return this.size;
//   }

//   dequeue() {
//     if (this.size == 0) return undefined;
//     let temp = this.head;
//     this.head = temp.previous;
//     this.size--;
//     return temp;
//   }
// }
```

## Recap

1. Queues are FIFO data structures (First In First Out), all elements in the queue are first in first out.
1. Queues are used all the time and are an important part of any developer's tool belt. They are used behind the scenes all the time, for example, in background tasks, uploading resources, printing / task processing and for more complex data structures.
1. Insertion and Removal can be done in O(1) time
