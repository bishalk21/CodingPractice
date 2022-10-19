## Conditionals

### if

We use if condition to check only on condition.

```js
if (condition) {
  // code goes here
}

let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat.");
}
```

### if else

When we have more than one condition we use the if and else condition.

```js
if (condition) {
  // if the condition meets, this block of code runs
} else {
  // if condition doesn't meet, this block code runs
}

let isRaining = true;
if (isRaining) {
  console.log("You need a rain coat.");
} else {
  console.log("No need for a rain coat.");
}
```

### if else if else

Whenever we have multiple conditions.

```js
// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}
```

### switch

Switch an alternative for if else if else

```js
var weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
    break;
}
// Switch More Examples
var dayUserInput = prompt("What day is it ?");
var day = dayUserInput.toLowerCase();
switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;

  default:
    console.log("It is not a week day.");
    break;
}
```

### Ternary Operators

Another way to write conditionals is using ternary operators.

```js
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
```

### Exercise: Conditionals

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
   Output:

   ```sh
   Enter your age: 30
   You are old enough to drive.
   ```

   Output:

   ```sh
   Enter your age:15
   You are left with 3 years to drive.
   ```

1. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
   Output:

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

1. If a is greater than b return a is greater than b else a is less than b.
   Output:

   ```sh
    let a = 4
    let b = 3
    4 is greater than 3
   ```

1. Write a code which give grade students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0 -49, F
1. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is:
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer

# Intro to Loops

- While loop

```js
while (<expression>) {
  <code-block>
}
```

- For loop

```js
for (<start>; <stop>; <step>) {
  <code-block>
}
```

# Loops

In programming languages to carry out repetitive task we use different kinds of loop. The following examples are the commonly used loops.

### For Loop

For loop is used to iterate over a block of code a number of times.

- initialization: let i = 0;
- condition: i < 5; // loop will run until i is less than 5
- increment: i++; // increment i by 1

for loop will continue to run until the condition is false.

```js
// for loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
for(let i = 0; i <= 5; i++){
  console.log(i)
}

```

### While loop

While loop is used to iterate over a block of code a number of times.

- condition: i < 5; // loop will run until i is less than 5

while loop will continue to run until the condition is false.

```js
// while loop structure
while (condition) {
  // code goes here
}
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### Do while loop

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### Exercises:Loops

1. Iterate 0 to 10 using for loop, do the same using while and do while loop.
1. Iterate 10 to 0 using for loop, do the same using while and do while loop.
1. Write a loop that makes seven calls to console.log to output the following triangle:

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

1. Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.
1. Use for loop to iterate from 0 to 100 and print only even numbers
1. Use for loop to iterate from 0 to 100 and print only odd numbers
1. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

   ```js
   The sum all numbers is 5050.
   ```

1. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

   ```js
   The sum of all evens is 2550. And the sum of all odds is 2500.


   ```
