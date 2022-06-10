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