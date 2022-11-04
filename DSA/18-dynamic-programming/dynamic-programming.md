# Dynamic Programming

> What is Dynamic Programming?

Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of simpler sub-problems, solving each of those sub-problems just once, and storing their solutions.

> Where does the name dynamic programming come from?

The term "dynamic programming" was coined by Richard Bellman in the 1950s to describe a class of problems

## Overlapping Sub-Problems

A problem is said to have overlapping sub-problems if it can be broken down into sub-problems which are reused several times.

> Fibonaccci sequence:

Every number after the first two is the sum of the two preceding ones.

    ```js
    function fib(n) {
      if (n <= 2) return 1;
      return fib(n - 1) + fib(n - 2);
    }

    fib(6); // 8
    ```

> Fibonacci Numbers

    ```js
            fib(5)
          /           \
      fib(4)           fib(3)
      /     \           /    \
    fib(3)  fib(2)    fib(2)  fib(1)
    /    \    /  \    /  \
    fib(2) fib(1) fib(1) fib(0)
    /  \
    fib(1) fib(0)

    ```

    ```js
    function fib(n, memo = []) {
      if (memo[n] !== undefined) return memo[n];
      if (n <= 2) return 1;
      let res = fib(n - 1, memo) + fib(n - 2, memo);
      memo[n] = res;
      return res;
    }

    fib(6); // 8
    ```

    > Time Complexity of Fibonacci algorithm

    ```js
    function fib(n) {
      if (n <= 2) return 1;
      return fib(n - 1) + fib(n - 2);
    }

    fib(6); // 8
    ```

    - O(2^n)
    - actual is O(1.6^n)

> Why O(2^n) or Fibonacci sequence algorithm is bad?

- It's exponential time complexity
- It's not efficient

> Solution to this problem:

- Memoization
- Tabulation

## Memoization

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

    ```js
    function fib(n, memo = []) {
      if (memo[n] !== undefined) return memo[n];
      if (n <= 2) return 1;
      let res = fib(n - 1, memo) + fib(n - 2, memo);
      memo[n] = res;
      return res;
    }

    fib(6); // 8
    ```

    > Time Complexity of Fibonacci algorithm

        - O(n)
        - actual is O(n)

## Tabulation

Storing the result of a previous result in a "table" (usually an array).

Usually done using iteration.

Better space complexity can be achieved.

    ```js
    function fib(n) {
      if (n <= 2) return 1;
      let fibNums = [0, 1, 1];
      for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
      }
      return fibNums[n];
    }

    fib(6); // 8
    ```

    > Time Complexity of Fibonacci algorithm

        - O(n)
        - actual is O(n)

## Optimal Substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its sub-problems.

> Shortest Path

```js
//           A
//         /   \
//       5/     \1
//       /       \
//      B         C
//     / \       / \
//    4/   \2   /   \8
//   /     \   /     \
//  D       E F       G
//   \     /   \     /
//    \3 /     \9   /7
//     \       /   /
//      \     /   /
//       \   /   /
//        \ /   /
//         H   I
//          \ /
//           J

// A -> B -> D -> H -> J
// A -> B -> E -> H -> J
// A -> C -> F -> H -> J
// A -> C -> F -> I -> J
// A -> C -> G -> I -> J
```

> Longest Simple Path

- simple means no repeating

```js
//           A
//         /   \
//       5/     \1
//       /       \
//      B         C
//     / \       / \
//    4/   \2   /   \8
//   /     \   /     \
//  D       E F       G
//   \     /   \     /
//    \3 /     \9   /7
//     \       /   /
//      \     /   /
//       \   /   /
//        \ /   /
//         H   I
//          \ /
//           J

// A -> B -> E -> H -> J
// A -> C -> F -> I -> J
```

> Cheapest flight from SFO to FAI?

```js
function shortestPath(grid, row, col) {
  if (row === grid.length - 1 && col === grid[0].length - 1)
    return grid[row][col];
  if (row === grid.length || col === grid[0].length) return Infinity;
  let right = shortestPath(grid, row, col + 1);
  let down = shortestPath(grid, row + 1, col);
  return grid[row][col] + Math.min(right, down);
}

// grid = [
//   [0, 5, 1],
//   [4, 2, 8],
//   [3, 9, 7],
// ];
// console.log(shortestPath(grid, 0, 0));
```

> Cheapest flight from SFO to FAI?

```js
function shortestPath(grid) {
  let memo = {};
  function helper(row, col) {
    if (row === grid.length - 1 && col === grid[0].length - 1)
      return grid[row][col];
    if (row === grid.length || col === grid[0].length) return Infinity;
    let key = row + "," + col;
    if (memo[key] !== undefined) return memo[key];
    let right = helper(row, col + 1);
    let down = helper(row + 1, col);
    memo[key] = grid[row][col] + Math.min(right, down);
    return memo[key];
  }
  return helper(0, 0);
}

let grid = [
  [0, 5, 1, 8],
  [4, 2, 1, 7],
  [4, 3, 2, 9],
];

console.log(shortestPath(grid));
```
