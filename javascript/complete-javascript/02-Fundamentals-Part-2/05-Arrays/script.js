// all the use cases of arrays methods

const friends = ["Michael", "Steven", "Peter", "Bob", "Alice", "John"];

// map method
const mappedFriends = friends.map((friend) => friend + " is a friend");
console.log(mappedFriends);

// some() method

const hasBob = friends.some((friend) => friend === "Bob");
console.log(hasBob);

// every() method

const hasBob1 = friends.every((friend) => friend === "Bob");
console.log(hasBob1);

// slice method

// const sliced = friends.slice(1, 3);
// const sliced = friends.slice(-4, 1);
// const sliced = friends.slice(-3, -1);
// console.log(sliced, typeof sliced);

// splice method

// const spliced = friends.splice(-3, 5);
// const spliced = friends.splice(1, 2, "Jay", "Mark");
const spliced = friends.splice(1, 4, "Jay");
console.log(spliced, typeof spliced, friends);

// concat method

const newFriends = friends.concat(["Mark", "Raj"]);
console.log(newFriends, typeof newFriends);

// join method

const str = newFriends.join(" - ");
console.log(str, typeof str);

// indexOf method

const index = friends.indexOf("Bob");
console.log(index, typeof index);

// push method

const newLength = friends.push("Bishal");
console.log(newLength, typeof newLength, friends);

// unshift method

const newLength2 = friends.unshift("Prakash");
console.log(newLength2, typeof newLength2, friends);

// pop method

const popped = friends.pop();
console.log(popped, typeof popped);

// shift method

const shifted = friends.shift();
console.log(shifted, typeof shifted);

// includes method

const isFriend = friends.includes("Bob");
console.log(isFriend, typeof isFriend);

// reverse method

const reversed = friends.reverse();
console.log(reversed, typeof reversed);

// sort method

const sorted = friends.sort();
console.log(sorted, typeof sorted);

// flat method

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const flatArr = arr.flat(2);
console.log(flatArr, typeof flatArr);

// reduce method

const arr2 = [1, 2, 3, 4, 5];
const sum = arr2.reduce((acc, cur) => acc + cur, 0);
// console.log(acc());
// console.log(cur);
console.log(sum, typeof sum);

// forEach method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// findIndex method

const firstWithdrawal = movements.findIndex((mov) => mov > 5000); // findIndex returns the index of the first element that satisfies the condition
console.log(firstWithdrawal, typeof firstWithdrawal);
