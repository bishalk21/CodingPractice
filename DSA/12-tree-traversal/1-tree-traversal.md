# Tree Traversal

Traversing a tree means visiting every node on the tree once.

## Types:

1. Breadth First Search
2. Depth First Search
   1. DFS PreOrder
   2. DFS PostOrder
   3. DFS Inorder

##BFS:

- Breadth First Search
- Visit every node on the same level before going to the next level
- Use a queue
- Time complexity: O(n)

## What is Breadth First Search?

Breadth First Search is a tree traversal algorithm that visits every node on the same level before going to the next level.

## How does it work?

1. Create a queue (this can be an array) and a variable to store the values of nodes visited
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
   1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
   2. If there is a left property on the node dequeued - add it to the queue
   3. If there is a right property on the node dequeued - add it to the queue

To implement BFS, we use queues. We start by adding the root node to the queue. Then as long as the queue is not empty we follow the following algorithm:

1. Dequeue a node
2. Add its value to the list
3. Queue its left and right parameters to the queue

```javascript
// Inside Binary Search Classs from previous section
    BFS() {
        let queue = [];
        let list = [];
        queue.push(this.root);
        while (queue.length != 0) {
            let node = queue.shift();
            list.push(node.data);
            if(node.left != null)queue.push(node.left)
            if(node.right != null)queue.push(node.right)
        }
        return list
    }
```

## DFS:

- Depth First Search
- Visit every node on the same level before going to the next level
- Use a stack
- Time complexity: O(n)

We implement DFS recursively. When we encounter a node, we can do things in three different ways

1. PreOrder:

   1. create a variable to store the values of nodes visited
   2. store the root of the BST in a variable called current
   3. write a helper function which accepts a node

      1. push the value of the node to the variable that stores the values
      2. if the node has a left property, call the helper function with the left property on the node
      3. if the node has a right property, call the helper function with the right property on the node

- Add the node value to the list.
- Encounter the left node
- Encounter the right node

  ```js
   // Inside Binary Search Classs from previous section
        DFS_PreOrder() {
             let list = [];
             let current = this.root;
             function traverse(node) {
               list.push(node.data);
               if (node.left) traverse(node.left);
               if (node.right) traverse(node.right);
             }
             traverse(current);
             return list;
        }
  ```

2. PostOrder

   1. create a variable to store the values of nodes visited
   2. store the root of the BST in a variable called current
   3. write a helper function which accepts a node

      1. if the node has a left property, call the helper function with the left property on the node
      2. if the node has a right property, call the helper function with the right property on the node
      3. push the value of the node to the variable that stores the values

- Encounter the left node
- Encounter the right node
- Add the node value to the list

  ```js
   // Inside Binary Search Classs from previous section
          DFS_PostOrder() {
               let list = [];
               let current = this.root;
               function traverse(node) {
               if (node.left) traverse(node.left);
               if (node.right) traverse(node.right);
               list.push(node.data);
               }
               traverse(current);
               return list;
          }
  ```

3. InOrder

   1. create a variable to store the values of nodes visited
   2. store the root of the BST in a variable called current
   3. write a helper function which accepts a node

      1. if the node has a left property, call the helper function with the left property on the node
      2. push the value of the node to the variable that stores the values
      3. if the node has a right property, call the helper function with the right property on the node

- Encounter the left node
- Add the node value to the list
- Encounter the right node

  ```js
   // Inside Binary Search Classs from previous section
          DFS_InOrder() {
               let list = [];
               let current = this.root;
               function traverse(node) {
               if (node.left) traverse(node.left);
               list.push(node.data);
              // if (node.right) traverse(node.right);
              node.right && traverse(node.right);
               }
               traverse(current);
               return list;
          }
  ```

## Differences between PreOrder, PostOrder and InOrder

| PreOrder          | PostOrder         | InOrder           |
| ----------------- | ----------------- | ----------------- |
| Root, Left, Right | Left, Right, Root | Left, Root, Right |

```javascript
// Inside Binary Search Classs from previous section
    DFSPreOrder() {
        let list = [];

        function searchRecursive(node) {
            list.push(node.data);
            if (node.left != null) searchRecursive(node.left)
            if (node.right != null) searchRecursive(node.right)
        }
        searchRecursive(this.root);
        return list;
    }
    DFSPostOrder() {
        let list = [];

        function searchRecursive(node) {
            if (node.left != null) searchRecursive(node.left)
            if (node.right != null) searchRecursive(node.right)
            list.push(node.data);
        }
        searchRecursive(this.root);
        return list;
    }
    DFSInOrder() {
        let list = [];

        function searchRecursive(node) {
            if (node.left != null) searchRecursive(node.left)
            list.push(node.data);
            if (node.right != null) searchRecursive(node.right)
        }
        searchRecursive(this.root);
        return list;
    }
```

## BFS vs DFS

Time complexity for all four methods is same as we visit all the nodes once. But BFS takes more memory if we have a really dense tree due to the queue. When traversing, BFS stores the width in the memory whereas DFS stores the depth in the memory.

| Breadth First Search                                                  | Depth First Search                 |
| --------------------------------------------------------------------- | ---------------------------------- |
| Uses a queue                                                          | Uses a stack                       |
| Good for finding the shortest path                                    | Good for finding the longest path  |
| BFS takes more memory if we have a really dense tree due to the queue | less memory                        |
| BFS stores the width in the memory                                    | DFS stores the depth in the memory |

### Recap

- Binary Search Trees are a data structure that allow us to quickly lookup, insert, and delete items
- Binary Search Trees are made up of nodes
- Each node has a value, a left pointer, and a right pointer
- The left pointer points to a node with a smaller value
- The right pointer points to a node with a larger value

- Trees are non-linear data structures that contain a root and child nodes.
- Binary trees can have values of any type, but at most two children for each parent.
- Binary search trees are a specific type of binary tree that maintains data with some sort of order.
- Binary search trees are efficient for finding, adding, and removing data.
- There are three ways to traverse through trees: breadth first, depth first pre-order, depth first post-order, and depth first in-order.
- Breadth first traversal uses a queue, while depth first traversal uses a stack.
