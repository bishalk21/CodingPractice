# Function Methods

| Method  | Description                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| `call`  | Calls the function with the given `this` value and arguments provided individually.                          |
| `apply` | Calls the function with the given `this` value and arguments provided as an array (or an array-like object). |
| `bind`  | Returns a new function, "bound" to the specified `this` value.                                               |

# Call and Apply Methods

## Call

The call method allows us to call a function with a different `this` variable. The first argument is the `this` variable that we want to use. The other arguments are the arguments that we want to pass to the function.

```js
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Bishal");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// this is undefined
// In a regular function call, the this keyword will simply be undefined in strict mode.

// Does NOT work
// book(23, "Sarah Williams");
// this book function call is regular function call, not a method call

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);
```

## Regular Function Call

In a regular function call, the `this` keyword will simply be `undefined` in strict mode.

Regular function call is not a method call, meaning that the `this` keyword is not bound to any object or value.

## Apply Method

The apply method is very similar to the call method, the difference is that the apply method accepts the arguments as an array.

```js
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Bishal");

const book = lufthansa.book;

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
```

## Use of Call and Apply Methods

- Event Listeners
- DOM Traversing: means moving from one element to another element
- AJAX Calls
- Timers
