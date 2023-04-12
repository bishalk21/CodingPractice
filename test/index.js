// synchronous programming
function myName(firstName, lastName) {
  //   console.log(`My name is ${firstName} ${lastName}`);
  return `My name is ${firstName} ${lastName}`;
}

// hoisitng
// let x = 10;
// function foo() {
//   console.log(x);
//   let x = 5;
// }

// foo();

// const fullName = myName(firstName, lastName);
// Uncaught ReferenceError: Cannot access 'firstName' before initialization

const firstName = "Bishal";
const lastName = "Karki";
const fullName = myName(firstName, lastName);

console.log("Hello");
console.log(fullName);
// if the function is not returning the value, then output is undefined

// A long-running synchronous function
// - inefficient algorithm

// Getting Element by Id from DOM
const generate = document.querySelector("#generate");
const reload = document.querySelector("#reload");
const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

// maximum prime value
const max_Prime_Value = 100000;

// function to check prime
function checkPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

// variable to hold random value
const random_Value = (max) => Math.floor(Math.random() * max);

// function to generate prime
function createPrime(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random_Value(max_Prime_Value);
    if (checkPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

// on click generate button
// document.querySelector("#generate").addEventListener("click", () => {
generate.addEventListener("click", () => {
  const primes = createPrime(quota.value);
  output.textContent = `Finished generating ${quota.value} primes`;
});

// on click reload button
reload.addEventListener("click", () => {
  document.location.reload();
});

// linear search algorithm
// a method to find the target value within the list
// sequentially checks each element on the list until the target is found
// const arr = [1, 34, 45, 2, 41, 59, 929, 23, 323];
// function linearSearch(searchNum, arr, output = (v) => console.log(v)) {
//   const position = searchTarget(arr, searchNum);
//   if (position !== -1) {
//     output("The element was found at " + (position + 1));
//   } else {
//     output("The element not found");
//   }
// }

// function searchTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// const linear_Search = linearSearch(59, arr);
// console.log(linear_Search);
const array = [1, 3, 5, 12, 23, 25, 55, 53];

function Search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Search();
function linearSearch(numSum, array, output = (v) => console.log(v)) {
  const position = Search(array, numSum);
  if (position !== -1) {
    output(`the position is at ${position + 1}`);
  } else {
    output(`the position is not found`);
  }
}
const linear_Search = linearSearch(3, array);

// console.log(linear_Search);
