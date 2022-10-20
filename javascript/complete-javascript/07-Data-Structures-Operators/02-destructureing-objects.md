# Destructuring Objects

Destructuring is a way to extract data from an object or array and assign it to a variable. It is a very useful feature in JavaScript.

```js
const person = {
  name: "Bishal",
  age: 23,
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
};

const {
  name,
  age,
  address: { city, country },
} = person;

// renaming the variable
const {
  name: myName,
  age: myAge,
  address: { city: myCity, country: myCountry },
} = person;
```

## Default Values

```js
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] []
```

## Mutating Variables

```js
let a = 1;
let b = 2;

({ a, b } = obj);
console.log(a, b); // 1 2
({ a, b } = { a: 2, b: 1 });
console.log(a, b); // 2 1
```

## Nested Destructuring

```js
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
```

- A function can have an object be a default parameter and use object destructuring.
- An advantage of object defaults over array defaults is that it is easier to skip a parameter.

```js
function createSundae({ scoops = 1, toppings = ["Hot Fudge"] }) {
  const scoopText = scoops === 1 ? "scoop" : "scoops";
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(
    " and "
  )} toppings.`;
}

createSundae({});
// Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({ scoops: 2 });
// Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({ scoops: 2, toppings: ["Sprinkles"] });
// Your sundae has 2 scoops with Sprinkles toppings.
createSundae({ toppings: ["Cookie Dough"] });
// Your sundae has 1 scoop with Cookie Dough toppings.
```

- The same issue applies to calling `createSundae` without any argument.
- Use `{scoops = 1, toppings = ['Hot Fudge']} = {}` to specify a default object value.
