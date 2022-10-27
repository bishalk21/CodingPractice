# JavaScript Quick Notes

# Strings

1. Use Bracket Notation to Find the First Character in a String

   ```js
   let firstLetterOfLastName = "";
   let lastName = "Lovelace";

   firstLetterOfLastName = lastName[0]; // Change this line
   ```

2. Use Bracket Notation to Find the Nth Character in a String

   ```js
   let lastName = "Lovelace";

   let thirdLetterOfLastName = lastName[2]; // Change this line
   ```

3. Use Bracket Notation to Find the Last Character in a String

   ```js
   let lastName = "Lovelace";
   let lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
   ```

4. Use Bracket Notation to Find the Nth-to-Last Character in a String

   ```js
   let lastName = "Lovelace";
   let secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
   ```

5. Strings values are immutable meaning they cannot be altered once created
6. using let the value of the variable can be changed but the variable cannot be reassigned

   ```js
   let myStr = "Jello World";

   myStr[0] = "H"; // Fix Me
   console.log(myStr); // Jello World

   myStr = "Hello World";
   console.log(myStr); // Hello World
   ```

7. Word Blanks are a way to create a string with variables

   ```js
   function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
     // Your code below this line
     let result = "";
     result = `The ${myAdjective} ${myNoun} ${myVerb} ${myAdverb}`; // Change this line
     // Your code above this line
     return result;
   }
   ```

# Arrays

1. Arrays are data structures that store data in ordered, numbered lists
2. Arrays are a way to store multiple values in a single variable
3. Arrays are zero indexed meaning the first element is at index 0
4. Arrays are mutable meaning they can be altered once created

   ```js
   let ourArray = ["John", 23];

   // Only change code below this line
   let myArray = ["Bishal", 23];
   ```

5. Store Multiple Values in one Variable using JavaScript Arrays

   ```js
   let ourArray = ["John", 23];

   // Only change code below this line
   let myArray = ["Bishal", 23];
   ```

6. can nest one array within another array, called a multi-dimensional array

   ```js
   let ourArray = [
     ["the universe", 42],
     ["everything", 101010],
   ];

   let myArray = [
     ["Bishal", 23],
     ["Karki", 23],
   ];
   ```

7. can access the data inside arrays using indexes

   ```js
   let ourArray = [50, 60, 70];
   let ourData = ourArray[0]; // equals 50
   ```

8. can modify the data inside arrays using indexes

   ```js
   let ourArray = [18, 64, 99];
   ourArray[1] = 45; // ourArray now equals [18,45,99].
   ```

9. can access multi-dimensional arrays with indexes

   ```js
   let ourArray = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [[10, 11, 12], 13, 14],
   ];
   let myData = ourArray[2][1]; // equals 8
   ```

10. can manipulate arrays with push()

`push()` adds an element to the end of an array

    ```js
    let ourArray = ["Stimpson", "J", ["cat"]];
    ourArray.push(["happy", "joy"]); // ourArray now equals ["Stimpson", "J", ["cat"], ["happy", "joy"]]
    ```

11. can manipulate arrays with pop()

`pop()` removes the last element from an array and returns that element

    ```js
    let ourArray = [1, 2, 3];
    let removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3, and ourArray now equals [1,2]
    ```

12. can manipulate arrays with shift()

`shift()` removes the first element from an array and returns that element

    ```js
    let ourArray = ["Stimpson", "J", ["cat"]];
    let removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]
    ```

13. can manipulate arrays with unshift()

`unshift()` adds an element to the beginning of an array and returns the new length of the array

    ```js
    let ourArray = ["Stimpson", "J", ["cat"]];
    ourArray.shift(); // ourArray now equals ["J", ["cat"]]
    ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", ["cat"]]
    ```

14. can manipulate arrays with splice()

`splice()` can remove any number of consecutive elements from anywhere in an array

    ```js
    let ourArray = ["today", "was", "not", "so", "great"];
    ourArray.splice(2, 2); // ourArray now equals ["today", "was", "great"]
    ```

# Functions

1. Functions are reusable blocks of code that can be called from anywhere in your program
2. Functions are declared with the `function` keyword
3. Functions are called by their name followed by parentheses `()`
4. Functions can take parameters and return a value
5. Functions can be declared as a function expression or a function declaration
6. Function expressions are declared when the execution reaches them
7. Function declarations are hoisted to the top of the document
8. Function expressions are not hoisted to the top of the document

   ```js
   // Function Declaration
   function functionName() {
     console.log("Hello World");
   }

   // Function Expression
   const functionName = function () {
     console.log("Hello World");
   };
   ```

9. Functions can be anonymous, meaning they do not have a name

   ```js
   const myFunction = function () {
     console.log("Hello World");
   };
   ```

10. Passing Values to Functions with Arguments

`Paramaters` are variables that act as placeholders for the values that are to be input to a function when it is called.

`Arguments` are the actual values that are input to the function when it is called.

So when a function is called, the values passed in the parentheses are the arguments that will be received by the parameters inside the function.

Syntax:

    ```js
    function functionName(parameter1, parameter2, parameter3) {
      // code to be executed
    }

    functionName(argument1, argument2, argument3); // function is called

    ```


    ```js
    function functionWithArgs(a, b) {
      console.log(a + b);
    }

    functionWithArgs(1, 2);
    functionWithArgs(7, 9);
    ```

11. Return a Value from a Function with Return

`return` is a keyword that exits a function and returns a value from that function

    ```js
    function timesFive(num) {
      return num * 5;
    }

    let answer = timesFive(5); // answer equals 25
    ```

12. Global Scope and Functions

- Scope refers to the visibility of variables
- Variables which are defined outside of a function block have Global scope
- Variables which are defined inside a function block have Local scope
- Variables which are defined with the `var` keyword have Function scope
- Variables which are defined with the `let` keyword have Block scope
- Variables which are declared without the let or const keywords are automatically created in the global scope

  ```js
  // Declare the myGlobal variable below this line
  var myGlobal = 10;

  function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
  }

  // Only change code above this line

  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }
  ```

13. Local Scope and Functions

- Variables which are declared within a function, as well as the function parameters have local scope
