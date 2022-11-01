# Singly Linked List

Collection of nodes each node containing a value and pointer to the next node.

- data structure that stores data (strings, arrays, numbers, etc.) in order. It's a list of data like an array.
- Linked List consists of nodes, each node containing a value and pointer to the next node or null

## Diagram

![Singly Linked List](https://i.imgur.com/1Z2wqSb.png)

Head (1) ----> (4) ----> (6) ----> (2) ----> (76) ----> (43) Tail

## Array vs Single Linked List

In arrays, each item is mapped with its index with number so easy finding of position of the item. But in a single linked list, linked lists contains a head, tail and length property.

| Arrays                                                               | Linked List                                                                   |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Indexed in order                                                     | Do not have indexes                                                           |
| Insertion and deletion can be expensive                              | Insertion and deletion can be easy                                            |
| Can be quickly accessed at a specific index                          | Slowly accessed at a specific index and connected via nodes with next pointer |
| Can be used when you need fast access/insertion and removal (sorted) | Can be used when you need fast insertion and removal (unsorted)               |
| Static data structure                                                | Dynamic data structure                                                        |
| Size is fixed                                                        | Size is not fixed                                                             |
| Random access                                                        | Sequential access                                                             |
| Memory is allocated in contiguous block                              | Memory is allocated in non-contiguous block                                   |
| Memory is allocated in stack                                         | Memory is allocated in heap                                                   |
| Memory is allocated in compile time                                  | Memory is allocated in run time                                               |

> In JavaScript, `undefined` means a variable has been declared but has not yet been assigned a value.<br> > `null` is an assignment value. It can be assigned to a variable as a representation of no value

> Javascript is garbage collected, you don't need to delete objects themselves - they will be removed when there is no way to refer to them anymore.

## Complexity

1. Search: O(n)
2. Access: O(n)
3. Delete: O(n) or O(1)
4. Insert: O(n) or O(1)

> Singly Linked List are better than arrays when insertion and deletion at the end and at the start is required. Accessing is difficult in linked lists

## Methods

1. `push(data)`: Works same as `push` of array
2. `pop()`: Works same as `pop` of array
3. `shift()`: Works same as `shift` of array
4. `unshift(data)`: Works same as `unshift` of array
5. `get(index)`: Gets the node at given index
6. `set(index)`: Sets the node data at given index
7. `insert(index, data)`: Inserts a node with given data at the given index
8. `remove(index)`: Removes the node at the index
9. `reverse()`: Reverses the list
10. `traverse()`: Logs the list on the console

## Implementation

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const first = new Node("Hello");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// first.next.next.next.next.next = new Node("?");

class SinglyLinkedList {
  constructor() {
    this.length = null;
    this.head = null;
    this.tail = null;
  }

  // Pushing Pseudocode
  // 1. This function should accept a value
  // 2. Create a new node using the value passed to the function
  // 3. If there is no head property on the list, set the head and tail to be the newly created node
  // 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // 5. Increment the length by one
  // 6. Return the linked list

  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      // Empty list
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  // Popping Pseudocode
  // 1. If there are no nodes in the list, return undefined
  // 2. Loop through the list until you reach the tail
  // 3. Set the next property of the 2nd to last node to be null
  // 4. Set the tail to be the 2nd to last node
  // 5. Decrement the length of the list by 1
  // 6. Return the value of the node removedf

  pop() {
    if (!this.length) return undefined;
    // Find the second last node
    let iterator = this.head;
    while (iterator.next != this.tail) {
      iterator = iterator.next;
    }
    let final = this.tail.data;
    this.tail = iterator;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return final;
  }

  // Shifting Pseudocode
  // 1. If there are no nodes, return undefined
  // 2. Store the current head property in a variable
  // 3. Set the head property to be the current head's next property
  // 4. Decrement the length by 1
  // 5. Return the value of the node removed

  shift() {
    if (!this.length) return undefined;
    let newHead = this.head.next;
    let final = this.head.data;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return final;
  }

  // Unshifting Pseudocode
  // 1. This function should accept a value
  // 2. Create a new node using the value passed to the function
  // 3. If there is no head property on the list, set the head and tail to be the newly created node
  // 4. Otherwise set the newly created node's next property to be the current head property on the list
  // 5. Set the head property on the list to be that newly created node
  // 6. Increment the length of the list by 1
  // 7. Return the linked list

  unshift(data) {
    let newHead = new Node(data);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this.length;
  }

  // traverse pseudocode - means visit each node of the list in order to perform some operation on the list
  // 1. Loop through the list until you reach the tail
  // 2. Print the value of each node
  // 3. Return the linked list
  traverse() {
    let iterator = this.head;
    while (iterator) {
      console.log(iterator.data);
      iterator = iterator.next;
    }
  }

  // Get Pseudocode
  // 1. This function should accept an index
  // 2. If the index is less than zero or greater than or equal to the length of the list, return null
  // 3. Loop through the list until you reach the index and return the node at that specific index

  get(index = 0) {
    let iteratorPostion = 0;
    let iterator = this.head;
    if (index >= this.length || index < 0) return null;
    while (iteratorPostion != index) {
      iterator = iterator.next;
      iteratorPostion++;
    }
    return iterator;
  }

  // Set Pseudocode
  // 1. This function should accept an index and a value
  // 2. Use your get function to find the specific node
  // 3. If the node is not found, return false
  // 4. If the node is found, set the value of that node to be the value passed to the function and return true

  set(index = 0, data = undefined) {
    let iterator = this.get(index);
    if (!iterator) return false;
    iterator.data = data;
    return true;
  }

  // Insert Pseudocode - adding node to the linked list at specific position
  // 1. If the index is less than zero or greater than the length, return false
  // 2. If the index is the same as the length, push a new node to the end of the list
  // 3. If the index is 0, unshift a new node to the start of the list
  // 4. Otherwise, using the get method, access the node at the index - 1
  // 5. Set the next property on that node to be the new node
  // 6. Set the next property on the new node to be the previous next
  // 7. Increment the length
  // 8. Return true

  insert(index = 0, data = undefined) {
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index);
    let newNode = new Node(data);
    if (this.length === 0 || !nextNode) this.push(data);
    else if (!prevNode) this.unshift(data);
    else {
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
    return this.length;
  }

  // Remove Pseudocode - removing a node from the Linked List at a specific position
  // 1. If the index is less than zero or greater than the length, return undefined
  // 2. If the index is the same as the length - 1, pop
  // 3. If the index is 0, shift
  // 4. Otherwise, using the get method, access the node at the index - 1
  // 5. Set the next property on that node to be the next of the next node
  // 6. Decrement the length
  // 7. Return the value of the node removed

  remove(index = 0) {
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    let currentNode = this.get(index);
    if (this.length === 0) return null;
    else if (!prevNode) this.shift();
    else if (!nextNode) this.pop();
    else {
      prevNode.next = nextNode;
      this.length--;
      return currentNode.data;
    }
  }

  // Reverse Pseudocode - reversing the Linked List in place
  // 1. Swap the head and tail
  // 2. Create a variable called next
  // 3. Create a variable called prev
  // 4. Create a variable called node and initialize it to the head property
  // 5. Loop through the list
  // 6. Set next to be the next property on whatever node is
  // 7. Set the next property on the node to be whatever prev is
  // 8. Set prev to be the value of the node variable
  // 9. Set the node variable to be the value of the next variable
  // 10. Return the list

  reverse() {
    // flip head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let node = this.tail;
    let prevNode = null;
    let nextNode = node.next;
    while (node != null) {
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
      if (node != null) nextNode = node.next;
    }
  }

  // Print Pseudocode
  // 1. Loop through the list until you reach the tail
  // 2. Print the value of each node
  // 3. Return the linked list

  // print() {
  //     let iterator = this.head;
  //     while (iterator) {
  //         console.log(iterator.data);
  //         iterator = iterator.next;
  //     }
  //     console.log(iterator);
  // }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}
```
