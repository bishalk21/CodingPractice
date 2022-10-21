# Functions accepting callback functions

## Callback functions

A **callback function** is a function that is passed into another function as an argument, and then called inside the outer function to complete some kind of routine or action.

A callback function is not executed immediately. It is "called back" by the outer function at a later time.

```js
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);
```

## Advantages of using callbacks

- makes it easier to reuse code
- makes it easier to test code
- makes it easier to debug code
- allow us to build higher-order functions
- allow us to build abstractions

Abstraction is a way to hide the complexity of a task behind a simple interface. This is a very important concept in programming, because it allows us to build complex programs out of simpler building blocks.

Abstraction means hiding the complexity or the implementation details from the user. Only the functionality will be provided to the user. In other words, the user will know what the function does, but not how it does it.

## Disadvantages of using callbacks

- can lead to callback hell
- can lead to uncaught errors
- can lead to unhandled errors

## Callback hell

Callback hell is a phenomenon that occurs when you have a deeply nested callback function. This is a problem because it makes your code very hard to read and maintain.

```javascript
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};§
```
