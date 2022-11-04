# Graph Traversal

> What is Graph Traversal?

Graph traversal is the process of visiting (checking and/or updating) each vertex in a graph.

Such traversals are classified by the order in which the vertices are visited. The order may be defined by the user (e.g. depth-first or breadth-first) or may be implicit (e.g. topological sort).

> Importance of Graph Traversal are:

- Peer to Peer Networking
- Web Crawlers
- Finding "closest" matches/recommendations
- Shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI (shortest path to win the game)
- Graph Traversal is a common interview question

## Graph Traversal Algorithms

- [Depth First Search](##depth-first-search)
  - [Depth First Search Recursive](##depth-first-search-recursive)
    - [Depth First Search Iterative](##depth-first-search-iterative)
- [Breadth First Search](##breadth-first-search)

## Depth First Search

> What is Depth First Traversal?

Depth First Traversal (or Search) for a graph is similar to Depth First Traversal of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array. For simplicity, it is assumed that all vertices are reachable from the starting vertex.

- This algorithm visits every vertex and edge exactly once
- It uses a stack (instead of a queue)
- It's great for searching a tree or graph for a specific value

> Depth First Traversal can be applied to:

- Detecting cycle in a graph
- Path Finding
- Topological Sorting
- Finding Strongly Connected Components of a graph
- Solving puzzles with only one solution, such as mazes.
- For an unweighted graph, DFS traversal of the graph produces the minimum spanning tree and all pair shortest path tree.

> Depth First Traversal uses:

- Stack data structure

> Representation DFS Graph Traversal in Adjacency Lists

{
"A": ["B", "C"],
"B": [ "D"],
"D": ["E", "F"],
"E": ["C", "F"],
"C": ["E", "F"],
"E": ["F"]
}

## Depth First Search Recursive:

```js
// DFS(vertex):
//     if vertex is empty
//         return (this is base case)
//     add vertex to results list
//     mark vertex as visited
//     for each neighbor in vertex's neighbors:
//         if neighbor is not visited:
//         recursively call DFS on neighbor
```

```js
// Graph Traversal Pseudocode
// DFS - Depth First Search Recursive

// This function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
// The helper function should return early if the vertex is empty
// The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
// Loop over all of the values in the adjacencyList for that vertex
// If any of those values have not been visited, recursively invoke the helper function with that vertex
// Invoke the helper function with the starting vertex
// Return the result array

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
}

//        A
//      /   \
//     B     C
//     \     /
//      D - E
//       \ /
//        F

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");

g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSRecursive("A"));
```

## Depth First Search Iterative:

```js
// Graph Traversal Pseudocode
// DFS-iterative(start);
//     let S be a stack
//     S.push(start)
//     while S is not empty
//         vertex = S.pop()
//         if vertex is not labeled as discovered:
//             visit vertex (add to result list)
//             label vertex as discovered
//             for each of vertex's neighbors, N do
//                 S.push(N)
```

```js
// Graph Traversal Pseudocode
// DFS - Depth First Search Iterative

// This function should accept a starting node
// Create a stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it:
// Pop the next vertex from the stack
// If that vertex hasn't been visited yet:
// Mark it as visited
// Add it to the result list
// Push all of its neighbors into the stack
// Return the result array

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

//        A
//      /   \
//     B     C
//     \     /
//      D - E
//       \ /
//        F

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSIterative("A"));
// A, B, D, E, C, F]
```

## Breadth First Search

> What is Breadth First Search Traversal?

Breadth First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'[1]), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

> How does BFS work?

BFS uses the opposite strategy as DFS. Instead of using a stack, it uses a queue. It also uses a visited array to keep track of the nodes that have been visited. The algorithm works as follows:

1. Create a queue (you can use an array) and a variable to store the values of nodes visited.
2. Place the root node in the queue.
3. Loop as long as there is anything in the queue.
4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
5. If there is a left property on the node dequeued - add it to the queue.
6. If there is a right property on the node dequeued - add it to the queue.
7. Return the variable that stores the values.

> What is Breadth First Graph Traversal?

Breadth First Search (BFS) for a Graph is similar to Breadth First Traversal of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array. For simplicity, it is assumed that all vertices are reachable from the starting vertex.

> How does BFS work for a Graph?

BFS for a Graph is similar to BFS of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array. For simplicity, it is assumed that all vertices are reachable from the starting vertex.

> What is the time complexity of BFS?

The time complexity of BFS is O(V+E) where V is the number of vertices and E is the number of edges in the graph.

> What is Breadth First Traversal?

Breadth First Traversal (or Search) for a graph is similar to Breadth First Traversal of a tree (See method 2 of this post). The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited array. For simplicity, it is assumed that all vertices are reachable from the starting vertex.

- visits neighbors at current depth first.
- This algorithm visits every vertex and edge exactly once
- It uses a queue to keep track of the next vertex to visit
- It is implemented using a loop
- It is a little slower than DFS, but it can be modified to be faster

```js
// Breadth First Traversal pseudocode

// This function should accept a starting vertex
// Create a queue (you can use an array) and place the starting vertex in it
// Create an array to store the nodes visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores nodes visited
// Loop over each vertex in the adjacency list for the vertex you are visiting.
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the array of visited nodes

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      console.log(queue);
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

//        A
//      /   \
//     B     C
//     \     /
//      D - E
//       \ /
//        F

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.BFS("A"));
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```
