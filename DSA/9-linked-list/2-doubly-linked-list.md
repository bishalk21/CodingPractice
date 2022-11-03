# Double Linked List

Collection of nodes each node containing a value and pointer to the next and the previous node.

> If a parameter is not passed to a function, that parameter gets the value of undefined.
> https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

## Singly Linked List vs Doubly Linked List

| Singly Linked List                                   | Doubly Linked List                                                    |
| ---------------------------------------------------- | --------------------------------------------------------------------- |
| Each node has a value and a pointer to the next node | Each node has a value and a pointer to the next and the previous node |
| No backward traversal                                | Can traverse backward                                                 |
| Less memory                                          | More memory                                                           |
| No random access                                     | Random access                                                         |

## Complexity

1. Search: O(n)
2. Access: O(n)
3. Delete: O(n) or O(1)
4. Insert: O(n) or O(1)

> Faster than or same speed as singly linked list

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

## Implemetation

```javascript
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.previous = null;
//     this.next = null;
//   }
// }

class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push pseudocode - add a node to the end of the Doubly linked list
  // 1. Create a new node with the value passed to the function
  // 2. If the head property is null set the head and tail to be the newly created node
  // 3. If not, set the next property on the tail to be that node
  // 4. Set the previous property on the newly created node to be the tail
  // 5. Set the tail to be the newly created node
  // 6. Increment the length
  // 7. Return the Doubly Linked List

  //   push(data) {
  //     let newNode = new Node(data);
  //     if (this.length === 0) {
  //       this.head = newNode;
  //     } else {
  //       this.tail.next = newNode;
  //       newNode.previous = this.tail;
  //     }
  //     this.tail = newNode;
  //     this.length++;
  //     return this.length;
  //   }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // write the function that accepts the value add a note to the end of the Doubly linked list with the given value. It should return the Doubly linked list.

  // pop pseudocode - remove a node from the end of the Doubly linked list
  // 1. If there is no head, return undefined
  // 2. Store the current tail in a variable to return later
  // 3. If the length is 1, set the head and tail to be null
  // 4. Update the tail to be the previous Node.
  // 5. Set the newTail's next to null
  // 6. Decrement the length
  // 7. Return the value removed

  //   pop() {
  //     let final;
  //     if (this.length === 0) final = null;
  //     else if (this.length === 1) {
  //       final = this.head.data;
  //       this.head = null;
  //       this.tail = null;
  //       this.length = 0;
  //     } else {
  //       final = this.tail.data;
  //       this.tail = this.tail.previous;
  //       this.tail.next = null;
  //       this.length--;
  //     }
  //     return final;
  //   }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  // shift pseudocode - remove a node from the beginning of the Doubly linked list
  // 1. If length is 0, return undefined
  // 2. Store the current head property in a variable (we'll call it old head)
  // 3. If the length is one
  //    - Set the head to be null
  //    - Set the tail to be null
  // 6. Update the head to be the next of the old head
  // 7. Set the head's previous property to null
  // 8. Set the old head's next to null
  // 9. Decrement the length
  // 10. Return old head

  // shift() {
  //   let final;
  //   if (this.length === 0) final = null;
  //   else if (this.length === 1) {
  //     final = this.head.data;
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   } else {
  //     final = this.head.data;
  //     this.head = this.head.next;
  //     this.head.previous = null;
  //     this.length--;
  //   }
  //   return final;
  // }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // write the shift function that remove node at the beginning of the Doubly linked list.

  // unshift pseudocode - add a node to the beginning of the Doubly linked list
  // 1. Create a new node with the value passed to the function
  // 2. If the length is 0
  //    - Set the head to be the new node
  //    - Set the tail to be the new node
  // 3. Otherwise
  //    - Set the previous property on the head of the list to be the new node
  //    - Set the next property on the new node to be the head property
  //    - Update the head to be the new node
  // 4. Increment the length
  // 5. Return the list

  // unshift(data) {
  //   let newNode = new Node(data);
  //   if (this.length === 0) {
  //     this.tail = newNode;
  //   } else {
  //     this.head.previous = newNode;
  //     newNode.next = this.head;
  //   }
  //   this.head = newNode;
  //   this.length++;
  //   return this.length;
  // }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

// write the unshift function that accept a value and add a note to the beginning of the Doubly linked list with the given value.

// traverse pseudocode - means visit each node of the list in order to perform some operation on the list
  // 1. Loop through the list until you reach the tail
  // 2. Print the value of each node
  // 3. Return the linked list

//     traverse() {
//     let iterator = this.head;
//     while (iterator) {
//       console.log(iterator.data);
//       iterator = iterator.next;
//     }
//     return this.length;
//   }
// }

traverse(){
    let current = this.head;
    while(current){
        console.log(current.val);
        current = current.next;
    }
}

  // get pseudocode - retrieve a node by it's position in the Doubly linked list
  // 1. If the index is less than zero or greater than or equal to the length, return null
  // 2. If the index is less than or equal to half the length of the list
  //    - Loop through the list starting from the head and loop towards the middle
  //    - Return the node once it is found
  // 3. If the index is greater than half the length of the list
  //    - Loop through the list starting from the tail and loop towards the middle
  //    - Return the node once it is found

  // get(index) {
  //   if (index < 0 || index >= this.length) return null;
  //   let iterator;
  //   if (index > this.length / 2) {
  //     // Traverse from behind
  //     iterator = this.tail;
  //     let iteratorPosition = this.length - 1;
  //     while (iteratorPosition != index) {
  //       iterator = iterator.previous;
  //       iteratorPosition--;
  //     }
  //   } else {
  //     //travers from front
  //     iterator = this.head;
  //     let iteratorPosition = 0;
  //     while (iteratorPosition != index) {
  //       iterator = iterator.next;
  //       iteratorPosition++;
  //     }
  //   }
  //   return iterator;
  // }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      console.log("Traversing from start");
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      console.log("Traversing from end");
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.previous;
        count--;
      }
    }
    return current;
  }

  // set pseudocode - change the value of a node based on it's position in the Doubly linked list
  // 1. Create a variable which is the result of the get method at the index passed to the function
  //    - If the get method returns a valid node, set the value of that node to be the value passed to the function
  //    - Return true
  // 2. Otherwise, return false

  // set(index, data) {
  //   let iterator = this.get(index);
  //   if (!iterator) return false;
  //   iterator.data = data;
  //   return true;
  // }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

// write the set function that accept an index and a value and update the value of the node in Doubly Linked List at the index with the new value.

  // insert pseudocode - add a node to the Doubly linked list at a specific position
  // 1. If the index is less than zero or greater than the length, return false
  // 2. If the index is 0, unshift
  // 3. If the index is the same as the length, push
  // 4. Use the get method to access the index - 1
  // 5. Set the next and previous properties on the correct nodes to link everything together
  // 6. Increment the length
  // 7. Return true

  // insert(index, data) {
  //   let previousNode = this.get(index - 1);
  //   let nextNode = this.get(index);
  //   let newNode = new Node(data);
  //   if (index === 0 || this.length === 0) this.unshift(data);
  //   else if (index === this.length) this.push(data);
  //   else {
  //     previousNode.next = newNode;
  //     newNode.previous = previousNode;
  //     newNode.next = nextNode;
  //     nextNode.previous = newNode;
  //     this.length++;
  //   }
  //   return this.length;
  // }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  // remove pseudocode - remove a node from the Doubly linked list at a specific position
  // 1. If the index is less than zero or greater than the length, return undefined
  // 2. If the index is 0, shift
  // 3. If the index is the same as the length - 1, pop
  // 4. Use the get method to retrieve the item to be removed
  // 5. Update the next and previous properties to remove the found node from the list
  // 6. Set next and previous to null on the found node
  // 7. Decrement the length
  // 8. Return the removed node

  // remove(index) {
  //   if (index < 0 || index >= this.length) return undefined;
  //   if (index === 0) this.shift();
  //   else if (index === this.length - 1) this.pop();
  //   else {
  //     let final = this.get(index).data;
  //     let previousNode = this.get(index - 1);
  //     let nextNode = this.get(index + 1);
  //     previousNode.next = nextNode;
  //     nextNode.previous = previousNode;
  //     this.length--;
  //     return final;
  //   }
  // }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  // reverse pseudocode - reverse the Doubly linked list in place
  // 1. Swap the head and tail
  // 2. Create a variable called next
  // 3. Create a variable called previous
  // 4. Create a variable called node and initialize it to the head property
  // 5. Loop through the list
  // 6. Set next to be the next property on whatever node is
  // 7. Set the next property on the node to be whatever previous is
  // 8. Set previous to be the value of the node variable
  // 9. Set the node variable to be the value of the next variable
  // 10. Return the list

  // reverse() {
  //   let iterator = this.head;
  //   while (iterator) {
  //     let temp = iterator.next;
  //     iterator.next = iterator.previous;
  //     iterator.previous = temp;
  //     iterator = iterator.previous;
  //   }
  //   let temp = this.head;
  //   this.head = this.tail;
  //   this.tail = temp;
  // }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }

```
