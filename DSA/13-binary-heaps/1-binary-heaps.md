# Binary Heap

## What is Binary Heap?

A binary heap is a complete binary tree which satisfies the heap property. The heap property can be one of two types:

Binary Heaps are Binary Trees with some rules. Binary Heaps are as compact as possible

## Max Binary Heap

- The value of each node is less than or equal to the value of its parent, with the maximum-value element at the root.
- Each Parent has at most two child nodes.
- The value of each parent node is always greater than its child nodes.
- In a MaxBinaryHeap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

## Min Binary Heaps

- The value of each node is greater than or equal to the value of its parent, with the minimum-value element at the root.
- Each Parent has at most two child nodes.
- The value of each parent node is always less than its child nodes.
- In a MinBinaryHeap the parent is less than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

## Why do we need to know this?

Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.

They are also used quite a bit, with graph traversal algorithms.

## Representation

Since heaps are as compact as possible, we can expresss them as an array:

```
				    8
				   / \
				  7   3
				 / \ /
				5  6 2
				|=> [8, 7, 3, 5, 6, 2]
```

Thus the child nodes and parent nodes are related by index as follows:

1. If parent is at index n:

- left child is at index 2n + 1
- right child is at index 2n + 2

2. If child is at index n, parent is at Math.floor((n-1)/2)

## Implementation

### Defining Our Class

    ```javascript
    class MaxBinaryHeap {
      constructor() {
        this.values = [];
      }
    }
    ```

## Insert

- Used to insert a value to the heap. First the value is added to the array using `push`. Then as long as the parent node is smaller then the current node, they are swapped with each other.

```js
    class MaxBinaryHeap {
      constructor() {
        this.values = [];
      }
    }

// INSERT Pseudocode
// 1. Push the value into the values property on the heap
// 2. Bubble the value up to its correct spot
// 2.1 Create a variable called index which is the length of the values property - 1
// 2.2 Create a variable called parentIndex which is the floor of (index-1)/2
// 2.3 Keep looping as long as the values element at the parentIndex is less than the values element at the child index
// 2.3.1 Swap the value of the values element at the parentIndex with the value of the element property at the child index
// 2.3.2 Set the index to be the parentIndex, and start over!

insert(element) {
  this.values.push(element);
  this.bubbleUp();
}

bubbleUp() {
  let index = this.values.length - 1;
  const element = this.values[index];
  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex];
    if (element <= parent) break;
    this.values[parentIndex] = element;
    this.values[index] = parent;
    index = parentIndex;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
```

## Extract Max

- Used to remove a node from the heap. The node to be removed is swapped with the last node on the array and then removed using `pop`. Then since a smaller element has risen to the top, this node is trickled down by swapping it with the larger child as long as either of the child has larger value than this node.

### What is SinkDown?

- SinkDown is the process of swapping a node with one of its children until the node is in the correct spot in the heap.

The procedure for deleting the root from the heap (effectively extracting the maximum element in the max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap(also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down and extract-min/max).

```js
    class MaxBinaryHeap {
      constructor() {
        this.values = [];
      }
    }

// EXTRACT MAX Pseudocode
// 1. Swap the first value in the values property with the last one
// 2. Pop from the values property, so you can return the value at the end
// 3. Have the new root "sink down" to the correct spot
// 3.1 Your parent index starts at 0 (the root)
// 3.2 Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
// 3.3 Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
// 3.4 If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
// 3.5 The child index you swapped to now becomes the new parent index.
// 3.6 Keep looping and swapping until neither child is larger than the element.
// 3.7 Return the old root!

extractMax() {
  const max = this.values[0];
  const end = this.values.pop();
  if (this.values.length > 0) {
    this.values[0] = end;
    this.sinkDown();
  }
  return max;
}

sinkDown() {
  let index = 0;
  const length = this.values.length;
  const element = this.values[0];
  while (true) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIndex < length) {
      leftChild = this.values[leftChildIndex];
      if (leftChild > element) {
        swap = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      rightChild = this.values[rightChildIndex];
      if (
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
      ) {
        swap = rightChildIndex;
      }
    }

    if (swap === null) break;
    this.values[index] = this.values[swap];
    this.values[swap] = element;
    index = swap;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);

heap.extractMax();
```

```javascript
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  parentIndex(index) {
    if (index === 0) return 0;
    return Math.floor((index - 1) / 2);
  }
  parentValue(index) {
    return this.values[this.parentIndex(index)];
  }
  childIndexLeft(index) {
    let final = 2 * index + 1;
    if (final >= this.values.length) return index;
    return final;
  }
  childIndexRight(index) {
    let final = 2 * index + 2;
    if (final >= this.values.length) return index;
    return final;
  }
  childValueLeft(index) {
    return this.values[this.childIndexLeft(index)];
  }
  childValueRigth(index) {
    return this.values[this.childIndexRight(index)];
  }
  insert(value) {
    this.values.push(value);
    let currentIndex = this.values.length - 1;
    while (this.parentValue(currentIndex) < this.values[currentIndex]) {
      [this.values[currentIndex], this.values[this.parentIndex(currentIndex)]] =
        [
          this.values[this.parentIndex(currentIndex)],
          this.values[currentIndex],
        ];
      currentIndex = this.parentIndex(currentIndex);
    }
  }
  remove(value) {
    let currentIndex = this.values.indexOf(value);
    // swap with the last
    [this.values[currentIndex], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[currentIndex],
    ];
    this.values.pop();
    while (
      this.values[currentIndex] < this.childValueLeft(currentIndex) ||
      this.values[currentIndex] < this.childValueRigth(currentIndex)
    ) {
      if (
        this.childValueLeft(currentIndex) > this.childValueRigth(currentIndex)
      ) {
        //swap with left
        [
          this.values[currentIndex],
          this.values[this.childIndexLeft(currentIndex)],
        ] = [
          this.values[this.childIndexLeft(currentIndex)],
          this.values[currentIndex],
        ];
        currentIndex = this.childIndexLeft(currentIndex);
      } else {
        // swap with right guy
        [
          this.values[currentIndex],
          this.values[this.childIndexRight(currentIndex)],
        ] = [
          this.values[this.childIndexRight(currentIndex)],
          this.values[currentIndex],
        ];
        currentIndex = this.childIndexRight(currentIndex);
      }
    }
  }
}
```

## Complexity

1. Insertion: log(n)
2. Removal: log(n)
3. Search: O(n)

## Priority Queues

- A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

- Priority Queues are implemented using heaps.

- Priority Queues are used in Graph Traversal algorithms.

- Priority Queues are used in implementing Dijkstra's Algorithm, and A\* Search Algorithm.

Priority Queues are data structures in which the elements with higher priority are sered first. These are used by the Operating System to execute important tasks first. Prioritty Wueues are implemented using heaps since the root node is always the larget value. Thus the taks are queued in a heap and when the root task is performed, it is removed as in above implementation and the next higher values comes to the top and so on. If instead arrays were used, we would take O(n) time to find the max which is slower.

> Project Ideas: Implement a todo list app using priority queue

## Naive Version

- use a list to store all elements

priority-3 priority-1 priority-2

- Iterate over the entire thing to find highest priority element.

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// our priority queue
// 1. write a main binary heap - lower number means higher priority
// 2. Each node has a val and priority. Use the priority to build the heap.
// 3. enqueue method - accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
// 4. dequeue method - removes root element, returns it, and rearranges heap using priority

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
```

### BIG O

1. Insertion: O(log n)
2. Removal: O(log n)
3. Search: O(n)

## Recap

- Heaps are useful data structures for sorting and implementing other data structures like priority queues.
- Binary Heaps are very similar to binary search trees, but with some different rules!
- In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.
- With just a little bit of math, we can represent heaps using arrays!
