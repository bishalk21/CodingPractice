# Strings

Strings are used for storing text. They are created by enclosing the text in quotes.

```js
const message = "Hello World";
```

## String Length

To get the length of a string, you can use the `length` property.

```js
const message = "Hello World";

console.log(message.length); // 11
```

## Accessing Characters

To access a character in a string, you can use the `charAt` method or the square bracket notation.

```js
const message = "Hello World";

console.log(message.charAt(0)); // H
console.log(message[0]); // H
```

## String Methods

Strings have methods that can be used to manipulate the string.

### charAt

The `charAt` method returns the character at the specified index.

```js
const message = "Hello World";

console.log(message.charAt(0)); // H
```

### lastIndexOf

The `lastIndexOf` method returns the index of the last occurrence of a specified text in a string.

```js
const message = "Hello World";

console.log(message.lastIndexOf("o")); // 7
```

### indexOf

The `indexOf` method returns the index of the first occurrence of a specified text in a string.

```js
const message = "Hello World";

console.log(message.indexOf("o")); // 4
```

### slice

The `slice` method extracts a part of a string and returns the extracted part in a new string. It is zero-based.

```js
const message = "Hello World";

console.log(message.slice(0, 5)); // Hello // extracts from index 0 to index 4
console.log(message.slice(6, 11)); // World // extracts from index 6 to index 10
console.log(message.slice(6)); // World // start extracting from index 6 to the end
console.log(message.slice(0, message.indexOf(" "))); // Hello // extracts from index 0 to the index of the first space
console.log(message.slice(message.lastIndexOf(" "))); // World // extracts from the index of the last space to the end
console.log(message.slice(-5)); // World // extracts from the index of the last 5 characters to the end
console.log(message.slice(-5, -1)); // Worl // extracts from the index of the last 5 characters to the index of the last 2 characters
console.log(message.slice(0, -1)); // Hello Worl // extracts from index 0 to the index of the last character
console.log(message.slice(0, -6)); // Hello // extracts from index 0 to the index of the last 6 characters
console.log(message.slice(1, -1)); // ello Worl // extracts from index 1 to the index of the last character
```

Example:

```js
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😬");
  } else {
    console.log("You got lucky 😎");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
```

### lowerCase and upperCase

The `toLowerCase` method converts a string to lowercase letters.

```js
const message = "Hello World";

console.log(message.toLowerCase()); // hello world
```

The `toUpperCase` method converts a string to uppercase letters.

```js
const message = "Hello World";

console.log(message.toUpperCase()); // HELLO WORLD

const plane = "aIrnfOrcE1";

console.log(plane.toLowerCase()); // airforce1
const planeCorrect = plane[0].toUpperCase() + plane.slice(1).toLowerCase(); // Airforce1
console.log(planeCorrect);
```

Example: Comparing emails

```js
const email = "hello@bishal.io";
const loginEmail = " Hello@Bishal.io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //

console.log(email === normalizedEmail); // true
```

### trim

The `trim` method removes whitespace from both sides of a string.

```js
const message = " Hello World ";

console.log(message.trim()); // Hello World
```

### replace

The `replace` method replaces a specified value with another value in a string.

```js
const message = "Hello World";
console.log(message.replace("World", "Bishal")); // Hello Bishal

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); // 288.97$

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // All passengers come to boarding gate 23. Boarding door 23!

console.log(announcement.replaceAll("door", "gate")); // All passengers come to boarding gate 23. Boarding gate 23!

console.log(announcement.replace(/door/g, "gate")); // / /g is a regular expression, it means global: remove all occurrences
```

## Boolean in Strings

Booleans can be used in strings.

```js
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); // true
console.log(plane.includes("Boeing")); // false
console.log(plane.startsWith("Air")); // true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}
```

| Boolean Method | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| `includes`     | Checks if a string contains the specified string/characters.    |
| `startsWith`   | Checks if a string starts with the specified string/characters. |
| `endsWith`     | Checks if a string ends with the specified string/characters.   |

Practice Exercise

```js
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
```

## Split and Join

### split

The `split` method splits a string into an array of substrings, and returns the new array.

```js
console.log("a+very+nice+string".split("+")); // [ 'a', 'very', 'nice', 'string' ]
console.log("Bishal Karki".split(" ")); // [ 'Bishal', 'Karki' ]
```

### join

The `join` method joins all elements of an array into a string.

```js
const [firstName, lastName] = "Bishal Karki".split(" ");
console.log(firstName); // Bishal
console.log(lastName); // Karki

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); // Mr. Bishal KARKI
```

Practice Exercise

```js
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("bishal karki");
```

## Padding

Padding is used to add extra characters to a string.

### padStart

The `padStart` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

```js
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+")); // +++++++++++Go to gate 23!++++
console.log("Bishal".padStart(25, "+").padEnd(30, "+")); // +++++++++++++++++++Bishal++++
```

### padEnd

The `padEnd` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.

```js
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+")); // +++++++++++Go to gate 23!++++
console.log("Bishal".padStart(25, "+").padEnd(30, "+")); // +++++++++++++++++++Bishal++++
```

Practice Exercise

```js
const maskCreditCard = function (number) {
  const str = number + ""; // convert to string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836)); // ******7836
console.log(maskCreditCard(43378463864647384)); // *************7384
console.log(maskCreditCard("334859493847755774747")); // ***************************4747
```

## Repeat

The `repeat` method returns a new string with a specified number of copies of the string it was called on.

```js
const message = "Bad weather... All Departures Delayed... ";
console.log(message.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
```

## Concatenation

The `+` operator can be used to concatenate strings. It is also used to add numbers.

```js
const message = "Hello " + "Bishal";
console.log(message); // Hello Bishal
```

## String Methods Practice

| Method        | Description                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `charAt`      | Returns the character at the specified index                                                                          |
| `charCodeAt`  | Returns the Unicode of the character at the specified index                                                           |
| `concat`      | Joins two or more strings, and returns a new joined strings                                                           |
| `endsWith`    | Checks whether a string ends with specified string/characters                                                         |
| `slice`       | Extracts a part of a string and returns a new string                                                                  |
| `lastIndexOf` | Returns the index of the last occurrence of a specified text in a string                                              |
| `indexOf`     | Returns the index of the first occurrence of a specified text in a string                                             |
| `toLowerCase` | Converts a string to lowercase letters                                                                                |
| `toUpperCase` | Converts a string to uppercase letters                                                                                |
| `trim`        | Removes whitespace from both sides of a string                                                                        |
| `replace`     | Replaces a specified value with another value in a string                                                             |
| `replaceAll`  | Replaces a specified value with another value in a string                                                             |
| `includes`    | Checks whether a string contains the specified string/characters                                                      |
| `startsWith`  | Checks whether a string starts with specified string/characters                                                       |
| `endsWith`    | Checks whether a string ends with specified string/characters                                                         |
| `split`       | Splits a string into an array of substrings                                                                           |
| `join`        | Joins all elements of an array into a string                                                                          |
| `padStart`    | Pads the current string with another string (multiple times, if needed)                                               |
| `padEnd`      | Pads the current string with another string (multiple times, if needed)                                               |
| `repeat`      | Returns a new string with a specified number of copies of the string it was called on                                 |
| `match`       | Searches a string for a match against a regular expression, and returns the matches                                   |
| `search`      | Searches a string for a specified value, or regular expression, and returns the position of the match                 |
| `matchAll`    | Returns an iterator containing all results matching a string against a regular expression, including capturing groups |

```js
const message = "Hello World";

console.log(message.toUpperCase()); // HELLO WORLD
console.log(message.toLowerCase()); // hello world
console.log(message.charAt(0)); // H
console.log(message.charAt(1)); // e
console.log(message.charAt(2)); // l
console.log(message.charAt(3)); // l
console.log(message.charAt(4)); // o
console.log(message.charAt(5)); //
console.log(message.charAt(6)); // W

console.log(message.substring(0, 5)); // Hello
console.log(message.substring(6, 11)); // World

console.log(message.split(" ")); // [ 'Hello', 'World' ]

console.log(message.includes("Hello")); // true

console.log(message.startsWith("Hello")); // true

console.log(message.endsWith("World")); // true

console.log(message.indexOf("World")); // 6

console.log(message.lastIndexOf("World")); // 6

console.log(message.replace("World", "Universe")); // Hello Universe

console.log(message.repeat(3)); // Hello WorldHello WorldHello World

console.log(message.trim()); // Hello World

console.log(message.padStart(15, "0")); // 000Hello World

console.log(message.padEnd(15, "0")); // Hello World000

console.log(message.charCodeAt(0)); // 72

console.log(String.fromCharCode(72)); // H

console.log(message.concat("!!!")); // Hello World!!!

console.log(message.slice(0, 5)); // Hello

console.log(message.slice(6, 11)); // World

console.log(message.slice(-5)); // World

console.log(message.slice(-11, -6)); // Hello

console.log(message.slice(6)); // World

console.log(message.splice(0, 5)); // Hello
```
