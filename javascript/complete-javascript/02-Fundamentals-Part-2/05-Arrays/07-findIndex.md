# findIndex method

The findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.findIndex((mov) => mov < 0);
```

The findIndex method is used to find the index of the first element that satisfies a certain condition. For example, we can use it to find the index of the first withdrawal in the movements array.

```js
const accounts = [
  {
    owner: "Bishal Karki",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  },
  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  },
  {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
  },
  {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
  },
];
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account); // {owner: "Jessica Davis", movements: Array(8)}

// findIndex method

const account = accounts.findIndex((acc) => acc.owner === "Jessica Davis");
console.log(account); // 1
```
