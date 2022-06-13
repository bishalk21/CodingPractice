// PRACTICE 1

// have the function FirstFactoria(num) take the num parameter being passed and return the num of it 
// (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and 
// the input will always be an integer.

function FirstFactoria(num) {
    var num = 1;
    for (var i = 1; i <= num; i++) {
        num *= i;
    }

    return num;
}
console.log("FirstFactoria(readline())");

// write the function that returns the string "Hello, world!".
function HelloWorld() {
    return "Hello, world!";
}
console.log(HelloWorld());

// Run the test suite and make sure it succeeds.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    // If that value has more than one digit
    var sum = 0;
    while (n > 456) {
        //
    }
    console.log("digital_root(readline())");
}

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(numArray) {
    let countObj = {};
    let uniqueObjects = 0;

    for (let index = 0; index < numArray.length; index++) {
        let currentNumber = numArray[index];
        if (currentNumber in countObj) {
            countObj[currentNumber] += 1;

        } else {
            countObj[currentNumber] = 1;
            uniqueObjects++;

        }

        if (uniqueObjects === 2 && index >= 2) {
            return checkCountObj(countObj);
        }

    }

}

function checkCountObj(countObj) {
    let keysArray = Object.keys(countObj);
    for (let index = 0; index < keysArray.length; index++) {
        let number = keysArray[index]
        if (countObj[number] === 1) {
            return Number(number);
        }
    }
}

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) { //parens is a string 
    let count = 0; // count the number of open parentheses
    for (let index = 0; index < parens.length; index++) { // index is the current index of the string
        // iterate through the string
        if (parens[index] === "(") { // if the current character is a  (
            count++; // increment the count
        } else { // otherwise
            count--; // decrement the count
        }
        if (count < 0) { // if the count is less than 0
            return false; // return false
        }
    }
    return count === 0; // if the count is 0, return true
}

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(str) {
    let newString = ""; // variable to hold the new string
    // newString is the string that will be returned 
    // create a new string 
    for (let index = 0; index < str.length; index++) { // iterate through the string
        let currentChar = str[index]; // get the current character
        if (currentChar.charCodeAt(0) >= 65 && currentChar.charCodeAt(0) <= 90) { // if the current character is a capital letter
            let newChar = String.fromCharCode(currentChar.charCodeAt(0) + 13); // get the new character
            if (newChar.charCodeAt(0) > 90) { // if the new character is greater than 90
                newChar = String.fromCharCode(currentChar.charCodeAt(0) + 13 - 26); // get the new character
            }
            newString += newChar; // add the new character to the new string
        } else if (currentChar.charCodeAt(0) >= 97 && currentChar.charCodeAt(0) <= 122) { // if the current character is a lowercase letter
            let newChar = String.fromCharCode(currentChar.charCodeAt(0) + 13); // get the new character
            if (newChar.charCodeAt(0) > 122) { // if the new character is greater than 122
                newChar = String.fromCharCode(currentChar.charCodeAt(0) + 13 - 26); // get the new character
            }
            newString += newChar; // add the new character to the new string
        } else { // if the current character is not a letter
            newString += currentChar; // add the current character to the new string
        } // end if
    } // end for
    return newString; // return the new string

}



function myLife() {
    let myLife = "I am a programmer";
    let myLifeArray = myLife.split("");
    return myLifeArray;
    // let myLifeArray2 = myLifeArray.reverse();
    // let myLifeArray3 = myLifeArray2.join("");
    return myLifeArray3;
}
console.log(myLife());


// write a function with conditions: eat, sleep and code all have to be true to return true. 

function myLife() {
    let myLife = "I am a Programmer";

    while (alive) { //}
        if (eat && sleep && code) {
            return true;
        }
    }

}

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    let longestString = "";
    let longestStringLength = 0;
    for (let index = 0; index < strarr.length; index++) {
        let currentString = strarr[index];
        let currentStringLength = currentString.length;
        if (currentStringLength >= k) {
            if (currentStringLength > longestStringLength) {
                longestString = currentString;
                longestStringLength = currentStringLength;
            }
        }
    }
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
    let newString = "";
    let stringArray = str.split("-");
    for (let index = 0; index < stringArray.length; index++) {
        let currentString = stringArray[index];
        if (index === 0) {
            newString += currentString.charAt(0).toUpperCase() + currentString.slice(1);
        } else {
            newString += currentString.charAt(0).toLowerCase() + currentString.slice(1);
        }
    }
    return newString;
}

function handleOnChange(event) {
    console.log(event.target.value);
}

function handleOnClick(event) {
    console.log(event.target.value);
}

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(t) {
    let middle = "";
    if (t.length % 2 === 0) {
        middle = t.substring(t.length / 2 - 1, t.length / 2 + 1);
    } else {
        middle = t.substring(t.length / 2, t.length / 2 + 1);
    }
    return middle;
}

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            sum += Math.pow(2, index);
        }
    }
    return sum;
    // your code
};
// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
    let hello = array.reduce((a, b) => a + b, 0);
    if (hello % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

function century(year) {
    let century = Math.floor(year / 100);
    if (year % 100 === 0) {
        return century;
    } else {
        return century + 1;
    }
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    return str.endsWith(ending);
}

// Return the number (count) of vowels in the given string.
function getCount(str) {
    // We will consider a, e, i, o, u as vowels for this Kata (but not y).
    // The input string will only consist of lower case letters.
    let vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let index = 0; index < str.length; index++) {
        let currentChar = str[index];
        if (vowels.includes(currentChar)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
    let newString = "";
    for (let index = 0; index < dna.length; index++) { //index is the current character
        let currentChar = dna[index]; // get the current character
        if (currentChar === "A") { // if the current character is A
            newString += "T"; // add T to the new string
        } else if (currentChar === "T") { // if the current character is T
            newString += "A"; // add A to the new string
        } else if (currentChar === "C") { // if the current character is C
            newString += "G"; // add G to the new string
        } else if (currentChar === "G") { // if the current character is G
            newString += "C"; // add C to the new string
        }
    }
    return newString;
}

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    let result = 0;
    if (operation === "+") {
        result = value1 + value2;
    } else if (operation === "-") {
        result = value1 - value2;
    } else if (operation === "*") {
        result = value1 * value2;
    } else if (operation === "/") {
        result = value1 / value2;
    }
    return result;
}

// Simple, remove the spaces from the string, then return the resultant string

function noSpace(x) {
    let newString = "";
    for (let index = 0; index < x.length; index++) {
        let currentChar = x[index];
        if (currentChar !== " ") {
            newString += currentChar;
        }
    }
    return newString;
}


// We need a function that can transform a number into a string.
function numberToString(number) {
    return number.toString();
    //  one way
    // let number = arguments[0];
    // let string = number.toString();
    // return string;
}

// Your task is to make a function that can take any non-negative integer as an argument and 
// return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    let string = n.toString();
    let stringArray = string.split("");
    let sortedArray = stringArray.sort((a, b) => b - a);
    let sortedString = sortedArray.join("");
    return parseInt(sortedString);
}

// Make a function that will return a greeting statement that uses an input; 
// your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}

// Make a program that filters a list of strings and returns a list with only your friends name in it. 
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends) {
    let newArray = [];
    for (let index = 0; index < friends.length; index++) {
        let currentString = friends[index];
        if (currentString.length === 4) {
            newArray.push(currentString);
        }
    }
    return newArray;

}

// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a < b) {
        for (let index = a; index <= b; index++) {
            sum += index;
        }
    } else {
        for (let index = b; index <= a; index++) {
            sum += index;
        }
    }
    return sum;
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN() {
    let pin = arguments[0];
    if (pin.length === 4 || pin.length === 6) {
        for (let index = 0; index < pin.length; index++) {
            let currentChar = pin[index];
            if (currentChar < "0" || currentChar > "9") {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    let hours = h * 3600000;
    let minutes = m * 60000;
    let seconds = s * 1000;
    return hours + minutes + seconds;
}

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let sheepCount = 0;
    for (let index = 0; index < arrayOfSheep.length; index++) {
        let currentSheep = arrayOfSheep[index];
        if (currentSheep === true) {
            sheepCount++;
        }
    }
    return sheepCount;
}

// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

function makeNegative(num) {
    if (num < 0) {
        return num;
    } else {
        return -num;
    }
}

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

function XO() {
    let string = arguments[0];
    let xCount = 0;
    let oCount = 0;
    for (let index = 0; index < string.length; index++) {
        let currentChar = string[index];
        if (currentChar === "x" || currentChar === "X") {
            xCount++;
        } else if (currentChar === "o" || currentChar === "O") {
            oCount++;
        }
    }
    return xCount === oCount;
}

function betterThanAverage(classPoints, yourPoints) {
    let average = 0;
    for (let index = 0; index < classPoints.length; index++) {
        average += classPoints[index];
    }
    average /= classPoints.length;
    if (yourPoints > average) {
        return true;
    } else {
        return false;
    }
}

// create a function that takes a list of non-negative integers and strings and 
// returns a new list with the strings filtered out.

function filter_list() {
    let l = arguments[0];
    let newArray = [];
    for (let index = 0; index < l.length; index++) {
        let currentItem = l[index];
        if (typeof currentItem === "number") {
            newArray.push(currentItem);
        }
    }
    return newArray;
}

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.
// expected '  3a' to equal 'Thi1s is2 3a T4est'

// function order(words) {
//     let stringArray = words.split(" ");
//     let newArray = [];
//     for (let index = 0; index < stringArray.length; index++) {
//         let currentString = stringArray[index];
//         let number = currentString.charAt(currentString.length - 1);
//         let newString = currentString.slice(0, currentString.length - 1);
//         newArray[number - 1] = newString;
//     }
//     return newArray.join(" ");
// }

// function order(words){
//     var array = words.split(' ');
//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//       for(j = 0; j < array.length; j++) {
//         if(array[j].indexOf(i) >= 0) {
//           sortedArray.push(array[j]);
//         }
//       }
//     }
//     return sortedArray.join(' ');
//   }

function order(words) {
    words = words.split(' ');
    var num = '123456789'.split('');
    var output = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if (num.indexOf(words[i][j]) > -1) {
                output[num.indexOf(words[i][j])] = words[i];
            }
        }
    }
    return output.join(' ');
}

// function order(words) {
//     let stringArray = words.split(" ");
//     let newArray = [];
//     for (let index = 0; index < stringArray.length; index++) {
//         for (j = 0; j < stringArray.length; j++) {
//             if (stringArray[j].indexOf(index + 1) >= 0) {
//                 newArray.push(stringArray[j]);
//             }
//         }
//     }
//     return newArray.join(" ");
// }