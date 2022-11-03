# Binary Search Trees

## Trees

Trees are a data structure where the nodes are in a parent-child realtionship. They are non-linear unlike arrays and linked lists. Each parent in a tree may have multiple children but each child must have single aprent only. Singly linked list is a special case of tree. Nodes must point at their children only and not their siblings ie must go farther from the root. Root is a node with no parent. There is only one node in a tree.

![Tree](./htmltree.png)

### Definitions

1. **Root**: Topmost Node of tree with no parents
2. **Child**: A node directly connected to a node while moving away from the root node
3. **Parent**: The node to which child is connected to
4. **Siblings**: Nodes with same parents
5. **Leaf**: Nodes with no children
6. **Edge**: The connection between parent and child node

### Use

1. HTML DOM
2. Network Structure or routing
3. Syntax Tree
4. Directory Structure or folders in OS
5. JSON
6. Artificial Intelligence
7. Computer File Systems

## Binary Tree

Subset of trees. Every node can have atmost _two_ children.

![Binary Tree](./binary_tree.svg)

## Binary Search Tree

Subset of Binary Trees. Every child to the left of a node is smaller than parent node and every child to the right is larger than the parent.

![Binary Search Tree](./binary_search_tree.svg)

### Use

1. Database indexing
2. Sorting
3. Searching

### Rules

1. Every parent node has atmost two children
2. Every node to the left of a parent node is always smaller than the parent
3. Every node to the right of a parent node is always larger than the parent

### Complexity

1. Searching and Inserting: (Doubling sized increases one step)

- Best: O(1)
- Average: O(log(n))
- Worst: O(n)

> Worst occurs if the binary tree is one sided. That is every node has child only on the right(or left) side. In this case, it is basically a linked list.

### Implementation

### BST class

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // insert pseudocode
  // 1. Create a new node
  // 2. Starting at the root
  //    1. Check if there is a root, if not - the root now becomes that new node!
  //    2. If there is a root, check if the value of the new node is greater than or less than the value of the root
  //    3. If it is greater
  //       1. Check to see if there is a node to the right
  //          1. If there is, move to that node and repeat these steps
  //          2. If there is not, add that node as the right property
  //    4. If it is less
  //       1. Check to see if there is a node to the left
  //          1. If there is, move to that node and repeat these steps
  //          2. If there is not, add that node as the left property
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // find pseudocode
  // 1. Starting at the root
  //    1. Check if there is a root, if not - we're done searching!
  //    2. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  //    3. If not, check to see if the value is greater than or less than the value of the root
  //    4. If it is greater
  //       1. Check to see if there is a node to the right
  //          1. If there is
  //             1. Move to that node and repeat these steps
  //          2. If there is not, we're done searching!
  //    5. If it is less
  //       1. Check to see if there is a node to the left
  //          1. If there is
  //             1. Move to that node and repeat these steps
  //          2. If there is not, we're done searching!
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // contains pseudocode
  // 1. Starting at the root
  //    1. Check if there is a root, if not - we're done searching!
  //    2. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  //    3. If not, check to see if the value is greater than or less than the value of the root
  //    4. If it is greater
  //       1. Check to see if there is a node to the right
  //          1. If there is
  //             1. Move to that node and repeat these steps
  //          2. If there is not, we're done searching!
  //    5. If it is less
  //       1. Check to see if there is a node to the left
  //          1. If there is
  //             1. Move to that node and repeat these steps
  //          2. If there is not, we're done searching!
  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);

console.log(tree.find(10));
console.log(tree.find(6));

console.log(tree.contains(10));
console.log(tree.contains(6));
```

```javascript
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    let iterator = this.root;
    while (true) {
      if (data == iterator.data) return false;
      if (data > iterator.data) {
        // go to the right
        if (iterator.right == null) {
          iterator.right = newNode;
          break;
        }
        iterator = iterator.right;
      } else {
        // go to the left
        if (iterator.left == null) {
          iterator.left = newNode;
          break;
        }
        iterator = iterator.left;
      }
    }
    return true;
  }
  find(data) {
    let iterator = this.root;
    while (iterator != null) {
      if (data === iterator.data) return true;
      else if (data > iterator.data) iterator = iterator.right;
      else iterator = iterator.left;
    }
    return false;
  }
}
```
