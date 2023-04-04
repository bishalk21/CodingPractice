// synchronous programming
function myName(firstName, lastName) {
  //   console.log(`My name is ${firstName} ${lastName}`);
  return `My name is ${firstName} ${lastName}`;
}

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
