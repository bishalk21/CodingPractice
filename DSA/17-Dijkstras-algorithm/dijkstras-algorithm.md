# Dijkstra's Algorithm

> What is Dijkstra's Algorithm?

Dijkstra's Algorithm is a graph traversal algorithm that finds the shortest path between two nodes in a graph. It is a weighted graph, meaning that each edge has a weight or cost associated with it. The algorithm works by finding the cheapest path to each node in the graph and storing each path. When it is finished, it returns the shortest path between the start and end nodes.

- One of the most famous and widely used algorithms around!
- Can be used to find the shortest path between two nodes in a graph
- Can be used to find the shortest path between two nodes in a weighted graph with negative numbers

Edsger Dijkstra was a Dutch programmer, physicist, essayist and all around smarty pants.

## Importance of Dijkstra's Algorithm:

- Used in GPS systems - finding the fastest route
- Used in networking - finding the shortest path between two computers or path for data
- Used in biology - finding the shortest path for proteins or used to model the spread of viruses among humans
- Used in Airline tickets - finding the cheapest route to your destination
- Used in many other fields

> How does Dijkstra's Algorithm work?

Dijkstra's Algorithm works by finding the cheapest path to each node in the graph and storing each path. When it is finished, it returns the shortest path between the start and end nodes.

> What is the time complexity of Dijkstra's Algorithm?

The time complexity of Dijkstra's Algorithm is O(n^2) because it has to loop through each node in the graph and then loop through each edge in the graph.

> What is the space complexity of Dijkstra's Algorithm?

The space complexity of Dijkstra's Algorithm is O(n) because it has to store the shortest path to each node in the graph.

## Writing a weighted graph

```javascript
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

//            A
//          /   \
//        4/     \6
//        /       \
//       B         C
//        \       /
//        2\     /3
//          \   /
//            D
//              \
//               \5
//                E
//                  \
//                   \1
//                    F

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);
```

## Writing Dijkstra's Algorithm

```javascript
// Find the shortest path from A to E
//            A
//          /   \
//        2/     \4
//        /       \
//       C         B
//       /\        \
//      4| \2       |3
//       |  D - 3 - E
//       |  |      /
//       |  |     /
//       |  |    /
//       | 1|   /1
//       |  |  /
//       |  | /
//        \ |/
//         F

// approach
// 1. every time we look to visit a new node, we pick the the node with the smallest known distance to visit first.
// 2. once we've moved to the node we're going to visit, we look at each of its neighbors.
// 3. for each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node.
// 4. if the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
```

| vertex | shorter distance from A | A to B | A to C | C to D | C to F | B to E  | D to E  | D to F | F to E   |
| ------ | ----------------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | -------- |
| A      | 0                       |        |        |        |        |         |         |        |          |
| B      | Infinity                | 4      |        |        |        |         |         |        |          |
| C      | Infinity                |        | 2      |        |        |         |         |        |          |
| D      | Infinity                |        |        | (2+2)  |        |         |         |        |          |
| E      | Infinity                |        |        |        |        | (4+3)FS | (4+3)SS |        | (5+1)FFS |
| F      | Infinity                |        |        |        | (2+4)  |         |         | (4+1)  |          |

// Visited: [A, C, B, D]

// Previous:
{
A: null,
B: null, A
C: null, A
D: null, C
E: null, B, D, F
F: null, C, D
}

## A Simple Priority Queue implementation

- we are sorting which is O(N\* log(N))

```js
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
```

```javascript
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // djkstra's algorithm pseudocode

  // 1. this function should accept a starting and ending vertex
  // 2. create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
  // 3. after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
  // 4. create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  // 5. start looping as long as there is anything in the priority queue
  // 5.1. dequeue a vertex from the priority queue
  // 5.2. if that vertex is the same as the ending vertex - we are done!
  // 5.3. otherwise loop through each value in the adjacency list at that vertex
  // 5.3.1. calculate the distance to that vertex from the starting vertex
  // 5.3.2. if the distance is less than what is currently stored in our distances object
  // - update the distances object with new lower distance
  // - update the previous object to contain that vertex
  // - enqueue the vertex with the total distance from the start node

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
```

## Naive Approach - PriorityQueue

- O(N\* log(N))

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

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
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
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

## Dijkstra's Algorithm - Time Complexity

- O(V^2) - if we use a naive priority queue
- O(E\* log(V)) - if we use a binary heap

## Dijkstra's Algorithm - Space Complexity

- O(V)

## Dijkstra's Algorithm - Summary

- works with positive and negative weights
- can be used to find the SHORTEST PATH between nodes
- does not work with negative cycles
- if you are working with a graph that has negative weights, you can use Bellman-Ford algorithm
